import PHFileUploader from "@/components/Forms/PHFileUploader";
import PHForm from "@/components/Forms/PHForm";
import PHInput from "@/components/Forms/PHInput";
import PHModal from "@/components/shared/PHModal/PHModal";
import { useCreateSpecialtyMutation } from "@/redux/api/specialtiesApi";
import { modifyPayload } from "@/utils/modifyPayload";
import { Button, Grid } from "@mui/material";
import { FieldValues } from "react-hook-form";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const SpecialtyModal = ({ open, setOpen }: TProps) => {
  const [createSpecialty] = useCreateSpecialtyMutation();

  const handleFormSubmit = async (values: FieldValues) => {
    const data = modifyPayload(values);
    try {
      const res = await createSpecialty(data).unwrap();
      console.log(res);

      if (res?.id) {
        toast.success("Specialty added successfully");
        setOpen(false);
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <div>
      <PHModal open={open} setOpen={setOpen} title="Add A New Specialist">
        <PHForm onSubmit={handleFormSubmit}>
          <Grid container spacing={2}>
            <Grid item md={6}>
              <PHInput
                name="title"
                label="title"
                size={"small"}
                fullWidth={false}
              />
            </Grid>
            <Grid item md={6}>
              <PHFileUploader name="file" label="Upload File"></PHFileUploader>
            </Grid>
          </Grid>
          <Button sx={{ mt: 1 }} type="submit">
            Create
          </Button>
        </PHForm>
      </PHModal>
    </div>
  );
};

export default SpecialtyModal;
