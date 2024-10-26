interface Properties {
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<Properties> = ({ className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-primary font-bold text-white px-6 py-4 rounded-full hover:bg-white hover:text-primary active:bg-primary active:text-white`}
    >
      Comprar entrada
    </button>
  );
};
