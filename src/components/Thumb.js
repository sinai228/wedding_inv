// import Fade from 'react-reveal/Fade';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, Zoom, Pagination } from 'swiper/modules';
// import SwiperClass from 'swiper/types/swiper-class';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';



export default function Thumb() {
  const [thumbs, setThumbs] = useState(null);

  // const images = [
  //   "https://swiperjs.com/demos/images/nature-10.jpg",
  //   "https://swiperjs.com/demos/images/nature-1.jpg",
  //   "https://swiperjs.com/demos/images/nature-2.jpg",
  //   "https://swiperjs.com/demos/images/nature-3.jpg",
  //   "https://swiperjs.com/demos/images/nature-4.jpg",
  //   "https://swiperjs.com/demos/images/nature-5.jpg",
  //   "https://swiperjs.com/demos/images/nature-6.jpg",
  // ];

  const images = require.context('../assets/image_slider', true);
  const imageList = images.keys().map(image => images(image));

  return (
    <div className="gallery" >
      {/* <p>we're getting married</p> */}
      {/* Main Swiper -> pass thumbs swiper instance */}

      <>


        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-navigation-size': 'small',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          loop={true}
          navigation={true}
          zoom={true}
          // pagination={true}
          // thumbs={{ swiper: thumbsSwiper }}
          thumbs={{ swiper: thumbs && !thumbs.destroyed ? thumbs : null }}
          modules={[Zoom, Navigation, Thumbs]}
          className="mySwiper2"
        >

          {imageList.map((src, idx) => <SwiperSlide key={idx}>
            <div className="swiper-zoom-container">
              <img src={src} alt={idx} />
            </div>
          </SwiperSlide>)}

        </Swiper>
        <Swiper
          // onSwiper={setThumbsSwiper}
          onSwiper={setThumbs}
          spaceBetween={6}
          slidesPerView={4}
          freeMode={true}
          modules={[Zoom, FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          <div className="padding-50">
            {imageList.map((src, idx) => <SwiperSlide key={idx} className="thumb"><img src={src} alt={idx} /></SwiperSlide>)}
          </div>
        </Swiper>
      </>


    </div >

  );
}

// export default App;
