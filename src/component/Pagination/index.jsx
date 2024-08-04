import React, { useState } from 'react';
import ProductDetail from '../Card/productdetail';
const PaginatedGrid = ({ data, itemsPerPage }) => {
    const [selectedCart, setSelectedCart] = useState(null);
    const [isFileOpen, setIsFileOpen] = useState(false);

  
    const truncateText = (text, length) => {
        if (text.length > length) {
            return text.substring(0, length) + '...';
        }
        return text;
    };
    const handleCartClick = (item) => {
        setSelectedCart(item);
        setIsFileOpen(true);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(data.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        }
    };

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = data.slice(startIndex, startIndex + itemsPerPage);
    
    const closeFile = () => {
        setIsFileOpen(false);
    };

    return (
        <div >
            {/* Render items */}
            <div>
                {selectedCart && isFileOpen && 
                    <ProductDetail value={selectedCart} onClose={closeFile} />
                }
            </div>  
            <div className="grid grid-cols-4 gap-x-[30px] gap-y-[20px] w-full font-be py-[67px] px-[130px] h-[100vh] mb-52">
                {currentItems.map((item) => (
                    <div className='cursor-default'>

                    <div 
                    key={item.id}
                    onClick={() => handleCartClick(item)}
                    className="flex flex-col shadow-md rounded-lg h-[320px] w-[210px] cursor-pointer"
                >
                    <div className="w-[197px] h-[197px] ">
                        <img src={item.url} alt={item.author} loading='lazy' className="rounded-xl pl-2" />
                    </div>
                    <div className="flex flex-col p-2">
                        <div className='flex h-24'>
                        <p className="text-[20px]">{truncateText(item.author, 39)}</p>
                        
                        <box-icon name='cart-add' size={"24px"}></box-icon>
                        </div>
                        <div className="flex justify-between">
                            <span>{Number(item.price * 1000).toLocaleString()} VND</span>
                            <span>-{item.saleoff * 100} %</span>
                        </div>
                    </div>
                </div>
                    </div>
                ))}
            </div>

            {/* Render pagination controls */}
            <div className="mt-4 flex justify-center space-x-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 "
                >
                   <box-icon name='chevron-left'></box-icon>
                </button>
                {[...Array(4).keys()].map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page + 1)}
                        className={`px-4 py-2 border rounded-lg ${currentPage === page + 1 ? 'bg-[#BBBBBB] text-white' : 'bg-white'}`}
                    >
                        {page + 1}
                        
                    </button>
                    
                ))}
                ...
                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2"
                >
                   <box-icon name='chevron-right' size="24px"></box-icon>
                </button>
            </div>
        </div>
    );
};

export default PaginatedGrid;
