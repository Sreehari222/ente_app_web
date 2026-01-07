import { Feature } from "@/types/feature";

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title } = feature;

  return (
    <div className="w-full flex justify-center">
      <div
        className="
          text-center
          transition-transform duration-300
          md:hover:scale-105
        "
      >
        {/* ICON WRAPPER */}
        <div
          className="
            mx-auto flex flex-col items-center justify-center
            h-[64px] w-[64px]
            sm:h-[80px] sm:w-[80px]
            md:h-[120px] md:w-[120px]
            rounded-md bg-primary/10
          "
        >
          {/* ICON */}
          <div
            className="
              scale-[0.8]
              sm:scale-100
              md:scale-125
            "
          >
            {icon}
          </div>
        </div>

        {/* TITLE */}
        <p
          className="
            mt-2 text-[11px]
            sm:text-xs
            md:text-sm
            font-medium text-black dark:text-white
            text-center
          "
        >
          {title}
        </p>
      </div>
    </div>
  );
};

export default SingleFeature;
