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
      link: "/integrations/single-post",
      featured: true,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg07,
      name: "交易直播间",
      description:
        "通过访问我们的独家实时直播见，像专业人士一样进行交易。与我们一同感受机构算法交易的魅力，一同盈利。",
      link: "/integrations/single-post",
      featured: false,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg04,
      name: "RWMD课程",
      description:
        "从小组课程到私人一对一指导，与行业专家一起深入探索金融市场，提升综合分析的技能！",
      link: "/integrations/single-post",
      featured: true,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg08,
      name: "免费学习资料",
      description:
        "从市场趋势到交易策略，获取真正有价值的市场信息。不定期免费讲座和直播，剖析价格传递背后的细节，揭示市场机会。",
      link: "/integrations/single-post",
      featured: true,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg05,
      name: "RWMD周日定期会员直播",
      description:
        "每周日北京时间 20:30为您带来上周交易拆解，盘面详解以及下周盘面预期和答疑",
      link: "/integrations/single-post",
      featured: true,
      category: "加入RWMD TRADING",
    },
    {
      img: IntegrationsImg01,
      name: "RWMD周日不定期公开直播",
      description:
        "给客户充足的体验，在您加入之前让您了解我们的课程以及服务是高价值高质量的。",
      link: "/integrations/single-post",
      featured: true,
      category: "加入RWMD TRADING",
    },
    // {
    //   img: IntegrationsImg02,
    //   name: "Zapier",
    //   description:
    //     "RWMD makes it easy to build extensions by providing an authentication provider that handles the OAuth flow.",
    //   link: "/integrations/single-post",
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
          <div className="flex justify-between items-center py-6 border-b [border-image:linear-gradient(to_right,transparent,theme(colors.slate.800),transparent)1] space-x-8 overflow-x-scroll no-scrollbar">
            {/* Links */}
            <ul className="flex flex-nowrap text-sm font-medium space-x-8">
              <li>
                <a
                  className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#engineering">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="m7.7 7.3-5-5c-.4-.4-1-.4-1.4 0-.4.4-.4 1 0 1.4L5.6 8l-4.3 4.3c-.4.4-.4 1 0 1.4.2.2.4.3.7.3.3 0 .5-.1.7-.3l5-5c.4-.4.4-1 0-1.4ZM8 12h7v2H8z" />
                  </svg>
                  <span>加入RWMD TRADING</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#nocode">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M10 15c-.4 0-.8-.3-.9-.7L5.8 4.6 3.9 8.4c-.2.4-.5.6-.9.6H0V7h2.4l2.7-5.4c.2-.4.6-.6 1-.6s.7.3.9.7l3.2 9.7 1.9-3.8c.2-.4.5-.6.9-.6h3v2h-2.4l-2.7 5.4c-.2.4-.5.6-.9.6Z" />
                  </svg>
                  <span>交易心得分享(一)</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#collaboration">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M7.3 9.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM7.3 15.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0ZM.3 10.7c-.4-.4-.4-1 0-1.4l7-7c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-7 7c-.4.4-1 .4-1.4 0Z" />
                  </svg>
                  <span>交易心得分享(二)</span>
                </a>
              </li>
              <li>
                <a
                  className="flex items-center text-slate-50 hover:text-white whitespace-nowrap transition-colors space-x-2"
                  href="#productivity">
                  <svg
                    className="fill-slate-500"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M11.505 14.135a1 1 0 0 1 .175-1.403A5.967 5.967 0 0 0 14 8c0-3.309-2.691-6-6-6S2 4.691 2 8c0 1.858.846 3.583 2.32 4.731a1 1 0 0 1-1.228 1.578A7.951 7.951 0 0 1 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8a7.955 7.955 0 0 1-3.092 6.31 1.001 1.001 0 0 1-1.403-.175Z" />
                    <path d="M9.045 10.973a1 1 0 0 1 .175-1.404A1.98 1.98 0 0 0 10 8c0-1.103-.897-2-2-2s-2 .897-2 2c0 .611.284 1.184.78 1.569a1 1 0 1 1-1.228 1.578A3.967 3.967 0 0 1 4 8c0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.232-.565 2.38-1.552 3.147a.999.999 0 0 1-1.403-.174Z" />
                  </svg>
                  <span>交易心得分享(三)</span>
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
                <div className="absolute inset-0 w-9 flex items-center justify-center pointer-events-none">
                  <svg
                    className="absolute fill-slate-50 mx-3"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16">
                    <path d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7ZM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5Zm8.707 12.293a.999.999 0 1 1-1.414 1.414L11.9 13.314a8.019 8.019 0 0 0 1.414-1.414l2.393 2.393Z" />
                  </svg>
                </div>
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
                加入RWMD TRADING
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
                  <strong>交易中的执行力与等待的重要性</strong>
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
          <Link
            className="font-semibold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 group-hover:before:absolute group-hover:before:inset-0"
            href={item.link}>
            {item.name}
          </Link>
        </div>
        <div className="grow">
          <div className="text-sm text-slate-400">{item.description}</div>
        </div>
      </div>
    </div>
  );
}
