interface CarouselItem {
  image: string;
  quote: string;
  author: string;
  industry: string;
}

export const carouselItems: CarouselItem[] = [
  {
    image: "/clients/pronto-pago.svg",
    quote: "quote.prontoPago",
    author: "Pronto Pago",
    industry: "industry.fintech",
  },
  {
    image: "/clients/aerolineas-argentinas.svg",
    quote: "quote.aerolineasArgentinas",
    author: "Aerolineas Argentinas",
    industry: "industry.airlines",
  },
  {
    image: "/clients/farmacity.svg",
    quote: "quote.farmacity",
    author: "Farmacity",
    industry: "industry.healthcare",
  },
  {
    image: "/clients/dhl.svg",
    quote: "quote.dhl",
    author: "DHL",
    industry: "industry.logistics",
  },
];
