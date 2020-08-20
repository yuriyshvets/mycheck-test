import api from "../index";
import { Event } from "../../types/index";

export const requestGetUsers = () => {
  return api.get<Event[]>(`/users`);
};
