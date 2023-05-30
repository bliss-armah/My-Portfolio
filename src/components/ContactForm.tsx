import axios from "axios";
import { FormData, validationSchema } from "../Schema/Form";
import { toast } from "react-toastify";
import InputField from "../components/InputField";
import React, { useState } from "react";
import * as Yup from "yup";

const ContactForm = () => {
  const initialValues: FormData = {
    fullname: "",
    number: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialValues);
  const [formErrors, setFormErrors] = useState<FormData>(initialValues);
  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (fieldName: string, value: string) => {
    (Yup.reach(validationSchema, fieldName) as Yup.StringSchema<string>)
      .validate(value)
      .then(() => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: "",
        }));
      })
      .catch((err: Yup.ValidationError) => {
        setFormErrors((prevErrors) => ({
          ...prevErrors,
          [fieldName]: err.message,
        }));
      })
      .finally(() => {
        // Check if all form fields are valid
        const isValid = Object.values(formErrors).every((error) => !error);
        setIsFormValid(
          isValid && Object.values(formData).every((value) => value !== "")
        );
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFormValid) {
      try {
        setIsSubmitting(true);
        await axios.post(
          "https://mail-service-pbac.onrender.com/send",
          formData
        );
        toast.success("Email sent successfully");
        setFormData(initialValues);
      } catch (error) {
        console.error(error);
      } finally {
        setIsSubmitting(false);
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      }
    }
  };

  return (
    <div>
      <article className="about-info ml-8">
        <div className="w-3/4 p-2">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              label="Full Name"
              id="fullname"
              name="fullname"
              value={formData.fullname}
              error={formErrors.fullname}
              onChange={handleInputChange}
            />
            <InputField
              label="Phone Number"
              id="number"
              name="number"
              value={formData.number}
              error={formErrors.number}
              onChange={handleInputChange}
            />
            <InputField
              label="Email"
              id="email"
              name="email"
              value={formData.email}
              error={formErrors.email}
              onChange={handleInputChange}
            />
            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-[1.1rem] text-[#617d98]"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 border rounded-md focus:outline-none  ${
                  formErrors.message ? "border-red-500" : "focus:ring-[#e9b949]"
                }`}
              />
              {formErrors.message && (
                <p className="text-red-500 text-sm mt-1">
                  {formErrors.message}
                </p>
              )}
            </div>
            <div>
              <button
                type="submit"
                className={`btn ${isFormValid ? "" : "btn-disabled"}`}
                disabled={!isFormValid || isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  );
};

export default ContactForm;
