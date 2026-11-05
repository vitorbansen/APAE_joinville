// Dados de contato e navegação — todos retirados do site atual (apaejoinville.com.br).
export const siteConfig = {
  name: "APAE de Joinville",
  fullName: "Associação de Pais e Amigos dos Excepcionais de Joinville",
  region: "Joinville – SC",
  phone: "(47) 3431-7400",
  phoneHref: "tel:+554734317400",
  whatsapp: "(47) 99152-4191",
  whatsappHref:
    "https://api.whatsapp.com/send?phone=5547991524191&text=Entrei%20em%20contato%20pelo%20site%20da%20APAE%20Joinville%2C%20preciso%20de%20algumas%20informa%C3%A7%C3%B5es",
  email: "apae@apaejoinville.com.br",
  cnpj: "84.720.861/0001-34",
  foundedAt: "04 de abril de 1965",
  year: 2026,
  about:
    "APAE “Associação de Pais e Amigos dos Excepcionais de Joinville” foi fundada em 04 de abril de 1965 pela professora Lia Rosa Jardim de Santis, fez história no trabalho com pessoas com deficiência intelectual e múltipla ao longo de décadas.",
};

// O site atual usa dois perfis de Instagram diferentes (cabeçalho e rodapé) — confirmar qual é o oficial.
export const socialLinks = [
  { name: "Instagram", handle: "@apaejoinville", href: "https://www.instagram.com/apaejoinville/" },
  { name: "Facebook", handle: "APAEJoinville", href: "https://www.facebook.com/APAEJoinville/" },
  { name: "WhatsApp", handle: siteConfig.whatsapp, href: siteConfig.whatsappHref },
  { name: "YouTube", handle: "APAE Joinville", href: "https://www.youtube.com/channel/UCDLy4HwjChygyLJeCuuTq1g" },
] as const;

export type SocialName = (typeof socialLinks)[number]["name"];

export const addresses = [
  {
    name: "APAE",
    street: "Rua José Elias Giuliari, 111 – Boa Vista",
    city: "Joinville – SC",
    cep: "89205-310",
  },
  {
    name: "APAE Centro Dia",
    street: "Rua Almirante Barroso, 305 – América",
    city: "Joinville – SC",
    cep: "89204-200",
  },
];

export const institutionalLinks = [
  { name: "Institucional", href: "/sobre" },
  { name: "História da APAE", href: "/historia-da-apae" },
  { name: "Galeria dos Presidentes", href: "/galeria-dos-presidentes" },
  { name: "Equipe APAE", href: "/equipe-apae" },
  { name: "Parceiros", href: "/parceiros" },
];

export const navItems = [
  { name: "A APAE", href: "/sobre", children: institutionalLinks },
  { name: "Notícias", href: "/noticias" },
  { name: "Eventos", href: "/eventos" },
  { name: "Transparência", href: "/transparencia" },
  { name: "Contato", href: "/contato" },
];

export const sitemapLinks = [
  ...institutionalLinks,
  { name: "Notícias", href: "/noticias" },
  { name: "Eventos", href: "/eventos" },
  { name: "Contato", href: "/contato" },
  { name: "Transparência", href: "/transparencia" },
  { name: "Doe Agora!", href: "/doe-agora" },
];
