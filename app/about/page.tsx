





























import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <div className="main-container mx-auto my-0 relative w-[1920px] h-[4716px]">
      <div className="relative z-[165] mt-[132px] mx-[300px] w-[1320px] h-[734px]">
        <div className="bg-[rgba(196,196,196,0.2)] bg-cover bg-no-repeat rounded-[6px] w-[336px] h-[536px] absolute top-0 left-0 z-[151]">
          <Image
            src="/images/unsplash_lP5MCM6nZ5A (2).png"
            alt="Background Image"
            width={336}
            height={536}
            className="rounded-[6px] relative z-[152]"
          />
        </div>
        <div className="bg-cover bg-no-repeat rounded-[6px] w-[309px] h-[271px] absolute top-[54px] left-[360px] z-[149]">
          <Image
            src="/images/unsplash_CLMpC9UhyTo (2).png"
            alt="Inner Background Image"
            width={400}
            height={300}
            className="rounded-[6px] relative z-[150]"
          />
        </div>
        <span className="font-['Miniver'] text-[18px] font-normal leading-[25.934px] text-[#ff9f0d] absolute top-[24.96%] left-[60.15%] z-[156]">
          About us
        </span>
        <div className="bg-cover bg-no-repeat w-[34px] h-px absolute top-[201px] left-[872px] z-[157]">
          <Image
            src="/images/Line 45.png"
            alt="Divider Image"
            width={112}
            height={26}
            className="relative z-[158]"
          />
        </div>
        <span className="font-['Helvetica'] text-[48px] font-bold leading-[56px] text-[#333333] absolute top-[29.58%] left-[60.15%] z-[153]">
          Food is an important <br /> part Of a balanced Diet
        </span>
        <div className="bg-cover bg-no-repeat rounded-[6px] w-[309px] h-[382px] absolute top-[352px] left-[360px] z-[150]">
          <Image
            src="/images/unsplash_ZuIDLSz3XLg (1).png"
            alt="Background Image"
            width={400}
            height={300}
            className="rounded-[6px] relative z-[151]"
          />
        </div>
        <span className="font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] absolute top-[49.15%] left-[60.15%] z-[154]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
          pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
          augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
          vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </span>
        <div className="bg-[length:100%_100%] bg-no-repeat w-[4.55%] h-[8.15%] absolute top-[66.54%] left-[76.14%] z-[162]">
          <Image
            src="/images/Component 1.png"
            alt="Decorative Image"
            width={60}
            height={60}
            className="relative z-[163]"
          />
        </div>
        <div className="flex justify-center items-center bg-[#ff9f0d] rounded-[6px] w-[195px] h-[58px] pt-[16px] pr-[48px] pb-[16px] pl-[48px] gap-[10px] absolute top-[491.001px] left-[794px] z-[165]">
          <span className="font-['Inter'] text-[18px] font-bold leading-[26px] text-[#fff] relative text-left z-[166]">
            Show more
          </span>
        </div>
        <div className="bg-[length:100%_100%] bg-no-repeat w-[1.82%] h-[3.26%] absolute top-[68.99%] left-[77.5%] z-[164]">
          <Image
            src="/images/Component 1.png"
            alt="Icon Image"
            width={24}
            height={24}
            className="relative z-[165]"
          />
        </div>
        <span className="font-['Inter'] text-[16px] font-bold leading-[24px] text-[#333333] absolute top-[68.99%] left-[81.44%] z-[160]">
          Watch video
        </span>
      </div>
      <span className="font-['Helvetica'] text-[48px] font-bold leading-[55.858px] text-[#333333] block mt-[117.497px] ml-[780px] z-[4]">
        Why Choose us
      </span>
      <span className="font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] flex justify-center items-start w-[579px] h-[47.878px] z-[5] mt-[7.98px] ml-[671px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
        pellentesque bibendum non dui volutpat fringilla bibendum.
      </span>
      <div className="bg-cover bg-no-repeat relative w-[1320px] h-[386px] z-[1] mt-[58.787px] ml-[300px]">
        <Image
          src="/images/unsplash_3iexvMShGfQ.png"
          alt="Backg"
          width={1320}
          height={386}
          className="relative z-[2]"
        />
      </div>
      <div className="flex justify-between items-center relative w-[1320px] h-[253px] z-[16] mt-[56px] ml-[300px]">
        <div className="relative overflow-hidden w-[359px] h-[225px] z-[16]">
          <Image
            src="/images/Student.png"
            alt="Chef Image"
            width={80}
            height={80}
            className="relative z-[17] top-8"
          />
          <span className="font-['Helvetica'] text-[24px] font-bold leading-[29px] text-[#333333] ml-[122px] mt-[24px] z-[18]">
            Best Chef
          </span>
          <span className="font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] flex justify-center items-start w-[359px] h-[76px] z-[19] mt-[16px] ml-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat.
          </span>
        </div>
        <div className="relative overflow-hidden w-[359px] h-[228px] z-[12]">
          <Image
            src="/images/Coffee.png"
            alt="Chef Image"
            width={80}
            height={80}
            className="relative z-[13] top-8"
          />
          <span className="font-['Helvetica'] text-[24px] font-bold leading-[29px] text-[#333333] ml-[122px] mt-[24px] z-[14]">
            Great Taste
          </span>
          <span className="font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] flex justify-center items-start w-[359px] h-[76px] z-[15] mt-[16px] ml-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat.
          </span>
        </div>
        <div className="relative overflow-hidden w-[359px] h-[228px] z-[14]">
          <Image
            src="/images/Person.png"
            alt="Chef Image"
            width={80}
            height={80}
            className="relative z-[15] top-8"
          />
          <span className="font-['Helvetica'] text-[24px] font-bold leading-[29px] text-[#333333] ml-[122px] mt-[24px] z-[16]">
            Quality Food
          </span>
          <span className="font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] flex justify-center items-start w-[359px] h-[76px] z-[17] mt-[16px] ml-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat.
          </span>
        </div>
      </div>{" "}
      {/* 2nd part */}
      <div className="w-full h-[686px] relative mt-[122px]">
        {/* Background Layer 1 */}
        <div className="w-full h-[460px] bg-cover bg-no-repeat bg-[url('/images/Bg.png')] absolute top-0 left-0 z-[21]">
          {/* Background Layer 2 */}
          <div className="w-full h-[460px] bg-cover bg-no-repeat bg-[url('/images/')] absolute top-0 left-0 z-[52]">
            <div className="w-[160.512px] h-[176px] bg-cover bg-no-repeat bg-[url('/images/unsplash_x1ZZWyDU8sU.png')] absolute top-[88px] left-[860px] z-[23]"></div>

            <span className="flex h-[56px] items-start text-[48px] font-bold text-white absolute top-[120px] left-[789px] z-[24]">
              Team Member
            </span>
            <span className="flex h-[56px] items-start text-[48px] font-bold text-white absolute top-[120px] left-[789px] z-[55]">
              Team Member
            </span>
            <span className="flex w-[418px] h-[48px] items-center text-[16px] font-normal text-white absolute top-[184px] left-[742px] z-[25]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Varius sed pharetra dictum neque massa congue
            </span>
            <span className="flex w-[418px] h-[48px] items-center text-[16px] font-normal text-white absolute top-[184px] left-[742px] z-[56]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br /> Varius sed pharetra dictum neque massa congue
            </span>
          </div>
        </div>
        <div className="flex w-[1320px] h-[398px] justify-between items-center relative z-[21] mt-[24px] ml-[300px] top-72">
          <div className="w-[312px] h-[398px] shrink-0 bg-[rgba(122,122,122,0.2)] bg-[url(/images/unsplash_v3OlBE6-fhU.png)] bg-cover bg-no-repeat relative z-[6]">
            <div className="w-[312px] h-[88px] text-[0px] bg-[#fff] relative shadow-[0_0_80px_0_rgba(205,205,205,0.25)] z-[7] mt-[310px] mr-0 mb-0 ml-0">
              <span className="block h-[28px] font-['Helvetica'] text-[20px] font-bold leading-[28px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[8] mt-[16px] mr-0 mb-0 ml-[101px]">
                Mark Henry
              </span>
              <span className="block h-[24px] font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#828282] relative text-left whitespace-nowrap z-[9] mt-[4px] mr-0 mb-0 ml-[132px]">
                Owner
              </span>
            </div>
          </div>

          {/* Image 2 */}
          <div className="w-[312px] h-[398px] shrink-0 bg-[rgba(122,122,122,0.2)] bg-[url(/images/unsplash_v3OlBE6-fhU.png)] bg-cover bg-no-repeat relative z-[6]">
            <div className="w-[312px] h-[88px] text-[0px] bg-[#fff] z-[7] mt-[310px] mr-0 mb-0 ml-0"></div>
          </div>
          {/* 3 image */}
          <div className="w-[312px] h-[398px] shrink-0 bg-[rgba(122,122,122,0.2)] bg-[url(/images/unsplash_v3OlBE6-fhU.png)] bg-cover bg-no-repeat relative z-[6]">
            <div className="w-[312px] h-[88px] text-[0px] bg-[#fff]  z-[7] mt-[310px] mr-0 mb-0 ml-0"></div>
          </div>
          {/* 4 image */}
          <div className="w-[312px] h-[398px] shrink-0 bg-[rgba(122,122,122,0.2)] bg-[url(/images/unsplash_v3OlBE6-fhU.png)] bg-cover bg-no-repeat relative z-[6]">
            <div className="w-[312px] h-[88px] text-[0px] bg-[#fff]  z-[7] mt-[310px] mr-0 mb-0 ml-0"></div>
          </div>
        </div>
      </div>
      {/* whtat our client syning */}
      <div className="bg-white ml-[60px] mt-9 z-10">
        <Image
          src="/images/Group 1000002250.png"
          alt="testimonial"
          width={129}
          height={40}
        />
        <h3 className="text-[48px] text-black font-bold">
          What our clients are saying
        </h3>

        <div className="flex justify-center relative">
          <Image
            src="/images/Text.png"
            alt="testimonial"
            width={868}
            height={451}
            className="z-10"
          />
          <div
            className="absolute inset-0 bg-white z-0"
            style={{
              width: "868.47px",
              height: "550px",
              top: "80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          ></div>
        </div>
      </div>
      {/* menu */}
      <div className="main-container w-[1320px] h-[941px] relative mx-auto my-0">
        <div className="w-[418px] h-[176px] relative z-[11] mt-0 mr-0 mb-0 ml-[457px]">
          <div className="w-[160.512px] h-[176px] bg-[url(/images/unsplash_x1ZZWyDU8sU.png)] bg-cover bg-no-repeat absolute top-0 left-[124px]" />
          <span className="flex h-[56px] justify-start items-start font-['Helvetica'] text-[48px] font-bold leading-[56px] text-[#333333] absolute top-[24px] left-[31px] text-left whitespace-nowrap z-[1]">
            Our Food Menu
          </span>
          <span className="flex w-[418px] h-[27.27%] justify-center items-start font-['Inter'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] absolute top-1/2 left-0 text-center overflow-hidden z-[11]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Varius sed pharetra dictum neque massa congue
          </span>
        </div>
        <div className="flex w-[622px] h-[28px] justify-between items-center relative z-[8] mt-[16px] mr-0 mb-0 ml-[357px]">
          <span className="h-[28px] shrink-0 font-['Inter'] text-[20px] font-normal leading-[28px] text-[#ff9f0d] relative text-left whitespace-nowrap z-[3]">
            Breakfast
          </span>
          <span className="h-[28px] shrink-0 font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[4]">
            Lunch
          </span>
          <span className="h-[28px] shrink-0 font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[5]">
            Dinner
          </span>
          <span className="h-[28px] shrink-0 font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[6]">
            Dessert
          </span>
          <span className="h-[28px] shrink-0 font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[7]">
            Drink
          </span>
          <span className="h-[28px] shrink-0 font-['Inter'] text-[20px] font-normal leading-[28px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[8]">
            Snack
          </span>
        </div>
        <div className="w-[1320.001px] h-[2px] bg-[url(/images/11e2cde5-a1fd-4c0b-9671-516423177f92.png)] bg-cover bg-no-repeat relative z-10 mt-[23px] mr-0 mb-0 ml-0" />
        <div className="w-[91px] h-[2px] bg-[url(/images/159ce4eb-cb65-42cc-bbf5-55e62a5c477e.png)] bg-cover bg-no-repeat relative z-[61] mt-[-2px] mr-0 mb-0 ml-[357px]" />
        <div className="w-[1320px] h-[34px] relative z-[24] mt-[56px] mr-0 mb-0 ml-0">
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#333333] absolute top-0 left-[50.91%] text-left whitespace-nowrap z-[22]">
            Alder Grilled Chinook Salmon
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#ff9f0d] absolute top-0 left-[96.89%] text-left whitespace-nowrap z-[24]">
            32$
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#ff9f0d] absolute top-[5.88%] left-0 text-left whitespace-nowrap z-[16]">
            Alder Grilled Chinook Salmon
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#ff9f0d] absolute top-[5.88%] left-[45.98%] text-left whitespace-nowrap z-[18]">
            32$
          </span>
        </div>
        <div className="flex w-[1040px] h-[26px] justify-between items-center relative z-20 mt-[5px] mr-0 mb-0 ml-0">
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[14]">
            Toasted French bread topped with romano, cheddar
          </span>
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] relative text-left whitespace-nowrap z-20">
            Toasted French bread topped with romano, cheddar
          </span>
        </div>
        <div className="flex w-[735px] h-[26px] justify-between items-center relative z-[21] mt-[6px] mr-0 mb-0 ml-0">
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#828282] relative text-left whitespace-nowrap z-[15]">
            560 CAL
          </span>
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#828282] relative text-left whitespace-nowrap z-[21]">
            560 CAL
          </span>
        </div>
        <div className="w-[648px] h-px bg-[url(/images/4089e8f4-a903-437f-a373-a167325fed97.png)] bg-[length:100%_100%] bg-no-repeat relative z-[23] mt-[13px] mr-0 mb-0 ml-[672px]" />
        <div className="w-[648px] h-px bg-[url(/images/faf21672-9c0d-49ef-bd93-390276182a76.png)] bg-[length:100%_100%] bg-no-repeat relative z-[17] mt-px mr-0 mb-0 ml-0" />
        <div className="w-[1320px] h-[34px] relative z-[36] mt-[22px] mr-0 mb-0 ml-0">
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#333333] absolute top-0 left-[50.91%] text-left whitespace-nowrap z-[34]">
            Alder Grilled Chinook Salmon
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#ff9f0d] absolute top-0 left-[96.89%] text-left whitespace-nowrap z-[36]">
            32$
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#333333] absolute top-[5.88%] left-0 text-left whitespace-nowrap z-[28]">
            Alder Grilled Chinook Salmon
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#ff9f0d] absolute top-[5.88%] left-[45.98%] text-left whitespace-nowrap z-30">
            32$
          </span>
        </div>
        <div className="flex w-[1040px] h-[26px] justify-between items-center relative z-[32] mt-[5px] mr-0 mb-0 ml-0">
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[26]">
            Toasted French bread topped with romano, cheddar
          </span>
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[32]">
            Toasted French bread topped with romano, cheddar
          </span>
        </div>
        <div className="flex w-[735px] h-[26px] justify-between items-center relative z-[33] mt-[6px] mr-0 mb-0 ml-0">
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#828282] relative text-left whitespace-nowrap z-[27]">
            560 CAL
          </span>
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#828282] relative text-left whitespace-nowrap z-[33]">
            560 CAL
          </span>
        </div>
        <div className="w-[648px] h-px bg-[url(/images/9dd3ef5c-c648-4359-8f21-37aaff803e91.png)] bg-[length:100%_100%] bg-no-repeat relative z-[35] mt-[13px] mr-0 mb-0 ml-[672px]" />
        <div className="w-[648px] h-px bg-[url(/images/f24cd5b0-8fb7-4ee7-a466-0ea6af1b99ef.png)] bg-[length:100%_100%] bg-no-repeat relative z-[29] mt-px mr-0 mb-0 ml-0" />
        <div className="w-[1320px] h-[34px] relative z-[48] mt-[35px] mr-0 mb-0 ml-0">
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#333333] absolute top-0 left-[50.91%] text-left whitespace-nowrap z-[46]">
            Alder Grilled Chinook Salmon
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#ff9f0d] absolute top-0 left-[96.89%] text-left whitespace-nowrap z-[48]">
            32$
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#333333] absolute top-[5.88%] left-0 text-left whitespace-nowrap z-40">
            Alder Grilled Chinook Salmon
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#ff9f0d] absolute top-[5.88%] left-[45.98%] text-left whitespace-nowrap z-[42]">
            32$
          </span>
        </div>
        <div className="flex w-[1040px] h-[26px] justify-between items-center relative z-[44] mt-[5px] mr-0 mb-0 ml-0">
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[38]">
            Toasted French bread topped with romano, cheddar
          </span>
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[44]">
            Toasted French bread topped with romano, cheddar
          </span>
        </div>
        <div className="flex w-[735px] h-[26px] justify-between items-center relative z-[45] mt-[6px] mr-0 mb-0 ml-0">
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#828282] relative text-left whitespace-nowrap z-[39]">
            560 CAL
          </span>
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#828282] relative text-left whitespace-nowrap z-[45]">
            560 CAL
          </span>
        </div>
        <div className="w-[648px] h-px bg-[url(/images/df562d19-59a1-4af4-9b09-db35fb451f87.png)] bg-[length:100%_100%] bg-no-repeat relative z-[47] mt-[13px] mr-0 mb-0 ml-[672px]" />
        <div className="w-[648px] h-px bg-[url(/images/c16c20e8-72ab-43d7-acea-fd063251f74a.png)] bg-[length:100%_100%] bg-no-repeat relative z-[41] mt-px mr-0 mb-0 ml-0" />
        <div className="w-[1320px] h-[34px] relative z-[60] mt-[23px] mr-0 mb-0 ml-0">
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#333333] absolute top-0 left-[50.91%] text-left whitespace-nowrap z-[58]">
            Alder Grilled Chinook Salmon
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#ff9f0d] absolute top-0 left-[96.89%] text-left whitespace-nowrap z-[60]">
            32$
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#333333] absolute top-[5.88%] left-0 text-left whitespace-nowrap z-[52]">
            Alder Grilled Chinook Salmon
          </span>
          <span className="flex h-[94.12%] justify-start items-start font-['Helvetica'] text-[24px] font-bold leading-[32px] text-[#ff9f0d] absolute top-[5.88%] left-[45.98%] text-left whitespace-nowrap z-[54]">
            32$
          </span>
        </div>
        <div className="flex w-[1040px] h-[26px] justify-between items-center relative z-[56] mt-[5px] mr-0 mb-0 ml-0">
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] relative text-left whitespace-nowrap z-50">
            Toasted French bread topped with romano, cheddar
          </span>
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#4f4f4f] relative text-left whitespace-nowrap z-[56]">
            Toasted French bread topped with romano, cheddar
          </span>
        </div>
        <div className="flex w-[735px] h-[26px] justify-between items-center relative z-[57] mt-[6px] mr-0 mb-0 ml-0">
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#828282] relative text-left whitespace-nowrap z-[51]">
            560 CAL
          </span>
          <span className="h-[24px] shrink-0 font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#828282] relative text-left whitespace-nowrap z-[57]">
            560 CAL
          </span>
        </div>
        <div className="w-[648px] h-px bg-[url(/images/8262b45f-521d-4bc6-8db9-a8dc86f34ab7.png)] bg-[length:100%_100%] bg-no-repeat relative z-[59] mt-[13px] mr-0 mb-0 ml-[672px]" />
        <div className="w-[648px] h-px bg-[url(/images/8468f205-ea88-4b42-9783-a1764694ab8f.png)] bg-[length:100%_100%] bg-no-repeat relative z-[53] mt-px mr-0 mb-0 ml-0" />
        <div className="flex w-[128px] pt-[14px] pr-[32px] pb-[14px] pl-[32px] gap-[10px] justify-center items-center flex-nowrap border-solid border border-[#ff9f0d] relative z-[62] mt-[56px] mr-0 mb-0 ml-[588px]">
          <span className="h-[24px] shrink-0 basis-auto font-['Helvetica'] text-[16px] font-normal leading-[24px] text-[#ff9f0d] relative text-left whitespace-nowrap z-[63]">
            View menu
          </span>
        </div>
      </div>
    </div>
  ); 
}

            
        
    
           
           


export default About;























