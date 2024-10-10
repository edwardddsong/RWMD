import Image from "next/image";
import CustomerImg01 from "@/public/images/review1.png";
import CustomerImg02 from "@/public/images/review2.png";
import CustomerImg03 from "@/public/images/review3.png";
import CustomerImg04 from "@/public/images/review4.png";
import CustomerImg05 from "@/public/images/review5.png";
import CustomerImg06 from "@/public/images/review6.png";
import CustomerImg07 from "@/public/images/review7.png";
import CustomerImg08 from "@/public/images/review8.png";
import CustomerImg09 from "@/public/images/review9.png";

export default function Customers() {
  const items = [
    {
      img: CustomerImg01,
      quote:
        "跟着Edward老师学习后，我对市场的理解有了质的飞跃。从最初的无从下手，到现在能够制定自己的交易策略，感觉进步非常大。。",
      name: "Jun",
      twitter: {
        handle: "@MikeSmets",
        link: "#0",
      },
    },
    {
      img: CustomerImg02,
      quote:
        "在跟随RWMD的学习过程中，我掌握了系统化的交易方法现在已经开始逐渐掌握了交易的节奏",
      name: "Mike Bryan",
      twitter: {
        handle: "@mike0point7",
        link: "#0",
      },
    },
    {
      img: CustomerImg03,
      quote:
        "以前总是凭感觉交易，亏多赚少。通过RWMD的学习，我学会了如何理性分析市场，避开了很多不必要的风险，现在终于可以看到持续的盈利。",
      name: "Liz Park",
      twitter: {
        handle: "@liz-park82",
        link: "#0",
      },
    },
    {
      img: CustomerImg04,
      quote:
        "RWMD的导师经验丰富，课程内容非常接地气，实用性特别强。学完之后，我对市场的判断力明显提高了，也不再盲目追随热点了。",
      name: "Jessie Maison",
      twitter: {
        handle: "@jessiem9",
        link: "#0",
      },
    },
    {
      img: CustomerImg05,
      quote:
        "RWMD老师教导的学习路径和分析方法特别好用。经过一段时间的学习，我的交易思路变得更加清晰，收益也稳定下来了。",
      name: "Devani Janssen",
      twitter: {
        handle: "@deva07p",
        link: "#0",
      },
    },
    {
      img: CustomerImg06,
      quote:
        "通过RWMD的学习，我学会了如何合理管理资金和控制风险。导师的指导让我在市场中更加游刃有余。",
      name: "Mark Gerkules",
      twitter: {
        handle: "@mark-gerk",
        link: "#0",
      },
    },
    {
      img: CustomerImg07,
      quote:
        "在RWMD的学习让我改变了以前冲动交易的习惯，现在每一步都有据可依。导师的建议总是精准到位，让我避免了很多亏损。",
      name: "Andrey Propenk",
      twitter: {
        handle: "@andrey-prok",
        link: "#0",
      },
    },
    {
      img: CustomerImg08,
      quote:
        "RWMD的导师讲课深入浅出，很多以前觉得难懂的概念现在都变得清晰了。通过他们的指导，我已经找到了适合自己的交易方式，收益越来越稳定。",
      name: "龙行天下",
      twitter: {
        handle: "@masterpro",
        link: "#0",
      },
    },
    {
      img: CustomerImg09,
      quote:
        "Z很专业，课程设计也很合理，适合我们这些零基础的学员。跟着他们一步步学习，我从什么都不懂到现在能独立做交易，真的收获满满。",
      name: "Steve Wolf",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
  ];

  return (
    <section className="relative">
      {/* Radial gradient */}
      <div
        className="absolute inset-0 overflow-hidden pointer-events-none -z-10"
        aria-hidden="true">
        <div className="absolute flex items-center justify-center top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 w-1/3 aspect-square">
          <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-50"></div>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Content */}
          {/* <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              Meet our customers
            </h2>
            <p className="text-lg text-slate-400">
              There are many variations available, but the majority have
              suffered, by injected humour, or randomised words which don't look
              even slightly believable.
            </p>
          </div> */}
          {/* Customers */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 max-w-xs mx-auto lg:max-w-none">
            {items.map((item, index) => (
              <div
                key={index}
                className="relative p-5 before:absolute before:inset-0 before:-z-10 before:border before:border-slate-300 before:bg-slate-700 before:opacity-10 before:rounded-xl">
                <div className="flex items-center justify-between space-x-2 mb-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      className="shrink-0 rounded-full"
                      src={item.img}
                      width={44}
                      height={44}
                      alt={item.name}
                    />
                    <div className="grow truncate">
                      <div className="font-bold text-slate-100 truncate">
                        {item.name}
                      </div>
                      {/* <a
                        className="text-sm text-slate-500 hover:text-slate-300 font-medium truncate transition-colors"
                        href={item.twitter.link}>
                        {item.twitter.handle}
                      </a> */}
                    </div>
                  </div>
                  <svg
                    className="shrink-0"
                    xmlns="http://www.w3.org/2000/svg"
                    width="90"
                    height="14">
                    <path
                      className="fill-purple-500"
                      d="M7 0 5.006 5.368H0l4.232 3.221L2.195 14 7 10.344 11.82 14 9.768 8.589 14 5.368H8.98zM26 0l-1.994 5.368H19l4.232 3.221L21.195 14 26 10.344 30.82 14l-2.052-5.411L33 5.368h-5.02zM45 0l-1.994 5.368H38l4.232 3.221L40.195 14 45 10.344 49.82 14l-2.052-5.411L52 5.368h-5.02zM64 0l-1.994 5.368H57l4.232 3.221L59.195 14 64 10.344 68.82 14l-2.052-5.411L71 5.368h-5.02zM83 0l-1.994 5.368H76l4.232 3.221L78.195 14 83 10.344 87.82 14l-2.052-5.411L90 5.368h-5.02z"
                    />
                  </svg>
                </div>
                <p className="text-sm text-slate-400">{item.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
