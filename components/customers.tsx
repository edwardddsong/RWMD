import Image from "next/image";
import CustomerImg01 from "@/public/images/review1.png";
import CustomerImg02 from "@/public/images/bbls.png";
import CustomerImg03 from "@/public/images/review3.png";
import CustomerImg04 from "@/public/images/fwdxc.png";
import CustomerImg05 from "@/public/images/oz.png";
import CustomerImg06 from "@/public/images/sam.png";
import CustomerImg07 from "@/public/images/shian1.png";
import CustomerImg08 from "@/public/images/qs.png";
import CustomerImg09 from "@/public/images/king.png";
import CustomerImg10 from "@/public/images/clientreview11.jpg";
import CustomerImg11 from "@/public/images/clientreview12.jpg";
import CustomerImg12 from "@/public/images/clientreview13.jpg";
import CustomerImg13 from "@/public/images/clientreview14.jpg";
import CustomerImg14 from "@/public/images/clientreview15.jpg";
import CustomerImg15 from "@/public/images/clientreview16.jpg";
import CustomerImg16 from "@/public/images/clientreview17.jpg";
import CustomerImg17 from "@/public/images/clientreview18.jpg";
import CustomerImg18 from "@/public/images/clientreview19.jpg";
import CustomerImg19 from "@/public/images/clientreview20.jpg";
import CustomerImg20 from "@/public/images/clientreview21.jpg";
import CustomerImg21 from "@/public/images/clientreview22.jpg";
import CustomerImg22 from "@/public/images/clientreview23.jpg";

export default function Customers() {
  const items = [
    {
      img: CustomerImg01,
      quote:
        "跟着Edward老师学习后，我对市场的理解有了质的飞跃。从最初的无从下手，到现在能够制定自己的交易策略，感觉进步非常大。。",
      name: "J**",
      twitter: {
        handle: "@MikeSmets",
        link: "#0",
      },
    },
    {
      img: CustomerImg02,
      quote:
        "在交易技术和心态上，Z总都非常乐于分享，耐心解答问题；SMC作为交易系统有明确的关注点位，从而做单有所指引，并且可以进一步理解价格行为",
      name: "巴巴**",
      twitter: {
        handle: "@mike0point7",
        link: "#0",
      },
    },
    {
      img: CustomerImg03,
      quote:
        "以前总是凭感觉交易，亏多赚少。通过RWMD的学习，我学会了如何理性分析市场，避开了很多不必要的风险，现在终于可以看到持续的盈利。",
      name: "Liz Pa**",
      twitter: {
        handle: "@liz-park82",
        link: "#0",
      },
    },
    {
      img: CustomerImg04,
      quote:
        "                          从直播和平时群内的互动中就能深刻体会到赵老师的专业和严谨。无论是短线还是中长线，都可以精准拿捏进出场点位，更重要的是教会了学员如何正确理解这个市场，以及如何在完善风控的同时合理止盈，让大家在这个不确定的市场中尽可能占据主动。总结一句话你是我见过的最靠谱的职业交易员，没有之一。",
      name: "飞舞的**",
      twitter: {
        handle: "@jessiem9",
        link: "#0",
      },
    },
    {
      img: CustomerImg05,
      quote:
        "感謝Ed老师開了這一個课程，我三年前開始學習交易有付費的有免費的，結果都是輸多贏少，他們的群組也不活躍一天只有數個留言還要是沒養分的，只能夠自己瞎子摸象自己看書似懂非懂的，但這裡的大佬都很熱心樂於分享讓我發現很多以前沒有聽過的知识",
      name: "Oswa**",
      twitter: {
        handle: "@deva07p",
        link: "#0",
      },
    },
    {
      img: CustomerImg06,
      quote:
        "                          跟Z總學完SMC真的改變了我對市場的看法，操作邏輯清晰，簡單易懂，感覺每一步都有依據，再也不盲目操作了。策略雖然有效，但裡面主觀判斷挺多的，所以老師的指導特別關鍵，能幫助你規避很多誤區，感覺Z總在這方面還是很清晰的。",
      name: "S**",
      twitter: {
        handle: "@mark-gerk",
        link: "#0",
      },
    },
    {
      img: CustomerImg07,
      quote:
        "在z总教导的SMC策略中，身为初学者的我学到了很多，也得到了极大的帮助。z总专业精神和热情使我在交易成长之路更加顺利。感谢z总对我的帮助。谢谢",
      name: "Shi**",
      twitter: {
        handle: "@andrey-prok",
        link: "#0",
      },
    },
    {
      img: CustomerImg08,
      quote:
        " 感谢Z哥的邀请，也非常感谢Z哥SMC的指点，我从SMC小白到通过考核，到目前盈利的状态，都是Z哥在我瓶颈的时候指点，才会那么大的改变；交易的道路还很长，路上有Z哥大佬级别的帮助，我想会轻松很多。希望未来能在顶峰相见。由衷感谢Z哥！",
      name: "青**",
      twitter: {
        handle: "@masterpro",
        link: "#0",
      },
    },
    {
      img: CustomerImg09,
      quote:
        "自从认识了z总，我知道了流动性，FVG之类的聪明钱的概念，明白了之前为什么总是被打止损后迅速拉升。现在对市场的有了更清晰的认知！",
      name: "Ki**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },

    {
      img: CustomerImg10,
      quote:
        "在接触smc后  觉得这策略比我之前当散户的策略要精准  使用smc后心态会比散户会强一些  需要多加练习心态着方面  同时有一个好老师教也是必不可少的   z总就很有耐心的教 我学的也很快   遇到不懂的问题也能互相交流  希望之后能成为一名操盘手",
      name: "Aus**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg11,
      quote:
        "Ed老师在交易理论方面的讲解让我印象深刻。通过平台的学习，我不仅掌握了如何识别市场中的资金流向，还学会了如何根据理论调整交易策略。他的指导让我在实际操作中更加自信，感谢这段学习旅程~",
      name: "牧**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg12,
      quote:
        "平台的学习资源还蛮丰富的，课程讲解也很清晰，让我对投资交易的理解更加深入了。每节课都有满满的干货，特别是关于市场周期的分析，让我能更好地把握投资时机。",
      name: "小**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg13,
      quote:
        "Z老师总能把复杂的内容讲得简单易懂，尤其在风险管理方面，他教我如何合理分配资金，控制风险，避免不必要的损失。整个学习过程都得到了及时的支持，这让我在实践中感到很有信心。",
      name: "啊**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg14,
      quote:
        "Ed老师教会我如何从价格走势中寻找交易机会，他的讲解透彻、易于理解，帮助我提升了分析能力。平台还提供了一对一的辅导，这让我在学习交易过程中感受到更多的关怀和支持，收获颇丰。",
      name: "XX**:",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg15,
      quote:
        "平台的课程安排得很合理，让我在学习投资交易时有条不紊，一步步提升自己。老师们不仅教授交易理论，还强调了风险管理的重要性，让我在制定策略时更加谨慎。",
      name: "自月**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg16,
      quote:
        "Z老师的讲解深入浅出，让我对市场运作有了更深的理解。他能把复杂的概念简单化，特别是在市场周期的分析上，让我能清晰地看到趋势。平台提供的资源也很丰富，学习体验相当不错。",
      name: "粥**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg17,
      quote:
        "在这个平台上，我学到了很多实用的投资知识，老师们都乐于解答问题，我感受到了很大的支持。通过学习，我的投资心态变得更加成熟，课程内容也涵盖了许多重要的交易理论，让我在实际交易中更加自信，十分感谢！",
      name: "Fre**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg18,
      quote:
        "通过平台的学习，我的投资心态变得更加成熟，课程内容真的很实用，我现在在实际交易中能够更好地控制风险、抓住机会。平台还提供每周的答疑直播和一对一辅导，对我的交易计划很有帮助。",
      name: "一只**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg19,
      quote:
        "Z老师的课程真的很棒，每周的答疑直播也让我能够及时向老师请教，非常感谢老师的及时回答。",
      name: "Spen**.",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg20,
      quote:
        "老师们的讲解清晰易懂，让我认识到如何控制交易风险和设置止损。课程中还提供了实用的案例分析，帮助我在实际交易中更加灵活地应用这些知识，感谢平台提供的专业支持",
      name: "锅**",
      twitter: {
        handle: "@imsteve",
        link: "#0",
      },
    },
    {
      img: CustomerImg21,
      quote:
        "Z老师让我重新认识了市场运作的方式，他教会我如何识别不同的市场阶段，并根据这些信息做出决策。他的经验分享在我日常交易中非常有帮助，感谢平台提供的优质资源和每周的答疑直播，让我在投资的道路上没有那么迷茫。 ",
      name: "Bil**",
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
