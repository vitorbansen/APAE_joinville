// Conteúdo institucional — transcrito do site atual (apaejoinville.com.br), sem informações novas.
// Apenas erros de digitação evidentes foram corrigidos.
import type { StaticImageData } from "next/image";
import FotoAntiga1 from "@/assets/historia/foto-antiga-apae-joinville.jpg";
import FotoAntiga2 from "@/assets/historia/foto-antiga-apae-joinville-2.jpg";
import FotoAntiga3 from "@/assets/historia/foto-antiga-apae-joinville-3.jpg";
import Fundadora from "@/assets/historia/fundadora-da-apae-joinville.jpg";
import Catarinense from "@/assets/parceiros/logositecatarinense.jpg";
import Docol from "@/assets/parceiros/logositedocol.jpg";
import Tigre from "@/assets/parceiros/logositetigre.jpg";

// Contadores da página inicial
export const stats = [
  { prefix: "+", value: 700, decimals: 0, suffix: "", label: "Alunos atendidos" },
  { prefix: "", value: 6, decimals: 0, suffix: "", label: "Ônibus" },
  { prefix: "+", value: 36.2, decimals: 1, suffix: " mil", label: "Atendimentos de saúde por ano" },
];

export const publicPolicies = ["Assistência Social", "Saúde", "Educação"];

export const specialties = [
  "Odontologia",
  "Neuropediatria",
  "Psiquiatria",
  "Fonoaudiologia",
  "Terapia ocupacional",
  "Fisioterapia",
  "Psicologia",
  "Assistência social",
  "Nutrição",
];

export const programs = [
  "Estimulação Essencial",
  "Serviço Pedagógico Específico",
  "Serviço Pedagógico Ocupacional Iniciação para o Mercado de Trabalho",
  "Oficina Protegida Terapêutica",
  "Qualificação para o Trabalho",
  "Centro de Convivência",
  "Centro Dia",
];

export const professionals = [
  "Pedagogos",
  "Médicos clínico geral",
  "Neurologista",
  "Psiquiatra",
  "Fisioterapeuta",
  "Terapeuta ocupacional",
  "Psicólogo",
  "Fonoaudiólogo",
  "Dentista",
  "Nutricionista",
  "Assistente social",
];

export const activities = [
  "Dança",
  "Artes",
  "Educação física",
  "Informática",
  "Curso de auxiliar de panificação",
  "Curso de almoxarifado",
];

export const structure = [
  "Acessibilidade em todos os ambientes",
  "Salas e equipamentos adaptados",
  "Sala de fisioterapia com tratamento Pediasuit",
  "Laboratório das atividades da vida diária",
  "Jardim sensorial",
  "Horta",
];

// Textos da página "Doe Agora!" — também usados no Institucional
export const missionTexts = [
  "Prestando atendimentos nas mais diversas especialidades: odontologia, neuropediatra, psiquiatria, fonoaudióloga, terapia ocupacional, fisioterapia, psicologia, assistência social e nutrição.",
  "Contribuindo de forma planejada e contínua para a melhoria da qualidade de vida da pessoa com deficiência e suas famílias; buscando a promoção humana, liberdades fundamentais, cidadania e inclusão social. Faz isso lutando muito por recursos financeiros para manter e ampliar estes atendimentos.",
  "Primando pela importância da assistência e auxílio na qualidade de vida, não só aos portadores, mas aos pais e responsáveis por essas pessoas especiais. O faz com o apoio do governo, das empresas e da comunidade. As doações e campanhas beneficiam diretamente a família apaeana, bem como possibilitam a melhoria nos atendimentos.",
];

export const donation = {
  pixKey: "84.720.861/0001-34",
  pixKeyType: "CNPJ",
  bank: "Banco do Brasil",
  agency: "3155-0",
  account: "4260-9",
};

// História da APAE — os parágrafos originais, organizados em ordem cronológica
export const historyIntro =
  "Em 04 de abril de 1965, abria oficialmente a Escola do Excepcional, que, no ano seguinte, receberia o nome de Associação de Pais e Amigos dos Excepcionais – APAE – de Joinville, realizando o sonho da Professora Lia Rosa da Silva Jardim De Santis.";

export interface IHistoryChapter {
  year: string;
  title: string;
  paragraphs: string[];
  image?: { src: StaticImageData; alt: string };
}

export const historyChapters: IHistoryChapter[] = [
  {
    year: "1964",
    title: "O início",
    paragraphs: [
      "Desde 60, a professora Lia era procurada por pais de crianças deficientes, em busca de atendimento, pois naquela época, nenhuma das escolas de Joinville desenvolvia um programa visando a educação dessas crianças. Após ter participado de um curso sobre o excepcional, em 1964, partiu para ação, em busca dessas crianças.",
      "Diante das dificuldades, o primeiro desafio foi encontrar um local para acolher as crianças, conseguindo o porão de uma igreja, na Avenida Procópio Gomes. Iniciou com um grupo de oito alunos, sendo auxiliada por três voluntárias, suas alunas do ensino regular: Albertina Ferraz Tuma, Angelina Jasper e Miriam de Almeida Prado. Mais tarde, conseguiu a permissão do Capitão Henrique, da Igreja Evangélica Exército de Salvação, para usar o galpão da instituição, pois o número de alunos se multiplicava.",
    ],
    image: { src: FotoAntiga1, alt: "Foto antiga da APAE Joinville" },
  },
  {
    year: "1965",
    title: "A primeira diretoria",
    paragraphs: [
      "Foi pedir ajuda ao Prefeito Dr. Nilson Wilson Bender, mas, para receber auxílio da Prefeitura precisava criar uma instituição para dar todo o respaldo à escola. Participou de uma das reuniões da Federação Nacional das Apaes e trouxe o Estatuto da Associação de Pais e Amigos dos Excepcionais e assim, reunindo os pais e amigos, formaram a primeira diretoria, sendo o Primeiro Presidente o médico Dr. Lourenço Cianci Filho, que, além de prestar serviços à Apae, também atendia seus alunos gratuitamente; formando com a Psicóloga Dra. Gilda Balssini e a Assistente Social Zeli Ferminiela a equipe técnica da instituição, necessária a organizar a escola como entidade. Pagando as professoras de seu próprio salário, Dona Lia foi a primeira Diretora.",
    ],
    image: { src: Fundadora, alt: "Fundadora da APAE Joinville" },
  },
  {
    year: "1972",
    title: "A sede própria",
    paragraphs: [
      "Como Entidade organizada legalmente de Utilidade Pública Municipal e Estadual recebeu a doação de um terreno situado à Rua Almirante Barroso, no Bairro América, para construção de sua sede própria, do então Prefeito da época, Dr. Nilson Wilson Bender. A luta continuou, com o apoio dos amigos, pais, construiu a sede em 1972. À medida que o número de alunos aumentava eram ampliadas as suas instalações.",
    ],
    image: { src: FotoAntiga2, alt: "Foto antiga da APAE Joinville" },
  },
  {
    year: "1992",
    title: "Um novo terreno",
    paragraphs: [
      "A APAE precisava construir uma nova sede, ganhou um terreno no Bairro Costa e Silva e o Sr. Márcio Ayrton Silva, Presidente na época, pela distância, achou por bem e por interesse da Prefeitura, o Prefeito Luiz Gomes, em 02 de julho de 1992, realizaram a Escritura Pública de Permuta com um terreno situado à Rua Fritz Alt, hoje, Rua José Elias Giuliari, no Bairro Boa Vista.",
      "A caminhada continuou para a construção da nova sede, com apoio dos empresários, amigos a obra se iniciou, mas a mudança de diretoria, as dificuldades com a empreiteira a obra se arrastou até 2002, quando a Professora Lia e os funcionários conseguiram uma nova diretoria para APAE, assumindo o Dr. João Luiz Hernandes Leivas, como Presidente, dispensando a empreiteira e reestruturando o projeto da obra.",
    ],
  },
  {
    year: "2004",
    title: "A nova sede",
    paragraphs: [
      "Em 2002, foi convidada à Direção da Escola, a Professora Heloisa Walter de Oliveira, sendo que a Professora Lia Rosa da Silva Jardim continuou como Diretora de Honra e Fundadora.",
      "Também em 2002, com o apoio dos empresários, amigos e do Governador Luiz Henrique da Silveira, a obra foi retomada e a primeira etapa foi concluída para a transferência de nossos alunos, sendo inaugurada em 08 de março de 2004.",
    ],
    image: { src: FotoAntiga3, alt: "Foto antiga da APAE Joinville" },
  },
];

export const historyToday = [
  "A cada ano a APAE é ampliada, devido à grande demanda, tendo em vista os serviços prestados nas três Políticas Públicas: Assistência Social, Saúde e Educação. Contando com 420 assistidos diariamente, mais os externos, perfazendo um total de 600 assistidos. Desde a Estimulação Essencial, Serviço Pedagógico Específico, Serviço Pedagógico Ocupacional Iniciação para o Mercado de Trabalho, Oficina Protegida Terapêutica, Qualificação para o Trabalho, Centro de Convivência, temos também o Centro Dia para os que estão em situação de vulnerabilidade social com atendimento integral para todos, com uma equipe de profissionais como pedagogos, médicos clínico geral, neurologista, psiquiatra, fisioterapeuta, terapeuta ocupacional, psicólogo, fonoaudiólogo, dentista, nutricionista e assistente social, ainda a equipe administrativa, motoristas, serventes e cozinheiras.",
  "A APAE oferece aulas de dança, artes, educação física, informática, curso de auxiliar de panificação e almoxarifado. Possui acessibilidade em todos os ambientes, com salas e equipamentos adaptados, como a sala para fisioterapia com o tratamento de Pediasuit, o laboratório das atividades da vida diária, o jardim sensorial e a horta.",
];

// Galeria dos Presidentes — mantida exatamente como no site atual
export const founder = "Profª Lia Rosa da Silva Jardim De Santis";

export const presidents = [
  { period: "1965 a 1966", name: "Dr. Lourenço Cianci Filho" },
  { period: "1967 a 1969", name: "Dr. Osmar Nelson Schroeder" },
  { period: "1970 a 1971", name: "Dr. Lourenço Cianci Filho" },
  { period: "1970 a 1971", name: "Dr. Lothário Milke" },
  { period: "1972 a 1973", name: "Dr. Osmar Nelson Schroeder" },
  { period: "1974 a 1976", name: "Harry Kormann" },
  { period: "1977 a 1976", name: "Eloy Struve" },
  { period: "1979 a 1981", name: "Nilson Rodrigues de Figueiredo" },
  { period: "1982 a 1984", name: "Nilson Rodrigues de Figueiredo" },
  { period: "1986 a 1987", name: "Alcione Gomes de Oliveira" },
  { period: "1988 a 1989", name: "Alcione Gomes de Oliveira" },
  { period: "1989", name: "Marcio Ayrton Silva" },
  { period: "1996 a 1997", name: "Adelar Tiemann" },
  { period: "1998 a 2000", name: "Edio Marques Bueno" },
  { period: "2000 a 2002", name: "Iraci Schmidlin" },
  { period: "2002 a 2004", name: "João Luiz Hernandes Leivas" },
  { period: "2005 a 2006", name: "João Luiz Hernandes Leivas" },
  { period: "2006 a 2007", name: "Paula Cristina Duarte Goes" },
  { period: "2008 a 2010", name: "Heloisa Walter de Oliveira" },
  { period: "2011 a 2013", name: "Heloisa Walter de Oliveira" },
  { period: "2014 a 2016", name: "Jailson de Souza" },
  { period: "2017 a 2019", name: "Heloisa Walter de Oliveira" },
  { period: "2020 a 2022", name: "Heloisa Walter de Oliveira" },
  { period: "2023 a 2025", name: "Neide Gonçalves" },
];

// Equipe APAE
export const boardPeriod = "2023 / 2025";

export const board = [
  { role: "Presidente", name: "Neide Gonçalves" },
  { role: "Vice-Presidente", name: "Sarita Wanka" },
  { role: "1ª Diretora Financeira", name: "Daniele Marta Soares Lima" },
  { role: "1ª Secretária", name: "Danieli Tissi Reche" },
  { role: "2ª Secretária", name: "Cristiane Lopes de Sá Biedermann" },
  { role: "Diretora de Patrimônio", name: "Talita de Villa" },
  { role: "Diretora Social", name: "Natany Paradela" },
];

export const councils = [
  {
    title: "Conselho de Administração",
    members: [
      "Claudete Moreira dos Prodígios",
      "Elisabete Barbara R. Rowoldt",
      "Jecemeri Andréa Weber Lopes",
      "Betty Vaz",
      "Thiago da Silva da Cruz",
      "Guilherme Biedermann",
      "Domingos Vicenti Sobrinho",
    ],
  },
  {
    title: "Conselho Fiscal — Titulares",
    members: ["Gabriel Lima da Silva", "Liane Muller", "Simone Budal da Silva"],
  },
  {
    title: "Conselho Fiscal — Suplentes",
    members: ["Marisete de Fátima da Silva Borges", "Glizeide Barbosa Klein", "Tiago da Silva"],
  },
];

// Parceiros
export const partners = [
  { name: "Drogaria Catarinense", href: "https://www.drogariacatarinense.com.br/", logo: Catarinense },
  { name: "Docol", href: "https://www.docol.com.br/", logo: Docol },
  { name: "Tigre", href: "https://www.tigre.com.br/", logo: Tigre },
];

// Contatos por setor
export const departmentEmails = [
  { label: "APAE", email: "apae@apaejoinville.com.br" },
  { label: "Setor de atendimento clínico", email: "clinica@apaejoinville.com.br" },
  { label: "Setor financeiro", email: "financeiro@apaejoinville.com.br" },
  { label: "Assistente social", email: "social@apaejoinville.com.br" },
  { label: "Setor de telemarketing", email: "tlmk@apaejoinville.com.br" },
  { label: "Centro Dia", email: "centrodia@apaejoinville.com.br" },
  { label: "Coordenação pedagógica", email: "pedagogia@apaejoinville.com.br" },
  { label: "Secretaria", email: "secretaria@apaejoinville.com.br" },
];

// Transparência — PDFs copiados para public/transparencia
const doc = (file: string) => `/transparencia/${file}`;

export const transparencyGroups = [
  {
    title: "Documentos",
    items: [{ label: "Estatuto APAE Joinville", href: doc("Estatuto-Atualizado.pdf") }],
  },
  {
    title: "Prestações de Contas",
    items: [
      { label: "RC 150 Nº 007-2021", href: doc("Prestacao-de-contas-RC-150-no-007-2021.pdf") },
      { label: "Doações Diversas", href: doc("Prestacao-de-Contas-Doacoes-Diversas.pdf") },
      { label: "TC 022.2022.PMJ – Educação", href: doc("Prestacao-de-Contas-TC-022.2022.PMJ-Educacao.pdf") },
      { label: "TC 147.2021.PMJ – SUAS", href: doc("Prestacao-de-Contas-TC-147.2021.PMJ-SUAS.pdf") },
      { label: "TF 2022TR000750 – Construção", href: doc("Prestacao-de-Contas-TF-2022TR000750-Construcao.pdf") },
      { label: "Educação Nº 022-2022", href: doc("Prestacao-de-contas-Educacao-no-022-2022.pdf") },
      { label: "Fundo Social", href: doc("Prestacao-de-Contas-Fundo-Social.pdf") },
      { label: "TC 007.2021.PMJ – SUAS", href: doc("Prestacao-de-Contas-TC-007.2021.PMJ-SUAS.pdf") },
      { label: "TC 045.2018.PMJ – Centro Dia", href: doc("Prestacao-de-Contas-TC-045.2018.PMJ-Centro-Dia-.pdf") },
      { label: "TF 2020TR000760 – MRD", href: doc("Prestacao-de-Contas-TF-2020TR000760-MRD.pdf") },
      { label: "RC 200 Nº 147-2021", href: doc("Prestacao-de-contas-RC-200-no-147-2021.pdf") },
      { label: "CELESC", href: doc("Prestacao-de-Contas-Convenio-CELESC.pdf") },
      { label: "PRONAS", href: doc("Prestacao-de-Contas-PRONAS.pdf") },
      { label: "TC 027.2019.PMJ", href: doc("Prestacao-de-Contas-TC-027.2019.PMJ-Programa-de-Habilitacao-e-Reabilitacao.pdf") },
      { label: "TC 025.2020.PMJ – PediaSuit", href: doc("Prestacao-de-Contas-TC-025.2020.PMJ-PediaSuit-.pdf") },
    ],
  },
  {
    title: "Prestações de Contas de Eventos",
    items: [{ label: "Feijoada da APAE 2024", href: doc("Prestacao-de-Contas-Feijoada-2024.pdf") }],
  },
  {
    title: "Balancetes",
    items: [{ label: "2020-2021", href: doc("DOCUMENTO-PARA-CERTIFICAR-5.pdf") }],
  },
  {
    title: "Eleições APAE/2022",
    items: [{ label: "Edital de Convocação", href: doc("Edital-2022.pdf") }],
  },
];
