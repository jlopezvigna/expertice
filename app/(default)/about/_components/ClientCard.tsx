import Image from "next/image";

export const ClientCard = ({
  imageUrl,
  companyName,
}: {
  imageUrl: string;
  companyName: string;
  industry: string;
}) => {
  return (
    <div
      key={imageUrl}
      className="w-[150] rounded-3xl bg-transparent p-3 flex flex-col"
    >
      <div className="grow">
        <div className="h-[40px] relative">
          <Image
            src={imageUrl}
            alt={companyName}
            fill
            className="object-contain object-center"
          />
        </div>
      </div>
    </div>
  );
};
