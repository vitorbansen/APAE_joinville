import type { Metadata } from "next";
import Link from "next/link";
import { ArrowIcon, ClockIcon, PinIcon } from "@/components/ui/Icons";
import PageHeader from "@/components/ui/PageHeader";
import { dateParts, events } from "@/utils/news";

export const metadata: Metadata = { title: "Eventos" };

export default function EventosPage() {
  return (
    <>
      <PageHeader tag="Agenda" title="Eventos" />

      <section className="px-6 py-[100px]">
        <div className="container-apae flex flex-col gap-8">
          <h2 className="title-h2 animatedSide">Eventos realizados</h2>
          {events.map((event) => (
            <article
              key={event.title}
              className="animatedSide grid overflow-hidden rounded-[32px] border border-line bg-white md:grid-cols-[240px_1fr]"
            >
              <div className="flex flex-row justify-center gap-6 bg-sun p-7 md:flex-col md:gap-4">
                {event.sessions.map((session) => {
                  const { day, month, year } = dateParts(session.date);
                  return (
                    <time key={session.date} dateTime={session.date} className="flex flex-col items-center leading-none text-ink">
                      <span className="font-display text-[54px] font-semibold">{day}</span>
                      <span className="text-[15px] font-extrabold uppercase tracking-[0.12em]">
                        {month} {year}
                      </span>
                    </time>
                  );
                })}
              </div>
              <div className="flex flex-col gap-5 p-7 sm:p-9">
                <span className="self-start rounded-full bg-line px-4 py-1.5 text-[13px] font-extrabold text-muted">Realizado</span>
                <h3 className="m-0 font-display text-[30px] font-medium leading-tight">{event.title}</h3>
                <p className="prose-apae m-0">{event.description}</p>
                <ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[16px] text-ink">
                  <li className="flex items-center gap-2.5">
                    <PinIcon className="h-5 w-5 shrink-0 text-brand" />
                    {event.place}
                  </li>
                  {event.sessions.map((session) => (
                    <li key={session.date} className="flex items-center gap-2.5">
                      <ClockIcon className="h-5 w-5 shrink-0 text-brand" />
                      {dateParts(session.date).day}/{session.date.slice(5, 7)} — {session.time}
                    </li>
                  ))}
                </ul>
                <p className="m-0 text-[14px] text-muted-2">Promoção: {event.organizers}</p>
                <Link
                  href={`/noticias/${event.newsSlug}`}
                  className="flex items-center gap-2 self-start font-extrabold text-brand-dark no-underline hover:underline"
                >
                  Ler a notícia
                  <ArrowIcon />
                </Link>
              </div>
            </article>
          ))}
          <p className="animatedSide m-0 text-[17px] text-muted">
            Acompanhe as próximas atividades da APAE pelas nossas{" "}
            <Link href="/noticias" className="font-bold text-brand-dark">
              notícias
            </Link>{" "}
            e redes sociais.
          </p>
        </div>
      </section>
    </>
  );
}
