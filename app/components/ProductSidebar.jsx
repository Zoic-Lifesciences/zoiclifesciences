export default function ProductSidebar({
  products,
  selectedCategory,
  setSelectedCategory,
}) {
  const categories = ["All", ...new Set(products.map((p) => p.category))];

  return (
    <div className="w-[90%] bg-gray-50 rounded-xl mt-[10vh] p-6">
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
