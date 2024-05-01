import * as React from "react";
import { Theme, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Chip from "@mui/material/Chip";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

// export function getTimeIn12HourFormate(dateTimeString: string): string {
//   const date: Date = new Date(dateTimeString);
//   const hours: number = date.getHours();
//   const minutes: number = date.getMinutes();
//   const ampm: string = hours > 12 ? "PM" : "AM";
//   const formattedHours: number = hours % 12 === 0 ? 12 : hours % 12;
//   const formattedMinutes: string =
//     minutes < 10 ? "0" + minutes : minutes.toString();

//   return `${formattedHours}:${formattedMinutes} ${ampm}`;
// }

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName?.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelectChip({
  allSpecialties,
  setSelectedIds,
  selectedIds,
}: any) {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedIds>) => {
    const {
      target: { value },
    } = event;
    setSelectedIds(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <div>
      <FormControl sx={{ width: 300 }}>
        <InputLabel
          id="demo-multiple-chip-label"
          sx={{ mt: selectedIds?.length > 0 ? 0 : -1 }}
        >
          Specialties
        </InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={selectedIds}
          onChange={handleChange}
          input={
            <OutlinedInput
              id="select-multiple-chip"
              label="Specialties"
              size="small"
            />
          }
          renderValue={(selected) => (
            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
              {selected.map((value: any) => (
                <Chip
                  size="small"
                  key={value}
                  label={
                    allSpecialties.find((item: any) => item.id === value)
                      ? `${
                          allSpecialties.find((item: any) => item.id === value)
                            ?.title
                        }`
                      : ""
                  }
                />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {allSpecialties.map((item: any) => (
            <MenuItem
              key={item.id}
              value={item.id}
              style={getStyles(item.id, selectedIds, theme)}
            >
              {item?.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
