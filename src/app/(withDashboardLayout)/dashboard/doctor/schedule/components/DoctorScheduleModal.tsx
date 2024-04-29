import PHModal from "@/components/shared/PHModal/PHModal";

import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import { useGetAllSchedulesQuery } from "@/redux/api/scheduleApi";
import MultipleSelectFieldChip from "./multipleSelectFieldChip";
import { Stack } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { useCreateDoctorScheduleMutation } from "@/redux/api/doctorScheduleApi";
import { toast } from "sonner";

type TProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const DoctorScheduleModal = ({ open, setOpen }: TProps) => {
  const [selectedDate, setSelectedDate] = useState(
    dayjs(new Date()).toISOString()
  );

  const [selectedScheduleIds, setSelectedScheduleIds] = useState([]);

  // console.log(selectedDate);
  const query: Record<string, any> = {};
  if (!!selectedDate) {
    query["startDate"] = dayjs(selectedDate)
      .hour(0)
      .minute(0)
      .millisecond(0)
      .toISOString();
    query["endDate"] = dayjs(selectedDate)
      .hour(23)
      .minute(59)
      .millisecond(999)
      .toISOString();
  }

  const { data } = useGetAllSchedulesQuery(query);
  const schedule = data?.schedules;
  // console.log(schedule);

  const [createDoctorSchedule, { isLoading }] =
    useCreateDoctorScheduleMutation();

  const onSubmit = async () => {
    try {
      const res = await createDoctorSchedule({
        scheduleIds: selectedScheduleIds,
      });
      toast.success("Doctor schedule Added Successfully");
      setOpen(false);
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PHModal open={open} setOpen={setOpen} title="Add Doctor Schedule">
      <Stack direction="column" gap={2}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Controlled picker"
            value={dayjs(selectedDate)}
            onChange={(newValue) =>
              setSelectedDate(dayjs(newValue).toISOString())
            }
            sx={{ width: "100%" }}
          />
        </LocalizationProvider>
        <MultipleSelectFieldChip
          schedules={schedule}
          selectedScheduleIds={selectedScheduleIds}
          setSelectedScheduleIds={setSelectedScheduleIds}
        />
        <LoadingButton
          size="small"
          onClick={onSubmit}
          loading={isLoading}
          loadingIndicator="Submitting..."
          variant="contained"
        >
          <span>Add Schedule</span>
        </LoadingButton>
      </Stack>
    </PHModal>
  );
};

export default DoctorScheduleModal;
