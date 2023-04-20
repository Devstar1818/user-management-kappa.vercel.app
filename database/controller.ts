import { NextApiRequest, NextApiResponse } from "next";

// controller

import User from "../model/user";

export const getUsers = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const users = await User.find({});
    if (!users) return res.status(404).json({ error: "Data not found" });

    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" });
  }
};

export const getUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await User.findById(userId);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "User not Founded" });
  } catch (error) {
    res.status(404).json({ error: "Error While Get User" });
  }
};

export const addUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const formData = req.body;
    if (!formData) res.status(404).json({ error: "Cannot Selected User..." });
    User.create(formData, (err: any, data: any) => {
      return res.status(200).json(data);
    });
  } catch (error) {
    res.status(404).json({ error: "Error While Post User" });
  }
};

export const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const formData = req.body;
    const { userId } = req.query;
    if (formData && userId) {
      const user = await User.findByIdAndUpdate(userId, formData);
      res.status(200).json(user);
    }
    res.status(404).json({ error: "Cannot Selected User..." });
  } catch (error) {
    res.status(404).json({ error: "Error While Update User" });
  }
};

export const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { userId } = req.query;
    if (userId) {
      const user = await User.findByIdAndDelete(userId);
      res.status(200).json(user);
    }
    res.status(400).json({ error: "Cannot Selected User..." });
  } catch (error) {
    res.status(404).json({ error: "Error While Update User" });
  }
};
