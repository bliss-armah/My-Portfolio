import Mail from "../assets/images/mail.svg";
import Padlock from "../assets/images/padlock.svg";
import InputField from "./InputField";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

import { useFormik } from "formik";
import * as Yup from "yup";
import { customFetch } from "../utils/axios";
import { addUserToLocalStorage } from "../utils/localStorage";

const validationSchema = Yup.object({
  password: Yup.string()
    .min(6, "password should at least be 6")
    .required("password is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
});

const LoginForm = () => {
  const navigate = useNavigate();

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema,
      onSubmit: async (values) => {
        try {
          const response = await customFetch.post("auth/login", values);
          console.log(response);
          
          const saveResult = addUserToLocalStorage(response.data);
          if (response?.data.token) {
            navigate("/admin");
          }
          return saveResult;
        } catch (error) {
          console.error("Error:", error);
        }
      },
    });

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-[#fceec5]">
      <h1 className="my-2 text-center text-[33.18px] font-bold leading-[40px] text-dark">
        Sign In
      </h1>
      <p className="text-center text-gray">
        Enter your credentials to access as an admin
      </p>

      <form onSubmit={handleSubmit} className="mx-auto mt-[48px] w-[414px]">
        <InputField
          placeholder="Enter email"
          icon={<img src={Mail} alt="envelope icon" />}
          value={values.email}
          type="text"
          error={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          touch={touched.email}
          name="email"
          id="email"
        />
        <InputField
          placeholder="Enter password"
          icon={<img src={Padlock} alt="padlock icon" />}
          value={values.password}
          type="password"
          id="password"
          error={errors.password}
          onChange={handleChange}
          onBlur={handleBlur}
          touch={touched.password}
          name="password"
        />
        <div className=" flex flex-col-reverse items-end">
          <Button type="submit" width="50%" className="bg-[#c8992d]">
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
