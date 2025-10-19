export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800 py-6 mt-auto">
      <div className="container text-center">
        <div className="mb-3">
          <a
            href="https://github.com/yourusername"
            className="text-gray-400 hover:text-white mx-2"
          >
            <i className="bi bi-github"></i>
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            className="text-gray-400 hover:text-white mx-2"
          >
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
        <p className="text-gray-400 text-sm mb-1">
          Built with ❤️ by Rupesh Verma
        </p>
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} PayQR. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
