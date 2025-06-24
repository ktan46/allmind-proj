import React from "react";
import BaseButton from "../../common/BaseButton";

type HeroBannerProps = {
  title: string;
  subtitle: string;
  buttonName: string;
  bannerDescription: string;
  scrollingBanner?: React.ReactNode;
};

export default function HeroBanner({
  title,
  subtitle,
  buttonName,
  bannerDescription,
  scrollingBanner,
}: HeroBannerProps) {
  return (
    <section className="-mt-18 relative w-full h-screen bg-[url('/images/main-hero.jpg')] bg-cover bg-center bg-no-repeat bg-fixed px-6 text-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm">
        <div className="relative z-10 max-w-4xl mx-auto py-84 text-white">
          <h1 className="text-2xl md:text-7xl font-bold mb-4">{title}</h1>
          <h2 className="text-2xl mb-6">{subtitle}</h2>
          <div className="mb-10">
            <BaseButton>{buttonName}</BaseButton>
          </div>
          <h3 className="text-gray-300">{bannerDescription}</h3>
          {scrollingBanner && (
            <div className="overflow-hidden mt-5">{scrollingBanner}</div>
          )}
        </div>
      </div>
    </section>
  );
}
