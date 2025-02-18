import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});
const useAxiosPublic = () => {
  return axiosPublic;
};
export default useAxiosPublic;
