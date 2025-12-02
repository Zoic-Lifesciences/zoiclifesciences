"use client";

export default function MapLocations() {
  const locations = [
    {
      name: "Dehradun",
      x: "55%", // adjust marker position on image
      y: "25%",
      size: 28,
    },
    {
      name: "Himachal Pradesh",
      x: "48%",
      y: "35%",
      size: 32,
    },
    {
      name: "Gurugram",
      x: "50%",
      y: "50%",
      size: 38,
    },
    {
      name: "Mumbai",
      x: "30%",
      y: "65%",
      size: 55,
    },
  ];

  return (
    <section className="w-full flex flex-col items-center">
     

      {/* Map container */}
      <div className="relative w-[90%] h-[70vh] mx-auto">
        <img
          src="/worldmap.avif"
          alt="India Map"
          className="w-full h-full object-contain opacity-90"
        />

        {locations.map((loc, i) => (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              left: loc.x,
              top: loc.y,
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Dot */}
            <div
              className="rounded-full bg-blue-300 opacity-80 border border-blue-400"
              style={{
                width: loc.size,
                height: loc.size,
              }}
            />
            {/* Vertical Line */}
            <div className="w-[1px] h-10 bg-black mt-1"></div>
            {/* Label */}
            <p className="text-sm">{loc.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
