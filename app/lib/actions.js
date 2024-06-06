"use server";

import { revalidatePath } from "next/cache";
import { meterreader, User,meterreaderedit,allocation } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      isAdmin,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/vendoruser");
  redirect("/dashboard/vendoruser");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, isAdmin, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/vendorusers");
  redirect("/dashboard/vendorusers");
};

export const addmeterreader = async (formData) => {
  const { MeterReadingUnit,BusinessPartner,Contract,Installation,Device,MDENumber } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newmeterreader = new meterreader({
      MeterReadingUnit,
      BusinessPartner,
      Contract,
      Installation,
      Device,
      MDENumber, 
    });

    await newmeterreader.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create meterreader!");
  }

  revalidatePath("/dashboard/meterreader");
  redirect("/dashboard/meterreader");
};

export const updatemeterreader = async (formData) => {
  const { id,MeterReadingUnit,BusinessPartner,Contract,Installation,Device,MDENumber } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      MeterReadingUnit,
      BusinessPartner,
      Contract,
      Installation,
      Device,
      MDENumber, 
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await meterreader.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update meterreader!");
  }

  revalidatePath("/dashboard/meterreader");
  redirect("/dashboard/meterreader");
};
export const addmeterreaderedit = async (formData) => {
  const {  Name,MeterReadingUnit,Date } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newmeterreaderedit = new meterreaderedit({
      Name,
      MeterReadingUnit,
      Date,
    });

    await newmeterreaderedit.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create meterreaderedit!");
  }

  revalidatePath("/dashboard/meterreaderedit");
  redirect("/dashboard/meterreaderedit");
};

export const updatemeterreaderedit = async (formData) => {
  const { id,Name,MeterReadingUnit,Date } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      Name,
      MeterReadingUnit,
      Date,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await meterreaderedit.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update meterreaderedit!");
  }

  revalidatePath("/dashboard/meterreaderedit");
  redirect("/dashboard/meterreaderedit");
};
export const addallocation = async (formData) => {
  const {  Name,MeterReadingUnit,Date } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newallocation = new allocation({
      Name,
      MeterReadingUnit,
      Date,
    });

    await newallocation.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create allocation!");
  }

  revalidatePath("/dashboard/allocation");
  redirect("/dashboard/allocation");
};

export const updateallocation = async (formData) => {
  const { id,Name,MeterReadingUnit,Date } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      Name,
      MeterReadingUnit,
      Date,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await allocation.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update allocation!");
  }

  revalidatePath("/dashboard/allocation");
  redirect("/dashboard/allocation");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/vendoruser");
};

export const deletemeterreader = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await meterreader.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete meterreader!");
  }

  revalidatePath("/dashboard/meterreader");
};
export const deletemeterreaderedit = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await meterreaderedit.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete meterreaderedit!");
  }

  revalidatePath("/dashboard/meterreaderedit");
};

export const deleteallocation = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await allocation.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete allocation!");
  }

  revalidatePath("/dashboard/allocation");
};


export const authenticate = async (_prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    if (err.message.includes("CredentialsSignin")) {
      return "Wrong Credentials";
    }
    throw err;
  }
};  