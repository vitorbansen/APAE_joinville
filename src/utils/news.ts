// Notícias publicadas no site atual (apaejoinville.com.br/noticias).
import type { StaticImageData } from "next/image";
import Foto08 from "@/assets/noticias/photo_2026-08-19_10-42-08.jpg";
import Foto09 from "@/assets/noticias/photo_2026-08-19_10-42-09.jpg";
import Foto10 from "@/assets/noticias/photo_2026-08-19_10-42-10.jpg";
import Foto10b from "@/assets/noticias/photo_2026-08-19_10-42-10-2.jpg";

export interface INewsPost {
  slug: string;
  title: string;
  date: string; // AAAA-MM-DD
  excerpt: string;
  cover?: StaticImageData;
  paragraphs: string[];
  gallery: StaticImageData[];
}

export const newsPosts: INewsPost[] = [
  {
    slug: "apae-de-joinville-realiza-o-projeto-atividade-fisica-para-todos-por-meio-da-lei-de-incentivo-ao-esporte",
    title: "APAE de Joinville realiza o projeto Atividade Física Para Todos por meio da Lei de Incentivo ao Esporte",
    date: "2026-08-19",
    excerpt:
      "A APAE realiza o projeto Atividade Física Para Todos – Ano I, que promove aulas de ginástica e musculação para adultos com deficiência intelectual.",
    cover: Foto10b,
    paragraphs: [
      "A Associação de Pais e Amigos dos Excepcionais de Joinville – APAE realiza o projeto Atividade Física Para Todos – Ano I, que promove aulas de ginástica e musculação para adultos com deficiência intelectual, reafirmando seu compromisso com a inclusão, a saúde e a qualidade de vida do público atendido no município de Joinville/SC.",
      "A iniciativa é viabilizada por meio da Lei de Incentivo ao Esporte, do Ministério do Esporte, e conta com o fundamental apoio das patrocinadoras Cristal Master Indústria e Comércio Ltda. e Selbetti Tecnologia S.A., empresas que acreditam no poder transformador do esporte como ferramenta de inclusão social.",
      "Atualmente, o projeto atende 26 adultos com deficiência intelectual, com idades entre 19 e 73 anos, divididos em duas turmas que realizam atividades três vezes por semana às segundas, quartas e sextas-feiras, no período matutino, sempre sob a orientação de professor de Educação Física especialmente contratado para essa finalidade.",
      "Com os recursos do projeto, a APAE mantém uma sala de treinamento climatizada e acessível, equipada com esteiras, bicicletas ergométricas, estações de musculação, halteres, caneleiras e demais materiais adquiridos por meio da iniciativa, além dos uniformes utilizados pelos participantes durante as aulas.",
      "Com a missão de promover a saúde, o bem-estar, a autonomia e a integração social dos participantes, o projeto Atividade Física Para Todos – Ano I segue gerando resultados expressivos: os beneficiários desenvolvem aspectos físicos e cognitivos, fortalecem a sociabilidade e incorporam a prática de atividade física à sua rotina, mantendo elevada assiduidade nas atividades.",
      "A APAE agradece às patrocinadoras, ao Ministério do Esporte, aos profissionais envolvidos e às famílias que confiam no projeto. Juntos, seguimos construindo uma sociedade mais justa, inclusiva e igualitária, onde o esporte se consolida como uma poderosa ferramenta de transformação, superação e cidadania.",
    ],
    gallery: [Foto08, Foto09, Foto10, Foto10b],
  },
  {
    slug: "2o-encontro-de-maes-atipicas",
    title: "2º encontro de mães atípicas",
    date: "2023-03-16",
    excerpt:
      "Nos dias 28 e 29 de março haverá o 2º Encontro de Mães Atípicas na Apae de Joinville, voltado às mães e responsáveis por pessoas com TEA.",
    // A imagem desta notícia está quebrada (404) no site atual
    paragraphs: [
      "Nos dias 28 e 29 de março haverá o 2º Encontro de Mães Atípicas na Apae de Joinville. A ação está sendo promovida pelo Conselho Municipal dos Direitos da Mulher, Secretaria de Assistência Social, Unisociesc e Apae e é voltada às mães e responsáveis por pessoas com o transtorno do espectro autista (TEA).",
      "O evento contará com a palestra da psicóloga Dra. Ana Carolina Wolf, que abordará o autismo, e dos psicólogos da Unisociesc Ana Paula Grams e Fidêncio, que vão fazer uma roda de conversa sobre mulher e maternidade atípica.",
      "O encontro do dia 28 de março funcionará no horário das 8h às 10h30 e no dia 29 de março das 14h às 16h30, havendo café e sorteio de brindes aos participantes.",
    ],
    gallery: [],
  },
];

// Eventos — o único evento divulgado no site atual
export const events = [
  {
    title: "2º Encontro de Mães Atípicas",
    place: "APAE de Joinville",
    sessions: [
      { date: "2023-03-28", time: "8h às 10h30" },
      { date: "2023-03-29", time: "14h às 16h30" },
    ],
    description:
      "Palestra da psicóloga Dra. Ana Carolina Wolf sobre autismo e roda de conversa sobre mulher e maternidade atípica com os psicólogos da Unisociesc Ana Paula Grams e Fidêncio. Café e sorteio de brindes aos participantes.",
    organizers: "Conselho Municipal dos Direitos da Mulher, Secretaria de Assistência Social, Unisociesc e Apae",
    newsSlug: "2o-encontro-de-maes-atipicas",
  },
];

const months = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];
const monthsLong = ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"];

export function formatDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return `${day} de ${monthsLong[month - 1]} de ${year}`;
}

export function dateParts(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return { day: String(day).padStart(2, "0"), month: months[month - 1], year };
}

export function getPost(slug: string) {
  return newsPosts.find((post) => post.slug === slug);
}
