import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import Script from "next/script";
import TopBar from "@/components/header/TopBar";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "APAE de Joinville – Seja Bem-Vindo",
    template: "%s – APAE Joinville",
  },
  description:
    "APAE “Associação de Pais e Amigos dos Excepcionais de Joinville” foi fundada em 04 de abril de 1965 pela professora Lia Rosa Jardim de Santis, fez história no trabalho com pessoas com deficiência intelectual e múltipla ao longo de décadas.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${nunito.variable} ${fredoka.variable} antialiased`}>
      {/* suppressHydrationWarning: extensões do navegador (ex.: ColorZilla) injetam atributos no body */}
      <body suppressHydrationWarning>
        <a
          href="#conteudo"
          className="sr-only z-50 rounded-full bg-sun px-5 py-3 font-bold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Ir para o conteúdo
        </a>
        <div className="w-full overflow-x-clip bg-cream font-sans text-ink">
          <TopBar />
          <Header />
          <main id="conteudo">{children}</main>
          <Footer />
        </div>
        {/* VLibras: tradutor de Libras do governo federal. O script cria o botão flutuante sozinho */}
        <Script src="https://vlibras.gov.br/app/vlibras-plugin.js" />
      </body>
    </html>
  );
}
