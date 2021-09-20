import { useState } from "react";

const useForm = (callback) => {
  const [formValues, setFormValues] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (evt) =>
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });

  const handleSubmit = (callback) => (evt) => {
    evt.preventDefault();
    setIsLoading(true);
    callback();
    setIsLoading(false);
    setFormValues({});
  };

  return [{ formValues, setFormValues, isLoading }, handleChange, handleSubmit];
};

export default useForm;
