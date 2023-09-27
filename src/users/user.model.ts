// src/users/interfaces/user.interface.ts

import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  FirstName: string;
  Surname: string;
  FullNames: string;
  Designation: string;
  Access: string;
  UserName: string;
  Password: string;
}
export const UserSchema = new Schema({
  FirstName: { type: String, required: true },
  Surname: { type: String, required: true },
  FullNames: { type: String, required: true },
  Designation: { type: String, required: true },
  Access: { type: String, required: true },
  UserName: { type: String, required: true, unique: true },
  Password: { type: String, required: true },
});
