import Image from "next/image";

const ShopDetailsPage = () => {
  return (
    <div className="shop-details bg-white text-white">
      {/* Header Section */}
      <div className="header py-12 text-center">
        <h1 className="text-4xl font-bold text-yellow-500">Shop Details</h1>
        <p className="text-gray-400 mt-2">Home / Shop / Shop Details</p>
      </div>

      {/* Product Section */}
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 ">
        <div className="product-images order-1 lg:order-1">
          <Image
            src="/images/Rectangle 8883.png"
            alt="Product Image"
            width={491}
            height={596}
            className="rounded transform hover:scale-105 transition-transform duration-300"
          />
          <div className="grid grid-cols-4 gap-4 ">
            <Image
              src="/images/Rectangle 8884.png"
              alt="Thumbnail 1"
              width={132}
              height={129}
              className="rounded transform hover:scale-110 transition-transform duration-300"
            />
            <Image
              src="/images/Rectangle 8885.png"
              alt="Thumbnail 2"
              width={132}
              height={129}
              className="rounded transform hover:scale-110 transition-transform duration-300"
            />
            <Image
              src="/images/Rectangle 8886.png"
              alt="Thumbnail 3"
              width={132}
              height={129}
              className="rounded transform hover:scale-110 transition-transform duration-300"
            />
            <Image
              src="/images/Rectangle 8887.png"
              alt="Thumbnail 4"
              width={132}
              height={129}
              className="rounded transform hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
        <div className="product-details order-2 lg:order-2">
          <h2 className="text-3xl font-bold">Yummy Chicken Chup</h2>
          <p className="text-yellow-500 text-2xl mt-4">$49.00</p>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            ultricies magna eu ultrices finibus.
          </p>
          <div className="flex items-center mt-4">
            <input
              type="number"
              defaultValue={1}
              className="w-16 bg-gray-800 text-white text-center py-2"
            />
            <button className="bg-yellow-500 text-black font-semibold px-6 py-2 ml-4 rounded transform hover:scale-105 transition-transform duration-300">
              Add to Cart
            </button>
          </div>
          <div className="social-share flex space-x-4 mt-4">
            <a
              href="#"
              className="text-gray-400 transform hover:skew-x-6 transition-transform duration-300"
            >
              Share
            </a>
            <a
              href="#"
              className="text-gray-400 transform hover:skew-x-6 transition-transform duration-300"
            >
              Tweet
            </a>
            <a
              href="#"
              className="text-gray-400 transform hover:skew-x-6 transition-transform duration-300"
            >
              Save
            </a>
          </div>
        </div>
      </div>

      {/* Description Section */}
      <div className="description-section container mx-auto py-12">
        <h2 className="text-2xl font-bold text-yellow-500">Description</h2>
        <p className="text-gray-400 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ultricies magna eu ultrices finibus. Vivamus auctor eros ac sapien
          efficitur cursus. Proin faucibus vel augue eu viverra. Integer id
          egestas nibh, non sagittis nisi.
        </p>
      </div>

      {/* Similar Products Section */}
      <div className="similar-products container mx-auto py-12">
        <h2 className="text-2xl font-bold text-yellow-500">Similar Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          {/* Product Card */}
          <div className="product-card bg-gray-800 p-4 rounded transform hover:rotate-3 transition-transform duration-300">
            <Image
              src="/images/unsplash_-GFCYhoRe48 (2).png"
              alt="Similar Product 1"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold mt-4">Delicious Burger</h3>
            <p className="text-yellow-500 mt-2">$29.00</p>
          </div>
          <div className="product-card bg-gray-800 p-4 rounded transform hover:rotate-3 transition-transform duration-300">
            <Image
              src="/images/unsplash_-lHZUkiWM74.png"
              alt="Similar Product 2"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold mt-4">Cheese Pizza</h3>
            <p className="text-yellow-500 mt-2">$35.00</p>
          </div>
          <div className="product-card bg-gray-800 p-4 rounded transform hover:rotate-3 transition-transform duration-300">
            <Image
              src="/images/unsplash_-lHZUkiWM74.png"
              alt="Similar Product 3"
              width={300}
              height={200}
              className="rounded"
            />
            <h3 className="text-lg font-bold mt-4">Spicy Tacos</h3>
            <p className="text-yellow-500 mt-2">$24.00</p>
          </div>
          <div className="product-card bg-gray-800 p-4 rounded transform hover:rotate-3 transition-transform duration-300">
            <Image
              src="/images/unsplash_ZuIDLSz3XLg (1).png"
              alt="Similar Product 4"
              width={312}
              height={267}
              className="rounded"
            />
            <h3 className="text-lg font-bold mt-4">Noodles Bowl</h3>
            <p className="text-yellow-500 mt-2">$30.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetailsPage;
