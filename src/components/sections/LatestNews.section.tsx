import Link from "next/link";
import { ArrowIcon } from "@/components/ui/Icons";
import NewsCard from "@/components/ui/NewsCard";
import SectionTag from "@/components/ui/SectionTag";
import { newsPosts } from "@/utils/news";

export default function LatestNews() {
  return (
    <section className="px-6 py-[100px]">
      <div className="container-apae flex flex-col gap-10">
        <div className="animatedSide flex flex-wrap items-end justify-between gap-6">
          <div className="flex flex-col gap-4">
            <SectionTag label="Notícias" />
            <h2 className="title-h2">Acontece na APAE</h2>
          </div>
          <Link href="/noticias" className="flex items-center gap-2 font-extrabold text-brand-dark no-underline hover:underline">
            Ver todas as notícias
            <ArrowIcon />
          </Link>
        </div>
        <div className="grid gap-7 md:grid-cols-2">
          {newsPosts.slice(0, 2).map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}
