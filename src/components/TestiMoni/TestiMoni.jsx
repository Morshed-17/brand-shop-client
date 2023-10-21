import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {AiOutlineStar,AiFillStar} from "react-icons/ai"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Rating from "react-rating";

const TestiMoni = () => {
  return (
    <div>
      <h2 className="text-3xl text-center mb-6 font-bold">
        What Our Users say
      </h2>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <>
            {/* Testimonials */}
            <div className="relative overflow-hidden border rounded-md shadow-md">
              <div className="max-w-[85rem] px-4   sm:px-6 py-6 mx-auto">
                {/* Gradients */}
                <div aria-hidden="true" className="flex absolute left-0 -z-[1]">
                  <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] " />
                </div>
                {/* End Gradients */}
                {/* Grid */}
                <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
                  <div className="hidden lg:block lg:col-span-2">
                    <img
                      className="rounded-xl h-[300px] w-full object-cover"
                      src="https://images.unsplash.com/photo-1512484776495-a09d92e87c3b?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Col */}
                  <div className="lg:col-span-4">
                    {/* Blockquote */}
                    <blockquote>
                      <div className="text-2xl md:text-2xl text-orange-400 mt-4">
                        <Rating
                          emptySymbol={<AiOutlineStar />}
                          fullSymbol={<AiFillStar />}
                          initialRating={5}
                          readonly
                        />
                      </div>
                      <p className="text-xl font-medium  lg:text-2xl lg:leading-normal ">
                       "I recently visited PhoneBazar, and I must say, it was a truly remarkable experience. The staff there are incredibly knowledgeable and helped me find the perfect smartphone to fit my needs
                      </p>
                      <footer className="mt-6">
                        <div className="flex items-center">
                          <div className="lg:hidden flex-shrink-0">
                            <img
                              className="h-12 w-12 rounded-full"
                              src="https://images.unsplash.com/photo-1509112552557-8eb3dab85cfc?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Image Description"
                            />
                          </div>
                          <div className="ml-4 lg:ml-0">
                            <p className="font-medium  ">Nicole Grazioso</p>
                            <p className="text-sm  ">Head of Finance</p>
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                    {/* End Blockquote */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Grid */}
              </div>
            </div>
            {/* End Testimonials */}
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            {/* Testimonials */}
            <div className="relative overflow-hidden border rounded-md shadow-md">
              <div className="max-w-[85rem] px-4   sm:px-6 py-6 mx-auto">
                {/* Gradients */}
                <div aria-hidden="true" className="flex absolute left-0 -z-[1]">
                  <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] " />
                </div>
                {/* End Gradients */}
                {/* Grid */}
                <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
                  <div className="hidden lg:block lg:col-span-2">
                    <img
                      className="rounded-xl h-[300px] w-full object-cover"
                      src="https://images.unsplash.com/photo-1509112552557-8eb3dab85cfc?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Col */}
                  <div className="lg:col-span-4">
                    {/* Blockquote */}
                    <blockquote>
                      <div className="text-2xl md:text-2xl text-orange-400 mt-4">
                        <Rating
                          emptySymbol={<AiOutlineStar />}
                          fullSymbol={<AiFillStar />}
                          initialRating={5}
                          readonly
                        />
                      </div>
                      <p className="text-xl font-medium  lg:text-2xl lg:leading-normal ">
                       "I recently visited PhoneBazar, and I must say, it was a truly remarkable experience. The staff there are incredibly knowledgeable and helped me find the perfect smartphone to fit my needs."
                      </p>
                      <footer className="mt-6">
                        <div className="flex items-center">
                          <div className="lg:hidden flex-shrink-0">
                            <img
                              className="h-12 w-12 rounded-full"
                              src="https://images.unsplash.com/photo-1509112552557-8eb3dab85cfc?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Image Description"
                            />
                          </div>
                          <div className="ml-4 lg:ml-0">
                            <p className="font-medium  ">Nicole Grazioso</p>
                            <p className="text-sm  ">Head of Finance</p>
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                    {/* End Blockquote */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Grid */}
              </div>
            </div>
            {/* End Testimonials */}
          </>
        </SwiperSlide>
        <SwiperSlide>
          <>
            {/* Testimonials */}
            <div className="relative overflow-hidden border rounded-md shadow-md">
              <div className="max-w-[85rem] px-4   sm:px-6 py-6 mx-auto">
                {/* Gradients */}
                <div aria-hidden="true" className="flex absolute left-0 -z-[1]">
                  <div className="bg-purple-200 opacity-20 blur-3xl w-[1036px] h-[300px] " />
                </div>
                {/* End Gradients */}
                {/* Grid */}
                <div className="lg:grid lg:grid-cols-6 lg:gap-8 lg:items-center">
                  <div className="hidden lg:block lg:col-span-2">
                    <img
                      className="rounded-xl h-[300px] w-full object-cover"
                      src="https://images.unsplash.com/photo-1505938745478-da70984d411c?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Image Description"
                    />
                  </div>
                  {/* End Col */}
                  <div className="lg:col-span-4">
                    {/* Blockquote */}
                    <blockquote>
                      <div className="text-2xl md:text-2xl text-orange-400 mt-4">
                        <Rating
                          emptySymbol={<AiOutlineStar />}
                          fullSymbol={<AiFillStar />}
                          initialRating={5}
                          readonly
                        />
                      </div>
                      <p className="text-xl font-medium  lg:text-2xl lg:leading-normal ">
                       "I recently visited PhoneBazar, and I must say, it was a truly remarkable experience. The staff there are incredibly knowledgeable and helped me find the perfect smartphone to fit my needs
                      </p>
                      <footer className="mt-6">
                        <div className="flex items-center">
                          <div className="lg:hidden flex-shrink-0">
                            <img
                              className="h-12 w-12 rounded-full"
                              src="https://images.unsplash.com/photo-1509112552557-8eb3dab85cfc?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                              alt="Image Description"
                            />
                          </div>
                          <div className="ml-4 lg:ml-0">
                            <p className="font-medium  ">Nicole Grazioso</p>
                            <p className="text-sm  ">Head of Finance</p>
                          </div>
                        </div>
                      </footer>
                    </blockquote>
                    {/* End Blockquote */}
                  </div>
                  {/* End Col */}
                </div>
                {/* End Grid */}
              </div>
            </div>
            {/* End Testimonials */}
          </>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default TestiMoni;
