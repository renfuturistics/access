import mongoose from 'mongoose';

// Define the schema
const AssertOwnerInfo = new mongoose.Schema({
  ID: String,
  EnteredBy: String,
  EntryDate: Date,
  Status: String,
  FirstName: String,
  Surname: String,
  FullNames: String,
  PhoneNumber: String,
  AltPhoneNumber: String,
  NRC: String,
  Address: String,
  SignUpDate: Date,
  PaymentMethod: String,
  TiltCode: String,
  AccountNumber: String,
  AltPaymentMethod: String,
  AltTiltCode: String,
  AltAccountNumber: String,
  NoK_Names: String, // Next of Kin Names
  NoK_Relationship: String, // Next of Kin Relationship
  NoK_NRC: String, // Next of Kin NRC
  NoK_Number: String, // Next of Kin Phone Number
  NRCdoc: String, // NRC Document
  OwnerDoc: String, // Owner Document
});

export interface AssertOwnerInfo {
  ID: string;
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
  SignUpDate: Date;
  PaymentMethod: string;
  TiltCode: string;
  AccountNumber: string;
  AltPaymentMethod: string;
  AltTiltCode: string;
  AltAccountNumber: string;
  NoK_Names: string; // Next of Kin Names
  NoK_Relationship: string; // Next of Kin Relationship
  NoK_NRC: string; // Next of Kin NRC
  NoK_Number: string; // Next of Kin Phone Number
  NRCdoc: string; // NRC Document
  OwnerDoc: string; // Owner Document
}
