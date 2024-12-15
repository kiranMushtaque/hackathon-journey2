

 

import Image from "next/image";

const StatsSection = () => {
  const stats = [
    {
      icon: "/images/Group (1).png",
      label: "Professional Chefs",
      value: "420",
      
    },
    {
      icon: "/images/Group (4).png",
      label: "Items Of Food",
      value: "320",
    },
    {
      icon: "/images/Group (2).png",
      label: "Years Of Experienced",
      value: "30+",
    },
    {
      icon: "/images/Group (3).png",
      label: "Happy Customers",
      value: "220",
    },
  ];

  return (
    <section className="relative bg-black text-white py-16">
     
      <Image
        src="/images/unsplash_bpPTlXWTOvg@2x.png"
        alt="Wallpaper"
        width={1920}
        height={469}
        className="absolute inset-0 w-full h-full opacity-20"
      />
      <div className="relative container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-4">
              <Image
                src={stat.icon}
                alt={stat.label}
                width={218}
                height={247}
                className="mx-auto"
              />
              <h3 className="text-3xl font-bold">{stat.value}</h3>
              <p className="text-gray-300 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
