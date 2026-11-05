import type { Metadata } from "next";
import NewsCard from "@/components/ui/NewsCard";
import PageHeader from "@/components/ui/PageHeader";
import { newsPosts } from "@/utils/news";

export const metadata: Metadata = { title: "Notícias" };

export default function NoticiasPage() {
  return (
    <>
      <PageHeader tag="Acontece na APAE" title="Notícias" />

      <section className="px-6 py-[100px]">
        <div className="container-apae grid gap-7 md:grid-cols-2">
          {newsPosts.map((post) => (
            <NewsCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
