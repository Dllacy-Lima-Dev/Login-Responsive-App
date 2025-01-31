interface ButtonProps {
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}

export function Button({ type = "button", onClick, children, className }: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 ${className}`}
    >
      {children}
    </button>
  );
}