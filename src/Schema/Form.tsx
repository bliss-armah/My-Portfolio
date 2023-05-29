import * as Yup from "yup";
import { ObjectSchema } from "yup";

export interface FormData {
  fullname: string;
  number: string; 
  email: string;
  message: string;
}

export const validationSchema: ObjectSchema<FormData> = Yup.object().shape({
  fullname: Yup.string()
    .min(10, "fullname must be at least 10 characters")
    .max(30, "fullname must be 30 characters or less")
    .required("Full Name is required"),
  number: Yup.string()
    .min(10, "number must be at least 10 characters")
    .required("number is required"),
  email: Yup.string()
    .email("Email is invalid")
    .matches(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      "Invalid email address"
    )
    .required("Email is required"),
  message: Yup.string().required("Message is required"),
});
