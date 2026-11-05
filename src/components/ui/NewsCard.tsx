import Image from "next/image";
import Link from "next/link";
import ApaeLogo from "@/assets/apae_logo.png";
import { ArrowIcon } from "@/components/ui/Icons";
import { formatDate, type INewsPost } from "@/utils/news";

export default function NewsCard({ post }: { post: INewsPost }) {
  return (
    <Link
      href={`/noticias/${post.slug}`}
      className="apae-card animatedSide group flex flex-col overflow-hidden rounded-[28px] border border-line bg-white text-ink no-underline"
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-sun-light">
        {post.cover ? (
          <Image
            src={post.cover}
            alt=""
            fill
            sizes="(min-width: 768px) 560px, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Image src={ApaeLogo} alt="" className="h-[60%] w-auto opacity-90" />
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-7">
        <time dateTime={post.date} className="text-[14px] font-bold text-brand-dark">
          {formatDate(post.date)}
        </time>
        <h3 className="m-0 font-display text-[23px] font-medium leading-[1.25]">{post.title}</h3>
        <p className="m-0 text-[16px] leading-[1.6] text-muted">{post.excerpt}</p>
        <span className="mt-auto flex items-center gap-2 pt-2 font-extrabold text-brand-dark">
          Ler notícia
          <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
}
