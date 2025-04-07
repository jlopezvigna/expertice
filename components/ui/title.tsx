import { BlurText, BlurTextProps } from "@/components/magic/blur-text";

export const Title = ({ text }: BlurTextProps) => {
  return (
    <BlurText
      as="h1"
      text={text}
      className="text-3xl md:text-5xl font-bold text-accent-foreground tracking-tight mb-6 text-center"
    />
  );
};
