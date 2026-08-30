import Container from "../common/Container";
import Button from "../common/Button";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <Container>
        <div className="grid min-h-162.5 items-center gap-16 py-20 lg:grid-cols-2">
          {/* Content */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1.5 text-sm font-medium text-indigo-700">
              Built for better campus experiences
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Resolve campus issues
              <span className="gradient-text"> without the chaos.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-500">
              A centralized platform for students and staff to report, track,
              and resolve campus issues efficiently.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Get Started</Button>

              <Button variant="secondary">Learn More</Button>
            </div>
          </div>

          {/* Product Preview */}
          <div className="relative">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60">
              {/* Fake dashboard header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Issue Dashboard
                  </p>

                  <p className="mt-1 text-xs text-slate-400">Campus overview</p>
                </div>

                <div className="h-8 w-8 rounded-full bg-indigo-100" />
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-3 py-5">
                <div className="rounded-xl bg-slate-50 p-4">
                  <p className="text-xs text-slate-500">Open</p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">24</p>
                </div>

                <div className="rounded-xl bg-amber-50 p-4">
                  <p className="text-xs text-amber-600">Progress</p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">12</p>
                </div>

                <div className="rounded-xl bg-emerald-50 p-4">
                  <p className="text-xs text-emerald-600">Resolved</p>

                  <p className="mt-2 text-2xl font-bold text-slate-900">86</p>
                </div>
              </div>

              {/* Fake issue */}
              <div className="rounded-xl border border-slate-100 p-4">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Projector not working
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Room 204 · IT Department
                    </p>
                  </div>

                  <span className="rounded-full bg-amber-50 px-2.5 py-1 text-xs font-medium text-amber-600">
                    In Progress
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
