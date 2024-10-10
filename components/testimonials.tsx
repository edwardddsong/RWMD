"use client";

import { useState, useRef, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Transition } from "@headlessui/react";
import Particles from "./particles";

import TestimonialImg01 from "@/public/images/team-01.png";
import TestimonialImg02 from "@/public/images/team-05.png";
import TestimonialImg03 from "@/public/images/team-06.png";

interface Item {
  img: StaticImageData;
  quote: string;
  name: string;
  role: string;
}

export default function Testimonials() {
  const [active, setActive] = useState<number>(0);
  const [autorotate, setAutorotate] = useState<boolean>(true);
  const [autorotateTiming] = useState<number>(7000);

  const items: Item[] = [
    {
      img: TestimonialImg01,
      quote:
        "作为一名活跃的交易员，我发现教学能够帮助我精进自己的方法。通过解释，我不断学习；通过教学，我不断提升。 此外，这段旅程让我结识了许多杰出的人士，创造了许多原本无法获得的机会。加入我们的团队，你也能接触到这些宝贵的资源。话虽如此，我的成功或我学生的成功并不能保证你的成功。你的结果取决于你个人的努力。",
      name: "RWMD | Z",
      role: "创始人",
    },
    {
      img: TestimonialImg02,
      quote:
        "在长期的交易生涯中，我意识到交流与教学不仅是分享经验的过程，更是自我成长的契机。每一次帮助他人理解市场，我也在不断巩固和深化自己的认知。这一过程中，我有幸与许多业内精英建立了联系，并获得了诸多意想不到的合作机会。通过加入我们，你将能够利用这些资源来拓展自己的交易视野。当然，成功最终掌握在你自己手中，只有通过持续的学习和努力，才能真正实现自己的目标。",
      name: "RWMD | ED",
      role: "持牌金融分析师",
    },
    {
      img: TestimonialImg03,
      quote:
        "外汇行业充满了机遇和挑战，尤其在全球经济日益紧密联系的今天。通过与客户建立信任和理解，了解他们的需求和心理，可以帮助我们提供更精准的服务。我对外汇市场的前景非常乐观，坚信随着市场的发展，我们能够不断优化策略，为客户创造更大的价值。",
      name: "RWMD | SW",
      role: "客户支持中心",
    },
  ];

  const testimonials = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!autorotate) return;
    const interval = setInterval(() => {
      setActive(active + 1 === items.length ? 0 : (active) => active + 1);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, [active, autorotate]);

  const heightFix = () => {
    if (testimonials.current && testimonials.current.parentElement)
      testimonials.current.parentElement.style.height = `${testimonials.current.clientHeight}px`;
  };

  useEffect(() => {
    heightFix();
  }, []);

  return (
    <section>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="relative pb-12 md:pb-20">
          {/* Particles animation */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-6">
            <Particles
              className="absolute inset-0 -z-10"
              quantity={10}
              staticity={40}
            />
          </div>

          {/* Carousel */}
          <div className="text-center">
            {/* Testimonial image */}
            <div className="relative h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_40%,theme(colors.white))]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] -z-10 pointer-events-none before:rounded-full rounded-full before:absolute before:inset-0 before:bg-gradient-to-b before:from-slate-400/20 before:to-transparent before:to-20% after:rounded-full after:absolute after:inset-0 after:bg-slate-900 after:m-px before:-z-20 after:-z-20">
                {items.map((item, index) => (
                  <Transition
                    key={index}
                    as="div"
                    show={active === index}
                    className="absolute inset-0 h-full -z-10"
                    enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                    enterFrom="opacity-0 -rotate-[60deg]"
                    enterTo="opacity-100 rotate-0"
                    leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                    leaveFrom="opacity-100 rotate-0"
                    leaveTo="opacity-0 rotate-[60deg]"
                    beforeEnter={() => heightFix()}>
                    <Image
                      className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                      src={item.img}
                      width={56}
                      height={56}
                      alt={item.name}
                    />
                  </Transition>
                ))}
              </div>
            </div>
            {/* Text */}
            <div className="mb-10 transition-all duration-150 delay-300 ease-in-out">
              <div className="relative flex flex-col" ref={testimonials}>
                {items.map((item, index) => (
                  <Transition
                    key={index}
                    show={active === index}
                    enter="transition ease-in-out duration-500 delay-200 order-first"
                    enterFrom="opacity-0 -translate-x-4"
                    enterTo="opacity-100 translate-x-0"
                    leave="transition ease-out duration-300 delay-300 absolute"
                    leaveFrom="opacity-100 translate-x-0"
                    leaveTo="opacity-0 translate-x-4"
                    beforeEnter={() => heightFix()}>
                    <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
                      {item.quote}
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5">
              {items.map((item, index) => (
                <button
                  className={`btn-sm m-1.5 text-xs py-1.5 text-slate-300 transition duration-150 ease-in-out [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none ${
                    active === index
                      ? "opacity-100"
                      : "opacity-30 hover:opacity-60"
                  }`}
                  key={index}
                  onClick={() => {
                    setActive(index);
                    setAutorotate(false);
                  }}>
                  <span className="relative">
                    <span className="text-slate-50">{item.name}</span>{" "}
                    <span className="text-slate-600">-</span>{" "}
                    <span>{item.role}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
