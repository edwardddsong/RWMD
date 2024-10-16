export const metadata = {
  title: "关于 - RWMD",
  description: "Page description",
};

import Image from "next/image";

import Illustration from "@/public/images/page-illustration.svg";
import Hero from "@/components/hero-about";
import Story from "@/components/story";
import Team from "@/components/team";
import Recruitment from "@/components/recruitment";
import Testimonials from "@/components/testimonials-02";
import Cta from "@/components/cta-02";
import Particles from "@/components/particles";

export default function About() {
  return (
    <>
      <div
        className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-[800px] aspect-square"
        aria-hidden="true">
        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-30"></div>
        <div className="absolute w-64 h-64 translate-z-0 bg-purple-400 rounded-full blur-[80px] opacity-70"></div>
      </div>

      {/* Particles animation */}
      <Particles className="absolute inset-0 h-96 -z-10" quantity={10} />

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
      {/* <div className="pt-32 pb-10 md:pt-40">
        <div className="text-center">
          <div className="inline-flex font-medium bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 pb-3">
            RWMD机构算法交易{" "}
          </div>
          <h1 className="h1 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-6">
            联系我们
          </h1>
        </div>
      </div> */}
      {/* <Hero />  */}
      {/* <Story />
      <Team /> */}
      <div className="pt-32 pb-10 md:pt-10"></div>
      <Recruitment />
      <Testimonials />
      <Cta />
    </>
  );
}
