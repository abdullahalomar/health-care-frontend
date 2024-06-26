export type ISchedule = {
  scheduleId: any;
  schedule: any;
  doctorId: any;
  id?: string;
  startDate: string;
  endDate: string;
};

export type IScheduleFrom = {
  startDate: string;
  endDate: string;
  startTime: string;
  endTime: string;
};
