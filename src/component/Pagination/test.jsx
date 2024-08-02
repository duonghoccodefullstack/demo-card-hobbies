import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PaginatedGrid = () => {
    const itemsPerPage = 8;
    const [cardData, setCardData] = useState([]);
    const [totalPages, setTotalPages] = useState(1);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('/api/data.json');
                const data = response.data;
                setCardData(data);
                setTotalPages(Math.ceil(data.length / itemsPerPage));
            } catch (error) {
                console.error('Error fetching data:', error);
                setCardData([]);
                setTotalPages(1);
            }
        };

        fetchData();
    }, []);

    const handlePageChange = (pageNumber) => {
      
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
           
            // console.log(currentPage);
            console.log(arr);
           
        } 
       
      
        // else if () {

        //     // setCurrentPage(pageNumber)

        // }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = cardData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div>
            {/* Render items */}
            {/* <div className="grid grid-cols-4 gap-4">
                {currentItems.map((item) => (
                    <div key={item.id} className="border p-4">
                        {item.id}
                    </div>
                ))}
            </div> */}

            {/* Render pagination controls */}
            <div className="mt-4 flex justify-center space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-200 border"
                >
                    Previous
                </button>
                {[...Array(totalPages).keys()].map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page + 1)}
                        className={`px-4 py-2 border ${currentPage === page + 1 ? 'bg-blue-500 text-white' : 'bg-white'}`}
                    >
                        {page + 1}
                    </button>
                ))}
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-200 border"
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedGrid;
