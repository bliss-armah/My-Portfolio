import { useFormik } from "formik";
import FormInput from "../components/FormInput";
import { customFetch } from "../utils/axios";

interface FormDataValues {
  name: string;
  client: string;
  url: string;
  description: string;
  image: File | null; 
  duration: string;
}


const AdminPage = () => {
  const { values, handleChange, handleSubmit,setFieldValue } = useFormik<FormDataValues>({
    initialValues: {
      name: "",
      client: "",
      url: "",
      description: "",
      image: null,
      duration: "",
    },
    onSubmit: async (values) => {
      try {
        // Create a new FormData instance
        const formData = new FormData();

          // Append each field from the values object to the FormData
          Object.keys(values).forEach((key) => {
            const value = values[key as keyof FormDataValues];
  
            // Skip appending null or undefined values
            if (value !== null && value !== undefined) {
              formData.append(key, value);
            }
          });
          console.log(formData);
          
        const response = await customFetch.post("project", formData);

        console.log(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    },
  });
  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle the file selection and update the Formik state
    if (event.currentTarget.files && event.currentTarget.files.length > 0) {
      const selectedImage = event.currentTarget.files[0];
      setFieldValue("image", selectedImage);
    }
  };
  return (
    <div className="h-screen flex justify-around items-center bg-slate-600 ">
      <form onSubmit={handleSubmit}>
        <div className="bg-[#bcccdc] p-24 rounded-md flex flex-col">
          <h3 className="font-bold mx-auto">Modify projects here</h3>
          <div className="h-1 w-28 bg-[#102a42] mx-auto mb-9"></div>

          <FormInput
            value={values.name}
            onChange={handleChange}
            label="name"
            name="name"
            id="name"
            type="text"
          />
          <FormInput
            value={values.client}
            onChange={handleChange}
            label="client"
            name="client"
            id="client"
            type="text"
          />
          <FormInput
            value={values.url}
            onChange={handleChange}
            label="url"
            name="url"
            id="url"
            type="text"
          />

          <label
            htmlFor="description"
            className="flex mb-2  font-semibold capitalize"
          >
            description
          </label>
          <textarea
            value={values.description}
            name="description"
            id="description"
            onChange={handleChange}
            className="rounded mb-4 h-24"
          />
          <FormInput
            value={values.duration}
            onChange={handleChange}
            label="duration"
            name="duration"
            id="duration"
            type="text"
          />
          <FormInput
             onChange={handleImageChange}
            label="image"
            name="image"
            id="image"
            type="file"
          />

          <button type="submit" className="flex justify-center items-center right-0 bg-[#243a52] p-6 w-[120px] h-6 rounded-lg  text-[white] uppercase hover:bg-[#617d98]">
            Upload
          </button>
        </div>
      </form>
      <div className="">
        display
      </div>
    </div>
  );
};

export default AdminPage;
