"use client";
import { useState, type FormEvent } from "react";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function NewsletterForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      if (!response.ok) throw new Error("Falha no envio");
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <p className="m-0 rounded-2xl bg-white/10 p-5 text-[15px] leading-[1.6] text-white">
        Inscrição recebida! Obrigado por acompanhar a APAE de Joinville.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label className="sr-only" htmlFor="newsletter-nome">
        Nome
      </label>
      <input
        id="newsletter-nome"
        name="nome"
        required
        autoComplete="name"
        placeholder="Nome"
        className="min-h-12 rounded-full border border-white/20 bg-white/10 px-5 text-[15px] text-white placeholder:text-mist focus:border-sun focus:outline-none"
      />
      <label className="sr-only" htmlFor="newsletter-email">
        E-mail
      </label>
      <input
        id="newsletter-email"
        name="email"
        type="email"
        required
        autoComplete="email"
        placeholder="E-mail"
        className="min-h-12 rounded-full border border-white/20 bg-white/10 px-5 text-[15px] text-white placeholder:text-mist focus:border-sun focus:outline-none"
      />
      <button
        type="submit"
        disabled={status === "sending"}
        className="min-h-12 cursor-pointer rounded-full border-0 bg-sun px-6 text-[15px] font-extrabold text-ink transition-colors hover:bg-sun-dark disabled:cursor-wait disabled:opacity-70"
      >
        {status === "sending" ? "Enviando…" : "Inscreva-se"}
      </button>
      {status === "error" && (
        <span className="text-[13px] font-bold text-sun">Não foi possível enviar agora. Tente novamente.</span>
      )}
    </form>
  );
}
