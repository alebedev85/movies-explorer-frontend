import { useState } from "react"
/**
 * Hook for form processing
 * @param {object} initialState - initial data
 * @returns form - state, handleChange - function
 */
export default function useForm (initialState) {
  const [form, setForm] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const input = e.target;
    setErrors({
      ...errors,
      [input.name]: input.validationMessage
    })

    setForm({
      ...form,
      [input.name]: input.value
    })
  }

  // const handleChange = (event) => {
  //   const {value, name} = event.target;
  //   setValues({...values, [name]: value});
  // };

  return {form, handleChange, errors}
}
