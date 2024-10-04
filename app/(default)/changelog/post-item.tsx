import Image from "next/image";
import PostDate from "@/components/post-date";
import { CustomMDX } from "@/components/mdx/mdx";

export default function PostItem({ ...props }) {
  return (
    <article className="pt-12 first-of-type:pt-0 group">
      <div className="md:flex">
        <div className="w-48 shrink-0">
          <time className="text-sm inline-flex items-center bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-purple-200 md:leading-8 before:w-1.5 before:h-1.5 before:rounded-full before:bg-purple-500 before:ring-4 before:ring-purple-500/30 mb-3">
            <span className="ml-[1.625rem] md:ml-5">
              <PostDate dateString={props.metadata.publishedAt} />
            </span>
          </time>
        </div>
        <div className="grow ml-8 md:ml-0 pb-12 group-last-of-type:pb-0 border-b [border-image:linear-gradient(to_right,theme(colors.slate.700/.3),theme(colors.slate.700),theme(colors.slate.700/.3))1] group-last-of-type:border-none">
          <header>
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-200/60 via-slate-200 to-slate-200/60 leading-8 pb-6">
              {props.metadata.title}
            </h2>
          </header>
          <figure className="bg-gradient-to-b to-transparent rounded-3xl p-px mb-8">
            {/* 点击图片跳转到新标签页 */}
            <a
              href={props.metadata.image0}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="w-full rounded-[inherit] cursor-pointer"
                src={props.metadata.image0}
                width={574}
                height={326}
                alt={props.metadata.title}
              />
            </a>
          </figure>
          <figure className="bg-gradient-to-b to-transparent rounded-3xl p-px mb-8">
            {/* 点击图片跳转到新标签页 */}
            <a
              href={props.metadata.image1}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="w-full rounded-[inherit] cursor-pointer"
                src={props.metadata.image1}
                width={574}
                height={326}
                alt={props.metadata.title}
              />
            </a>
          </figure>
          <figure className="bg-gradient-to-b to-transparent rounded-3xl p-px mb-8">
            {/* 点击图片跳转到新标签页 */}
            <a
              href={props.metadata.image2}
              target="_blank"
              rel="noopener noreferrer">
              <Image
                className="w-full rounded-[inherit] cursor-pointer"
                src={props.metadata.image2}
                width={574}
                height={326}
                alt={props.metadata.title}
              />
            </a>
          </figure>
          <div className="prose max-w-none text-slate-400 prose-p:leading-relaxed prose-a:text-purple-500 prose-a:no-underline hover:prose-a:underline prose-strong:text-slate-50 prose-strong:font-medium">
            <CustomMDX code={props.content} />
          </div>
        </div>
      </div>
    </article>
  );
}
