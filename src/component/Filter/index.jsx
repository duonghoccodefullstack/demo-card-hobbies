import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { extendTheme, CssVarsProvider } from '@mui/joy/styles';

// import ViewListIcon from '@mui/icons-material/ViewList';
// import ViewModuleIcon from '@mui/icons-material/ViewModule';
// import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
// import ToggleButton from '@mui/material/ToggleButton';
// import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
// import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
// import ChecklistIcon from '@mui/icons-material/Checklist';

const Filter = () => {
    const theme = extendTheme({
        components: {
            JoySelect: {
                defaultProps: {
                    indicator: <box-icon name='chevron-up'></box-icon>,
                },
                baseStyle: {
                    textColor: 'text-white',

                },

            },

        },
    });
    return (
        <div>
            <div>
                <div className=''>
                    <div>
                        <div className='relative'>
                            <input
                                placeholder='Tìm kiếm'
                                className='w-[440px] outline-none border-[1px] h-[44px]  pl-11 '
                            >

                            </input>
                            <div className="absolute top-1/2 left-2 transform -translate-y-1/2 text-gray-400 pt-[12px]">
                                <box-icon name='search' ></box-icon>
                            </div>



                        </div>

                    </div>
                </div>
            </div>
            <div className='flex mt-10 pb-[75px] '>
                <div className='mr-10'>

                    <CssVarsProvider theme={theme}>
                        <Select
                            placeholder="Trạng thái"
                            className='w-[149px] '
                            dropdownClassName="ant-select-dropdown"
                            // indicator={<KeyboardArrowDown />}
                            sx={{
                                width: 149,
                                paddingX: 2,

                                [`& .${selectClasses.indicator}`]: {
                                    transition: '0.2s',
                                    [`&.${selectClasses.expanded}`]: {
                                        transform: 'rotate(-180deg)',
                                    },
                                },
                            }}
                        >

                            <Option>Đang bán</Option>
                            <Option>Hết hàng</Option>
                            <Option>Ngưng bán</Option>
                        </Select>
                    </CssVarsProvider>

                </div>
                <div className='mr-10' >
                    <CssVarsProvider theme={theme}>
                        <Select
                            placeholder="Danh mục"
                            className='w-[149px]'
                            // indicator={<KeyboardArrowDown />}
                            sx={{
                                width: 149,
                                paddingX: 2,
                                [`& .${selectClasses.indicator}`]: {
                                    transition: '0.2s',
                                    [`&.${selectClasses.expanded}`]: {
                                        transform: 'rotate(-180deg)',
                                    },
                                },
                            }}
                        >
                            <Option>Rượu</Option>
                            <Option>Hạt</Option>
                            <Option>Hoa quả</Option>
                        </Select>
                    </CssVarsProvider></div>
                <div className='mr-10 '>
                    <CssVarsProvider theme={theme}>
                        <Select
                            placeholder="Đã thêm gần đây"
                            className='w-[195px]'
                            // indicator={<KeyboardArrowDown />}
                            sx={{
                                width: 195,
                                paddingX: 2,

                                [`& .${selectClasses.indicator}`]: {
                                    transition: '0.2s',
                                    [`&.${selectClasses.expanded}`]: {
                                        transform: 'rotate(-180deg)',
                                    },
                                },
                            }}
                        >
                            <Option>Gần đây (mới nhất)</Option>
                            <Option>Cũ nhất</Option>
                            <Option></Option>
                        </Select>
                    </CssVarsProvider>
                </div>





            </div>
            <div>
                <div className="flex justify-between mb-10" >
                    <div> <h2 className="p-4"> Quà tặng</h2></div>
                    <div>
                        <button className="bg-button_gift h-[57px] w-[85px] rounded-lg p-2">Tạo</button>
                    </div>


                </div>
            </div>



        </div>
    );
}

export default Filter;