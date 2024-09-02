import { useQuery } from "@tanstack/react-query";
import useMovie from "./useMovie";


const useFetch = (type, endPoint) => {
 const movieApi = useMovie();
 const { data : movies = [], isLoading } = useQuery({
    queryKey: [type],
    queryFn: async () => {
        const { data } = await movieApi(endPoint)
       
        return data.results
    }
 })
 return {movies, isLoading};
};

export default useFetch;