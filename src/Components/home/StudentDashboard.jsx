import React, { useState } from "react";
import axios from "axios";
import { PhotoIcon } from "@heroicons/react/24/solid";
import TextInput from "../base/TextInput";

export default function StudentDashboard() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    resume: null
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    //  console.log(file, "file");
    setFormData({ ...formData, resume: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm(formData);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setLoading(true);
    
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("contact", formData.contact);
    formDataToSend.append("file", formData.resume);
    formDataToSend.append("fileName", formData.resume.name);

   axios.post("http://localhost:5000/upload", formDataToSend)
     .then((res) => {
       console.log("data:", res.data);
       setFormData({ name: "", email: "", contact: "", resume: null });
       setLoading(false);
      })
  };

  const validateForm = (formData) => {
    const errors = {};
    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    }
    if (!formData.contact.trim()) {
      errors.contact = "Contact number is required";
    }
    if (!formData.resume) {
      errors.resume = "Resume is required";
    }
    return errors;
  };

  return (
    <form className="max-w-3xl mx-auto my-24" onSubmit={handleSubmit}>
      <div className="space-y-12">
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Student Dashboard
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-4">
            <div className="sm:col-span-4">
              <TextInput
                label="Name*"
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
            </div>

            <div className="sm:col-span-4">
              <TextInput
                label="Email*"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            <div className="sm:col-span-4">
              <TextInput
                label="Contact Number*"
                type="number"
                placeholder="Enter your contact number"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                error={errors.contact}
              />
            </div>

            <div className="col-span-full">
              <label
                htmlFor="resume"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Resume*
              </label>
              <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                {formData.resume ? (
                  <p>{formData.resume.name}</p>
                ) : (
                  <div className="text-center">
                    <PhotoIcon
                      className="mx-auto h-12 w-12 text-gray-300"
                      aria-hidden="true"
                    />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600">
                      <label
                        htmlFor="file-upload"
                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600"
                      >
                        <span>Upload your resume</span>
                        <input
                          id="file-upload"
                          name="file-upload"
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                    </div>
                    <p className="text-xs leading-5 text-gray-600">
                      PNG, JPG, PDF up to 10MB
                    </p>
                  </div>
                )}
              </div>
              {errors.resume && (
                <p className="text-red-500 text-xs mt-1">{errors.resume}</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
