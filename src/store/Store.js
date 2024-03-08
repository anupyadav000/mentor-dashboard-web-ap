import { legacy_createStore } from "redux";
import mentorDashboardStateReducer from "../reducer/Reducer";
import mentorDashboardState from "../state/State";

const mentorDashboardStore = legacy_createStore(
  mentorDashboardStateReducer,
  mentorDashboardState
);

export default mentorDashboardStore;
