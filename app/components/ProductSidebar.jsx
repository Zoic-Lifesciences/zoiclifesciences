export default function ProductSidebar({ selectedCategory, setSelectedCategory }) {
  const categories = ["All", "Tablets", "Syrup", "Oil", "Sachets", "Suspensions", "Softgels"];

  return (
    <div className="w-64 bg-gray-50 p-6 rounded-xl h-fit sticky top-4">
      <h2 className="text-lg font-semibold mb-4">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat, idx) => (
          <li
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`cursor-pointer hover:text-green-600 ${
              selectedCategory === cat
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
