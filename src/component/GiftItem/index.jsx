import { useState } from "react";

const AddModal = ({onClick,onChange,onSubmit}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit();
        // console.log(formData);
        
    };
   
   
    
    return (
        <div
            className="absolute top-0 left-0 bg-gray-300 w-full h-[300vw] px-20 z-50 "        >
            <div className="bg-white opacity-1   h-[300vw] z-50">
                <p>Sản phẩm cần thêm</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col mx-5 my-5 ">
                    <label htmlFor="" className="my-2">Tên sản phẩm </label>
                    <input
                        // value={value.cardName}
                        // value={"hello"}
                        onChange={onChange}
                        name="cardName"
                        className="w-full h-10 p-5 outline-none border-2 rounded-lg text-black"
                        // placeholder="Tên sản phẩm "
                    >

                    </input> 
                    </div>  
                    <div className="flex flex-col mx-5 my-5 ">
                    <label htmlFor="" className="my-2">Hình ảnh sản phẩm </label>
                    <input
                        // value={value.url}
                        onChange={onChange}
                        name="url"
                        className="w-full h-10 p-5 outline-none border-2 rounded-lg "
                        // placeholder="Tên sản phẩm "
                    >

                    </input> 
                    </div>  
                    <div className="flex flex-col mx-5 my-5 ">
                    <label htmlFor="" className="my-2">Rating</label>
                    <input
                        // value={value.rating}
                        type="number"
                        max={5} min={0}
                        onChange={onChange}
                        name="rating"
                        className="w-full h-10 p-5 outline-none border-2 rounded-lg "
                        // placeholder="Tên sản phẩm "
                    >

                    </input> 
                    </div>  
                    <div className="flex flex-col mx-5 my-5 ">
                    <label htmlFor="" className="my-2"> Giá</label>
                    <input
                        // value={value.price}
                        onChange={onChange}
                        name="price"
                        className="w-full h-10 p-5 outline-none border-2 rounded-lg "
                        // placeholder=" "
                    >

                    </input> 
                    </div>  
                    <div className="flex flex-col mx-5 my-5 ">
                    <label htmlFor="" className="my-2"> Giảm giá</label>
                    <input
                        // value={value.saleOff}
                        onChange={onChange}
                        name="saleOff"
                        className="w-full h-10 p-5 outline-none border-2 rounded-lg "
                        // placeholder=" "
                    >

                    </input> 
                    </div>  

                    <div className="flex flex-col mx-5 my-5 ">
                    <label htmlFor="" className="my-2">Trạng thái </label>
                    <input
                        // value={value.status}
                        onChange={onChange}
                        name="status"
                        className="w-full h-10 p-5 outline-none border-2 rounded-lg "
                        // placeholder=" "
                    >

                    </input> 
                    </div>  
                    <div className="flex flex-col mx-5 my-5 ">
                    <label htmlFor="" className="my-2"> Phân loại</label>
                    <input
                        // value={value.category}
                        onChange={onChange}
                        name="category"
                        className="w-full h-10 p-5 outline-none border-2 rounded-lg "
                        // placeholder="Tên sản phẩm "
                    >

                    </input> 
                    </div>  
                    <div className="flex flex-col mx-5 my-5 ">
                    <label htmlFor="" className="my-2"> Danh mục</label>
                    <input
                        // value={value.list}
                        onChange={onChange}
                        name="list"
                        className="w-full h-10 p-5 outline-none border-2 rounded-lg "
                        // placeholder="Tên sản phẩm "
                    >

                    </input> 
                    </div> 
                    <div className="flex flex-col mx-5 my-5 ">
                    <label htmlFor="" className="my-2">Mô tả</label>
                    <input
                        // value={value.p}
                        onChange={onChange}
                        name="p"
                        className="w-full h-10 p-5 outline-none border-2 rounded-lg "
                        // placeholder="Tên sản phẩm "
                    >

                    </input> 
                    </div> 
                    <div className="flex mx-2 gap-2 :">
                        <button
                            type="submit"
                            className="bg-gray-400 h-10 p-5 flex justify-center items-center rounded-lg">
                            Create Item
                        </button>
                        <button
                            className="bg-button_gift  h-10 p-5 flex justify-center items-center rounded-lg "
                            onClick={onClick}
                        >
                            Close Tab
                        </button>
                    </div>


                </form>
            </div>



        </div>
    );
}

export default AddModal;