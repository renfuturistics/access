import { Schema, Document } from 'mongoose';

// Define the interface for a vehicle
export interface IItemsList extends Document {
  VColour: string;
  VMake: string;
  VModel: string;
  // Add other fields related to vehicles here
}

// Create a Mongoose schema for vehicles
export const ItemsList = new Schema({
  VColour: { type: String, required: true },
  VMake: { type: String, required: true },
  VModel: { type: String, required: true },
  // You can add more fields like year, mileage, etc., for vehicles
});
