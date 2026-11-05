import CountUp from "@/components/ui/CountUp";
import { stats } from "@/utils/content";

const accents = ["bg-sun", "bg-brand", "bg-sun"];

export default function Stats() {
  return (
    <section className="px-6">
      <div className="container-apae grid gap-5 rounded-[36px] bg-brand-deep p-6 sm:p-10 md:grid-cols-3">
        {stats.map((stat, index) => (
          <div key={stat.label} className="animatedSide flex items-center gap-5 rounded-[26px] bg-white/5 p-6">
            <span className={`h-14 w-2.5 shrink-0 rounded-full ${accents[index]}`} aria-hidden="true" />
            <div className="flex flex-col gap-1">
              <span className="font-display text-[46px] font-semibold leading-none text-white">
                {stat.prefix}
                <CountUp value={stat.value} decimals={stat.decimals} />
                {stat.suffix}
              </span>
              <span className="text-[16px] font-bold text-mist">{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
