import axios from 'axios';

// Fetch data from API
export const fetchData = async () => {
    try {
        const response = await axios.get('/api/data.json');
        // item = response.data
        // return response.data; 
        console.log(response.data);// Return the data from API
    } catch (error) {
        console.error('Error fetching data:', error);
        return []; // Return an empty array in case of error
    }
};
// export const data = async () => {
//     const data = await fetchData();
//    console.log(data);
// }