'use client';

import { useEffect } from 'react';
import Swiper from 'swiper';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '@/app/globals.css'; // 필요 시 삭제 가능


export default function Art02Page() {
  useEffect(() => {
    new Swiper('.swiper_0', {
      modules: [Autoplay],
      centeredSlides: true,
      spaceBetween: -1,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1.232,
      grabCursor: false,
    });

    new Swiper('.swiper_1', {
      modules: [Autoplay, Pagination],
      centeredSlides: true,
      spaceBetween: -1,
      loop: true,
      speed: 1000,
      autoplay: {
        delay: 3000,
      },
      slidesPerView: 1.232,
      grabCursor: false,
      pagination: {
        el: '.mcmqgl451 .swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      <div id="mobile_ajax">
        <div>
          <img src="https://image.thehyundai.com/hdmall/images/event/2025/0703_kinki/0703_hsy_01.jpg" alt="header" />
        </div>

        <div>
          <div className="mcmqgl450">
            <div className="swiper_0">
              <div className="swiper-wrapper">
                {['swipe 1-1.png', 'swipe 1-2.png', 'swipe 1-3.png', 'swipe 1-4.png'].map((src) => (
                  <div className="swiper-slide" key={src}>
                    <img
                      src={`https://image.thehyundai.com/hdmall/images/event/2025/0703_kinki/${src}`}
                      alt={src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mcmqgl451">
            <div className="swiper_1">
              <div className="swiper-wrapper">
                {['swipe 2-1.png', 'swipe 2-2.png', 'swipe 2-3.png', 'swipe 2-4.png'].map((src) => (
                  <div className="swiper-slide" key={src}>
                    <img
                      src={`https://image.thehyundai.com/hdmall/images/event/2025/0703_kinki/${src}`}
                      alt={src}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="swiper-pagination"></div>
          </div>

          <img src="https://image.thehyundai.com/hdmall/images/event/2025/0703_kinki/0703_hsy_02.jpg" alt="footer" />
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
        #mobile_ajax .mcmqgl450 {
          position: absolute;
          top: 22.69%;
          left: 0.00%;
          width: 100.00%;
          z-index: 10;
        }
        #mobile_ajax .mcmqgl451 {
          position: absolute;
          top: 50.80%;
          left: 0.00%;
          width: 100.00%;
          z-index: 10;
        }
        #mobile_ajax .mcmqgl451 .swiper-pagination {
          bottom: -7%;
          width: 100%;
          z-index: 15;
        }
        #mobile_ajax .mcmqgl451 .swiper-pagination-bullet {
          width: 1.6%;
          padding-bottom: 1.6%;
          height: 100%;
          background: #8d745e;
          margin: 0 0.4%;
          opacity: 1;
          border-radius: 100%;
          transition: 0.2s;
        }
        #mobile_ajax .mcmqgl451 .swiper-pagination-bullet-active {
          background: #fefffd;
          opacity: 1;
        }
        .swiper-slide img {
          width: 100%;
          display: block;
          height: auto;
        }
      `}</style>
    </>
  );
}