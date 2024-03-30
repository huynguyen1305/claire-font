import HeaderSection from "@/containers/Location/HeaderSection";
import LocationSection from "@/containers/Location/LocationSection";
import { Flex } from "antd";

export default function DiaDiemPage() {
  return (
    <Flex vertical className="py-20 gap-20 xl:gap-40">
      <HeaderSection />
      <LocationSection />
    </Flex>
  );
}
