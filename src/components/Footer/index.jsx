import logo from '../../assets/imgs/logo.png';
import dmca from '../../assets/imgs/_dmca_premi_badge_4.png'
import bct from '../../assets/imgs/bo_cong_thuong.png'
import { Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebook, FaGithub, FaYoutube } from "react-icons/fa"; // Import từ react-icons

import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
function Footer() {
    return (
        <footer className="w-full mt-30">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 py-10 border-y border-gray-600">
                <div className="col-span-1">
                    <ul className='list-none'>
                        <li className=''>
                            <img className='object-cover w-auto max-w-[125px] h-auto' src={logo} alt="logo" />
                        </li>
                        <li className='mb-4'>
                            <img className='object-cover w-auto max-w-[125px] h-[38px]' src={bct} alt="logo" />
                        </li>
                        <li className='mb-6'>
                            <img className='object-cover w-auto max-w-[125px] h-auto' src={dmca} alt="logo" />
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className='list-none'>
                        <li className='text-white'><h4 className='mb-4 text-sm text-text'>Về FPT Play</h4></li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Giới thiệu</Link>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Các gói dịch vụ</Link>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Liên hệ</Link>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Trung tâm hỗ trợ</Link>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Thông tin</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className='list-none'>
                        <li className='text-white '><h4 className='mb-4 text-sm text-text'>Dịch vụ</h4></li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Gói DATA</Link>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Quảng cáo</Link>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Mua gói</Link>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Bảo hành</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className='list-none'>
                        <li className='text-white'>
                            <h4 className='mb-4 text-sm text-text'>Quy định</h4>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Điều khoản sử dụng</Link>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Chính sách thanh toán</Link>
                        </li>
                        <li className='mb-2 text-white text-sm'>
                            <Link className='duration-200 ease hover:text-primary' to=''>Chính sách bảo mật thông tin dữ liệu</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-span-1">
                    <ul className='list-none text-[#d2d2d2]'>
                        <li className='mb-2  text-sm flex'>
                            <FontAwesomeIcon icon={faPhone} />
                            <h4 className='ml-2 mb-4'>19006600</h4>
                        </li>
                        <li className='mb-2  text-sm flex'>

                            <FontAwesomeIcon icon={faEnvelope} />
                            <p className='ml-2'>hotrofptplay@fpt.com</p>
                        </li>
                        <li className='mb-2  text-sm'>
                            Theo dõi chúng tôi trên:
                        </li>
                        <li className='mb-2  text-sm flex'>
                            <FaGithub className=" hover:text-primary cursor-pointer text-xl mr-4" />
                            <FaFacebook className=" hover:text-primary cursor-pointer text-xl mr-4" />
                            <FaYoutube className=" hover:text-primary cursor-pointer text-xl mr-4" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className='max-w-[850px] leading-5 py-5 text-[12.5px] text-[#d2d2d2]'>
                <p>Công ty Cổ phần Viễn Thông FPT - Người đại diện: Ông Hoàng Việt Anh. Trụ sở: Tầng 2, Tòa nhà FPT Cầu Giấy, Số 17 Phố Duy Tân, Phường Dịch Vọng Hậu, Quận Cầu Giấy, TP.Hà Nội</p>
                <p>Địa chỉ liên lạc: Tầng 9, Block A, tòa nhà FPT Cầu Giấy, số 10 Phạm Văn Bạch, quận Cầu Giấy, TP. Hà Nội</p>
                <p>Số điện thoại liên hệ: 024 7300 2222. Thư điện tử: hotrokhachhang@fpt.com hoặc hotrofptplay@fpt.com</p>
                <p className='mt-6'>Giấy chứng nhận đăng ký doanh nghiệp số 0101778163 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp lần đầu ngày 28/7/2005, cấp đăng ký thay đổi lần thứ 32 vào ngày 21/12/2023.</p>
                <p>Giấy phép cung cấp dịch vụ phát thanh, truyền hình trả tiền số 377/GP-BTTTT cấp sửa đổi bổ sung lần 1 ngày 10/10/2023.</p>
            </div>
            <p className='coppyright text-start text-sm select-none text-text py-4'>@Coppyright 14/02/2025 by HoangNguyen</p>
        </footer>
    );
}

export default Footer;