import mongoose from 'mongoose';

export const CashInScheduleSchema = new mongoose.Schema({
  CashinTitle: {
    type: String,
    required: true,
  },
  DayNumber: {
    type: Number,
    required: true,
  },
  DriverObligation: {
    type: Number,
    required: true,
  },
  CarOwnerShare: {
    type: Number,
    required: true,
  },
  CashinNote: String,
});
export interface ICashInSchedule {
  ID: string;
  CashinTitle: string;
  DayNumber: number;
  DriverObligation: number;
  CarOwnerShare: number;
  CashinNote?: string;
}
