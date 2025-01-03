import Image from "next/image";
import Particles from "./particles";
import Highlighter, { HighlighterItem } from "./highlighter";

import FeatureImg01 from "@/public/images/rich3.png";
// import FeatureImg01 from "@/public/images/feature-image-01.png";
import FeatureImg02 from "@/public/images/ed.jpg";
import FeatureImg03 from "@/public/images/dd.jpg";

export default function Features02() {
  return (
    <section className="relative">
      {/* Particles animation */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 -z-10 w-80 h-80 -mt-24 -ml-32">
        <Particles
          className="absolute inset-0 -z-10"
          quantity={6}
          staticity={30}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-16 md:pt-32">
          {/* Section header */}

          {/* Highlighted boxes */}
          <div className="relative pb-12 md:pb-20">
            {/* Blurred shape */}
            <div
              className="absolute bottom-0 -mb-20 left-1/2 -translate-x-1/2 blur-2xl opacity-50 pointer-events-none"
              aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="434" height="427">
                <defs>
                  <linearGradient
                    id="bs2-a"
                    x1="19.609%"
                    x2="50%"
                    y1="14.544%"
                    y2="100%">
                    <stop offset="0%" stopColor="#6366F1" />
                    <stop offset="100%" stopColor="#6366F1" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#bs2-a)"
                  fillRule="evenodd"
                  d="m346 898 461 369-284 58z"
                  transform="translate(-346 -898)"
                />
              </svg>
            </div>
            {/* Grid */}
            <Highlighter className="grid md:grid-cols-12 gap-6 group">
              {/* Box #1 */}
              <div className="md:col-span-12" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      {/* Blurred shape */}
                      <div
                        className="absolute right-0 top-0 blur-2xl"
                        aria-hidden="true">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="342"
                          height="393">
                          <defs>
                            <linearGradient
                              id="bs-a"
                              x1="19.609%"
                              x2="50%"
                              y1="14.544%"
                              y2="100%">
                              <stop offset="0%" stopColor="#6366F1" />
                              <stop
                                offset="100%"
                                stopColor="#6366F1"
                                stopOpacity="0"
                              />
                            </linearGradient>
                          </defs>
                          <path
                            fill="url(#bs-a)"
                            fillRule="evenodd"
                            d="m104 .827 461 369-284 58z"
                            transform="translate(0 -112.827)"
                            opacity=".7"
                          />
                        </svg>
                      </div>
                      {/* Radial gradient */}
                      <div
                        className="absolute flex items-center justify-center bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 h-full aspect-square"
                        aria-hidden="true">
                        <div className="absolute inset-0 translate-z-0 bg-purple-500 rounded-full blur-[120px] opacity-70" />
                        <div className="absolute w-1/4 h-1/4 translate-z-0 bg-purple-400 rounded-full blur-[40px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8 md:pr-0">
                        <div className="mb-5">
                          <div>
                            <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                              RWMD | Z
                            </h3>
                            <p className="text-slate-400 mt-8">
                              作为RWMD的创始人，同时作为交易12年的交易员，我深知大家所需要什么。曾经我自己的成功与失败经历，都可以作为经验总结给未来交易者们借鉴和规避。金融市场是公平的，所有的交易都是撮合交易，我们自己也在盈利与亏损的角色中随时转换。所以金融市场讲究的只应该是纪律和规则。一套好的交易系统和入场模型是我们作为交易员要熟练掌握并且随时精进的。我专修的交易系统是聪明钱概念，也称为流动性交易。市场里只有两样东西是实时的，且不会说谎的
                              —— 时间和K线。
                            </p>
                            <p className="text-slate-400 mt-2">
                              同时我热衷于教学分享，并且对自己有效传授知识的能力充满信心。
                              我坚信任何人都能学会盈利交易，但成为一名好老师需要具备某些特质。关键不在于了解所有关于交易的知识，而是专注于最有用和最相关的概念，构建一个坚实、持久的交易系统。
                            </p>
                            <p className="text-slate-400 mt-2">
                              当你知道自己教会了别人一项他们可以终生受用的技能时，那种满足感是难以言表的。我亲眼见证了每周社区会议中学员对于盘面的新见解，如何一点点打磨他们的交易生涯，同时改变了他们的生活。
                            </p>
                          </div>
                        </div>
                        {/* <div>
                          <a
                            className="btn-sm text-slate-300 hover:text-white transition duration-150 ease-in-out group [background:linear-gradient(theme(colors.slate.900),_theme(colors.slate.900))_padding-box,_conic-gradient(theme(colors.slate.400),_theme(colors.slate.700)_25%,_theme(colors.slate.700)_75%,_theme(colors.slate.400)_100%)_border-box] relative before:absolute before:inset-0 before:bg-slate-800/30 before:rounded-full before:pointer-events-none"
                            href="#0">
                            <span className="relative inline-flex items-center">
                              Learn more{" "}
                              <span className="tracking-normal text-purple-500 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1">
                                -&gt;
                              </span>
                            </span>
                          </a>
                        </div> */}
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:relative md:left-0{md}transla{}-x-0"
                          src={FeatureImg01}
                          width="504"
                          height="400"
                          alt="Feature 01"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #2 */}
              <div className="md:col-span-7" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true">
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            RWMD | Ed
                          </h3>
                          <p className="text-slate-400 mt-6">
                            作为一名专业的交易员，我一直致力于通过教学和指导帮助他人提升交易技能。我坚信，成功的交易不仅依赖于技术，更依赖于对市场的深入理解和心理素质的培养。{" "}
                          </p>
                          <p className="text-slate-400 mt-3">
                            我坚信，每个人都有能力在市场中找到自己的盈利之道，但这需要系统的学习与正确的引导。我通过多年的实践和经验，开发了一套行之有效的教学方法，帮助新手交易者快速上手，同时帮助有经验的交易者突破瓶颈。{" "}
                          </p>
                          <p className="text-slate-400 mt-3">
                            我深知传授交易知识的责任，也正是这种责任感让我在教学过程中始终保持严谨和耐心。我见证了无数人在学习后取得的进步，不仅在交易上更加自信，也在生活中更加从容应对挑战。{" "}
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0"
                          src={FeatureImg02}
                          width={536}
                          height={230}
                          alt="Feature 02"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
              {/* Box #3 */}
              <div className="md:col-span-5" data-aos="fade-down">
                <HighlighterItem>
                  <div className="relative h-full bg-slate-900 rounded-[inherit] z-20 overflow-hidden">
                    <div className="flex flex-col">
                      {/* Radial gradient */}
                      <div
                        className="absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 pointer-events-none -z-10 w-1/2 aspect-square"
                        aria-hidden="true">
                        <div className="absolute inset-0 translate-z-0 bg-slate-800 rounded-full blur-[80px]" />
                      </div>
                      {/* Text */}
                      <div className="md:max-w-[480px] shrink-0 order-1 md:order-none p-6 pt-0 md:p-8">
                        <div>
                          <h3 className="inline-flex text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-1">
                            RWMD | DD
                          </h3>
                          <p className="text-slate-400 mt-6">
                            作为销售总监和交易心理咨询师，我知道心态是做好交易的关键。拥有再好的技术，如果不能以正确的心态面对市场，到最后都会是竹篮打水。RWMD想给大家传达的信息是，金融市场有赢家有输家，正确的看待盈利以及亏损，做好每一笔交易的风险控制。金融不是一夜暴富，而是细水长流。
                          </p>
                          <p className="text-slate-400 mt-3">
                            我始终热衷于帮助投资者在复杂多变的金融市场中自信应对挑战。凭借多年的经验，我秉持透明、公开的原则，致力于为客户提供全面的交易知识和有效的工具，帮助他们做出明智的投资决策，减少风险。
                          </p>
                          <p className="text-slate-400 mt-3">
                            我坚信，只有通过建立信任，创造一个安全、稳定的交易环境，才能真正助力投资者取得长期的成功，甚至改变他们的财务未来。{" "}
                          </p>
                        </div>
                      </div>
                      {/* Image */}
                      <div className="relative w-full h-64 md:h-auto overflow-hidden md:pb-8">
                        <Image
                          className="absolute bottom-0 left-1/2 -translate-x-1/2 mx-auto max-w-none md:max-w-full md:relative md:left-0 md:translate-x-0 ml-6 mr-6"
                          src={FeatureImg03}
                          // width={230}
                          // height={230}
                          alt="Feature 03"
                        />
                      </div>
                    </div>
                  </div>
                </HighlighterItem>
              </div>
            </Highlighter>
          </div>
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              5%的成功者会是你吗？
            </h2>
            <p className="text-lg text-slate-400">
              您可能听过这样一句令人寒心的话：“95%的零售外汇交易者亏损。”
              然而，通过我们对20家顶级差价合约（CFD）提供商的数据进行广泛分析后发现，实际情况并没有那么糟糕，亏损率为84%。
              要成为那16%的成功者之一，关键在于投入和坚持。成功的道路并没有许多人想象的那么陡峭，但很少有人愿意真正走下去。
              此外，估计有80%的新手交易者在第一年内退出交易市场。
              如果您已经投入了超过一个月的专注且高质量的学习，您已经领先于40%的交易者。
              然而关键不在于花了多少时间，而在于学习的质量。如果停滞不前，不断更换策略或导师，或者花费时间却没有真正进步，即使经过数月的“学习”，您可能仍然处于初学者阶段。
              实际的、有效的学习，确保您明智的运用时间，可以显著加速您在交易中的进步。
            </p>
            <br />
            <h2 className="h2 mt-8 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 pb-4">
              RWMD为您带来{" "}
            </h2>
            <p className="text-lg text-slate-400">
              <br />
              1. 正确的交易学习道路，理论知识以及实战经验分享
              <br />
              2. 紧跟市场的独家分析 + 流动性交易观点
              <br />
              3. COT机构数据
              <br />
              4. 交易心理辅导
              <br />
              5. 直播复盘以及下周盘面预期
              <br />
              6. 1对1指导{" "}
            </p>
          </div>

          {/* Features list */}
          {/* <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-slate-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16">
                  <path d="M7.999 2.34a4.733 4.733 0 0 0-6.604 6.778l5.904 5.762a1 1 0 0 0 1.4 0l5.915-5.77a4.733 4.733 0 0 0-6.615-6.77Zm5.208 5.348-5.208 5.079-5.2-5.07a2.734 2.734 0 0 1 3.867-3.864c.182.19.335.404.455.638a1.04 1.04 0 0 0 1.756 0 2.724 2.724 0 0 1 5.122 1.294 2.7 2.7 0 0 1-.792 1.923Z" />
                </svg>
                <h4 className="font-medium text-slate-50">Filters</h4>
              </div>
              <p className="text-sm text-slate-400">
                Login box must find the right balance for the user convenience,
                privacy and security.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-slate-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16">
                  <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0ZM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12Zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2Z" />
                </svg>
                <h4 className="font-medium text-slate-50">Configurable</h4>
              </div>
              <p className="text-sm text-slate-400">
                Login box must find the right balance for the user convenience,
                privacy and security.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-slate-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16">
                  <path d="M14 0a2 2 0 0 1 2 2v4a1 1 0 0 1-2 0V2H2v12h4a1 1 0 0 1 0 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm-1.957 10.629 3.664 3.664a1 1 0 0 1-1.414 1.414l-3.664-3.664-.644 2.578a.5.5 0 0 1-.476.379H9.5a.5.5 0 0 1-.48-.362l-2-7a.5.5 0 0 1 .618-.618l7 2a.5.5 0 0 1-.017.965l-2.578.644Z" />
                </svg>
                <h4 className="font-medium text-slate-50">Adaptable</h4>
              </div>
              <p className="text-sm text-slate-400">
                Login box must find the right balance for the user convenience,
                privacy and security.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-slate-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16">
                  <path d="M14.3.3c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-8 8c-.2.2-.4.3-.7.3-.3 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l8-8ZM15 7c.6 0 1 .4 1 1 0 4.4-3.6 8-8 8s-8-3.6-8-8 3.6-8 8-8c.6 0 1 .4 1 1s-.4 1-1 1C4.7 2 2 4.7 2 8s2.7 6 6 6 6-2.7 6-6c0-.6.4-1 1-1Z" />
                </svg>
                <h4 className="font-medium text-slate-50">Authorization</h4>
              </div>
              <p className="text-sm text-slate-400">
                Login box must find the right balance for the user convenience,
                privacy and security.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-slate-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16">
                  <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12Zm0 14V2H2v12h12Zm-3-7H5a1 1 0 1 1 0-2h6a1 1 0 0 1 0 2Zm0 4H5a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Z" />
                </svg>
                <h4 className="font-medium text-slate-50">Management</h4>
              </div>
              <p className="text-sm text-slate-400">
                Login box must find the right balance for the user convenience,
                privacy and security.
              </p>
            </div>

            <div>
              <div className="flex items-center space-x-2 mb-1">
                <svg
                  className="shrink-0 fill-slate-300"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16">
                  <path d="M14.574 5.67a13.292 13.292 0 0 1 1.298 1.842 1 1 0 0 1 0 .98C15.743 8.716 12.706 14 8 14a6.391 6.391 0 0 1-1.557-.2l1.815-1.815C10.97 11.82 13.06 9.13 13.82 8c-.163-.243-.39-.56-.669-.907l1.424-1.424ZM.294 15.706a.999.999 0 0 1-.002-1.413l2.53-2.529C1.171 10.291.197 8.615.127 8.49a.998.998 0 0 1-.002-.975C.251 7.29 3.246 2 8 2c1.331 0 2.515.431 3.548 1.038L14.293.293a.999.999 0 1 1 1.414 1.414l-14 14a.997.997 0 0 1-1.414 0ZM2.18 8a12.603 12.603 0 0 0 2.06 2.347l1.833-1.834A1.925 1.925 0 0 1 6 8a2 2 0 0 1 2-2c.178 0 .348.03.512.074l1.566-1.566C9.438 4.201 8.742 4 8 4 5.146 4 2.958 6.835 2.181 8Z" />
                </svg>
                <h4 className="font-medium text-slate-50">Building</h4>
              </div>
              <p className="text-sm text-slate-400">
                Login box must find the right balance for the user convenience,
                privacy and security.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
