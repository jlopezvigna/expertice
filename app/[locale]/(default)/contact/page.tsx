import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Title } from "@/components/ui/title";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

type Props = {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const { locale } = await params;
//   const t = await getTranslations({ locale, namespace: "ContactPage" });

//   return {
//     title: t("metaTitle"),
//     description: t("metaDescription"),
//     keywords: t("metaKeywords"),
//   };
// }

export default async function ContactPage({ params }: Props) {
  // Enable static rendering
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="min-h-screen overflow-hidden relative pt-16 bg-primary/10 px-4 sm:px-6 lg:px-8">
      <div className="relative container mx-auto py-12">
        <div className="text-center mb-12">
          <Title text={"Contacto"} />
          <p className="text-xl text-gray-600">
            ¿Tienes alguna pregunta? Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold mb-6">
              Información de Contacto
            </h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-2">Dirección</h3>
                <p className="text-gray-600">
                  Av. Principal 123
                  <br />
                  Ciudad, País
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Teléfono</h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-2">Email</h3>
                <p className="text-gray-600">info@expertice.com</p>
              </div>
            </div>
          </div>

          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
