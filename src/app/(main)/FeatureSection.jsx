import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const FeatureSection = () => {
  return (
    <div className="h-[480px] bg-[#F7F5F3] flex justify-center items-center">
      <div className="flex min-h-[390px] w-[1200px] justify-between items-center">
        <div className="flex flex-col gap-4 max-w-[457px] min-h-[116px]">
          <h2 className="text-[#2A5B45] text-2xl font-medium leading-7">
            Pruébalo en nuestro coffee shop
          </h2>
          <p className="text-gray-900 text-sm font-normal leading-4">
            Visita nuestra cafetería en el centro de la ciudad para probar los
            granos de café antes de hacer tu pedido y llévate un descuento
          </p>
          <div>
            <Link
              className="leading-4 font-semibold text-black flex gap-4 items-center text-sm underline"
              href={"/"}
            >
              Cómo llegar <ArrowRight />
            </Link>
          </div>
        </div>
        <Image
          src="/images/imagesFeatureSection.jpg"
          alt="img Feature"
          height={390}
          width={588}
          className="rounded-[20px]"
        />
      </div>
    </div>
  );
};

export default FeatureSection;
