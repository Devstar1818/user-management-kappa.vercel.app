import { useSelector, useDispatch } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { RootState, AppDispatch } from "../app";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch