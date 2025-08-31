import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//getting all products


export const useProducts = () =>{
    return useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.escuelajs.co/api/v1/products"
      );
      return response.data
    },
  });
}

//getting single product
export const useProduct = (id) =>{
    return useQuery({
    queryKey: ["product",id],
    queryFn: async () => {
      const response = await axios.get(
        `https://api.escuelajs.co/api/v1/products/${id}`
      );
      return response.data
    },
  });
}
