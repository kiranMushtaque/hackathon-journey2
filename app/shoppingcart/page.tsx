"use client";

import React, { useState } from "react";
import Image from "next/image";

const productData = [
  {
    id: 1,
    name: "Burger",
    price: 35,
    quantity: 1,
    image: "/images/unsplash_Yr4n8O_3UPc.png",
  },
  {
    id: 2,
    name: "Fresh Lime",
    price: 25,
    quantity: 1,
    image: "/images/unsplash_Yr4n8O_3UPc.png",
  },
  {
    id: 3,
    name: "Pizza",
    price: 15,
    quantity: 1,
    image: "/images/unsplash_ZqREbckCRQA.png",
  },
  {
    id: 4,
    name: "Chocolate Muffin",
    price: 5,
    quantity: 1,
    image: "/images/unsplash_Yr4n8O_3UPc.png",
  },
];

export default function Main() {
  const [products, setProducts] = useState(productData);

  const updateQuantity = (id: number, delta: number) => {
    setProducts((prev) =>
      prev.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(1, product.quantity + delta) }
          : product
      )
    );
  };

  const removeProduct = (id: number) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  const totalAmount = products.reduce(
    (sum, product) => sum + product.price * product.quantity,
    0
  );

  return (
    <div className="main-container mx-auto my-0">
      {/* Header Row */}
      <div className="flex justify-between px-10 py-4 border-b">
        <span className="font-bold text-lg">Product</span>
        <span className="font-bold text-lg">Price</span>
        <span className="font-bold text-lg">Quantity</span>
        <span className="font-bold text-lg">Total</span>
        <span className="font-bold text-lg">Remove</span>
      </div>

      {/* Product Rows */}
      {products.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between px-10 py-4 border-b"
        >
          <Image src={product.image} alt={product.name} className="w-16 h-16" />
          <span className="w-1/4">{product.name}</span>
          <span className="w-1/4">${product.price.toFixed(2)}</span>
          <div className="w-1/4 flex items-center space-x-2">
            <button
              className="px-2 py-1 border rounded"
              onClick={() => updateQuantity(product.id, -1)}
            >
              -
            </button>
            <span>{product.quantity}</span>
            <button
              className="px-2 py-1 border rounded"
              onClick={() => updateQuantity(product.id, 1)}
            >
              +
            </button>
          </div>
          <span className="w-1/4">
            ${(product.price * product.quantity).toFixed(2)}
          </span>
          <button
            onClick={() => removeProduct(product.id)}
            className="text-red-500 font-bold"
          >
            X
          </button>
        </div>
      ))}

      {/* Divider and Sections */}
      <div className="w-[1320px] h-px bg-[url(/images/62c99905-d174-4e05-8b85-c832801debee.png)] bg-[length:100%_100%] bg-no-repeat relative z-[124] mt-[17.524px] mr-0 mb-0 ml-[301px]" />
      <div className="flex w-[807px] h-[41px] justify-between items-center relative z-[168] mt-[119.5px] mr-0 mb-0 ml-[301px]">
        <span className="h-[40px] shrink-0 font-['Helvetica'] text-[32px] font-bold leading-[40px] text-[#333333] relative text-left whitespace-nowrap z-[153]">
          Coupon Code
        </span>
        <span className="h-[40px] shrink-0 font-['Helvetica'] text-[32px] font-bold leading-[40px] text-[#333333] relative text-left whitespace-nowrap z-[168]">
          Total Bill
        </span>
      </div>
      <div className="flex w-[1320px] h-[188px] justify-between items-center relative z-[169] mt-[23px] mr-0 mb-0 ml-[301px]">
        <div className="w-[648px] h-[188px] shrink-0 text-[0px] rounded-[6px] border-solid border border-[#e0e0e0] relative z-[154]">
          <span className="flex w-[472px] h-[54px] justify-start items-start font-['Inter'] text-[18px] font-normal leading-[26px] text-[#828282] relative text-left z-[155] mt-[24px] mr-0 mb-0 ml-[20px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non
          </span>
          <div className="w-[598px] h-[62px] rounded-[6px] border-solid border border-[#e0e0e0] relative z-[157] mt-[25px] mr-0 mb-0 ml-[20px]">
            <button className="w-[14.88%] h-full bg-[#ff9f0d] rounded-[6px] border-none absolute top-[-1.61%] left-[84.95%] z-[159] pointer">
              <span className="flex h-[41.94%] justify-start items-start font-['Inter'] text-[18px] font-normal leading-[26px] text-[#fff] absolute top-[29.03%] left-[21.35%] text-left whitespace-nowrap z-[160]">
                Apply
              </span>
            </button>
            <div className="w-[20.74%] h-[38.71%] font-['Inter'] text-[16px] font-normal leading-[24px] text-[#828282] absolute top-[29.03%] left-[3.18%] text-left overflow-hidden z-[158]" />
          </div>
        </div>
        <div className="w-[648px] h-[185px] shrink-0 rounded-[6px] border-solid border border-[#bdbdbd] relative z-[169]">
          <div className="flex w-[607px] h-[28px] justify-between items-center relative z-[165] mt-[24px] mr-0 mb-0 ml-[20px]">
            <span className="h-[28px] shrink-0 font-['Helvetica'] text-[20px] font-bold leading-[28px] text-[#333333] relative text-left whitespace-nowrap z-[162]">
              Cart Subtotal
            </span>
            <span className="h-[26px] shrink-0 font-['Inter'] text-[18px] font-bold leading-[26px] text-[#333333] relative text-left whitespace-nowrap z-[165]">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
          <div className="flex w-[602px] h-[26px] justify-between items-center relative z-[166] mt-[16px] mr-0 mb-0 ml-[20px]">
            <span className="h-[26px] shrink-0 font-['Inter'] text-[18px] font-normal leading-[26px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[164]">
              Shipping Charge
            </span>
            <span className="h-[26px] shrink-0 font-['Inter'] text-[18px] font-normal leading-[26px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[166]">
              $10.00
            </span>
          </div>
          <div className="w-[648px] h-px bg-[url(/images/0c6f5d35-6512-4a5c-8f79-f166c98ffd63.png)] bg-cover bg-no-repeat relative z-[170] mt-[24px] mr-0 mb-0 ml-0" />
          <div className="flex w-[610px] h-[28px] justify-between items-center relative z-[167] mt-[17px] mr-0 mb-0 ml-[20px]">
            <span className="h-[28px] shrink-0 font-['Helvetica'] text-[20px] font-bold leading-[28px] text-[#333333] relative text-left whitespace-nowrap z-[163]">
              Total Amount
            </span>
            <span className="h-[26px] shrink-0 font-['Inter'] text-[18px] font-bold leading-[26px] text-[#333333] relative text-left whitespace-nowrap z-[167]">
              ${totalAmount.toFixed(2)}
            </span>
          </div>
        </div>
      </div>
      <button className="w-[1320px] h-[55px] bg-[#ff9f0d] rounded-[6px] border-none flex justify-center items-center relative z-[171] mt-[27px] mr-0 mb-0 ml-[301px]">
        <span className="flex w-[36.14%] h-[40.91%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[24px] text-[#ffffff] relative text-left z-[170] mt-[7px] mr-0 mb-0 ml-[1px]">
          Proceed to Checkout
        </span>
      </button>
    </div>
  );
}
