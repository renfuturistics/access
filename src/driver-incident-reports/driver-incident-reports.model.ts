import mongoose, { Document, Schema } from 'mongoose';

// Define the interface for the document
interface IDriverIncidentReports extends Document {
  EntryDate: Date;
  EnteredBy: string;
  ReportDate: Date;
  Driver: string;
  Incident: string;
  Status: string;
  RecActionTaken: string;
  ActionTaken: string;
}

// Create a schema for the incidents collection
const DriverIncidentReportsSchema = new Schema<IDriverIncidentReports>({
  EntryDate: { type: Date, required: true },
  EnteredBy: { type: String, required: true },
  ReportDate: { type: Date, required: true },
  Driver: { type: String, required: true },
  Incident: { type: String, required: true },
  Status: { type: String, required: true },
  RecActionTaken: { type: String, required: true },
  ActionTaken: { type: String, required: true },
});
