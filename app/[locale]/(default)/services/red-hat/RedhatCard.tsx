import { BlurFade } from "@/components/magic/blur-fade";

export const RedhatCard = ({
  name,
  description,
  check,
}: {
  name: string;
  description: string;
  check: string[];
}) => {
  return (
    <div className="flex">
      <div className="grow relative bg-muted w-full md:max-w-[500px] h-[300px] border-border border rounded-3xl p-4 overflow-hidden">
        {/* Background rojo y logo por defecto
            <div className="absolute inset-0 bg-[#ee0000] transition-opacity duration-300 ease-in-out group-hover:opacity-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/redhat-logo.png"
                  alt="Red Hat Logo"
                  className="w-24 h-24 object-contain"
                />
              </div>
            </div> */}
        {/* Contenido que aparece en hover */}
        <div className="absolute p-4">
          <BlurFade delay={0.1}>
            <div className="text-lg font-bold">{name}</div>
          </BlurFade>

          <BlurFade delay={0.2}>
            <div className="text-md text-muted-foreground mb-4">
              {description}
            </div>
          </BlurFade>

          <BlurFade delay={0.3}>
            <div className="flex flex-col gap-2">
              {check.map((item) => (
                <div key={item} className="text-sm text-muted-foreground">
                  {item}
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>
    </div>
  );
};
