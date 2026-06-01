import { Link, useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate();

  function goHomeAndScroll(id) {
    navigate("/");

    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 50);
  }

  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-zinc-950/70 border-b border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-3xl tracking-wide font-bold text-blue-400 hover:text-blue-600">
          Saachi Agrawal
        </h1>

        <div className="flex gap-6 text-sm">
          <button
            onClick={() => goHomeAndScroll("home")}
            className="hover:text-blue-400 transition-colors"
          >
            Home
          </button>

          <button
            onClick={() => goHomeAndScroll("experience")}
            className="hover:text-blue-400 transition-colors"
          >
            Experience
          </button>

          <button
            onClick={() => goHomeAndScroll("projects")}
            className="hover:text-blue-400"
          >
            Projects
          </button>

          <Link
            to="/about"
            className="hover:text-blue-400 transition-colors"
          >
            About Me
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;