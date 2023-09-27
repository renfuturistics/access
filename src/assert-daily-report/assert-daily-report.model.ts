import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for your document
interface IAssertDailyReport extends Document {
  EntryDate: Date;
  EnteredBy: string;
  OpsDate: Date;
  CarReg: string;
  Driver: string;
  YangoHours: number;
  YangoMinutes: number;
  YangoOrders: number;
  YangoMileage: number;
  YangoStartWork: Date;
  YangoCashGen: number;
  GPSMileage: number;
  Recomendation: string;
  ActionDate: Date;
  ActionedBy: string;
  ActionTaken: string;
}

// Define the MongoDB schema
const AssertDailyReport = new Schema<IAssertDailyReport>({
  EntryDate: { type: Date, required: true },
  EnteredBy: { type: String, required: true },
  OpsDate: { type: Date, required: true },
  CarReg: { type: String, required: true },
  Driver: { type: String, required: true },
  YangoHours: { type: Number, required: true },
  YangoMinutes: { type: Number, required: true },
  YangoOrders: { type: Number, required: true },
  YangoMileage: { type: Number, required: true },
  YangoStartWork: { type: Date, required: true },
  YangoCashGen: { type: Number, required: true },
  GPSMileage: { type: Number, required: true },
  Recomendation: { type: String, required: true },
  ActionDate: { type: Date, required: true },
  ActionedBy: { type: String, required: true },
  ActionTaken: { type: String, required: true },
});
