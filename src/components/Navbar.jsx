import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-sm tracking-widest uppercase text-zinc-400">
          Saachi Agrawal
        </h1>

        <div className="flex gap-6 text-sm">
          <Link
            to="/"
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-blue-400 transition-colors"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;