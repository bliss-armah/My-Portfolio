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
    setFormData((prev) => ({ ...prev, [name]: value }));
    validateField(name, value);
  };

  const validateField = (fieldName: string, value: string) => {
    (Yup.reach(validationSchema, fieldName) as Yup.StringSchema<string>)
      .validate(value)
      .then(() => {
        setFormErrors((prev) => ({ ...prev, [fieldName]: "" }));
      })
      .catch((err: Yup.ValidationError) => {
        setFormErrors((prev) => ({ ...prev, [fieldName]: err.message }));
      })
      .finally(() => {
        const isValid = Object.values(formErrors).every((e) => !e);
        setIsFormValid(
          isValid && Object.values(formData).every((v) => v !== "")
        );
      });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isFormValid) {
      try {
        setIsSubmitting(true);
        await axios.post("https://mail-service-pbac.onrender.com/send", formData);
        toast.success("Message sent successfully!");
        setFormData(initialValues);
      } catch (error) {
        console.error(error);
        toast.error("Something went wrong. Please try again.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
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
        label="Email Address"
        id="email"
        name="email"
        value={formData.email}
        error={formErrors.email}
        onChange={handleInputChange}
      />
      <div>
        <label
          htmlFor="message"
          className="block mb-1.5 text-sm font-medium text-[hsl(var(--muted-foreground))]"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={formData.message}
          onChange={handleInputChange}
          className={`w-full px-4 py-2.5 rounded-lg border bg-[hsl(var(--card))] text-white text-sm placeholder:text-[hsl(var(--muted-foreground))]/40 focus:outline-none focus:ring-1 transition-colors resize-none ${
            formErrors.message
              ? "border-red-500/60 focus:ring-red-500/40"
              : "border-[hsl(var(--border))] focus:ring-white/20 focus:border-white/30"
          }`}
        />
        {formErrors.message && (
          <p className="text-red-400 text-xs mt-1.5">{formErrors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isFormValid || isSubmitting}
        className={`w-full py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
          isFormValid && !isSubmitting
            ? "bg-white text-black hover:bg-white/90 cursor-pointer"
            : "bg-[hsl(var(--muted))] text-[hsl(var(--muted-foreground))] cursor-not-allowed opacity-50"
        }`}
      >
        {isSubmitting ? "Sending..." : "Send message"}
      </button>
    </form>
  );
};

export default ContactForm;
