import HeaderSection from "@/containers/Location/HeaderSection";
import LocationSection from "@/containers/Location/LocationSection";
import { Flex } from "antd";

export default function DiaDiemPage() {
  return (
    <div className="container">
      <Flex vertical className="py-10 gap-20">
        <HeaderSection />
        <LocationSection />
      </Flex>
    </div>
  );
}
