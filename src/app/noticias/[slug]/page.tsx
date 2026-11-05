import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, CalendarIcon } from "@/components/ui/Icons";
import NewsCard from "@/components/ui/NewsCard";
import { formatDate, getPost, newsPosts } from "@/utils/news";

export function generateStaticParams() {
  return newsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps<"/noticias/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  return post ? { title: post.title, description: post.excerpt } : {};
}

export default async function NoticiaPage({ params }: PageProps<"/noticias/[slug]">) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const others = newsPosts.filter((item) => item.slug !== post.slug);

  return (
    <>
      <article className="px-6 pb-[80px] pt-14">
        <div className="container-apae flex max-w-[860px] flex-col gap-8">
          <nav aria-label="Você está em" className="flex flex-wrap items-center gap-2 text-[14px] text-muted-2">
            <Link href="/" className="text-muted-2 no-underline hover:text-brand-dark">
              Início
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/noticias" className="text-muted-2 no-underline hover:text-brand-dark">
              Notícias
            </Link>
          </nav>

          <header className="animatedSide flex flex-col gap-5">
            <time dateTime={post.date} className="flex items-center gap-2 text-[15px] font-bold text-brand-dark">
              <CalendarIcon className="h-5 w-5" />
              {formatDate(post.date)}
            </time>
            <h1 className="m-0 font-display font-semibold leading-[1.1]" style={{ fontSize: "clamp(32px, 4.6vw, 52px)", textWrap: "balance" }}>
              {post.title}
            </h1>
          </header>

          {post.cover && (
            <figure className="animatedSide m-0 overflow-hidden rounded-[32px] border-[6px] border-white shadow-xl">
              <Image src={post.cover} alt="" priority sizes="(min-width: 860px) 860px, 100vw" className="block max-h-[620px] w-full object-cover" />
            </figure>
          )}

          <div className="flex flex-col gap-6">
            {post.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className="prose-apae m-0">
                {paragraph}
              </p>
            ))}
          </div>

          {post.gallery.length > 0 && (
            <div className="flex flex-col gap-5 pt-4">
              <h2 className="m-0 font-display text-[26px] font-medium">Fotos</h2>
              <div className="grid grid-cols-2 gap-4">
                {post.gallery.map((photo) => (
                  <div key={photo.src} className="animatedSide overflow-hidden rounded-[24px]">
                    <Image src={photo} alt="" sizes="(min-width: 860px) 420px, 50vw" className="block aspect-[3/4] h-auto w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          )}

          <Link href="/noticias" className="flex items-center gap-2 self-start font-extrabold text-brand-dark no-underline hover:underline">
            <ArrowIcon className="h-5 w-5 rotate-180" />
            Voltar para notícias
          </Link>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-line bg-white px-6 py-[80px]">
          <div className="container-apae flex flex-col gap-8">
            <h2 className="title-h2">Outras notícias</h2>
            <div className="grid gap-7 md:grid-cols-2">
              {others.slice(0, 2).map((item) => (
                <NewsCard key={item.slug} post={item} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
