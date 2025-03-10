"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import CategorySection from "./components/categorySection"
import Footer from "./components/footer"
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function Home() {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("/api/recipes")
      .then((res) => res.json())
      .then((data) => setRecipes(data))
  }, [])

  const featuredRecipe = recipes.find((item) => item.name === "Green Salad Tomato")
  const categoryColors = {
    Pizza: "bg-[#E6F3F5]",
    Kebab: "bg-[#EAEEFA]",
    Salmon: "bg-[#F9EEF3]",
    Cupcake: "bg-[#F0FEEB]",
    Doughnut: "bg-[#F3F7D9]",
  }


  return (
    <div className="bg-white">

      {/* Hero Section */}
      <section
        className="hero-section font-Rubik text-left pt-[128px] pb-[50px] bg-white mt-0 relative flex items-center px-12 max-h-[651px]"
      >
        {/* Navbar */}
        <nav className="absolute top-0 left-0 w-full h-[96px] py-0 px-0 flex justify-between items-center z-50">
          {/* Logo */}
          <div className="flex items-center space-x-2 pl-[116px]">
            <img src="/images/elemes.png" alt="Elemes.id Logo" className="w-[207px] h-[50px]" />
          </div>

          {/* Menu */}
          <ul className="flex ml-[50px] space-x-8 text-gray-700 text-sm font-medium ">
            <li className="hover:text-green-600 cursor-pointer">Home</li>
            <li className="hover:text-green-600 cursor-pointer">About</li>
            <li className="relative hover:text-green-600 cursor-pointer">
              Promotions
              <span className="absolute top-[-17px] right-[-12px] bg-[#E7462D] text-white text-[8px] font-bold w-[25px] h-[19px] flex items-center justify-center rounded-full">
                HOT
              </span>
            </li>
            <li className="hover:text-green-600 cursor-pointer">Blogs</li>
            <li className="hover:text-green-600 cursor-pointer">Contact Us</li>
          </ul>

          {/* Buttons */}
          <div className="flex space-x-6 px-[116px]">
            <button className="text-gray-700 text-sm font-medium hover:text-green-600">Masuk</button>
            <button className="px-6 py-2 bg-[#8BAC3E] text-white rounded-full shadow-lg hover:bg-green-700 transition text-sm font-medium">
              Daftar Sekarang
            </button>
          </div>
        </nav>


        <div className="w-[482px] pl-0 translate-x-16">
          <h1 className="text-6xl font-extrabold text-[#8BAC3E] leading-tight drop-shadow-md">
            Good Food Us Good Mood
          </h1>
          <p className="text-[#757575] mt-6 text-[18px] max-w-xl">
            I would think that conserving our natural resources should be a conservative position: Not to waste food, and not to throw away a lot of the food that we buy.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="w-[147px] h-[42px] bg-[#8BAC3E] text-white rounded-full shadow-lg hover:bg-green-700 transition text-[14px] font-medium">
              Daftar Sekarang
            </button>
            <button className="w-[98px] h-[42px] bg-[#F2F2F2] text-[#333333] rounded-full hover:bg-gray-300 transition text-[14px] font-medium">
              About Us
            </button>
          </div>
        </div>

        <div className="relative w-[651px] h-[460px] flex items-end justify-end overflow-hidden translate-x-[188px] mt-[-20px] ">
          {/* Background Lingkaran Besar */}
          <div className="absolute right-[75px] top-[-3px] w-[468px] h-[468px] bg-gray-200 rounded-full opacity-30 z-0"></div>
          {featuredRecipe && (
            <div className="relative z-10 flex flex-col items-end">
              {/* Gambar Utama */}
              <div className="absolute bottom-[10px] right-[82px] w-[413px] h-[415px] relative z-10">
                <Image
                  src={featuredRecipe.image}
                  alt={featuredRecipe.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              {/* Informasi Makanan di Kiri Bawah */}
              <div className="absolute bottom-[10px] right-[340px] w-[292px] h-[93px] bg-white shadow-sm rounded-xl flex items-center p-4 space-x-3 z-20">
                {/* Thumbnail */}
                <div className="w-[50px] h-[50px] max-h-[50px] flex items-center justify-center overflow-hidden">
                  <Image
                    src={featuredRecipe.image}
                    alt="Thumbnail"
                    width={50}
                    height={50}
                    className="rounded-full object-cover max-h-[50px]"
                  />
                </div>

                {/* Detail Teks */}
                <div>
                  <h3 className="font-semibold text-black text-[14px]">{featuredRecipe.name}</h3>
                  <p className="text-gray-500 text-[12px]">{featuredRecipe.category}</p>
                  {/* Rating */}
                  <div className="flex">
                    {[...Array(4)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FF8412"
                        style={{ width: "10.66px", height: "10.2px" }}
                      >
                        <path d="M12 2l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.77l-6.18 3.23L7 14.12l-5-4.87 6.91-.99L12 2z" />
                      </svg>
                    ))}
                    {/* Bintang Kosong */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="#C9C9C9"
                      style={{ width: "10.66px", height: "10.2px" }}
                    >
                      <path d="M12 2l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.77l-6.18 3.23L7 14.12l-5-4.87 6.91-.99L12 2z" />
                    </svg>
                  </div>


                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Kategori */}
      <CategorySection />

      {/* Trending Recipes */}
      <section className="pb-20 bg-white font-Rubik">
        <h2 className="pl-[100px] text-4xl font-bold text-gray-900 text-left">Browse Our Trending</h2>
        <p className="pl-[100px] text-green-600 text-lg font-semibold text-left mt-2">Receipt</p>
        {/* Grid List */}
        <div className="container ml-[85px] mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10 px-4">
          {recipes.slice(0, 8).map((recipe) => (
            <div
              key={recipe.id}
              className={`group relative p-6 rounded-xl text-center transition border border-gray-200 overflow-hidden ${categoryColors[recipe.category] || "bg-white"} w-[287.5px] h-[306px]`}
            >
              {/* Background Hover Image */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-multiply">
                <Image
                  src="/images/hero_section.png"
                  alt="Background Hover"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Gambar Resep */}
              <Image
                src={recipe.image}
                alt={recipe.name}
                width={118.5}
                height={120}
                className="rounded-lg relative z-10 w-[118.5px] h-[120px] self-start"
              />

              {/* Nama Resep */}
              <h3 className="mt-[16px] text-[26px] font-medium text-black relative z-10 text-left">{recipe.name}</h3>

              {/* Kategori */}
              <p className="mt-[12px] text-[#8BAC3E] text-[18px] font-medium relative z-10 text-left">{recipe.category}</p>

              {/* Rating */}
              <div className="flex mt-[12px]">
                {[...Array(4)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="#FF8412"
                    style={{ width: "10.5px", height: "10.66px" }}
                  >
                    <path d="M12 2l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.77l-6.18 3.23L7 14.12l-5-4.87 6.91-.99L12 2z" />
                  </svg>
                ))}
                {/* Bintang Kosong */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#C9C9C9"
                  style={{ width: "10.5px", height: "10.66px" }}
                >
                  <path d="M12 2l3.09 6.26 6.91.99-5 4.87 1.18 6.88L12 17.77l-6.18 3.23L7 14.12l-5-4.87 6.91-.99L12 2z" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Button All Receipt */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 text-lg font-semibold text-white bg-[#8BAC3E] rounded-[100px] hover:bg-[#7A982E] transition">
            ALL Receipt
          </button>
        </div>
      </section>
      {/* Kategori */}
      <Footer />
    </div>
  )
}
