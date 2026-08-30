import Container from "../common/Container";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: "📝",
    title: "Report Issues",
    description:
      "Students can quickly report problems and provide the information staff need to resolve them.",
  },
  {
    icon: "📊",
    title: "Track Progress",
    description:
      "Follow issues from submission through investigation, resolution, and closure.",
  },
  {
    icon: "🔔",
    title: "Stay Updated",
    description:
      "Receive notifications about important changes and updates to your reported issues.",
  },
];

const Features = () => {
  return (
    <section id="features" className="border-y border-slate-200 bg-white">
      <Container>
        <div className="section-padding">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold text-indigo-600">
              Everything in one place
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A simpler way to manage campus issues
            </h2>

            <p className="mt-4 text-slate-500">
              Bring reporting, communication, tracking, and resolution into one
              centralized platform.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
