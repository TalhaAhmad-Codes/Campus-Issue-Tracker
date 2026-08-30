import Container from "../common/Container";
import Button from "../common/Button";

const Navbar = () => {
  return (
    <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-600 text-sm font-bold text-white">
              CI
            </div>

            <span className="text-lg font-bold tracking-tight text-slate-900">
              Campus Issue Tracker
            </span>
          </a>

          {/* Navigation */}
          <div className="hidden items-center gap-2 md:flex">
            <a
              href="#features"
              className="rounded-lg px-4 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
            >
              Features
            </a>

            <Button variant="ghost">Login</Button>

            <Button>Get Started</Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            aria-label="Open menu"
          >
            ☰
          </button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
