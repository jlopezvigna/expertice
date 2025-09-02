import { ClientsCarrousel } from "./ClientsCarrousel";

export default function Clients() {
  return (
    <section className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight my-12 text-center">
        Trusted by leading companies
      </h2>
      <ClientsCarrousel />
    </section>
  );
}
