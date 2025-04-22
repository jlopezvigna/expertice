interface CarouselItem {
  image: string;
  quote: string;
  author: string;
  industry: string;
}

export const carouselItems: CarouselItem[] = [
  {
    image: "/clients/pronto-pago.svg",
    quote:
      "We worked on the process of increasing their capabilities for innovation and agile construction of modern software solutions to support their growth and Digital Transformation of their Clients. Expertice S.A. was chosen to carry out the adoption of DevOps practices, in order to incorporate a comprehensive work culture aimed at improving Time-to-Market and Product Quality. We selected Red Hat Openshift, a development and application execution platform specifically designed to support these practices, and 3Scale to build APIs to expose functionalities that can be reused, monetized, with the ability to orchestrate services and make transformations.",
    author: "Pronto Pago",
    industry: "Fintech",
  },
  {
    image: "/clients/aerolineas-argentinas.svg",
    quote:
      "We have been working for 15 years providing IT services, technology, and software. Providing programmers, Red Hat subscriptions, the complete InvGate suite, implementing Assets and Service Desk, a platform where we provide consulting and support daily. We also form the help desk service and on-site support for microcomputing with a team of more than thirty resources.",
    author: "Aerolineas Argentinas",
    industry: "Airlines",
  },
  {
    image: "/clients/farmacity.svg",
    quote:
      "We provide on-site service for the E2E regional platform, providing incident management and administration, technical and operational support to the IT department with tasks related to Red Hat's technological infrastructure for the E2E solution (JBoss Application Server / JBoss Data Grid / Satellite Puppet) with knowledge transfer of the mentioned Red Hat products.",
    author: "Farmacity",
    industry: "Healthcare",
  },
  {
    image: "/clients/dhl.svg",
    quote:
      "We provide on-site service for the E2E regional platform, providing incident management and administration, technical and operational support to the IT department with tasks related to Red Hat's technological infrastructure for the E2E solution (JBoss Application Server / JBoss Data Grid / Satellite Puppet) with knowledge transfer of the mentioned Red Hat products.",
    author: "DHL",
    industry: "Logistics",
  },
];
