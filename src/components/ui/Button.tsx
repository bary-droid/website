import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, href, onClick, className = "" }: ButtonProps) {
  const baseClasses =
    "flex items-center justify-center min-w-[291px] h-[56px] bg-gray-900 text-white font-semibold text-[18px] leading-[22px] rounded-[28px] overflow-hidden cursor-pointer hover:scale-[1.03] hover:shadow-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900 focus-visible:outline-none";

  if (href) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={`${baseClasses} ${className}`}>
      {children}
    </button>
  );
}
