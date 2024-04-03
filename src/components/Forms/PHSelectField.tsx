import { MenuItem, SxProps, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type ITextField = {
  name: string;
  label?: string;
  type?: string;
  size: "small" | "medium";
  fullWidth: boolean;
  sx?: SxProps;
  placeholder?: string;
  required?: boolean;
  items: string[];
};

const PHSelectField = ({
  name,
  items,
  label,
  size = "small",
  fullWidth = true,
  sx,
  required,
}: ITextField) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] === undefined;
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...field}
          sx={{ ...sx }}
          label={label}
          size={size}
          select
          fullWidth={fullWidth}
          placeholder={label}
          required={required}
          error={isError}
          helperText={
            isError ? (formState.errors[name]?.message as string) : ""
          }
        >
          {items.map((name) => (
            <MenuItem key={name} value={name}>
              {name}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

export default PHSelectField;
