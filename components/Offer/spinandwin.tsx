"use client";

import { useState } from "react";

const prizes = [
  { label: "10% OFF", color: "#080cf9ff" },
  { label: "₹50", color: "#5fb67fff" },
  { label: "Free Shipping", color: "#F59E0B" },
  { label: "₹100", color: "#DC2626" },
  { label: "Scratch Card", color: "#a482deff" },
  { label: "Better Luck", color: "#36b7f2ba" },
];

const SpinWheel = ({ borderColor }: { borderColor: string }) => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState("");

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);
    setResult("");

    const slice = 360 / prizes.length;
    const prizeIndex = Math.floor(Math.random() * prizes.length);
    const spins = Math.floor(Math.random() * 4) + 6;

    const finalRotation =
      spins * 360 +
      (360 - prizeIndex * slice) -
      slice / 2 -
      90;

    setRotation(finalRotation);

    setTimeout(() => {
      setResult(prizes[prizeIndex].label);
      setSpinning(false);
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Pointer */}
      <div className="relative mb-2">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20">
          <div className="relative w-[34px] h-[22px] -translate-x-[12px]">
            <div
              className="absolute inset-0 bg-red-600"
              style={{
                clipPath:
                  "polygon(0 50%, 60% 0, 100% 50%, 60% 100%)",
                borderRadius: "6px",
              }}
            />
            <div className="absolute left-[18px] top-1/2 h-[8px] w-[8px] -translate-y-1/2 rounded-full bg-white" />
          </div>
        </div>

        {/* Wheel */}
        <div
          className="relative flex h-[220px] w-[220px] lg:h-[260px] lg:w-[260px] items-center justify-center rounded-full border-[8px] shadow-xl transition-transform duration-[4000ms] ease-out"
          style={{
            transform: `rotate(${rotation}deg)`,
            borderColor,
            background: `conic-gradient(${prizes
              .map(
                (p, i) =>
                  `${p.color} ${i * (360 / prizes.length)}deg ${
                    (i + 1) * (360 / prizes.length)
                  }deg`
              )
              .join(",")})`,
          }}
        >
          {prizes.map((prize, index) => {
            const angle =
              index * (360 / prizes.length) + 360 / prizes.length / 2;

            return (
              <span
                key={index}
                className="absolute text-[10px] lg:text-[11px] font-bold text-white"
                style={{
                  transform: `rotate(${angle}deg) translateY(-80px) rotate(-${angle}deg)`,
                }}
              >
                {prize.label}
              </span>
            );
          })}

          <button
            onClick={spinWheel}
            disabled={spinning}
            className="z-30 rounded-full bg-white px-5 py-3 text-xs font-extrabold uppercase text-red-600 shadow-lg hover:scale-105 transition disabled:opacity-60"
          >
            {spinning ? "..." : "Spin"}
          </button>
        </div>
      </div>

      {result && (
        <p className="mt-3 text-sm font-semibold text-green-400">
          🎉 {result}
        </p>
      )}
    </div>
  );
};

const Spin = () => {
  return (
    <section className="bg-gray-50 dark:bg-black py-1 text-gray-900 dark:text-white">
      <div className="mb-1 text-center">
        <h2 className="text-3xl font-extrabold">Spin & Win</h2>
      </div>

      {/* MOBILE SLIDER / DESKTOP GRID */}
      <div className="
        mx-auto max-w-7xl px-4
        flex gap-6 overflow-x-auto snap-x snap-mandatory
        lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible
        place-items-center
      ">
        <div className="snap-center shrink-0 scale-[0.85] lg:scale-100">
          <SpinWheel borderColor="#7c1c8bff" />
        </div>
        <div className="snap-center shrink-0 scale-[0.85] lg:scale-100">
          <SpinWheel borderColor="#089c6dff" />
        </div>
        <div className="snap-center shrink-0 scale-[0.85] lg:scale-100">
          <SpinWheel borderColor="#3B82F6" />
        </div>
      </div>
    </section>
  );
};

export default Spin;
