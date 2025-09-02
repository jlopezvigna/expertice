"use client";
import { useState } from "react";
import { CTABanner } from "@/components/share/CTABanner";
import { ServiceHeader } from "../_components/ServiceHeader";
import { Title } from "./_components/title";
import { tabsData } from "./mock-data";

function SideTabs({ tabs }) {
  const [active, setActive] = useState(0);
  return (
    <div className="flex w-full mx-auto overflow-hidden ">
      {/* Tabs a la izquierda */}
      <div className="flex flex-col px-4 gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab.title}
            className={`flex items-center h-[100px] hover:bg-primary/10 gap-3 px-4 py-3 rounded-xl transition font-semibold text-left text-gray-700 ${
              active === idx ? "bg-primary/10" : ""
            }`}
            onClick={() => setActive(idx)}
          >
            <Title title={tab.title} />
          </button>
        ))}
      </div>
      {/* Contenido a la derecha */}
      <div className="flex-1 p-8 flex  bg-primary/10 rounded-3xl">
        {tabs[active].content}
      </div>
    </div>
  );
}

export default function RedHatPage() {
  return (
    <main className=" min-h-screen">
      <ServiceHeader
        title="Transformamos tu negocio con soluciones Red Hat"
        description="Somos tu partner estratégico para implementar, optimizar y escalar tu infraestructura empresarial con las mejores tecnologías open source del mercado."
      />
      <section className="container mx-auto h-full">
        {/* <SideTabs tabs={tabsData} /> */}
        <h4>Como podemos ayudarte?</h4>
        <p>
          Ofrecemos un ecosistema completo de servicios para que tu empresa
          escale sin problemas
        </p>
      </section>
      <CTABanner
        rounded={false}
        buttonText="Habla con un consultor experto"
        title="¿Listo para transformar tu infraestructura?"
        description="Comienza tu transformación digital hoy mismo. Nuestros expertos están listos para ayudarte a implementar las mejores soluciones Red Hat para tu negocio."
      />
    </main>
  );
}
