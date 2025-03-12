import Image from "next/image";
import { useTranslations } from "next-intl";

export const ClientCard = ({
  imageUrl,
  companyName,
  industry,
}: {
  imageUrl: string;
  companyName: string;
  industry: string;
}) => {
  const t = useTranslations("common");
  return (
    <div
      key={imageUrl}
      className="h-[120] w-[150] rounded-3xl bg-[#f9fafb] border-border border p-3 flex flex-col"
    >
      <div className="grow">
        <div className="h-[40px] relative">
          <Image
            src={imageUrl}
            alt={companyName}
            fill
            className="object-contain object-left"
          />
        </div>
      </div>
      <div className="text-center">
        <p className="text-sm font-medium text-muted truncate">{t(industry)}</p>
      </div>
    </div>
  );
};
