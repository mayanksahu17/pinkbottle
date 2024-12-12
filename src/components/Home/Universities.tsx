import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ALL_LOGOS = [
  "CalState.jpeg", "UF.png", "BostonUniversity.gif", "USSA.png", "RIT.png",
  "ASU.png", "Bridgeport.png", "Clarksonlogo.png", "Auburn.png", "StevensLogo.png",
  "TexasLogo.png", "DrexelLogo.png", "OSU.png", "NortheasternLogo.png", "KentState.png",
  "Pacelogo.png"
];

const CONTENT_VARIATIONS = [
  {
    gradientColor: "from-blue-500 to-purple-500",
    title: "Millions",
    stats: [
      { number: "1M+", text: "Transactions processed daily through our platform" },
      { number: "20+", text: "Years of industry experience" },
      { number: "100+", text: "Countries supported worldwide" },
      { number: "24/7", text: "Customer support availability" },
    ],
    products: ["Payments", "Connect"],
  },
  {
    gradientColor: "from-green-500 to-teal-500",
    title: "Millions",
    stats: [
      { number: "1M+", text: "Stripe users in over 120 countries" },
      { number: "500+", text: "Partner integrations" },
      { number: "1,000+", text: "Enterprise solutions delivered" },
      { number: "Top-tier", text: "Security and compliance" },
    ],
    products: ["Payments", "Connect"],
  },
  {
    gradientColor: "from-purple-500 to-pink-500",
    title: "Millions",
    stats: [
      { number: "BMW owners", text: "using ConnectedDrive" },
      { number: "350+", text: "US dealerships" },
      { number: "50+", text: "Payment methods available" },
      { number: "5+", text: "Amazon businesses on Stripe" },
    ],
    products: ["Payments", "Connect"],
  },
];

export default function EnterpriseSection() {
  const [logos, setLogos] = useState<string[]>([]);
  const [contentIndex, setContentIndex] = useState(0);

  useEffect(() => {
    // Ensure we always have 15 logos, pulling from a larger pool
    setLogos(getUniqueRandomLogos(15, ALL_LOGOS));
  }, []);

  function getUniqueRandomLogos(count: number, availableLogos: string[]): string[] {
    // Shuffle the entire logo array
    const shuffled = [...availableLogos].sort(() => Math.random() - 0.5);
    
    // Return exactly the number of logos requested
    return shuffled.slice(0, count);
  }

  function swapLogosInGrid() {
    setLogos((prevLogos) => {
      // Create a copy of current logos to modify
      const remainingLogos = ALL_LOGOS.filter(logo => !prevLogos.includes(logo));
      const newLogos = [...prevLogos];
      
      // Randomly choose number of logos to swap (between 3 and 4)
      const swapCount = Math.floor(Math.random() * 2) + 3; // 3 to 4
      const swapIndices = new Set<number>();
      
      // Ensure unique indices to swap
      while (swapIndices.size < swapCount) {
        swapIndices.add(Math.floor(Math.random() * newLogos.length));
      }

      // Convert set to array for easier manipulation
      const indicesArray = Array.from(swapIndices);
      
      // Replace logos at chosen indices with new logos
      indicesArray.forEach(index => {
        if (remainingLogos.length > 0) {
          // Pick a random logo from remaining logos
          const newLogoIndex = Math.floor(Math.random() * remainingLogos.length);
          const newLogo = remainingLogos.splice(newLogoIndex, 1)[0];
          newLogos[index] = newLogo;
        }
      });
      
      return newLogos;
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setContentIndex((prev) => (prev + 1) % CONTENT_VARIATIONS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Exactly 2 seconds interval for logo swapping
    const interval = setInterval(swapLogosInGrid, 2000);
    return () => clearInterval(interval);
  }, []);

  const currentContent = CONTENT_VARIATIONS[contentIndex];

  return (
    <div className="container mx-auto px-20">
      <div className="mb-12">
        <span className="text-blue-600 font-semibold">Enterprise reinvention</span>
        <h2 className="text-4xl font-bold mt-2">Bring agility to your enterprise</h2>
        <p className="text-gray-600 text-lg mt-4 max-w-3xl">
          Quickly build great payments experiences, improve performance, expand into new markets, and engage customers with subscriptions and marketplaces. Get expert integration guidance from our professional services team and certified partners, and connect Stripe to Salesforce, SAP, and more through the Stripe App Marketplace.
        </p>
        <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 mt-6">
          Explore Stripe for enterprises
        </Button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-[30%] space-y-6 min-h-[500px] flex-shrink-0">
          <motion.div
            key={contentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-blue-600">{currentContent.title}</h3>
            <div className="grid gap-4">
              {currentContent.stats.map((stat, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className={`w-1 h-12 bg-gradient-to-b ${currentContent.gradientColor} self-stretch`} />
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800">{stat.number}</h4>
                    <p className="text-gray-600">{stat.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-2 mt-8">
              <p className="font-semibold">Products used</p>
              <ul className="text-gray-600">
                {currentContent.products.map((product, index) => (
                  <li key={index}>{product}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="lg:w-[70%] bg-white rounded-lg p-4">
          <div 
            className="grid grid-rows-3 grid-cols-5 gap-4"
            style={{ 
              height: '300px',
              gridTemplateColumns: 'repeat(5, minmax(0, 1fr))',
            }}
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo + index}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.8 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-2 rounded-lg flex items-center justify-center"
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Image
                  src={`/${logo}`}
                  alt={`Logo ${index + 1}`}
                  width={80}
                  height={80}
                  className="object-contain max-w-full max-h-full"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    width: 'auto',
                    height: 'auto',
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}