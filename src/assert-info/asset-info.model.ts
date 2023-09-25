import mongoose from 'mongoose';

export const assertInfoSchema = new mongoose.Schema({
  EnteredBy: {
    type: String,
    required: true,
  },
  EntryDate: {
    type: Date,
    default: Date.now,
  },
  Status: {
    type: String,
    enum: ['Active', 'Inactive', 'Pending'],
    default: 'Pending',
  },
  CarOwnerNRC: {
    type: String,
    required: true,
  },
  Cashintype: String,
  AssertRegNumber: String,
  AssertMake: String,
  AssertModel: String,
  ChassisNumber: String,
  EngineNumber: String,
  Colour: String,
  YearMake: String,
  RoadTaxExpiry: Date,
  FitnessExpiry: Date,
  InsuranceType: String,
  InsuranceName: String,
  InsuranceExpiry: Date,
  NextPayDate: Date,
  ProjectedPay: Number,
  NextServiceDate: Date,
  NextCarCheck: Date,
  WhiteBookDoc: String,
  InsuranceDoc: String,
  ContractDoc: String,
  CarOwnerName: String,
  DetailVehicleInfo: String,
  FullVehInfo: String,
  VehicleInfo: String,
});
export interface IAssertInfo {
  EnteredBy: string;
  EntryDate: Date;
  Status: 'Active' | 'Inactive' | 'Pending';
  CarOwnerNRC: string;
  Cashintype?: string;
  AssertRegNumber?: string;
  AssertMake?: string;
  AssertModel?: string;
  ChassisNumber?: string;
  EngineNumber?: string;
  Colour?: string;
  YearMake?: string;
  RoadTaxExpiry?: Date;
  FitnessExpiry?: Date;
  InsuranceType?: string;
  InsuranceName?: string;
  InsuranceExpiry?: Date;
  NextPayDate?: Date;
  ProjectedPay?: number;
  NextServiceDate?: Date;
  NextCarCheck?: Date;
  WhiteBookDoc?: string;
  InsuranceDoc?: string;
  ContractDoc?: string;
  CarOwnerName?: string;
  DetailVehicleInfo?: string;
  FullVehInfo?: string;
  VehicleInfo?: string;
}
