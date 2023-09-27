// Import the necessary libraries
import mongoose from 'mongoose';
// Define the interface for the document
interface MyDocument extends mongoose.Document {
  DayNumber: number;
  BrandedComfort: string;
  BrandedComfortOwner: string;
  BrandedComfortNotes: string;
  UnbrandedComfort: string;
  UnbrandedComfortOwner: string;
  UnbrandedComfortNotes: string;
  BrandedEconomy: string;
  BrandedEconomyOwner: string;
  BrandedEconomyNotes: string;
  UnbrandedEconomy: string;
  UnbrandedEconomyOwner: string;
  UnbrandedEconomyNotes: string;
  OscarSpecial: string;
  OscarSpecialOwner: string;
  OscarSpecialNotes: string;
  MukeSpecial: string;
  MukeSpecialOwner: string;
  MukeSpecialNotes: string;
}

// Define the schema
const mySchema = new mongoose.Schema<MyDocument>({
  DayNumber: { type: Number, required: true },
  BrandedComfort: { type: String, required: true },
  BrandedComfortOwner: { type: String, required: true },
  BrandedComfortNotes: { type: String, required: true },
  UnbrandedComfort: { type: String, required: true },
  UnbrandedComfortOwner: { type: String, required: true },
  UnbrandedComfortNotes: { type: String, required: true },
  BrandedEconomy: { type: String, required: true },
  BrandedEconomyOwner: { type: String, required: true },
  BrandedEconomyNotes: { type: String, required: true },
  UnbrandedEconomy: { type: String, required: true },
  UnbrandedEconomyOwner: { type: String, required: true },
  UnbrandedEconomyNotes: { type: String, required: true },
  OscarSpecial: { type: String, required: true },
  OscarSpecialOwner: { type: String, required: true },
  OscarSpecialNotes: { type: String, required: true },
  MukeSpecial: { type: String, required: true },
  MukeSpecialOwner: { type: String, required: true },
  MukeSpecialNotes: { type: String, required: true },
});
