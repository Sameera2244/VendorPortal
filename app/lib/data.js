import { meterreader, User,meterreaderedit,allocation,vendor } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchMeterreaders = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await meterreader.find({ PurchaseOrderNumber: { $regex: regex } }).count();
    const meterreaders = await meterreader.find({PurchaseorderNumber: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, meterreaders };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch meterreaders!");
  }
};

export const fetchMeterreader = async (id) => {
  try {
    connectToDB();
    const meterreader = await meterreader.findById(id);
    return meterreader;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch meterreader!");
  }
};
export const fetchMeterreaderedits = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await meterreaderedit.find({ Name: { $regex: regex } }).count();
    const meterreaderedits = await meterreaderedit.find({Name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, meterreaderedits };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch meterreaderedits!");
  }
};

export const fetchMeterreaderedit = async (id) => {
  try {
    connectToDB();
    const meterreaderedit = await meterreaderedit.findById(id);
    return meterreaderedit;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch meterreaderedit!");
  }
};

export const fetchAllocations = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 5;

  try {
    connectToDB();
    const count = await allocation.find({ Name: { $regex: regex } }).count();
    const allocations = await allocation.find({Name: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, allocations };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch allocations!");
  }
};

export const fetchallocation = async (id) => {
  try {
    connectToDB();
    const allocation = await allocation.findById(id);
    return allocation;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch allocation!");
  }
};
export const fetchVendors = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await vendor.find({ VendorsName: { $regex: regex } }).count();
    const vendors = await vendor.find({ VendorsName: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, vendors };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch vendors!");
  }
};

export const fetchVendor = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const vendor = await vendor.findById(id);
    return vendor;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch vendor!");
  }
};




// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Total Users",
    number: 7,
    change: 12, 
  },
  {
    id: 2,
    title: "Meter Reader",
    number: 45,
    change: -2,
  },

];
