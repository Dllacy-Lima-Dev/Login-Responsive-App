/* eslint-disable @next/next/no-img-element */
interface SocialLoginButtonProps {
  icon: string;
  alt: string;
  children: React.ReactNode;
}

export function SocialLoginButton({ icon, alt, children }: SocialLoginButtonProps) {
  return (
    <button
      type="button"
      className="flex-1 flex items-center justify-center gap-2 bg-white border border-gray-300 
      text-black font-semibold py-2 px-4 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 
      focus:ring-blue-300 focus:ring-offset-2"
    >
      <img src={icon} alt={alt} className="w-5 h-5" />
      <span>{children}</span>
    </button>
  );
}