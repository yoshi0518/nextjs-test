const Button = ({
  children,
  color = 'gray',
  onClick,
}: {
  children: React.ReactNode;
  color?: string;
  onClick: () => void;
}) => {
  const colorClass = () => {
    switch (color) {
      case 'blue':
        return 'bg-blue-500';
      case 'green':
        return 'bg-green-500';
      case 'gray':
        return 'bg-gray-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <button
      className={`rounded ${colorClass()} px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-slate-500/50 hover:opacity-80 active:${colorClass()} active:opacity-100 active:shadow-none`}
      onClick={() => onClick()}
    >
      {children}
    </button>
  );
};

export default Button;
