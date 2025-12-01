import { useState } from "react";

export default function ProductSearch({ products }) {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(p => {
    const title = p.title?.toLowerCase() || "";
    const desc = p.description?.toLowerCase() || "";
    const search = searchTerm.toLowerCase();
    return title.includes(search) || desc.includes(search);
  });

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Search by brand or composition..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {filteredProducts.map((p, idx) => (
          <div key={idx} className="border rounded-xl p-4 shadow-sm">
            <img src={p.img} alt={p.title} className="w-full h-32 object-contain" />
            <h3 className="font-semibold mt-2">{p.title}</h3>
            <p className="text-gray-600">{p.description}</p>
            <p className="text-sm text-gray-500">{p.pack}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
