export const metadata = {
  title: "Customers - RWMD",
  description: "Page description",
};

import Image from "next/image";
import Illustration from "@/public/images/page-illustration.svg";
import Particles from "@/components/particles";
import CustomersList from "./customers-list";

export default function Customers() {
  return (
    <>
      <section className="relative">
        {/* Radial gradient */}
        <div
          className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
          aria-hidden="true">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
          <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
        </div>

        {/* Particles animation */}
        <Particles className="absolute inset-0 h-96 -z-10" quantity={15} />

        {/* Illustration */}
        <div
          className="md:block absolute left-1/2 -translate-x-1/2 -mt-16 blur-2xl opacity-90 pointer-events-none -z-10"
          aria-hidden="true">
          <Image
            src={Illustration}
            className="max-w-none"
            width={1440}
            height={427}
            alt="Page Illustration"
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="pt-32 md:pt-40">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-20">
              <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
                学习中心
              </div>
              <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
                RWMD机构算法交易
              </h1>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-slate-400">
                  机构算法交易不同于以往的传统技术分析和技术指标分析，更多的注重于市场里流动性和订单匹配。深度解读每个时间段和每一根K线背后的含义，更加明确的入场及出场点位，了解市场运行的底层逻辑，提高交易盈亏比。
                </p>
                <br />
                <p className="text-lg text-slate-400">
                  这个市场里没有偶然，读懂每一根K线背后的含义才是优秀的交易员 ——
                  RWMD Z
                </p>
              </div>
            </div>

            <CustomersList />
          </div>
        </div>
      </section>
    </>
  );
}
