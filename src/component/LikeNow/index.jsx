import banner from '../../assets/1.png'
const LikeNow = () => {
    return (

        <div className='flex flex-col my-[56px] '>
            <div>
                <h1 className="font-medium text-[32px]  text-[#E6656E]" >Yêu thích ngay</h1>

            </div>

            <div className='w-[600px] flex py-[56px]' >
                <img src={banner} className=" rounded-lg" alt="" />
                {/* <img src='/src/video/1.png'></img> */}
                <div className=' w-full p-2.5  '>
                    <p className='w-[305px] pl-[10px] text-wrap text-[24px] '>
                        Thêm ngay vào mục yêu thích để nhận được thông báo mỗi khi sản phẩm có ưu đãi
                    </p>
                </div>
            </div>
            <div>
                <h1 className="font-medium text-[32px]  text-[#E6656E]" >Yêu thích ngay</h1>
            </div>
        </div>
    );
}

export default LikeNow;