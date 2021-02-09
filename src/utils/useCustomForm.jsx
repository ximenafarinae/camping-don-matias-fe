import { useState } from "react";

const useCustomForm = () => {
  const [state, setState] = useState({});
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return [state, handleChange, setState];
};

export default useCustomForm;
