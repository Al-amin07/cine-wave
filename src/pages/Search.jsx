import { useSearchParams } from "react-router-dom";


const Search = () => {
    const [params] = useSearchParams();
    const search = params.get('query')
    console.log(search)
    return (
        <div>
            Sea5rch Page
        </div>
    );
};

export default Search;