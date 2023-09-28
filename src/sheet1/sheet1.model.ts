import { Schema, Document } from 'mongoose';

// Define the interface for the document
interface ISheet extends Document {
  ID: string;
  DateOfEntry: Date;
  EnteredBy: string;
  Date: Date;
  DriversName: string;
  NRC: string;
  TotalHours: number;
  TotalMinutes: number;
  Rides: number;
  CashCollected: number;
  Mileage: number;
  StartHour: number;
  Report: string;
  Recommendations: string;
}

// Define the MongoDB schema
const SheetSchema = new Schema<ISheet>({
  ID: { type: String, required: true },
  DateOfEntry: { type: Date, required: true },
  EnteredBy: { type: String, required: true },
  Date: { type: Date, required: true },
  DriversName: { type: String, required: true },
  NRC: { type: String, required: true },
  TotalHours: { type: Number, required: true },
  TotalMinutes: { type: Number, required: true },
  Rides: { type: Number, required: true },
  CashCollected: { type: Number, required: true },
  Mileage: { type: Number, required: true },
  StartHour: { type: Number, required: true },
  Report: { type: String, required: true },
  Recommendations: { type: String, required: true },
});
