import mongoose, { Document, Schema } from 'mongoose';

// Define an interface for the document (optional but recommended)
export interface IDriverInfo extends Document {
  EnteredBy: string;
  EntryDate: Date;
  Status: string;
  FirstName: string;
  Surname: string;
  FullNames: string;
  PhoneNumber: string;
  AltPhoneNumber: string;
  NRC: string;
  Address: string;
  HomePinLink: string;
  SignUpDate: Date;
  NoK_Names: string;
  NoK_Relationship: string;
  NoK_NRC: string;
  NoK_Number: string;
  NRCdoc: string;
  CVdoc: string;
  ContractsDoc: string;
}

// Define the MongoDB schema
export const DriverInfoSchema = new Schema<IDriverInfo>({
  EnteredBy: { type: String, required: true },
  EntryDate: { type: Date, default: Date.now },
  Status: { type: String, required: true },
  FirstName: { type: String, required: true },
  Surname: { type: String, required: true },
  FullNames: { type: String, required: true },
  PhoneNumber: { type: String, required: true },
  AltPhoneNumber: { type: String },
  NRC: { type: String, required: true },
  Address: { type: String, required: true },
  HomePinLink: { type: String, required: true },
  SignUpDate: { type: Date, default: Date.now },
  NoK_Names: { type: String, required: true },
  NoK_Relationship: { type: String, required: true },
  NoK_NRC: { type: String, required: true },
  NoK_Number: { type: String, required: true },
  NRCdoc: { type: String, required: true },
  CVdoc: { type: String, required: true },
  ContractsDoc: { type: String, required: true },
});
