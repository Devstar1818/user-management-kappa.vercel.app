import { Schema, model, models } from "mongoose";

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  salary: string;
  birthdayDate: string;
  status: string;
}

const userSchema = new Schema<UserType>({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  salary: { type: String, required: true },
  birthdayDate: { type: String, required: true },
  status: String,
});

const User = models.user || model<UserType>("user", userSchema);

export default User;
