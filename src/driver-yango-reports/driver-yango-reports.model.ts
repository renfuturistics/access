// Define the interface
interface DriverYangoReports {
  ID: string;
  EntryDate: Date;
  EnteredBy: string;
  ReportDate: Date;
  Driver: string;
  WorkHours: number;
  WorkMinutes: number;
  Orders: number;
  CashCollected: number;
  Mileage: number;
  StartHour: number;
  Comment: string;
  RecAction: string;
}

// Define the MongoDB schema using Mongoose
import mongoose from 'mongoose';

const DriverYangoReports = new mongoose.Schema({
  ID: { type: String, required: true },
  EntryDate: { type: Date, required: true },
  EnteredBy: { type: String, required: true },
  ReportDate: { type: Date, required: true },
  Driver: { type: String, required: true },
  WorkHours: { type: Number, required: true },
  WorkMinutes: { type: Number, required: true },
  Orders: { type: Number, required: true },
  CashCollected: { type: Number, required: true },
  Mileage: { type: Number, required: true },
  StartHour: { type: Number, required: true },
  Comment: { type: String },
  RecAction: { type: String },
});
