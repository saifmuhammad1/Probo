import { instance } from "./axios";

export const data = () => {
  return instance.get("/data");
};
