import { useState } from "react";

export default function useHandleChange(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleInputChange = (e) => {
    const type = e.target.type;
    // c1
    setValues({
      ...values,
      [e.target.name]: type === "checkbox" ? e.target.checked : e.target.value,
    });
  };
  return {
    values,
    // handleChange,
  };
}
