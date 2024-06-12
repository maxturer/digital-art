import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

const Slides = ({ slideContent, slideSize }) => {
    return (
        <div className="pagecontent" id={slideSize}>
            <Swiper className="slide-container" navigation={true} modules={[Navigation]}>
                {slideContent.map((item, index) =>
                    <SwiperSlide key={index}>
                        <div className="single-slide" dangerouslySetInnerHTML={{__html: item}} />
                    </SwiperSlide>
                 )}
            </Swiper>
        </div>
    )
  };

  export default Slides;