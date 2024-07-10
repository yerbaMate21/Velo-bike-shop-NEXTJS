interface Props {
  active: boolean;
}

const FadeBackground = ({ active }: Props) => {
  return (
    <div
      className={`${active && "fixed inset-0 -z-50 flex justify-center bg-black/80 transition-all duration-300"}`}
    />
  );
};

export default FadeBackground;
