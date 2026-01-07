import SingleFeature from "./SingleFeature";
import featuresData from "./featuresData";

const Features = () => {
  return (
    <section id="features" className="pt-6 pb-6 md:pt-8 md:pb-10">
      <div className="container">
        {/* FEATURES GRID */}
       <div
  className="grid grid-cols-3          /* mobile: 3 + 2 = 2 lines */ gap-x-3 gap-y-4 sm:grid-cols-5       /* tablet & up: single line */ sm:gap-y-6 place-items-center">
  {featuresData.map((feature) => (
    <SingleFeature key={feature.id} feature={feature} />
  ))}
</div>
      </div>
    </section>
  );
};

export default Features;
