interface ISectionTag {
  label: string;
  light?: boolean;
}

// Três pétalas inspiradas no girassol do logo
export function Petals({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-1 ${className}`} aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-sun" />
      <span className="h-2.5 w-2.5 rounded-full bg-brand" />
      <span className="h-2.5 w-5 rounded-full bg-sun" />
    </span>
  );
}

export default function SectionTag({ label, light = false }: ISectionTag) {
  return (
    <span className={`tag-label flex items-center gap-3 ${light ? "text-sun" : "text-brand-dark"}`}>
      <Petals />
      {label}
    </span>
  );
}
