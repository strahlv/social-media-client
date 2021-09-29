import { useState } from "react";

const useForm = (initialState = {}) => {
  const [formValues, setFormValues] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (evt) =>
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });

  const handleSubmit = (callback) => (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    callback();
    setIsLoading(false);

    const clearForm = () => {
      const emptyValues = { ...formValues };
      for (const [key, value] of Object.entries(emptyValues)) {
        emptyValues[key] = "";
      }
      setFormValues(emptyValues);
    };
    clearForm();
  };

  return [{ formValues, setFormValues, isLoading }, handleChange, handleSubmit];
};

export default useForm;
