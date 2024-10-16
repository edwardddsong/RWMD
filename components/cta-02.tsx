import Particles from "./particles";
import Image from "next/image";
import Logo from "@/public/images/DLSM_Logo.png";

export default function Cta02() {
  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={6}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative px-8 py-12 md:py-20 border-t border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1]">
          {/* Blurred shape */}
          <div
            className="absolute top-0 -mt-24 left-1/2 -translate-x-1/2 ml-24 blur-2xl opacity-70 pointer-events-none -z-10"
            aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
              <defs>
                <linearGradient
                  id="bs4-a"
                  x1="19.609%"
                  x2="50%"
                  y1="14.544%"
                  y2="100%">
                  <stop offset="0%" stopColor="#A855F7"></stop>
                  <stop
                    offset="100%"
                    stopColor="#6366F1"
                    stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path
                fill="url(#bs4-a)"
                fillRule="evenodd"
                d="m0 0 461 369-284 58z"
                transform="matrix(1 0 0 -1 0 427)"></path>
            </svg>
          </div>
          {/* Content */}
          <div className="max-w-3xl mx-auto text-center">
            <div>
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                RWMD合作伙伴
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                className="relative"
                src={Logo}
                width={400}
                height={400}
                alt="RWMD"
              />
            </div>
            {/* <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              DLS Markets
            </h2> */}
            <p className="text-lg text-slate-400 mb-8 mt-6 ">
              DLS Markets提供多元化的投资产品， 使用前沿科技，
              为想要探索全球市场的投资者量身打造一个便捷又高效的平台。
              <br />
              通过融合创新的奖励体系，
              DLSM将颠覆投资者交易和投资的方式，为您带来一场新颖独特的交易体验。{" "}
              <br />
              -澳大利亚ASIC监管
              <br />- 尖端科技交易平台 <br />- 安全便捷的资金管理 <br />-
              极具优势的点差 <br />- 专业的教育资源 <br />- 全球市场触手可及{" "}
              <br />- 24小时客服支持
            </p>
            <div>
              <a
                className="btn text-slate-900 bg-gradient-to-r from-white/80 via-white to-white/80 hover:bg-white transition duration-150 ease-in-out group"
                href="https://portal.dlsm-portal.com/register?sales=QTAwMV9KYWNrc29uWmhhbw==&language=zh-Hans">
                即刻开始{" "}
                <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                  -&gt;
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
