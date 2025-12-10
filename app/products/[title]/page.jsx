import { notFound } from "next/navigation";
import NavBar from "../../components/NavBar"
import Footer from "../../components/Footer"
import products from "@/data/products.json";



export default async function ProductDetail({ params }) {
  const resolvedParams = await params;
  const decodedTitle = decodeURIComponent(resolvedParams.title);
  const product = products.find((p) => p.title === decodedTitle);

  if (!product) return notFound();
   // IMAGE NAME LOGIC
  const imageName = product.title.trim().split(" ")[0];
  const encodedImageName = encodeURIComponent(imageName);

  return (
    <>
    <NavBar/>
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-8">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full">
        <div className="flex flex-col items-center">
          {product.img ? (
            <img
              src={`/productImages/${encodedImageName}.jpg`}
              alt={product.title}
              className="h-48 object-contain mb-4"
            />

          ) : (
            <div className="h-48 flex items-center justify-center text-gray-400 mb-4">
              No Image Available
            </div>
          )}
          <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">
            {product.category}
          </span>
          <span className="bg-yellow-500 mt-5 text-white text-sm px-4 py-1 rounded-full">
            {product.productPacking}
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
