import Container from "../common/Container";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400">
      <Container>
        <div
          className="flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-white">Campus Issue Tracker</p>

            <p className="mt-1 text-sm">
              Making campus issue management simpler.
            </p>
          </div>

          <p className="text-sm">
            © 2026 Campus Issue Tracker. All rights
            reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
