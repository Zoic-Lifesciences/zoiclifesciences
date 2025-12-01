const XLSX = require("xlsx");
const fs = require("fs");

// Load your Excel file
const workbook = XLSX.readFile("products.xlsx");
const sheet = workbook.Sheets[workbook.SheetNames[0]];
const rows = XLSX.utils.sheet_to_json(sheet, { header: 1 });

let products = [];
let currentCategory = "";

// Loop through rows
rows.forEach(row => {
  if (!row || row.length === 0) return;

  const firstCell = row[0];

  // Detect category rows
  if (typeof firstCell === "string" && isNaN(firstCell)) {
    currentCategory = firstCell.trim();
    return;
  }

  // Detect product rows
  if (typeof firstCell === "number") {
    const [_, brand, composition, pack, productPacking, price] = row;

    products.push({
  img: "/product.png",
  title: String(brand || "").trim(),
  description: String(composition || "").trim(),
  pack: String(pack || "").trim(),
  productPacking: String(productPacking || "").trim(),
  price: String(price || "").trim(),
  category: currentCategory
});

  }
});

// Save JSON to file
fs.writeFileSync("products.json", JSON.stringify(products, null, 2));

console.log("✅ products.json created successfully!");
