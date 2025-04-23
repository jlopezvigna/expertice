export const BackgroundRoundedBlur = ({
  right = true,
  left = true,
}: {
  right?: boolean;
  left?: boolean;
}) => {
  return (
    <div className="absolute inset-0">
      {right && (
        <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-accent-foreground/30 rounded-full blur-3xl" />
      )}
      {left && (
        <div className="absolute -bottom-24 -left-24 w-[400px] h-[400px] bg-accent-foreground/30 rounded-full blur-3xl" />
      )}
    </div>
  );
};
