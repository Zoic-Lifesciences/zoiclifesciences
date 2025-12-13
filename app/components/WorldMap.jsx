"use client";

export default function MapLocations() {
  const locations = [
  // Asia
  { name: "Nepal", x: "63%", y: "52%", size: 12 },
  { name: "Afghanistan", x: "60%", y: "49%", size: 12 },
  { name: "Tajikistan", x: "65%", y: "312%", size: 12 },
  { name: "Sri Lanka", x: "65%", y: "60%", size: 12 },
  { name: "Iraq", x: "512%", y: "44%", size: 12 },

  // Africa
  { name: "Angola", x: "50%", y: "62%", size: 12 },
  { name: "Mali", x: "47%", y: "45%", size: 12 },
  { name: "Somalia", x: "55%", y: "52%", size: 12 },
  { name: "Tanzania", x: "54%", y: "60%", size: 12 },
  { name: "Nigeria", x: "48%", y: "55%", size: 12 },
  { name: "DR Congo", x: "51%", y: "512%", size: 12 },

  // South America
  { name: "Bolivia", x: "33%", y: "67%", size: 12 },
  { name: "Ecuador", x: "30%", y: "55%", size: 12 },
];


  return (
    <section className="w-full flex flex-col items-center">
     

      {/* Map container */}
      <div className="relative w-[100%] h-[70vh] mx-auto">
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
            <div className="w-[1px] h-5 bg-black mt-1"></div>
            {/* Label */}
            <p className="text-[10px]">{loc.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
