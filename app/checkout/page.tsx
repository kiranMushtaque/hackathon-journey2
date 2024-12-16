import React from "react";

export default function Checkout() {
  return (
    <div className="main-container mx-auto mt-20 w-[1320px] h-[723px] relative">
      <div className="w-[424px] h-[700px] border border-solid border-[#e0e0e0] absolute top-0 left-[896px] z-[52]">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="w-[376px] h-[104px] relative overflow-hidden z-[53 + index] mt-[24px] mx-[24px]"
          >
            <div className="w-[278.167px] h-[88px] relative z-[54 + index] mt-0 mx-0">
              <div className="w-[29.74%] h-full bg-[rgba(196,196,196,0.2)] bg-cover bg-no-repeat absolute top-0 left-0 z-[55 + index]" />
              <span className="flex h-[30.06%] items-start font-bold text-[16px] leading-[24px] text-[#333333] absolute top-0 left-[37.78%] z-[56 + index]">
                Chicken Tikka Kabab
              </span>
              <span className="flex h-[27.56%] items-start text-[14px] leading-[22px] text-[#4f4f4f] absolute top-[39.89%] left-[37.78%] z-[57 + index]">
                150 gm net
              </span>
              <span className="flex h-[27.56%] items-start text-[14px] leading-[22px] text-[#4f4f4f] absolute top-[72.31%] left-[37.78%] z-[58 + index]">
                50$
              </span>
            </div>
            <div className="w-[353.439px] h-[0.5px] bg-[url('/images/tikka.png')] bg-no-repeat bg-cover relative z-[59 + index] mt-[15.5px]" />
          </div>
        ))}
        <div className="flex w-[376px] h-[24px] justify-between items-center relative z-[78] mt-[25px] mx-[24px]">
          <span className="h-[24px] text-[16px] leading-[24px] text-[#4f4f4f] relative z-[77]">
            Sub-total
          </span>
          <span className="h-[24px] text-[16px] leading-[24px] text-[#333333] relative z-[78]">
            130$
          </span>
        </div>
        <div className="flex w-[376px] h-[24px] justify-between items-center relative z-[81] mt-[17px] mx-[24px]">
          <span className="h-[24px] text-[16px] leading-[24px] text-[#4f4f4f] relative z-[81]">
            Shipping
          </span>
          <span className="h-[24px] text-[16px] leading-[24px] text-[#333333] relative z-[80]">
            Free
          </span>
        </div>
        <div className="flex w-[376px] h-[24px] justify-between items-center relative z-[84] mt-[17px] mx-[24px]">
          <span className="h-[24px] text-[16px] leading-[24px] text-[#4f4f4f] relative z-[84]">
            Discount
          </span>
          <span className="h-[24px] text-[16px] leading-[24px] text-[#333333] relative z-[83]">
            25%
          </span>
        </div>
        <div className="flex w-[376px] h-[24px] justify-between items-center relative z-[87] mt-[17px] mx-[24px]">
          <span className="h-[24px] text-[16px] leading-[24px] text-[#4f4f4f] relative z-[87]">
            Tax
          </span>
          <span className="h-[24px] text-[16px] leading-[24px] text-[#333333] relative z-[86]">
            54.76$
          </span>
        </div>
        <div className="w-[376px] h-px bg-[url('/images/tikka.png')] bg-cover bg-no-repeat relative z-[88] mt-[16px] mx-[24px]" />
        <div className="flex w-[376px] h-[26px] justify-between items-center relative z-[75] mt-[17px] mx-[24px]">
          <span className="h-[26px] text-[18px] leading-[26px] text-[#333333] relative z-[74]">
            Total
          </span>
          <span className="h-[26px] text-[18px] font-bold leading-[26px] text-[#333333] relative z-[75]">
            432.65$
          </span>
        </div>
        <button className="flex w-[376px] pt-[16px] pr-[48px] pb-[16px] pl-[48px] gap-[10px] justify-center items-center bg-[#ff9f0d] rounded-[6px] border-none relative z-[89] pointer mt-[25px] mx-[24px]">
          <span className="h-[26px] text-[18px] leading-[26px] text-[#fff] relative z-[90]">
            Place an order
          </span>
          <div className="w-[20px] h-[20px] relative z-[91]">
            <div className="w-full h-full bg-[url('/images/Rectangle 8933.png')] bg-no-repeat bg-cover absolute top-0 left-0 z-[92]" />
          </div>
        </button>
      </div>
      <span className="flex h-[28px] justify-start items-start font-bold text-[20px] leading-[28px] text-[#333333] absolute top-[calc(50% - 361.5px)] left-0 z-[1]">
        Shipping Address
      </span>
      <span className="flex h-[3.66%] justify-start items-center text-[16px] leading-[24px] text-[#333333] absolute top-[7.19%] left-0 z-[4]">
        First name
      </span>
      <span className="flex h-[3.32%] justify-start items-center text-[16px] leading-[24px] text-[#333333] absolute top-[7.19%] left-[33.94%] z-[25]">
        Last name
      </span>
      <div className="w-[32.12%] h-[7.75%] border border-solid border-[#e0e0e0] absolute top-[11.62%] left-0 z-[5]" />
      <div className="w-[32.12%] h-[7.75%] border border-solid border-[#e0e0e0] absolute top-[11.62%] left-[33.94%] z-[26]" />
      <span className="flex h-[3.32%] justify-start items-center text-[16px] leading-[24px] text-[#333333] absolute top-[21.58%] left-[33.94%] z-[22]">
        Phone number
      </span>
      <span className="flex h-[3.32%] justify-start items-center text-[16px] leading-[24px] text-[#333333] absolute top-[21.58%] left-0 z-[7]">
        Email address
      </span>
      <div className="w-[32.12%] h-[7.75%] border border-solid border-[#e0e0e0] absolute top-[26%] left-0 z-[8]" />
      <div className="w-[32.12%] h-[7.75%] border border-solid border-[#e0e0e0] absolute top-[26%] left-[33.94%] z-[23]" />
      <span className="flex h-[3.32%] justify-start items-center text-[16px] leading-[24px] text-[#333333] absolute top-[35.96%] left-0 z-[10]">
        Company
      </span>
      <span className="flex h-[3.32%] justify-start items-center text-[16px] leading-[24px] text-[#333333] absolute top-[35.96%] left-[33.94%] z-[34]">
        Country
      </span>
      <div className="w-[32.12%] h-[7.75%] border border-solid border-[#e0e0e0] absolute top-[40.39%] left-0 z-[11]" />
      <div className="w-[32.12%] h-[7.75%] border border-solid border-[#e0e0e0] absolute top-[40.39%] left-[33.94%] z-[35]">
        <select className="w-full h-full text-[16px] leading-[24px] text-[#333333] z-[36] relative bg-white border-none outline-none">
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
        </select>
      </div>
      <button className="flex w-[328px] pt-[16px] pr-[48px] pb-[16px] pl-[48px] gap-[10px] justify-center items-center bg-[#ff9f0d] rounded-[6px] border-none relative z-[37] pointer top-[56%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <span className="h-[26px] text-[18px] leading-[26px] text-[#fff] relative z-[38]">
          Place an order
        </span>
        <div className="w-[20px] h-[20px] relative z-[39]">
          <div className="w-full h-full bg-[url('/images/Rectangle 8933.png')] bg-no-repeat bg-cover absolute top-0 left-0 z-[40]" />
        </div>
      </button>
    </div>
  );
}
