import Image from "next/image";
import React from "react";

interface ImageCardProps {
  title: string;
  desc: string;
  imgURL: string;
  isReversed?: boolean;
}

export default function ImageCard({
  title,
  desc,
  imgURL,
  isReversed = false,
}: ImageCardProps) {
  return (
    <section className="w-full px-6 sm:px-10 md:px-16 lg:px-24 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 max-w-screen-xl mx-auto">
        {isReversed ? (
          <>
            {/* Image on left */}
            <div className="col-span-2 relative h-full min-h-[500px] w-full">
              <Image src={imgURL} alt={title} fill className="object-cover" />
            </div>
            {/* Text on right */}
            <div className="col-span-1 flex flex-col justify-center h-full">
              <h3 className="text-4xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          </>
        ) : (
          <>
            {/* Text on left */}
            <div className="col-span-1 flex flex-col justify-center h-full">
              <h3 className="text-4xl font-semibold mb-4">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
            {/* Image on right */}
            <div className="col-span-2 relative h-full min-h-[500px] w-full">
              <Image src={imgURL} alt={title} fill className="object-cover" />
            </div>
          </>
        )}
      </div>
    </section>
  );
}
