import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-white text-center p-4">
      <hr className="border-gray-500 my-4" />
      <nav className="font-bold flex justify-center space-x-6 mb-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/privacy" className="hover:underline">
          Privacy
        </Link>
        <Link href="/terms" className="hover:underline">
          Terms
        </Link>
        <a href="mailto:fmsknn@gmail.com" className="hover:underline">
          Contact
        </a>
      </nav>
      <p className="mb-2">
        Developed by&nbsp;
        <a href="https://masakifukunishi.site" target="_blank" rel="noopener noreferrer" className="underline">
          Masaki Fukunishi
        </a>
      </p>
      <p className="text-sm mb-2">© 2025 RelaxCast</p>
    </footer>
  );
};

export default Footer;
