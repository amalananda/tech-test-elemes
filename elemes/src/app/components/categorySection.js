"use client"

import { useRef } from "react"
import Image from "next/image"

export default function CategorySection() {
  const scrollRef = useRef(null)

  const categories = [
    { name: "Cupcake", items: 22, image: "/images/icon_cupcake.png", hoverImage: "/images/hero_section.png", bgColor: "#F0FEEB" },
    { name: "Pizza", items: 25, image: "/images/icon_pizza.png", hoverImage: "/images/hero_section.png", bgColor: "#E4F2F4" },
    { name: "Kebab", items: 12, image: "/images/icon_kebab.png", hoverImage: "/images/hero_section.png", bgColor: "#EAEEFA" },
    { name: "Salmon", items: 22, image: "/images/icon_salmon.png", hoverImage: "/images/hero_section.png", bgColor: "#F9EEF3" },
    { name: "Doughnut", items: 11, image: "/images/icon_doughnut.png", hoverImage: "/images/hero_section.png", bgColor: "#F3F7D9" },
    { name: null, items: null, image: null, hoverImage: "/images/hero_section.png", bgColor: "#F0FEEB" },
  ]

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250
      scrollRef.current.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="mt-16 px-6 h-[573px] relative">
      <h2 className="px-[80px] text-[38px] font-medium text-gray-900 text-left leading-[50px]">
        Browse Our Category
      </h2>
      <p className="px-[80px] text-[#8BAC3E] text-[38px] font-medium text-left mt-2 leading-[50px]">
        Receipt
      </p>

      {/* Container kategori */}
      <div className="relative flex items-center pl-[80px]">
        <div
          ref={scrollRef}
          className="flex gap-[10px] mt-8 overflow-x-auto scroll-smooth"
          style={{ scrollBehavior: "smooth", whiteSpace: "nowrap" }}
        >
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-xl text-center shadow-md w-[230px] h-[175px] hover:h-[195px] flex-shrink-0 transition-all duration-300 overflow-hidden"
              style={{ backgroundColor: category.bgColor }}
            >
              {/* Gambar hover di belakang */}
              {category.hoverImage && (
                <Image
                  src={category.hoverImage}
                  alt="Hover Image"
                  fill
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 mix-blend-multiply"
                />
              )}

              {/* Gambar utama */}
              {category.image && (
                <Image
                  src={category.image}
                  alt={category.name || "Category"}
                  width={47}
                  height={52}
                  className="mx-auto relative z-10 w-[47px] h-[52px]"
                />
              )}

              {/* Nama & jumlah item */}
              {category.name && <p className="font-semibold mt-3 text-[16px] relative z-10">{category.name}</p>}
              {category.items !== null && <p className="text-gray-500 text-[14px] relative z-10">{category.items} Items</p>}
            </div>
          ))}
        </div>
      </div>

      {/* Tombol PREV & NEXT di bawah card dan rata kanan */}
      <div className="flex justify-end px-[135px] mt-6 gap-4">
        <button
          className="bg-[#8BAC3E] text-white font-semibold w-[113px] h-[50px] rounded-full shadow-lg"
          onClick={() => scroll("prev")}
        >
          ◀ PREV
        </button>
        <button
          className="bg-[#8BAC3E] text-white font-semibold w-[113px] h-[50px] rounded-full shadow-lg"
          onClick={() => scroll("next")}
        >
          NEXT ▶
        </button>
      </div>
    </section>
  )
}
