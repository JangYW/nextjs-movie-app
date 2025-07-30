/* /app/art01/page.tsx */

'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import { useParams } from 'next/navigation';

import 'swiper/css';
import 'swiper/css/pagination';
import '@/app/globals.css';


// Swiper 기능 활성화
export default function Art01Page() {
  useEffect(() => {
    new Swiper('.swiper_0', {
		modules: [Autoplay, Pagination], // ✅ 이 줄 추
      centeredSlides: true,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      grabCursor: false,
      pagination: {
        el: '.md448gwh0 .swiper-pagination',
        clickable: true,
      },
    });

    new Swiper('.swiper_1', {
		modules: [Autoplay, Pagination], // ✅ 이 줄 추가
      centeredSlides: true,
      spaceBetween: 30,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1,
      grabCursor: false,
      pagination: {
        el: '.md448gwh1 .swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
  <>
    <div id="mobile_ajax">
      <div style={{ overflow: 'hidden' }}>
        <video
          className="video_cont"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            WebkitMaskImage: '-webkit-radial-gradient(white, black)',
            WebkitBackfaceVisibility: 'hidden',
          }}
          src="https://image.thehyundai.com/hdmall/images/event/2025/0715_art/0715_jung_01.mp4"
          muted
          autoPlay
          playsInline
          loop
          poster="https://image.thehyundai.com/hdmall/images/event/video_icon.png"
        ></video>
        <img src="https://image.thehyundai.com/hdmall/images/event/2025/0715_art/0715_jung_01.jpg" alt="bg" />
      </div>

      <div>
        {/* Swiper 1 */}
        <div className="md448gwh0">
          <div className="swiper_0">
            <div className="swiper-wrapper">
              {['art01-1.png', 'art01-2.png', 'art01-3.png', 'art01-4.png'].map((src) => (
                <div className="swiper-slide" key={src}>
                  <img src={`https://image.thehyundai.com/hdmall/images/event/2025/0715_art/${src}`} alt={src} />
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

        {/* Swiper 2 */}
        <div className="md448gwh1">
          <div className="swiper_1">
            <div className="swiper-wrapper">
              {['art02-1.png', 'art02-2.png', 'art02-3.png', 'art02-4.png'].map((src) => (
                <div className="swiper-slide" key={src}>
                  <img src={`https://image.thehyundai.com/hdmall/images/event/2025/0715_art/${src}`} alt={src} />
                </div>
              ))}
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>

        <img src="https://image.thehyundai.com/hdmall/images/event/2025/0715_art/0715_jung_02.jpg" alt="footer" />
      </div>
    </div>

<style jsx global>{`
    #mobile_ajax {
      position: relative;
      width: 720px;
      margin: 0 auto;
      text-align: center;
	  overflow:hidden;
    }
    #mobile_ajax a {
      position: absolute;
      display: block;
      z-index: 10;
      text-indent: -9999px;
      overflow: hidden;
    }
    #mobile_ajax > div {
      position: relative;
    }
    #mobile_ajax > div img {
      display: block;
      width: 100%;
    }

	.swiper_0,
	.swiper_1 {
		width: 100%;
	/* height 생략 → 가변 */
	}

	.swiper-wrapper {
	display: flex;
	}

	.swiper-slide {
	flex-shrink: 0;
	width: 100%;
	height: auto; /* 중요: 가변 높이 */
	display: flex;
	justify-content: center;
	align-items: center;
	}

	.swiper-slide img {
	width: 100%;
	height: auto; /* 이미지 비율 유지 */
	display: block;
	}
	
    #mobile_ajax .md448gwh0 {
      position: absolute;
      top: 40.14%;
      left: 12.92%;
      width: 74.17%;
      z-index: 10;
    }
    #mobile_ajax .md448gwh1 {
      position: absolute;
      top: 86.45%;
      left: 12.92%;
      width: 74.17%;
      z-index: 10;
    }
    #mobile_ajax .md448gwh0 .swiper-pagination,
    #mobile_ajax .md448gwh1 .swiper-pagination {
      bottom: -6%;
      width: 100%;
      z-index: 15;
    }
    #mobile_ajax .swiper-pagination-bullet {
      width: 2.7%;
      padding-bottom: 2.7%;
      height: 100%;
      background: #000000;
      margin: 0 1.1%;
      opacity: 1;
      border-radius: 100%;
      transition: 0.2s;
    }
    #mobile_ajax .swiper-pagination-bullet-active {
      background: #faffff;
      opacity: 1;
    }
  `}</style>
</>  
  );

}
