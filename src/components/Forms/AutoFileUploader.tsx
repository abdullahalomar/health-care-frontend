import * as React from "react";
import { SxProps, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Box, Input } from "@mui/material";

type IFileUploadButton = {
  name: string;
  label?: string;
  sx?: SxProps;
  accept: string;
  icon: string;
  variant: string;
  onFileUpload: (file: File) => void;
};

export default function AutoFileUploader({
  name,
  label,
  sx,
  accept,
  icon,
  variant = "contained",
  onFileUpload,
}: IFileUploadButton) {
  return (
    <Box>
      <Button
        component="label"
        role={undefined}
        variant={variant}
        tabIndex={-1}
        startIcon={icon ? icon : <CloudUploadIcon />}
        sx={{ ...sx }}
      >
        {label || "Upload file"}
        <Input
          type="file"
          inputProps={{ accept: accept }}
          style={{ display: "none" }}
          onChange={(e) => {
            const fileInput = e.target as HTMLInputElement;
            const file = fileInput.files?.[0];
            if (file) {
              onFileUpload(file);
            }
          }}
        />
      </Button>
    </Box>
  );
}
