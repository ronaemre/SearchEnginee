
import axios from "axios";

export const getSearchs = async (setSearchs) => {
    const response = await axios.get(`http://localhost:3002/data`)
    setSearchs(response.data)
    return response;
}

/* export const getSearchsFiltered = async (setSearchs, searchs) => {
    const response = await axios.get(`http://localhost:3002/data`)
        .then((sortedDescending) => {
            sortedDescending = searchs
            sortedDescending.sort((a, b) => a[0] > b[0] ? 1 : -1);
            setSearchs(sortedDescending)
            console.log(sortedDescending)
        })

    return response;
}
 */