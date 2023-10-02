export class CreateAssertInfoDTO {
  ID: number;
  EnteredBy: string;
  EntryDate: Date;
  Status: 'Active' | 'Inactive';
  CarOwnerNRC: string;
  Cashintype: string;
  AssertRegNumber: string;
  AssertMake: string;
  AssertModel: string;
  ChassisNumber: string;
  EngineNumber: string;
  Colour: string;
  YearMake: string;
  RoadTaxExpiry: Date;
  FitnessExpiry: Date;
  InsuranceType: string;
  InsuranceName: string;
  InsuranceExpiry: Date;
  NextPayDate: Date;
  ProjectedPay: number;
  NextServiceDate: Date;
  NextCarCheck: Date;
  WhiteBookDoc: string;
  InsuranceDoc: string;
  ContractDoc: string;
  CarOwnerName: string;
  DetailVehicleInfo: string;
  FullVehInfo: string;
  VehicleInfo: string;
}