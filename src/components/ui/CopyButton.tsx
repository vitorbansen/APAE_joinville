"use client";
import { useState } from "react";
import { CheckIcon } from "@/components/ui/Icons";

export default function CopyButton({ value, label = "Copiar" }: { value: string; label?: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="flex min-h-12 cursor-pointer items-center gap-2 rounded-full border-0 bg-ink px-6 text-[15px] font-extrabold text-white transition-colors hover:bg-brand-deep"
    >
      {copied && <CheckIcon className="h-5 w-5 text-sun" />}
      <span aria-live="polite">{copied ? "Copiado!" : label}</span>
    </button>
  );
}
