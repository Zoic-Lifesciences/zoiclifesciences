import { notFound } from "next/navigation";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"

const products = [
  {
    img: "/boxq.png",
    title: "Boxq-10",
    description: "This product helps in treating various conditions related to the digestive system.",
    pack: "10*1*10 ALU ALU",
    price: "3737.00",
    category: "Tablets",
  },
  {
    img: "/ondibox.png",
    title: "ONDIBOX-4",
    description: "Used for nausea and vomiting prevention.",
    pack: "10*10 ALU ALU",
    price: "478.00",
    category: "Tablets",
  },
  {
    img: "/panbx.png",
    title: "PANBX 40",
    description: "A gastro-protective medication that reduces acid secretion effectively.",
    pack: "10*10 ALU ALU",
    price: "984.00",
    category: "Sachets",
  },
];

export default async function ProductDetail({ params }) {
  const resolvedParams = await params;
  const decodedTitle = decodeURIComponent(resolvedParams.title);
  const product = products.find((p) => p.title === decodedTitle);

  if (!product) return notFound();

  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full">
        <div className="flex flex-col items-center">
          {product.img ? (
            <img src={product.img} alt={product.title} className="h-48 object-contain mb-4" />
          ) : (
            <div className="h-48 flex items-center justify-center text-gray-400 mb-4">
              No Image Available
            </div>
          )}
          <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
            {product.category}
          </span>
          <h1 className="text-2xl font-bold mt-3">{product.title}</h1>
          <p className="text-gray-700 mt-2 text-center">{product.description}</p>
          <p className="mt-3 text-gray-500">Packaging: {product.pack}</p>
          <p className="text-orange-600 font-semibold text-lg mt-2">₹ {product.price}</p>
        </div>
      </div>
    </div>
    <Footer/>
    </>
    
  );
}
