import { object, string, number } from "yup";

export const loginVs = object().shape({
  email: string().email("enter a valid email").required(),
  password: string().min(6, "too short").max(100),
});

export const regVs = object().shape({
  email: string().email("enter a valid email").required(),
  password: string().min(6, "too short").max(100),
  confirmPassword: string().min(6, "too short").max(100),
  firstName: string().min(2).max(100),
  lastName: string().min(2).max(100),
  phoneNo: string().min(11).max(13),
});
