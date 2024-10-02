import Image from "next/image";
import Team from "@/public/images/team.jpg";

export default function Story() {
  return (
    <section className="relative">
      {/* Blurred shape */}
      <div
        className="absolute top-0 -mt-32 left-1/2 -translate-x-1/2 ml-10 blur-2xl opacity-70 pointer-events-none -z-10"
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
              <stop offset="100%" stopColor="#6366F1" stopOpacity="0"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#bs4-a)"
            fillRule="evenodd"
            d="m0 0 461 369-284 58z"
            transform="matrix(1 0 0 -1 0 427)"></path>
        </svg>
      </div>

      <div className="px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="pb-12 md:pb-20">
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
              <h2 className="h2 bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60">
                RWMD的故事
              </h2>
            </div>

            <div className="md:flex justify-between space-x-6 md:space-x-8 lg:space-x-14">
              <figure className="min-w-[240px]">
                <Image
                  className="sticky top-8 mx-auto mb-12 md:mb-0 rounded-lg "
                  src={Team}
                  width={420}
                  height={280}
                  alt="Team"
                />
              </figure>
              <div className="max-w-[548px] mx-auto">
                <div className="text-slate-400 space-y-6">
                  <p>
                    RWMD由四位来⾃不同领域但对⾦融抱有同样热爱的华⼈创⽴。
                    在亲⾝经历华⼈投资⼀次次的艰⾟与挣扎，亲眼⽬睹本地理财产品、投资市场的⼀桩桩案例后，四位抱有同样愿景的合伙⼈决⼼集合各⾃领域的知识技术以及经验，创⽴⼀⼼为华⼈放⼼投资贡献⼒量的⾦融⼯作室，起步外汇、着眼⾦融市场，让更多投资⼈不畏惧市场和⼈⼼，信任产品与技术，营造值得信赖的投资环境。
                    RWMD创⽴的初衷也是将贯彻始终的理念：对投资上⼼，让资金安心，与客户同心，让客⼾放⼼。
                  </p>
                  <p>
                    <strong className="text-slate-50 font-medium">
                      RWMD使命
                    </strong>
                    <br />
                    我们的根本使命是始终坚守透明、诚实的交易原则，确保客⼾的资⾦安全和投资利益最⼤化。
                  </p>

                  <p>
                    <strong className="text-slate-50 font-medium">
                      RWMD愿景
                    </strong>
                    <br />
                    我们的愿景是成为全球领先的⾦融服务提供商，创造⼀个既安全⼜便捷的交易环境，使每⼀位客⼾都能轻松接触并参与到全球⾦融市场中。
                  </p>
                  {/* <p>
                    You can dive into the atoms that make up a product, share
                    the moments that move you and discuss the ideas you find
                    compelling. We want to create a ground for{" "}
                    <strong className="text-slate-50 font-medium">
                      discussion and bring knowledge together
                    </strong>
                    , while making it more accessible and easier to grasp.
                  </p>
                  <p>
                    Contrary to popular belief, this product is not random
                    security. It has roots in a piece of classical literature,
                    making it over 5 years old. Richard McClintock, a professor
                    at{" "}
                    <a
                      className="text-purple-500 font-medium hover:underline"
                      href="#0">
                      Hampden-Sydney College
                    </a>{" "}
                    in Virginia, looked up one of the more obscure words,
                    consectetur from a passage, and going through the cites of
                    the word in classical literature, discovered the undoubtable
                    source.
                  </p>
                  <p>
                    We all thrive on learning something new every day and
                    everyone is constantly trying on different hats. We are
                    working with new technologies while rethinking an old
                    industry and are excited about all the possibilities and
                    opportunities to innovate. It's a problem deeply ingrained
                    in traditional sectors like startups and the wider service
                    industry but which has been compounded in the past five to
                    ten years by the emergence of the mostly tech-powered gig
                    economy which has created a new generation of shift workers
                    and indeed
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
