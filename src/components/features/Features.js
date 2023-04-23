import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from "../layouts/Title";
import Card from "./Card";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="Research Interest" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Natural Product"
          des="Isolation, characterization, standardization, qualitative and quantitative analysis of natural products"
        />
        <Card
          title="Metabolomics and Proteomics"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          // icon={<AiFillAppstore />}
        />
        <Card
          title="Lead identification"
          des="Design and Synthesis of small molecule libraries for lead identification or optimization"
          // icon={<SiProgress />}
        />
        <Card
          title="Development of herbal products"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          // icon={<FaMobile />}
        />
        <Card
          title="Development of synthetic methodologies"
          // des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque soluta
          // hic consequuntur eum repellendus ad."
          // icon={<SiAntdesign />}
        />
        <Card
          title="Synthesis of bioactive natural products"
          des="Isolation, structure determination and total synthesis of natural products"
          // icon={<FaGlobe />}
        />
      </div>
    </section>
  );
};

export default Features;
