import Link from "next/link";
import Image from "next/image";
import Star from "@/public/images/star.svg";
import IntegrationsImg01 from "@/public/images/integrations-01.svg";
import IntegrationsImg02 from "@/public/images/integrations-02.svg";
import IntegrationsImg03 from "@/public/images/integrations-03.svg";
import IntegrationsImg04 from "@/public/images/integrations-04.svg";
import IntegrationsImg05 from "@/public/images/integrations-05.svg";
import IntegrationsImg06 from "@/public/images/integrations-06.svg";
import IntegrationsImg07 from "@/public/images/integrations-07.svg";
import IntegrationsImg08 from "@/public/images/integrations-08.svg";
import IntegrationsImg09 from "@/public/images/integrations-09.svg";
import IntegrationsImg10 from "@/public/images/integrations-10.svg";
import IntegrationsImg11 from "@/public/images/integrations-11.svg";
import IntegrationsImg12 from "@/public/images/integrations-12.svg";
import IntegrationsImg13 from "@/public/images/integrations-13.svg";
import IntegrationsImg14 from "@/public/images/integrations-14.svg";
import IntegrationsImg15 from "@/public/images/integrations-15.svg";
import IntegrationsImg16 from "@/public/images/integrations-16.svg";
import IntegrationsImg17 from "@/public/images/integrations-17.svg";
import IntegrationsImg18 from "@/public/images/integrations-18.svg";
import IntegrationsImg19 from "@/public/images/integrations-19.svg";
import IntegrationsImg20 from "@/public/images/integrations-20.svg";
import IntegrationsImg21 from "@/public/images/integrations-21.svg";
import IntegrationsImg22 from "@/public/images/integrations-22.svg";
import IntegrationsImg23 from "@/public/images/integrations-23.svg";
import IntegrationsImg24 from "@/public/images/integrations-24.svg";

export default function IntegrationsList() {
  const items = [
    {
      img: IntegrationsImg06,
      name: "学习社区",
      description:
        "加入一个充满热情的胜利者社区，与志同道合的交易者共同成长。在一支稳定交易团队的指导下，通过实时分析、独家教学以及经验分享，位您在市场里遨游保驾护航。慢慢积累经验，掌握交易的精髓。",
      link: "/",
      featured: true,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg07,
      name: "交易直播间",
      description:
        "通过访问我们的独家实时直播间，像专业人士一样进行交易。与我们一同感受机构算法交易的魅力，一同盈利。",
      link: "/",
      featured: false,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg04,
      name: "RWMD课程",
      description:
        "从小组课程到私人一对一指导，与行业专家一起深入探索金融市场，提升综合分析的技能！",
      link: "/",
      featured: true,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg08,
      name: "免费学习资料",
      description:
        "从市场趋势到交易策略，获取真正有价值的市场信息。不定期免费讲座和直播，剖析价格传递背后的细节，揭示市场机会。",
      link: "/",
      featured: true,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg05,
      name: "RWMD周日定期会员直播",
      description:
        "每周日北京时间 20:30为您带来上周交易拆解，盘面详解以及下周盘面预期和答疑",
      link: "/",
      featured: true,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg01,
      name: "RWMD周日不定期公开直播",
      description:
        "给客户充足的体验，在您加入之前让您了解我们的课程以及服务是高价值高质量的。",
      link: "/",
      featured: true,
      category: "加入RWMD TRADING",
    },
    // {
    //   img: IntegrationsImg02,
    //   name: "Zapier",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/",
    //   featured: true,
    //   category: "No-code",
    // },
    // {
    //   img: IntegrationsImg03,
    //   name: "Airtable",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "No-code",
    // },
    // {
    //   img: IntegrationsImg09,
    //   name: "Framer",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "No-code",
    // },
    // {
    //   img: IntegrationsImg10,
    //   name: "Jotform",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: false,
    //   category: "No-code",
    // },
    // {
    //   img: IntegrationsImg11,
    //   name: "Webflow",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "No-code",
    // },
    // {
    //   img: IntegrationsImg12,
    //   name: "Coda",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: false,
    //   category: "No-code",
    // },
    // {
    //   img: IntegrationsImg13,
    //   name: "Asana",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Collaboration",
    // },
    // {
    //   img: IntegrationsImg14,
    //   name: "Myngo",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Collaboration",
    // },
    // {
    //   img: IntegrationsImg15,
    //   name: "Bonsai",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Collaboration",
    // },
    // {
    //   img: IntegrationsImg16,
    //   name: "Decipad",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Collaboration",
    // },
    // {
    //   img: IntegrationsImg17,
    //   name: "Miro",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Collaboration",
    // },
    // {
    //   img: IntegrationsImg18,
    //   name: "Popform",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Collaboration",
    // },
    // {
    //   img: IntegrationsImg19,
    //   name: "Linear",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Productivity",
    // },
    // {
    //   img: IntegrationsImg20,
    //   name: "Microsoft",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Productivity",
    // },
    // {
    //   img: IntegrationsImg21,
    //   name: "Google Drive",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Productivity",
    // },
    // {
    //   img: IntegrationsImg22,
    //   name: "InVision",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Productivity",
    // },
    // {
    //   img: IntegrationsImg23,
    //   name: "WeTransfer",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: false,
    //   category: "Productivity",
    // },
    // {
    //   img: IntegrationsImg24,
    //   name: "Hotjar",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
    //   featured: true,
    //   category: "Productivity",
    // },
  ];

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pb-12 md:pb-20">
          {/* Tobpabr */}
          <div className="flex justify-between items-center py-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1] space-x-8  no-scrollbar">
            {/* Links */}
            <ul className="flex flex-wrap text-sm font-medium space-x-8 ">
              {/* <li>
                <a
                  className="mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#engineering">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="m7.7 7.3-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L5.6 8l-4.3 4.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4ZM8 12h7v2H8z" />
                  </svg>
                  <span>RWMD服务</span>
                </a>
              </li> */}
              <li>
                <a
                  className="mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#nocode">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>全职交易14年的感悟</span>
                </a>
              </li>
              <li>
                <a
                  className="mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#collaboration">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>交易中的执行力与等待的重要性</span>
                </a>
              </li>
              <li>
                <a
                  className="mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#productivity">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>交易员的“自省”到“自治”</span>
                </a>
              </li>
              <li>
                <a
                  className="mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#share-4">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>交易员的资金管理</span>
                </a>
              </li>
              <li>
                <a
                  className="mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#share-5">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>交易心理优势，拒绝心态内耗</span>
                </a>
              </li>
              <li>
                <a
                  className="mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#share-6">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>计划你的交易，交易你的计划</span>
                </a>
              </li>
              <li>
                <a
                  className="mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#share-7">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>短线（超短线）交易等于频繁交易吗？</span>
                </a>
              </li>
              <li>
                <a
                  className=" mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#share-8">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>交易计划三部曲</span>
                </a>
              </li>
              <li>
                <a
                  className=" mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#share-9">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>交易系统构建之交易风格</span>
                </a>
              </li>
              <li>
                <a
                  className=" mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#share-10">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>成熟交易员与初级交易员的区别</span>
                </a>
              </li>
              <li>
                <a
                  className=" mt-3 flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#share-11">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>成熟交易员与初级交易员的区别</span>
                </a>
              </li>
            </ul>
            <div>
              <form className="relative flex items-center">
                <input
                  className="form-input pl-10 bg-transparent rounded-none focus:border-transparent focus:border-b-slate-700 lg:w-9 lg:focus:w-[200px] transition-[width]"
                  type="text"
                  id="search"
                  aria-label="Search…"
                  placeholder="Search…"
                  autoComplete="off"
                />
                {/* <div className="absolute inset-0 w-9 flex items-center justify-center pointer-events-none">
                  <svg
                    className="absolute fill-slate-50 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z" />
                  </svg>
                </div> */}
              </form>
            </div>
          </div>

          {/* Cards */}
          <div>
            {/* Section #1 */}
            <div className="mt-12 md:mt-16">
              <h3
                id="engineering"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                RWMD服务
              </h3>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(
                  (item, index) =>
                    item.category === "加入RWMD TRADING" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )}
              </div>
            </div>
            {/* Section #2 */}
            <div className="mt-12 md:mt-16">
              <h3
                id="nocode"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（一）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "No-code" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">全职交易14年的感悟</strong>
                  <br />
                  <br />
                  随着全职交易经历进入第14个年头，身边不少朋友对这条路充满了好奇和向往，也希望从我这里获得一些建议。因此，我特意抽出一个下午，将这些心得整理出来，分享给大家。希望对正在考虑走上全职交易路的朋友们有所帮助。
                  <br />
                  <br />
                  1.
                  没有足够积蓄，不建议踏上全职交易的路。全职交易并不能一夜暴富，更多的是一个积累与沉淀的过程。在你决定全职交易之前，至少要确保有足够的资金支持你两年以上的生活开支。交易不该成为你的负担，否则压力会影响你的心态，导致决策失误，影响长期发展。
                  <br />
                  <br />
                  2.
                  全职交易不是一项传统意义上的事业。很多人将交易误认为是一份可以高大上的职业。交易更像是一场与市场的对话，专注于自我成长和进步。
                  <br />
                  <br />
                  3.
                  没有系统的交易策略，切勿轻易全职。如果你没有形成自己的一套成熟交易系统，或者没有经过严格的历史数据测试证明其长期盈利的能力，那么全职暂时还不适合你。
                  <br />
                  <br />
                  4.
                  情绪管理和良好的心态是交易成功的基础。市场充满不确定性，交易中的波动和亏损不可避免。因此，良好的情绪管理能力和心态是每一个交易者的必修课。在高压和情绪波动中保持冷静，才能在关键时刻做出理性决策。
                  <br />
                  <br />
                  交易中的大部分时间都在等待中度过。等待市场的变化、等待适合的入场机会——这个过程往往是枯燥无聊的，同时也伴随着无助与焦虑。
                  但对于一个成功的交易者来说，等待是交易不可或缺的一部分。当机会出现时，我们需要不犹豫、不拖延地做出决策进入市场。
                  <br />
                  <br />
                  这不仅考验一个交易者的判断力，也考验其执行力。市场充满不确定性，只有保持高度的专注与冷静，才能在瞬息万变中找到属于自己的机会。
                  虽然外界看交易员的生活光鲜亮丽，但对我们这些"老鸟"而言，交易的快乐并不在于交易本身，而在于每天交易后对自己的反思与总结。闲暇时，我更愿意陪伴家人、朋友，或者去钓鱼、打球，放松身心。随着时间推移，交易会像呼吸一样，变得平常与平静。
                  如果你已经做好了充分的准备，并且在激情消退后仍然对交易充满热爱，那么我们可以一起走下去。加油，祝成功。
                </p>
                <p className="text-right">—— RWMD Z</p>
              </div>
            </div>
            {/* Section #3 */}
            <div className="mt-12 md:mt-16">
              <h3
                id="collaboration"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（二）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">
                    交易中的执行力与等待的重要性
                  </strong>
                  <br />
                  <br />
                  大家好，今天我想和大家分享一下，在职业交易中“执行力”和“等待”对成功的重要性。在我的职业生涯中，这两点的认知和执行力的提升为我带来了巨大的利润。
                  执行力的重要性
                  <br />
                  <br />
                  废话不多说，直接进入主题。大家有没有发现，大约90%的交易问题其实都出在执行层面？如果你的执行力不到位，不管学习了多少交易技术，拥有多么优秀的分析能力，都很难在实际交易中取得理想的效果。所以，今天我们就来讨论如何提升交易中的执行力。
                  当交易员已经建立了一套适合自己的交易系统，并具备一定的技术分析和操作能力时，执行力的高低往往决定了最终的交易成果。有执行力的交易员会在合适的时机果断入场，绝不拖泥带水。他们清楚自己的止损和止盈位，并严格执行。这样的交易行为使得他们的利润空间通常优于一般交易者。
                  当市场走势与预期相反时，职业交易员也会迅速做出反应，利用最小的止损退出市场，而不会不断调整止损扩大损失。执行力强的交易员懂得遵循交易系统，而不是因为情绪或短期波动而改变既定策略。
                  等待的重要性
                  <br />
                  <br />
                  “赚钱不在于买卖，而在于耐心等待”这句话道出了交易中的一个核心原则：等待比交易本身更为重要。频繁交易不仅会增加交易成本，还容易因冲动决策而导致亏损。耐心的等待能够避免仓促的交易行为，让交易者在最合适的时机入场，捕捉到更大的市场机会。
                  通过情绪控制，交易员能够保持冷静的头脑，避免被短期波动影响。等待是交易中不可或缺的一部分，尤其是在市场行情并不明朗时。成功的交易员不会急于求成，而是通过耐心等待、冷静分析来抓住真正有价值的机会。
                  <br />
                  <br />
                  最后，我想强调一点：我们都是普通人，都会有情绪和冲动的时刻。但如果大家想成为一名优秀的交易员，必须深刻理解执行力和等待的重要性。这不仅仅是技术上的要求，更是一种心理素质的锻炼。
                  让我们共同勉励，提升执行力，学会等待，为交易的长期成功奠定基础。
                </p>
                <p className="text-right">—— RWMD N</p>
              </div>
            </div>
            {/* Section #4 */}
            <div className="mt-12 md:mt-16">
              <h3
                id="productivity"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（三）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">
                    成熟交易员与初级交易员的区别
                  </strong>{" "}
                  <br />
                  <br />
                  我个人认为，那些仍需依赖常规工作的交易员，大多还处于初级阶段。这些交易员的交易系统尚未完全成熟，因此他们必须通过工作来维持生活。
                  <br />
                  <br />
                  而成熟交易员的标志之一，就是他们已建立了自己的稳健交易系统，积累了丰富的经验，不再依赖传统就业或外部资金的支持。凭借一笔适量的资本，他们通常能在三到四年内实现全职交易的转型。
                  <br />
                  <br />
                  对于真正成功的职业交易员来说，财富并非通过每笔交易的小幅获利逐步积累的，而是通过一两次关键交易实现的。这些交易往往能带来巨大的利润，甚至帮助交易员跨越重要的财务里程碑，比如达到第一个百万美元的目标或实现显著的财务自由。
                  <br />
                  <br />
                  杰西·利弗莫尔是一个典型的例子。尽管他曾面临破产的境地，但凭借一次贷款，在极为不利的情况下实现了一次惊人的交易回归，重新站稳了脚跟。这表明，成熟的交易员不仅能在机会到来时抓住它，更能在逆境中重振旗鼓，恢复往日的辉煌。
                  <br />
                  <br />
                  成功的职业交易员懂得最大化盈利，并同时将潜在损失控制在最低范围内。每次建仓前，风险回报比都需要仔细评估，且交易必须严格遵循自己设定的系统。成熟交易员在每次交易背后都投入了无数的复盘、总结和历史数据的回测。
                  <br />
                  <br />
                  尽管外界看到的职业交易员风光无限，但他们和普通人一样，背后也付出了大量的时间、精力和汗水。交易不仅是一项技术，更是一种修行，需要长期的专注与坚持。
                </p>
                <p className="text-right">—— RWMD ED</p>
              </div>
            </div>

            <div className="mt-12 md:mt-16">
              <h3
                id="share-4"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（四）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">交易员的周末</strong> <br />
                  <br />
                  大家好，最近很多朋友问我一个问题：你们这些成熟交易员，周末都做些什么？是不是特别潇洒？每周看到盈利总结时，会不会有强烈的消费欲望？
                  <br />
                  <br />
                  对此，我想负责任地告诉大家，我们的生活和其他工作群体没什么不同。周末，我们通常会做一些让身心放松的事情，比如钓鱼、朋友小聚、打球、健身等。我认为，交易员一定要有个人的兴趣爱好。因为周一到周五，我们都处于高强度的专注和紧张状态，周末就是调整自己、为下一周做好准备的关键时刻。
                  <br />
                  <br />
                  不过，除了放松之外，我周末的一个重要习惯就是**复盘**。我简单总结了两个复盘方式：{" "}
                  <br />
                  <br />
                  1. 数据复盘：
                  你需要把每周的交易数据统计下来，分析自己每天做了多少笔交易、持仓时间是多长、盈利持仓的时间和亏损持仓的时间分别是多少。这些数据非常重要，因为它可以反映你所有的交易行为。例如，对于日内短线交易者，如果盈利持仓时间短于亏损持仓时间，就说明亏损单持有太久了，这时数据告诉你需要改进，应该让盈利持仓时间大于亏损时间。数据还可以帮你分析盈亏比，是否可以通过优化进场和出场来提高盈亏比。
                  <br />
                  <br />
                  2. 录像复盘：
                  现在有很多软件可以帮助你录制和回顾交易。把一周的交易单都导入图表，无论是盈利单还是亏损单，都要反复问自己：为什么在这里开单？依据是什么？这个开单依据是否符合我的交易系统？这非常重要。即使有些盈利单并不符合交易系统，只是运气好，那也要警惕。不要让短暂的运气左右你的判断。不断总结、完善自己的交易系统，才能经受住市场的考验。随着系统的成熟，你也会更加自信——但切记，自信不是自傲，仍然要心存敬畏。
                  <br />
                  <br />
                  今天就分享到这里，祝大家度过一个愉快的周末！ <br />
                </p>
                <p className="text-right">—— RWMD Nan</p>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <h3
                id="share-5"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（五）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">交易员的“自省”到“自治”</strong>{" "}
                  <br />
                  <br />
                  从初级到职业交易员：自省到自治的进阶之路
                  <br />
                  <br />
                  今天，我想和大家分享一下，我在从初级交易员向职业交易员转变的过程中，对“自省”到“自治”的理解。
                  在职业生涯中，我时刻提醒自己要克制，避免盲目进入市场的冲动。在不断进阶的过程中，我给自己提出了“四自”的要求：自省、自知、自律和自治。
                  <br />
                  <br />
                  1. 自省与自知：认识自己是成功的起点 <br />
                  在每次交易之前，最重要的事情是自我审视和认识自己。首先，要明确自己是哪类人，要有清晰的自知之明。如果不了解自我，盲目进入市场，那无异于“送”。如何做到自知呢？关键在于认清自己的性格，这一点在交易中尤为重要。性格往往决定了你是适合做日内交易，还是趋势交易。例如，有些人天生喜欢迅速决策，适合短线操作；而有些人更有耐心，适合长期布局。
                  <br />
                  <br />
                  2. 自律：交易中的情绪与纪律
                  <br />
                  当你明确了自我认知，并构建了自己的交易系统后，下一步便是遵守和执行它，这就是自律。在交易中，亏损是不可避免的，而情绪化是导致亏损的主要原因之一。无论是短线操作还是中长线布局，当交易成功率低于预期时，很多人会情绪失控，随之而来的就是不断的亏损。真正的自律，就是在情绪波动时依然能够按既定策略行事，避免因短期波动而偏离长期目标。
                  <br />
                  <br />
                  3. 自治：知行合一
                  <br />
                  最后，自治可以理解为知行合一。市场瞬息万变，交易员个人也在不断成长。交易系统的构建与交易规则的执行都是在不断试错、修正、再试的循环过程中逐步完善的。这也是自省、自知、自律的反复过程。交易的常态是变化，在这个过程中，交易理念和交易系统必须保持一致。只有当个人的交易体系与规则紧密结合时，自治才真正具备可行性。{" "}
                  <br />
                  <br />
                </p>
                <p className="text-right">—— RWMD Z</p>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <h3
                id="share-6"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（六）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">交易员的资金管理</strong> <br />
                  <br />
                  资金管理：交易成功的助推器
                  <br />
                  <br />
                  对于一名成熟的交易者来说，资金管理是交易过程中的重要环节，甚至可以比作“火箭的助推器”。一旦交易者建立了可靠的交易系统，并养成了良好的交易行为习惯，再配合合理的资金管理方式，就能够看到显著的业绩提升。
                  我将资金管理大致分为两种模式：固定仓位管理和固定金额管理。
                  <br />
                  <br />
                  1. 固定仓位管理
                  <br />
                  固定仓位管理是不考虑交易品种波动率的。它的核心在于每次建仓的仓位是恒定的，不论品种的波动大小。这样做的风险在于：如果你在波动率较小的品种中获利，而在波动率较大的品种中亏损，总体上你可能会面临浮亏。这种管理方式忽视了波动率差异，可能导致在高波动市场中遭受较大损失，而你在低波动市场中所赚取的利润无法弥补亏损。
                  <br />
                  <br />
                  2. 固定金额管理
                  <br />
                  相比之下，固定金额管理更具科学性和灵活性。其核心是根据每笔交易的止损金额来决定仓位大小。这种方法允许你更好地控制风险，因为它根据具体的止损点位进行仓位调整。对于专业交易者或系统交易者来说，固定金额管理能够最大化发挥交易系统的效用。
                  <br />
                  <br />
                  假设你使用固定仓位管理，不论是何种品种，你在高波动的市场中可能会损失一大笔，而为了弥补这笔损失，你需要在低波动的市场中做出多次盈利交易，这往往会增加交易压力和难度。因此，即便是相同的交易策略、相同的进场点和相同的市场条件，采用固定仓位和固定金额管理模式会带来完全不同的资金曲线表现。
                  <br />
                  <br />
                  这两种管理方式的区别非常明显，适合不同的交易风格和市场条件。对于喜爱交易的朋友们，我建议在实际交易过程中，仔细思考并找到最适合自己风格的资金管理模式。有效的资金管理不仅能帮助你控制风险，还能推动你的账户稳步增长。{" "}
                </p>
                <p className="text-right">—— RWMD Nan</p>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <h3
                id="share-7"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（七）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">
                    交易心理优势，拒绝心态内耗
                  </strong>{" "}
                  <br />
                  <br />
                  新的一周开始，今天我想和大家分享一下交易员的心态。刚入行时，有位前辈对我说：“交易做到最后拼的就是心性。”可见，交易心理在整个交易生涯中的决定性作用。{" "}
                  <br />
                  <br />
                  1. 交易心态 <br />
                  交易心态包括情绪，尤其是情绪化交易，它会短期内影响我们的决策，长期下来可能导致失败。情绪是交易员的正常反应，但我们要学会控制情绪，而不是试图完全消除它。关键在于让情绪不影响决策。例如，每当想做决定时，我会停下来看看自己的交易规则，问自己：“我是因为情绪在进场，还是基于理性分析？”不断提醒自己，可以有效减少不理性的交易行为。
                  <br />
                  <br />
                  2. 对自我交易系统的认知
                  <br />
                  执行自己的交易系统，标志着交易生涯的真正开始。然而，执行并不容易，常常会遇到纠结、恐慌和犹豫。这往往是因为对自己的系统了解不够深入。你需要问自己：有没有长期测试过系统？有没有进行数据统计？在实践中遇到过不同的市场情况吗？投入时间和精力去理解和完善你的系统，这一点非常重要。
                  <br />
                  <br />
                  3. 心理内耗
                  <br />
                  交易中，拒绝心理内耗至关重要。要成为专业交易者，思维必须简单、直接、有效。许多交易者常常陷入自我怀疑，比如“我是不是不适合交易？”、“我的系统是不是不好，要不要换？”、“如果资金变大，市场还能承受吗？”
                  不要纠结于这些问题。做出简单有效的回应，避免过度思考。
                  <br />
                  <br />
                  总结
                  <br />
                  真正的交易者需要面对各种情况，提前制定应对方案，做到心中有数。当交易者在心态上保持平稳和坚定时，就拥有了交易心理上的优势，这种“基石”来自于你的技术、经验、认知以及交易系统。
                  希望今天的分享能为交易爱好者们带来启发。祝大家交易顺利。
                </p>
                <p className="text-right">—— RWMD Ed</p>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <h3
                id="share-8"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（八）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">
                    计划你的交易，交易你的计划
                  </strong>{" "}
                  <br />
                  <br />
                  计划你的交易 <br />
                  <br />
                  新的一周开始了，有朋友问我对某个品种是看多还是看空。其实，交易的核心在于执行自己的交易体系。我们的交易流程是从寻找市场的主力运行方向开始，然后顺势而为，在趋势中关注未来可能出现的交易机会。如果机会出现，并且符合我的交易体系，我会果断进场；反之，如果机会不符合我的交易条件和体系，我会选择观望。
                  比如，如果我对某个品种有很强的看空或看多偏见，我可以按照这个方向进行交易，并设好止损。听起来没有问题，但关键在于，这种“偏见”是主观的还是客观的。如果偏见来源于从大级别到小级别的逐层分析，属于客观理性分析；而如果仅凭猜测或主观判断，那交易很可能会出现偏差，导致亏损。因此，我的小建议是，在市场走势较为缓慢或在周末复盘时，仔细分析盘面，结合自己的交易体系，找出关键位置和区间。等到开盘后，通过市场价格表现来判断是否可以进场。
                  <br />
                  <br />
                  交易你的计划 <br />
                  <br />
                  市场上有很多交易系统，比如“聪明钱理论”、“支撑阻力线分析”、“形态交易”等等。无论你使用哪一种，没有任何一个交易系统是完美的。重要的是找到适合自己的系统，经过反复测试和数据统计，确保它能稳定盈利。在制定了交易计划后，下一步就是严格执行。当价格表现符合你设定的交易条件时，果断行动即可。
                  <br />
                  <br />
                  培养良好的习惯 <br />
                  <br />
                  最后，建议大家养成制定交易计划的习惯。有计划的交易可以有效避免频繁交易、盲目交易等问题。希望大家交易顺利！{" "}
                </p>
                <p className="text-right">—— RWMD ED</p>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <h3
                id="share-9"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（九）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">
                    短线（超短线）交易等于频繁交易吗？
                  </strong>{" "}
                  <br />
                  <br />
                  大家好，今天我们来聊一聊短线交易，包括超短线交易，是否算作频繁交易。昨天有一位朋友带着当天的交易记录找我，毫不意外，他的结果是亏损的。他希望我能提供一些建议，帮助他改善交易表现。通过与他的交谈，我找到了他亏损单多于盈利单的几个原因。
                  <br />
                  <br />
                  1. 短线交易的好处
                  <br />
                  <br />
                  首先，短线交易的好处之一就是交易机会多。机会的多少取决于个人的交易周期。日内交易者可以反复抓住进场时机，超短线交易更是以1分钟周期为主，充满无数的形态变化。如果你是这种类型的交易者，可能会觉得很过瘾——只要打开电脑就能找到形态的变化，随时进场，保持交易的兴奋感和不无聊的状态。这个“不无聊”的心理需求，对很多交易者来说也是非常重要的。
                  此外，短线交易的止损位通常距离进场位较小，这意味着你能将亏损控制在可承受的范围内，盈亏比能够最大化。盈利时，你可以迅速把止损上推至保本位，即使被打到也不会亏钱。这种交易模式会给交易者带来心理上的满足感，并增强他们的信心和成就感。
                  <br />
                  <br />
                  2. 短线交易等于频繁交易吗？
                  <br />
                  <br />
                  这是关键问题。在我的认知里，短线和超短线确实容易成为频繁交易的一部分。如果一个交易者在日内下了20单甚至更多，如果盈利，当然会觉得非常畅快。但如果是亏损的情况，就非常容易导致情绪失控。
                  为什么这么说呢？当你不断亏损时，尽管每次的止损很小，但积少成多，最终会严重影响心态。这时很多人会有一个很危险的想法：“再做一单，我要把前面的亏损全部赚回来。”一旦有这样的情绪出现，我建议立即停止交易，离开盘面冷静一下。你需要优先考虑的是，进场点位是否符合自己的交易条件？情绪化交易往往是频繁交易的源头，当情绪失控时，任何交易系统和交易条件都会被忽视，导致亏损加剧。
                  <br />
                  <br />
                  希望我的分享能给大家一些启发。愿大家找到适合自己的高胜率交易系统，保持理性，避免情绪化和频繁交易，祝大家交易顺利！
                </p>
                <p className="text-right">—— RWMD ED</p>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <h3
                id="share-10"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（十）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">交易计划三部曲</strong> <br />
                  <br />
                  交易前准备优化：
                  <br />
                  选择交易品种
                  <br />
                  确定当天交易的市场与品种，关注波动性和流动性，结合自身熟悉度和当前市场情绪进行选择。
                  <br />
                  <br />
                  *仓位管理
                  <br />
                  根据风险承受能力设置仓位，每笔交易的风险控制在总资本的1%-2%，避免过度杠杆。根据市场波动率和风险容忍度，设定合理的止损与止盈位置，确保盈亏比达到1:2或更高。
                  <br />
                  <br />
                  *关注重要经济数据和新闻事件
                  <br />
                  查看日历上是否有重要的经济数据发布或政策新闻，尤其是影响较大的数据（如GDP、就业报告、央行政策等），并预估其对市场的潜在波动影响。
                  <br />
                  <br />
                  *技术面分析
                  <br />
                  在图表上标注重要的支撑位、压力位和关键区域（如日线、周线或月线的关键点位）。确认趋势和可能的入场、出场点，确保在交易时能够快速做出反应。
                  <br />
                  <br />
                  *止盈止损设置
                  <br />
                  根据技术分析和市场情绪合理设定止盈和止损，确保盈亏比至少为1:2。在市场波动较大的情况下，适时调整止损位置，但切勿随意拖动止损位或不设止损，避免让亏损扩大。
                  <br />
                  <br />
                  交易纪律与心态管理：
                  <br />
                  *严格执行交易计划
                  <br />
                  每一笔交易都应当严格遵守计划，不要让情绪左右决策。坚持计划中的仓位、止盈、止损等关键参数，避免在行情波动时做出冲动决策。
                  <br />
                  <br />
                  *避免重仓与扛单
                  <br />
                  交易时保持理智，避免过度重仓，不要因一时市场波动而扛单或随意加仓，尤其是在逆势时。
                  <br />
                  <br />
                  *避免盲目抄底抄顶
                  <br />
                  尽量避免猜测市场的顶或底，而是基于趋势确认后再进行交易，避免在市场剧烈波动时贸然进场。
                  <br />
                  <br />
                  交易后的复盘与总结
                  <br />
                  *每日复盘与总结
                  <br />
                  每晚复盘当天的交易，分析盈利和亏损的原因，总结出是否遵循了计划，哪些地方可以优化。在复盘过程中，可以考虑记录情绪的变化、外部因素的干扰等，全面提升交易过程中的自我认知。
                  <br />
                  <br />
                  *优化进出场条件
                  <br />
                  通过复盘优化入场与出场的信号，调整不合理的策略。不断学习和迭代是提高交易水平的关键。
                  <br />
                  <br />
                  *心态与学习
                  <br />
                  交易不仅仅是技术的博弈，更是心理的考验。保持谦虚、学习的心态，认识到市场是动态的，需要不断调整和适应。每一笔交易都是学习和积累的机会，不论输赢，都是成长的一部分。
                  祝愿你在交易中保持冷静理智，满载而归！
                </p>
                <p className="text-right">—— RWMD ED</p>
              </div>
            </div>
            <div className="mt-12 md:mt-16">
              <h3
                id="share-11"
                className="scroll-mt-8 text-2xl font-bold inline-flex bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-8">
                交易心得分享（十一）
              </h3>
              <div className="grid gap-6 ">
                {/* {items.map(
                  (item, index) =>
                    item.category === "Collaboration" && (
                      <IntegrationCard item={item} index={index} />
                    )
                )} */}
                <p>
                  <strong className="text-xl">交易系统构建之交易风格</strong>{" "}
                  <br />
                  <br />
                  大家好，又到了一周的最后一个交易日，今天我跟大家分享的内容是交易系统的构建，在前几期内容中一直提到交易系统这个词，也反复强调了建立交易系统的重要性，要找到合适自身的，但很多交易者不知道怎么去建构。那我们开始，建立一个体系其实就是建立一个属于自己的交易世界，我们在建构的世界里面去进行交易，也就是说找到自身最熟悉的领域和范畴中，找到一种属于你的获利方式然后不断的精深做到极致。
                  <br />
                  <br />
                  建立交易系统的四个关键步骤：
                  <br />
                  确定交易周期：
                  <br />
                  长线交易：周期通常以4小时以上为基准，持仓周期可能持续数周甚至更长时间，适合有耐心且愿意等待长期趋势的交易者。
                  <br />
                  短线交易：常用5分钟或15分钟图，通常在当天内完成交易，更适合快速进出市场的交易者。
                  <br />
                  <br />
                  **确定交易风格：
                  <br />
                  跟踪型交易者：明确止盈位置，价格达到设定目标时果断离场。
                  <br />
                  波段交易者：在更大的止盈区间操作，不一定在某一具体点位了结。
                  <br />
                  <br />
                  **趋势交易 vs. 震荡交易：
                  <br />
                  趋势交易者：顺应趋势，例如在上涨趋势中只做多单，坚决避免逆势操作。
                  <br />
                  震荡交易者：寻找市场反转机会，倾向于在趋势结束或行情进入区间震荡时进行反向操作。
                  <br />
                  <br />
                  **进场方式：
                  <br />
                  左侧交易：在价格触及你认为合适的进场位置时果断进入，止损位较小，盈亏比高。
                  <br />
                  右侧交易：等待趋势拐点明确后再进场，止损位相对较大，盈亏比相对较低。
                  <br />
                  希望今天的分享能给你带来帮助和新的理解，提前祝大家周末快乐、交易顺利！
                </p>
                <p className="text-right">—— RWMD ED</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type CardProps = {
  item: {
    category: string;
    img: string;
    name: string;
    featured: boolean;
    link: string;
    description: string;
  };
  index: number;
};

export function IntegrationCard({ item, index }: CardProps) {
  return (
    <div
      key={index}
      className="bg-gradient-to-tr from-slate-800 to-slate-800/25 rounded-3xl border border-slate-800 hover:border-slate-700/60 transition-colors group relative">
      <div className="flex flex-col p-5 h-full">
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <Image src={item.img} width="40" height="40" alt={item.name} />
            {item.featured && (
              <Image
                className="absolute top-0 -right-1"
                src={Star}
                width={16}
                height={16}
                alt="Star"
                aria-hidden="true"
              />
            )}
          </div>
          <p className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0">
            {item.name}
          </p>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-400">{item.description}</div>
        </div>
      </div>
    </div>
  );
}
