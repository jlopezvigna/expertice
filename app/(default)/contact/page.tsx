import ContactForm from "@/components/ContactForm";
import { Title } from "@/components/ui/title";

export async function generateMetadata() {
  return {
    title: "Contacto | Expertice",
    description:
      "Ponte en contacto con nosotros para cualquier consulta o servicio que necesites. Estamos aquí para ayudarte.",
    keywords:
      "contacto, consultoría, servicios profesionales, atención al cliente",
  };
}

export default function ContactPage() {
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
