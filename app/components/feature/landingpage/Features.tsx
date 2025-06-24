import React from "react";
import {
  imageCardData,
  // quoteCardData, // ignored for now
} from "@/app/lib/cardData";
import ImageCard from "../../common/ImageCard";

export default function Features() {
  return (
    <div className="bg-white text-black p-10 space-y-11 items-center">
      <h2 className="text-6xl font-medium text-center pt-10">
        <span className="block">Augment Your Firm with an</span>
        <span className="block text-gray-500">
          AI Platform Built for Finance
        </span>
      </h2>
      {imageCardData.map((card, index) => (
        <ImageCard
          key={index}
          title={card.title}
          desc={card.desc}
          imgURL={card.imgURL}
          isReversed={index % 2 !== 0}
        />
      ))}
    </div>
  );
}
