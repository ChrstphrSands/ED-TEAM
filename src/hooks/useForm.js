import { useState } from 'react';

export const useForm = (callback, initialState = {}, validaciones) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = () => {
    if (Object.keys(validaciones(values)).length === 0) {
      callback();
      setErrors({});
    } else {
      setErrors(validaciones(values));
    }
  };

  return {
    errors,
    values,
    setValues,
    handleChange,
    handleSubmit
  };

}