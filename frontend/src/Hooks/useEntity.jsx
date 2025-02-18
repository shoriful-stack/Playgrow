import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useEntity = (endpoint) => {
  const axiosPublic = useAxiosPublic();

  const { data = { data: [] }, isPending: loading, error, refetch } = useQuery({
    queryKey: [endpoint],
    queryFn: async () => {
      const res = await axiosPublic.get(endpoint);
      return res.data.data || [];
    },
  });

  return [data, loading, error, refetch];
};

export default useEntity;
