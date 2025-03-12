export const messages_chat: {
  content: string;
  isUser: boolean;
}[] = [
  { content: "message1", isUser: true },
  { content: "message2", isUser: false },
  { content: "message3", isUser: true },
];

export const company_check: string[] = [
  "companyCheck.years",
  "companyCheck.clients",
];

export const client_logos: {
  imageUrl: string;
  alt: string;
  name: string;
  industry: string;
}[] = [
  {
    imageUrl: "/clients/aerolineas-argentinas.svg",
    alt: "Aerolineas Argentinas",
    name: "Aerolineas Argentinas",
    industry: "industry.airlines",
  },
  {
    imageUrl: "/clients/banco-hipotecario.svg",
    alt: "Banco Hipotecario",
    name: "Banco Hipotecario",
    industry: "industry.banks",
  },

  {
    imageUrl: "/clients/pronto-pago.svg",
    alt: "Pronto Pago",
    name: "Pronto Pago",
    industry: "industry.banks",
  },
  {
    imageUrl: "/clients/banco-macro.svg",
    alt: "Banco Macro",
    name: "Banco Macro",
    industry: "industry.banks",
  },
  {
    imageUrl: "/clients/farmacity.svg",
    alt: "Farmacity",
    name: "Farmacity",
    industry: "industry.ecommerce",
  },
  {
    imageUrl: "/clients/dhl.svg",
    alt: "DHL",
    name: "DHL",
    industry: "industry.logistics",
  },
  {
    imageUrl: "/clients/quilmes.svg",
    alt: "Cerveceria Quilmes",
    name: "Cerveceria Quilmes",
    industry: "industry.beverages",
  },
  {
    imageUrl: "/clients/loma-negra.svg",
    alt: "Loma Negra",
    name: "Loma Negra",
    industry: "industry.metals",
  },
];

export const partner_logos: {
  imageUrl: string;
  name: string;
  alt: string;
}[] = [
  { imageUrl: "/partners/oracle.svg", name: "Oracle", alt: "Oracle" },
  { imageUrl: "/partners/ibm.svg", name: "IBM", alt: "IBM" },
  { imageUrl: "/partners/invgate.svg", name: "InvGate", alt: "InvGate" },
  { imageUrl: "/partners/lenovo.svg", name: "Lenovo", alt: "Lenovo" },
  { imageUrl: "/partners/microsoft.svg", name: "Microsoft", alt: "Microsoft" },
  { imageUrl: "/partners/redhat.svg", name: "Red Hat", alt: "Red Hat" },
  { imageUrl: "/partners/veeam.svg", name: "Veeam", alt: "Veeam" },
];

export const invgate_leader_logos: {
  imageUrl: string;
  name: string;
  alt: string;
}[] = [
  { imageUrl: "/invgate/allianz.svg", name: "Allianz", alt: "Allianz" },
  { imageUrl: "/invgate/kpmg.svg", name: "KPMG", alt: "KPMG" },
  { imageUrl: "/invgate/nasa.svg", name: "NASA", alt: "NASA" },
  {
    imageUrl: "/invgate/peoples-bank.svg",
    name: "Peoples Bank",
    alt: "Peoples Bank",
  },
  { imageUrl: "/invgate/pwc.svg", name: "PwC", alt: "PwC" },
  { imageUrl: "/invgate/toyota.svg", name: "Toyota", alt: "Toyota" },
];
