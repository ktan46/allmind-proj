import Image from "next/image";
import Header from "./components/common/Header";
import Features from "./components/feature/landingpage/Features";
import HeroBanner from "./components/feature/landingpage/HeroBanner";

export default function Home() {
  return (
    <>
      <Header />
      <HeroBanner
        title="Secure AI for Financial Professionals"
        subtitle="Domain-specific AI for investment banks, private equity firms, and hedge funds."
        buttonName={"Request a Demo"}
        bannerDescription={"Trusted by leading financial institutions"}
        scrollingBanner={
          <div className="animate-marquee whitespace-nowrap flex flex-row items-center gap-x-6">
            <span>
              <Image
                src="/images/brands/lazard.svg"
                alt="Lazard Brand Logo"
                height={100}
                width={200}
              />
            </span>
            <span>
              <Image
                src="/images/brands/tiger_global.svg"
                alt="Lazard Brand Logo"
                height={180}
                width={360}
              />
            </span>
            <span>
              <Image
                src="/images/brands/MC_BIG.svg"
                alt="Moelis Brand Logo"
                height={80}
                width={160}
              />
            </span>
            <span>
              <Image
                src="/images/brands/gtcr.svg"
                alt="Lazard Brand Logo"
                height={80}
                width={160}
              />
            </span>
            <span>
              <Image
                src="/images/brands/NMR_BIG.svg"
                alt="Lazard Brand Logo"
                height={120}
                width={240}
              />
            </span>
            <span>
              <Image
                src="/images/brands/raymond_james.svg"
                alt="Lazard Brand Logo"
                height={240}
                width={480}
              />
            </span>
          </div>
        }
      />
      <Features />
    </>
  );
}
