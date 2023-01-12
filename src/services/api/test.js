import axios from "axios";

export const getTest = async () => {
  const res = await axios.get(
    "https://dummy.restapiexample.com/api/v1/employees"
  );
  return res.data;
};
