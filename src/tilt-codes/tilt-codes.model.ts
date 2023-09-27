// institution.schema.ts

import * as mongoose from 'mongoose';

export const TiltCodes = new mongoose.Schema({
  ID: String,
  Institution: String,
  TiltCode: String,
});

export interface ITiltCodes extends mongoose.Document {
  ID: string;
  Institution: string;
  TiltCode: string;
}
