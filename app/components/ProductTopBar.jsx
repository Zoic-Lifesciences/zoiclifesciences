export default function TopBar({
  products,
  selectedPacking,
  setSelectedPacking,
}) {
  const categories = ["All", ...new Set(products.map((p) => p.type))];

  return (
    <div className="w-full bg-white rounded-xl ">
      <ul className="flex overflow-auto">
        {categories.map((cat, idx) => (
          <li
            key={idx}
            onClick={() => setSelectedPacking(cat)}
            className={`cursor-pointer hover:text-green-600 ml-5 border-2 rounded-sm py-2 border-gray-100 px-8 whitespace-nowrap ${
              selectedPacking === cat
                ? "text-green-600 font-semibold"
                : "text-gray-700"
            }`}
          >
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}
