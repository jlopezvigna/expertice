import { useTranslations } from "next-intl";
import { ClientsCarrousel } from "./ClientsCarrousel";

export default function Clients() {
  const t = useTranslations("clientsComponent");
  return (
    <section className="py-20">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight my-12 text-center">
        {t("title")}
      </h2>
      <ClientsCarrousel />
    </section>
  );
}
