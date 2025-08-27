import {useState} from "react";
import { AsyncPaginate } from "react-select-async-paginate";

const search = ({onsearchChange}) => {

    const [find, setFind] = useState(null);

    const handleOnChange = (searchData) => {
        setFind(searchData);
        onsearchChange(searchData);
    };

    return (
        <AsyncPaginate 
            placeholder="Search for city"
            debounceTimeout={600}
            value={find}
            onChange={handleOnChange}
        />
    )
}

export default search;