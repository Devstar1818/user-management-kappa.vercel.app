import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MyFormValue } from "../../types/type";

type UserIdTypes = {
  deleteId: string;
  userUpdateInfo: MyFormValue;
};

const initialState: UserIdTypes = {
  deleteId: "",
  userUpdateInfo: {} as MyFormValue,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    deleteId: (state, action: PayloadAction<string>) => {
      state.deleteId = action.payload;
    },
    removeDeleteId: (state) => {
      state.deleteId = "";
    },
    userUpdateInfo: (state, action: PayloadAction<MyFormValue>) => {
      state.userUpdateInfo = action.payload;
    },
  },
});

export default userSlice;
export const userAction = userSlice.actions;
