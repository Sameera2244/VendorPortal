import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
  },
  { timestamps: true }
);

const meterreaderSchema = new mongoose.Schema(
  {
  PurchaseOrderNumber: {
    type: String,
    required: true,                       
    unique: true,
  },
  MeterReadingUnit: {
    type: Number,
    required: true,
    unique: true,
  },
  TaskNumber: {
    type: Number,
    required: true,
  },
  NumberOfMeters: {
    type: Number,
    required: true,
    min: 0,
  },
  MeterswithReads: {
    type: Number,
    required: true,
    min: 0,
  },
  MeterswithoutReads: {
    type: Number,
    required: true,
    min: 0,
  },
  Status: {
    type: Boolean,
    default: true,
  },
  MRUUserAssigned: {
    type: String,
    required: true,
    unique: true,
  },
},
{ timestamps: true }
);


const meterreadereditSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: true,
    },
    MeterReadingUnit: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);
const allocationSchema = new mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
      unique: true,
    },
    MeterReadingUnit: {
      type: String,
      required: true,
      unique: true,
    },
   
   
  },
  { timestamps: true }
);

const vendorSchema = new mongoose.Schema(
  {
    VendorsName: {
      type: String,
      required: true,                       
      unique: true,
    },
    PurchaseOrderNumber: {
      type:String,
      required: true,
      unique: true,
    },
    NumberOfMRUAssigned: {
      type: Number,
      required: true,
    },
    VendorUser: {
      type: String,
      required: true,
      min: 0,
    },
 
 
  },
  { timestamps: true }
);




export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const meterreader = mongoose.models.meterreader || mongoose.model("meterreader", meterreaderSchema);
export const meterreaderedit = mongoose.models.meterreaderedit || mongoose.model("meterreaderedit", meterreadereditSchema);
export const allocation = mongoose.models.allocation || mongoose.model("allocation", allocationSchema);
export const vendor = mongoose.models.vendor|| mongoose.model("vendor",vendorSchema);
