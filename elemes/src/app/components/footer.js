import Image from "next/image"
export default function Footer() {
  return (
    <>
      <footer className=" text-gray-800 flex justify-center">
        <div className="bg-[#F9FFF6] w-[1239px] h-[359px] flex flex-col justify-center rounded-[20px]">
          <div className="container mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Logo dan Alamat */}
            <div className="w-[335px] h-[127px]">
              <img src="/images/elemes.png" alt="Logo" className="w-[207px] h-[50px] mb-4" />
              <p className="text-[14px] text-[#757575] leading-relaxed">
                Jl. Prof. DR. Satrio No.7, RT.3/RW.3, Karet Kuningan, Kecamatan Setiabudi, Kota Jakarta Selatan,
                Daerah Khusus Ibukota Jakarta 12950
              </p>
              <div className="bg-white w-[136px] h-[40px] flex items-center justify-center space-x-3 mt-4">
                <a href="#" className="w-[40px] h-[40px] flex items-center justify-center rounded-full transition duration-300 hover:bg-[#8BAC3E]">
                  <i className="fas fa-envelope text-green-700 transition duration-300 hover:text-white"></i>
                </a>
                <a href="#" className="w-[40px] h-[40px] flex items-center justify-center rounded-full transition duration-300 hover:bg-[#8BAC3E]">
                  <i className="fas fa-phone text-green-700 transition duration-300 hover:text-white"></i>
                </a>
                <a href="#" className="w-[40px] h-[40px] flex items-center justify-center rounded-full transition duration-300 hover:bg-[#8BAC3E]">
                  <i className="fab fa-instagram text-green-700 transition duration-300 hover:text-white"></i>
                </a>
              </div>
            </div>


            {/* Categories */}
            <div className="pl-[150px] text-[#757575]">
              <h3 className="font-semibold text-[#333333] text-[18px] mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-[14px]">Cupcake</a></li>
                <li><a href="#" className="text-[14px]">Pizza</a></li>
                <li><a href="#" className="text-[14px]">Kebab</a></li>
                <li><a href="#" className="text-[14px]">Salmon</a></li>
                <li><a href="#" className="text-[14px]">Doughnut</a></li>
              </ul>
            </div>

            {/* About Us */}
            <div className="pl-[90px] text-[#757575]">
              <h3 className="font-semibold text-[#333333] text-[18px] mb-4">About Us</h3>
              <ul className="space-y-2 ">
                <li><a href="#" className="text-[14px]">About Us</a></li>
                <li><a href="#" className="text-[14px]">FAQ</a></li>
                <li><a href="#" className="text-[14px]">Report Problem</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="font-medium text-[#333333] text-[18px] mb-4">Newsletter</h3>
              <p className="text-[14px] text-[#757575] mb-3">
                Get now free 50% discount for all products on your first order
              </p>
              <div className="flex items-center border border-[#000000] rounded-md overflow-hidden">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-4 py-2 text-[14px] text-[#000000] placeholder-[#000000] outline-none bg-[#F9FFF6]"
                />
                <button className="bg-[#8BAC3E] text-white px-4 py-2 text-[14px] font-medium rounded-tr-[8px] rounded-br-[8px]">
                  SEND
                </button>
              </div>
              <div className="mt-4 space-y-2">
                <p className="flex items-center text-gray-600 text-[14px]">
                  <i className="fas fa-envelope text-[#A3C36D] mr-2"></i> elemesid@gmail.com
                </p>
                <p className="flex items-center text-gray-600 text-[14px]">
                  <i className="fas fa-phone text-[#A3C36D] mr-2"></i> 0888 1111 2222
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Copyright */}
      <div className="text-center text-[#757575] text-[12px] mt-8">
        © 2021 Elemes id. All rights reserved
      </div>
    </>
  )
}
