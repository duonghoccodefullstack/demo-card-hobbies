import React, { useState } from 'react';
import { ButtonGroup, Rating, Button, Input } from '@mui/material';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

const ProductDetail = ({ value, onClose }) => {
    const [productInfo, setProductInfo] = useState({
        selectedSize: null,
        sizeChecked: true,
        quantity: 0,
        commentText: '',
        comments: []
    });

    const handleClick = (size) => {
        setProductInfo(prevState => ({
            ...prevState,
            selectedSize: size,
            sizeChecked: false
        }));
    };

    const clickRemove = () => {
        setProductInfo(prevState => ({
            ...prevState,
            quantity: Math.max(prevState.quantity - 1, 0)
        }));
    };

    const clickAdd = () => {
        setProductInfo(prevState => ({
            ...prevState,
            quantity: prevState.quantity + 1
        }));
    };

    const commentClick = () => {
        if (productInfo.commentText.trim()) {
            setProductInfo(prevState => ({
                ...prevState,
                comments: [...prevState.comments, prevState.commentText],
                commentText: ''
            }));
        }
    };

    const buyClick = () => {
        if (productInfo.quantity === 0) {
            alert("Chưa có số lượng");
        } else if (productInfo.sizeChecked) {
            alert("Vui lòng chọn kích cỡ");
        } else {
            const result = productInfo.quantity * value.price;
            alert(`Bạn đã mua thành công \nSố lượng: ${productInfo.quantity} \nMặt hàng: ${value.author} \nKích cỡ: ${productInfo.selectedSize}\nTổng tiền: ${result}`);
        }
    };

    return (
        <div className='w-full h-[2000px]'>
            <div className="w-[100vw] p-2 backdrop-blur-3xl bg-gray-200">
                <div className='mx-20 my-20 px-10 h-[2000px] w-[70w] bg-white rounded-lg drop-shadow-2xl'>
                    <div className="flex justify-between mb-[60px] mt-10">
                        <div className="w-[40px] h-[40px] pt-2 rounded-lg ">
                            <Button
                                variant="contained"
                                sx={{
                                    backgroundColor: '#DF3939',
                                    color: 'white',
                                    '&:hover': {
                                        backgroundColor: '#DF3939',
                                    }
                                }}
                            >
                                <box-icon name='trash' color='white'></box-icon>
                            </Button>
                        </div>
                        <div className="pr-10 pt-2">
                            <button onClick={onClose}>
                                <box-icon name='x'></box-icon>
                            </button>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="mr-[46px]">
                            <img
                                src={value.url}
                                alt={value.author}
                                className="w-[508px] h-[443px] rounded-lg"
                            />
                        </div>
                        <div className="w-[443px] flex flex-col justify-between">
                            <div>
                                <h1 className="font-medium text-[28px]">{value.author}</h1>
                            </div>
                            <div>
                                <Rating value={value.rate} disabled style={{ opacity: 1 }} />
                            </div>
                            <div className="flex items-center">
                                <p>Giá: {(value.price * 1000).toLocaleString()} VND</p>
                                <div className="p-1">
                                    <box-icon name='down-arrow-alt'></box-icon>
                                </div>
                                <sup className=" text-[#FF0404] ">
                                    {value.saleoff * 100} %
                                </sup>
                            </div>
                            <div>
                                <p>Phân loại</p>
                                <ButtonGroup aria-label="Basic button group">
                                    <div className="flex justify-between w-[425px]">
                                        {['nhỏ', 'vừa', 'lớn'].map((size) => (
                                            <Button
                                                key={size}
                                                onClick={() => handleClick(size)}
                                                sx={{
                                                    fontSize: '18px',
                                                    width: '104px',
                                                    height: '39px',
                                                    border: '1px solid #a4a4a4',
                                                    backgroundColor: productInfo.selectedSize === size ? '#e4e6e8' : '#ffffff',
                                                    color: productInfo.selectedSize === size ? '#000000' : '#a4a4a4',
                                                    '&:hover': {
                                                        backgroundColor: '#DF3939',
                                                    }
                                                }}
                                            >
                                                {size === 'nhỏ' ? 'Nhỏ' : size === 'vừa' ? 'Vừa' : 'Lớn'}
                                            </Button>
                                        ))}
                                    </div>
                                </ButtonGroup>
                            </div>
                            <div className="flex w-[425px] justify-between">
                                <div className="flex items-center">
                                    <button
                                        onClick={clickRemove}
                                        className="flex justify-center items-center w-[42px] h-[42px] rounded-xl bg-[#FF0404]"
                                    >
                                        <box-icon name='minus' color="white"></box-icon>
                                    </button>
                                    <input
                                        type="text"
                                        value={productInfo.quantity}
                                        className="border-none outline-none text-center w-16 p-3 mx-2"
                                        readOnly
                                    />
                                    <button
                                        onClick={clickAdd}
                                        className="flex justify-center items-center w-[42px] h-[42px] rounded-xl bg-[#FF0404]"
                                    >
                                        <box-icon name='plus' color="white"></box-icon>
                                    </button>
                                </div>
                                <div>
                                    <button
                                        onClick={buyClick}
                                        className="w-[142px] h-[57px] text-white rounded-xl bg-[#FF0404]"
                                    >
                                        Chọn mua
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="text-[24px] font-medium mt-[46px]">{value.p}</p>
                    <div className="drop-shadow-2xl bg-gray-100 mt-10 rounded-lg">
                        <div className="w-[979px] flex p-5 flex-col">
                            <div className="flex">
                                <div>
                                    <Avatar>
                                        <AvatarImage src="/src/assets/avatar1.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                </div>
                                <p className="pl-3 pt-2">John Doe</p>
                            </div>
                            <div className="p-5 mr-2">
                                <Input
                                    className="w-full text-black"
                                    value={productInfo.commentText}
                                    onChange={(e) => setProductInfo(prevState => ({
                                        ...prevState,
                                        commentText: e.target.value
                                    }))}
                                    placeholder="Comment here"
                                />
                            </div>
                            <div className="flex justify-between">
                                <div>
                                    <ToggleGroup type="single">
                                        <ToggleGroupItem value="a" className="pr-2">
                                            <box-icon name='bold'></box-icon>
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="b" className="pr-2">
                                            <box-icon name='italic'></box-icon>
                                        </ToggleGroupItem>
                                        <ToggleGroupItem value="c">
                                            <box-icon name='link-alt'></box-icon>
                                        </ToggleGroupItem>
                                    </ToggleGroup>
                                </div>
                                <button
                                    onClick={commentClick}
                                    className="text-white bg-[#FF0404] rounded-lg px-4 py-2 mr-10"
                                >
                                    Comments
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="mt-10">
                        <h1 className="font-semibold text-[26px]">Ghi chú</h1>
                        <hr className="h-[2px] bg-black" />
                        <p className='font-semibold my-5'>Danh sách ghi chú</p>
                        <div className='border-2 rounded-lg p-5 mb-2'>
                            <div>
                                <div className='flex'>
                                    <Avatar>
                                        <AvatarImage src="/src/assets/avatar2.png" />
                                        <AvatarFallback>You</AvatarFallback>
                                    </Avatar>
                                    <p className='p-2'>You</p>
                                </div>
                            </div>
                            <p className='py-5'>Sản phẩm này sẽ mua tặng cho gia đình sau ngày 15 nè!</p>
                            <div className='flex justify-between'>
                                <div className='p-2'>Time</div>
                                <div className="w-[20px] h-[40px] p-2 mr-10 rounded-lg">
                                    <Button
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#DF3939',
                                            width: "20px",
                                            color: 'white',
                                            '&:hover': {
                                                backgroundColor: '#DF3939',
                                            }
                                        }}
                                    >
                                        <box-icon name='trash' color='white'></box-icon>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            {productInfo.comments.map((comment, index) => (
                                <div key={index} className='border-2 rounded-lg p-5 mb-2'>
                                    <div>
                                        <div className='flex'>
                                            <Avatar>
                                                <AvatarImage src="/src/assets/avatar2.png" />
                                                <AvatarFallback>You</AvatarFallback>
                                            </Avatar>
                                            <p className='p-2'>You</p>
                                        </div>
                                    </div>
                                    <p className="py-5">{comment}</p>
                                    <div className='flex justify-between'>
                                        <div className='p-2'>Time</div>
                                        <div className="w-[20px] h-[40px] p-2 mr-10 rounded-lg">
                                            <Button
                                                variant="contained"
                                                sx={{
                                                    backgroundColor: '#DF3939',
                                                    width: "20px",
                                                    color: 'white',
                                                    '&:hover': {
                                                        backgroundColor: '#DF3939',
                                                    }
                                                }}
                                            >
                                                <box-icon name='trash' color='white'></box-icon>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
