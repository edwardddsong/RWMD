"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

import CarouselImg01 from "@/public/images/bbls.png";
import CarouselImg02 from "@/public/images/fwdxc.png";
import CarouselImg03 from "@/public/images/sam.png";
import CarouselImg04 from "@/public/images/shian1.png";
import CarouselImg05 from "@/public/images/oz.png";

// Import Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/swiper.min.css";
Swiper.use([Navigation]);

export default function TestimonialsCarousel() {
  const [swiperInitialized, setSwiperInitialized] = useState<boolean>(false);

  useEffect(() => {
    const carousel = new Swiper(".stellar-carousel", {
      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
      },
      grabCursor: true,
      loop: false,
      centeredSlides: false,
      initialSlide: 0,
      spaceBetween: 24,
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
    setSwiperInitialized(true);
  }, []);

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                {" "}
                RWMD TRADING
              </div>
            </div>
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              学员反馈
            </h2>
            <p className="text-lg text-slate-400">
              倾听来自RWMD学员的声音，一位优秀的导师和一套好的教程是如何帮助他们在市场里一步步迈向成功。
            </p>
          </div>

          {/* Carousel built with Swiper.js [https://swiperjs.com/] */}
          {/* * Custom styles in src/css/additional-styles/theme.scss */}
          <div className="relative before:absolute before:inset-0 before:-translate-x-full before:z-20 before:bg-gradient-to-l before:from-transparent before:to-slate-900 before:to-20% after:absolute after:inset-0 after:translate-x-full after:z-20 after:bg-gradient-to-r after:from-transparent after:to-slate-900 after:to-20%">
            <div className="stellar-carousel swiper-container group">
              <Highlighter
                className="swiper-wrapper w-fit"
                refresh={swiperInitialized}>
                {/* Carousel items */}
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg01}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">巴巴罗萨</div>
                        <div className="text-slate-400 mb-3">
                          在交易技术和心态上，Z总都非常乐于分享，耐心解答问题；SMC作为交易系统有明确的关注点位，从而做单有所指引，并且可以进一步理解价格行为
                        </div>
                      </div>
                      {/* <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0">
                          Learn More{" "}
                          <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg02}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">飞舞的小草</div>
                        <div className="text-slate-400 mb-3">
                          从直播和平时群内的互动中就能深刻体会到赵老师的专业和严谨。无论是短线还是中长线，都可以精准拿捏进出场点位，更重要的是教会了学员如何正确理解这个市场，以及如何在完善风控的同时合理止盈，让大家在这个不确定的市场中尽可能占据主动。总结一句话你是我见过的最靠谱的职业交易员，没有之一。
                        </div>
                      </div>
                      {/* <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0">
                          Learn More{" "}
                          <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg03}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Sam</div>
                        <div className="text-slate-400 mb-3">
                          跟Z總學完SMC真的改變了我對市場的看法，操作邏輯清晰，簡單易懂，感覺每一步都有依據，再也不盲目操作了。策略雖然有效，但裡面主觀判斷挺多的，所以老師的指導特別關鍵，能幫助你規避很多誤區，感覺Z總在這方面還是很清晰的。
                        </div>
                      </div>
                      {/* <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0">
                          Learn More{" "}
                          <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg04}
                        width={56}
                        height={56}
                        alt="Icon 01"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Shian</div>
                        <div className="text-slate-400 mb-3">
                          在z总教导的SMC策略中，身为初学者的我学到了很多，也得到了极大的帮助。z总专业精神和热情使我在交易成长之路更加顺利。感谢z总对我的帮助。谢谢
                        </div>
                      </div>
                      {/* <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0">
                          Learn More{" "}
                          <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>
                <HighlighterItem className="swiper-slide h-auto group/slide">
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    {/* Particles animation */}
                    <Particles
                      className="absolute inset-0 -z-10 opacity-0 group-[.swiper-slide-active]/slide:opacity-100 group-hover/slide:opacity-100 transition-opacity duration-500 ease-in-out"
                      quantity={3}
                      refresh={swiperInitialized}
                    />
                    {/* Radial gradient */}
                    <div
                      className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/3 aspect-square"
                      aria-hidden="true">
                      <div className="absolute inset-0 translate-z-0 rounded-full bg-slate-800 group-[.swiper-slide-active]/slide:bg-purple-500 transition-colors duration-500 ease-in-out blur-[60px]" />
                    </div>
                    <div className="flex flex-col p-6 h-full">
                      <Image
                        className="mb-3"
                        src={CarouselImg05}
                        width={56}
                        height={56}
                        alt="Icon 05"
                      />
                      <div className="grow">
                        <div className="font-bold text-lg mb-1">Oswarld</div>
                        <div className="text-slate-400 mb-3">
                          感謝Ed老师開了這一個课程，我三年前開始學習交易有付費的有免費的，結果都是輸多贏少，他們的群組也不活躍一天只有數個留言還要是沒養分的，只能夠自己瞎子摸象自己看書似懂非懂的，但這裡的大佬都很熱心樂於分享讓我發現很多以前沒有聽過的知识
                        </div>
                      </div>
                      {/* <div className="text-right">
                        <a
                          className="text-sm font-medium text-slate-300 hover:text-white inline-flex items-center transition duration-150 ease-in-out group"
                          href="#0">
                          Learn More{" "}
                          <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                            -&gt;
                          </span>
                        </a>
                      </div> */}
                    </div>
                  </div>
                </HighlighterItem>
              </Highlighter>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex mt-8 justify-end">
            <button className="carousel-prev relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Previous</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7 14.7l1.4-1.4L3.8 9H16V7H3.8l4.3-4.3-1.4-1.4L0 8z" />
              </svg>
            </button>
            <button className="carousel-next relative z-20 w-12 h-12 flex items-center justify-center group">
              <span className="sr-only">Next</span>
              <svg
                className="w-4 h-4 fill-slate-500 group-hover:fill-purple-500 transition duration-150 ease-in-out"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M9.3 14.7l-1.4-1.4L12.2 9H0V7h12.2L7.9 2.7l1.4-1.4L16 8z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
