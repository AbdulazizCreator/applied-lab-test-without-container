import React from "react";
import { products } from "./../../data/products";
import { ProductCard } from "../card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { NextIcon, PrevIcon } from "../icons";
import "swiper/css";
import "./Products.scss";

const Products = () => {
  return (
    <section id="products">
      <div className="products container">
        <h1>You might also like</h1>
        <div className="products__swiper">
          <div className="swiper-button image-swiper-button-next">
            <NextIcon />
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <PrevIcon />
          </div>
          <Swiper
            slidesPerView={2}
            spaceBetween={8}
            modules={[Navigation]}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
              disabledClass: "swiper-button-disabled",
            }}
            breakpoints={{
              768: {
                slidesPerView: 3,
                spaceBetween: 12,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 16,
              },
            }}
          >
            {products.map((product, i) => (
              <SwiperSlide key={i}>
                <ProductCard {...product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Products;
