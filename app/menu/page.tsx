















import Image from "next/image";

export default function MenuPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      {/* <header className="text-center py-10 "> */}
      <header className=" text-center">
        <h1 className="text-4xl font-bold text-black ">Our Menu</h1>
        <p className="text-gray-500 mt-2">Discover our delicious offerings</p>
      </header>

      {/* Starter Menu Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <Image
              src="/images/Rectangle 8874 (1).png"
              alt="Starter Menu"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
          {/* Starter Menu Section */}
          <section className="container mx-auto px-4 py-10">
            <div className="grid lg:grid-cols-2 gap-10">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-center pt-24">
                  Starter Menu
                </h2>
                <ul className="space-y-4">
                  <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                    <h5 className="font-semibold text-center">
                      Asian Grilled Chicken Skewers
                    </h5>
                    <span className="text-orange-500">$35</span>
                    <p className="text-center mt-2">
                      Tender and juicy chicken skewers grilled to perfection,
                      served with a side of fresh vegetables and a tangy dipping
                      sauce.
                    </p>
                  </li>
                  <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                    <h5 className="font-semibold text-center">
                      Beetroot and Lentil Salad
                    </h5>
                    <span className="text-orange-500">$45</span>
                    <p className="text-center mt-2">
                      A refreshing mix of beetroot, lentils, and fresh herbs,
                      topped with a zesty lemon dressing.
                    </p>
                  </li>
                  <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                    <h5 className="font-semibold text-center">
                      Tomato-Basil Pizza Package
                    </h5>
                    <span className="text-orange-500">$55</span>
                    <p className="text-center mt-2">
                      A classic pizza topped with ripe tomatoes, fresh basil,
                      and a blend of mozzarella cheese.
                    </p>
                  </li>
                  <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                    <h5 className="font-semibold text-center">
                      Spicy Vegan Potato Curry
                    </h5>
                    <span className="text-orange-500">$40</span>
                    <p className="text-center mt-2">
                      A flavorful vegan curry made with spicy potatoes and mixed
                      vegetables, served with steamed rice.
                    </p>
                  </li>
                </ul>
              </div>
           
            </div>
          </section>
        </div>
      </section>

      {/* Drinks Section */}
      <section className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-4xl font-bold mb-6 text-center pt-24">
              Drinks
            </h2>
            <ul className="space-y-10">
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">Café Macchiato</h5>
                <span className="text-orange-500">$15</span>
                <p className="text-center mt-2">
                  Rich and smooth macchiato with a shot of espresso, topped with
                  a creamy froth.
                </p>
              </li>
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Agave Spirit Cappuccino
                </h5>
                <span className="text-orange-500">$20</span>
                <p className="text-center mt-2">
                  A twist on the classic cappuccino with a hint of agave
                  sweetness.
                </p>
              </li>
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Citrus Latte Cocktail
                </h5>
                <span className="text-orange-500">$18</span>
                <p className="text-center mt-2">
                  A refreshing latte with a hint of citrus, perfect for a summer
                  day.
                </p>
              </li>
              <li className="flex flex-col items-center hover:text-[#FF9F0D]">
                <h5 className="font-semibold text-center">
                  Tropical Basil Fruit Punch
                </h5>
                <span className="text-orange-500">$22</span>
                <p className="text-center mt-2">
                  A tropical fruit punch mixed with basil leaves, offering a
                  sweet and refreshing beverage.
                </p>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="/images/unsplash_akwA-GPF710.png"
              alt="Drinks"
              width={500}
              height={400}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="bg-black text-white py-10">
        <div className="container mx-auto flex justify-around text-center">
          <div className="flex flex-col items-center">
            <Image
              src="/images/Group (1).png"
              alt="Chef Icon"
              width={218}
              height={247}
              className="mb-2"
            />
            <h3 className="text-4xl font-bold">420</h3>
            <p>Professional Chefs</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/Group (4).png"
              alt="Food Icon"
              width={218}
              height={247}
              className="mb-2"
            />
            <h3 className="text-4xl font-bold">320</h3>
            <p>Items of Food</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/Group (2).png"
              alt="Experience Icon"
              width={218}
              height={247}
              className="mb-2"
            />
            <h3 className="text-4xl font-bold">30+</h3>
            <p>Years of Experience</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/Group (3).png"
              alt="Customers Icon"
              width={218}
              height={247}
              className="mb-2"
            />
            <h3 className="text-4xl font-bold">220</h3>
            <p>Happy Customers</p>
          </div>
        </div>
      </section>
    </div>
  );
}





























