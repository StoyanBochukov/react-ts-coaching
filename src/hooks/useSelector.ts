import { useSelector, type TypedUseSelectorHook } from "react-redux";
import { RootStore } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<RootStore> = useSelector;