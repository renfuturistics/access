interface Cashin {
  CashinTitle: string;
  DayNumber: number;
  DriverObligation: number;
  CarOwnerShare: number;
  CashinNote: string;
}
import { Schema, Document } from 'mongoose';

// Define the schema
export const cashinSchema = new Schema<CashinDocument>({
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
  CashinNote: {
    type: String,
    required: true,
  },
});

// Define the document interface
export interface CashinDocument extends Cashin, Document {}
