type ImageCard = {
  title: string;
  desc: string;
  imgURL: string;
};

type QuoteCard = {
  brand: string;
  quote: string;
  quotee: string;
  position: string;
  imgURL: string;
};

export const imageCardData: ImageCard[] = [
  {
    title: "Tailored for Finance",
    desc: "Delegate research tasks to a domain-specific personal analyst that understands finance.",
    imgURL: "images/cards/card1.avif",
  },
  {
    title: "Accurate, Grounded Research Across All Your Data",
    desc: "Rogo seamlessly integrates internal and external data sources, maintaining accuracy, transparency and auditability.",
    imgURL: "images/cards/card2.avif",
  },
  {
    title: "Leverage Your Firm’s Workflows",
    desc: "Use agents designed to create work outputs exactly as you would across PowerPoint, Excel and Word.",
    imgURL: "images/cards/card3.avif",
  },
  {
    title: "Embed AI into Your Firm’s DNA",
    desc: "Rather than provide off-the-shelf solutions, we collaborate closely with teams to build custom AI models that solve specific problems.",
    imgURL: "images/cards/card4.avif",
  },
];

export const quoteCardData: QuoteCard[] = [
  {
    brand: "images/brands/NMR_BIG.svg",
    quote: `"Our strategic integration of Rogo is going to transform how we deliver value to clients. Rogo enables our teams to analyze market data and identify opportunities with unprecedented speed and precision, while allowing our bankers to focus more deeply on client relationships and strategic advisory."`,
    quotee: "Patrice Maffre",
    position: "International Head of Investment Banking, Nomura",
    imgURL: "images/quoteCards/nomura-quote.jpg",
  },
  {
    brand: "",
    quote: `"The Rogo platform is by far the most advanced AI tool in this space. It is improving the way we do research and making our team far more productive."`,
    quotee: "Pieter Taselaar",
    position: "Founding Partner & Portfolio Manager at Lucerne Capital",
    imgURL: "images/quoteCards/lucerne-quote.jpg",
  },
  {
    brand: "",
    quote: `"Rogo helped me find relevant precedent data from a number of filings that I wouldn’t have found otherwise. It completely changed how I evaluated the opportunity."`,
    quotee: "Sean Warneke",
    position: "Senior Analyst at Schonfeld",
    imgURL: "images/quoteCards/schonfeld-quote.jpg",
  },
];
