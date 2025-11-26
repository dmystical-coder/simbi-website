import React from "react";
import { Whys } from "../app-constants";
import Image from "next/image";

export default function Why() {
  return (
    <section className="bg-[#E4DFFF] flex flex-col justify-center items-center h-screen">
      <h2 className="text-5xl text-dark-950 font-medium">Why Simbi works</h2>
      <section className="flex py-[108px] px-11 gap-11">
        {Whys.map((item, index) => (
          <div
            className="w-[262px] bg-white h-[330px] rounded-[28px] flex flex-col place-items-center text-center gap-2 py-[47px] shadow-[0px_16.66px_76.18px_rgba(149,127,255,0.53)]"
            key={index}
          >
            <Image
              src={item.img}
              width={79}
              height={67}
              alt={item.title}
              className="rounded-t-[28px]"
            />
            <div className="p-[21px] rounded-b-[28px] space-y-3">
              <h4 className={`text-2xl font-medium ${item.color}`}>
                {item.title}
              </h4>
              <p className="text-black text-sm">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}
