import { useEffect, useState } from "react";
import axios from "axios";
// import ProductDetail from "./ProductDetail";
import PaginatedGrid from "../Pagination";

const Card = () => {
    const [cardData, setCardData] = useState([]);



    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/data.json');
                if (response.data) {
                    setCardData(response.data);
                } else {
                    console.error('Empty response data');
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

 

 
    return (
        <div className="" >
         
          
            <PaginatedGrid data={cardData} itemsPerPage={8} />
        </div>
    );
}

export default Card;
