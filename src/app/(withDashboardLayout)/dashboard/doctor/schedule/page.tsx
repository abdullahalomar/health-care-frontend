"use client";

import { Box, Button, Typography, IconButton } from "@mui/material";
import DoctorScheduleModal from "./components/DoctorScheduleModal";

import { useEffect, useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import { toast } from "sonner";
import { dateFormatter } from "@/utils/dateFormatter";
import dayjs from "dayjs";
import { ISchedule } from "@/types/schedule";
import {
  useDeleteDoctorScheduleMutation,
  useGetAllDoctorSchedulesQuery,
} from "@/redux/api/doctorScheduleApi";

const DoctorSchedulePage = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [allSchedule, setAllSchedule] = useState<any>([]);
  const { data, isLoading } = useGetAllDoctorSchedulesQuery({});
  const [deleteDoctorSchedule] = useDeleteDoctorScheduleMutation();
  // console.log(data);

  const schedules = data?.doctorSchedules;
  const meta = data?.meta;

  useEffect(() => {
    const updateData = schedules?.map((schedule: ISchedule, index: number) => {
      return {
        sl: index + 1,
        id: schedule?.doctorId,
        startDate: dateFormatter(schedule?.schedule?.startDate),
        startTime: dayjs(schedule?.startDate).format("hh:mm a"),
        endTime: dayjs(schedule?.endDate).format("hh:mm a"),
      };
    });
    setAllSchedule(updateData);
  }, [schedules]);

  const columns: GridColDef[] = [
    { field: "sl", headerName: "SL", flex: 1 },
    { field: "startDate", headerName: "Start Date", flex: 1 },
    { field: "startTime", headerName: "Start Time", flex: 1 },
    { field: "endTime", headerName: "End Time", flex: 1 },
    {
      field: "action",
      headerName: "Action",
      flex: 1,
      headerAlign: "center",
      align: "center",
      renderCell: ({ row }) => {
        return (
          <IconButton onClick={() => handleDelete(row.id)} aria-label="delete">
            <DeleteIcon />
          </IconButton>
        );
      },
    },
  ];

  const handleDelete = async (id: string) => {
    try {
      const res = await deleteDoctorSchedule(id).unwrap();
      if (res?.id) {
        toast.success("Schedule removed successfully!!");
      }
    } catch (error: any) {
      console.error(error.message);
    }
  };
  return (
    <Box>
      <Button onClick={() => setIsModalOpen(true)}>Add Doctor Schedule</Button>
      <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
      <Box sx={{ mb: 5 }}></Box>
      <Box>
        {/* <ScheduleModal open={isModalOpen} setOpen={setIsModalOpen} /> */}

        {!isLoading ? (
          <Box my={2}>
            <DataGrid
              rows={allSchedule ?? []}
              columns={columns}
              hideFooter={true}
            />
          </Box>
        ) : (
          <h1>Loading...</h1>
        )}
      </Box>
    </Box>
  );
};

export default DoctorSchedulePage;
