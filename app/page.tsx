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
          <div className="animate-marquee whitespace-nowrap">
            <span className="mx-4">🔒 Secure</span>
            <span className="mx-4">⚡ Fast</span>
            <span className="mx-4">📊 Insightful</span>
            <span className="mx-4">🌐 Global</span>
          </div>
        }
      />
      <Features />
    </>
  );
}
