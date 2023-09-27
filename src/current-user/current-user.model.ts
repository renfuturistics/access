import { Schema, Document, model } from 'mongoose';

// Define the interface for your data
interface ICurrentUser extends Document {
  FullNames: string;
}

// Create a MongoDB schema
const CurrentUser = new Schema<ICurrentUser>({
  FullNames: {
    type: String,
    required: true,
  },
});
