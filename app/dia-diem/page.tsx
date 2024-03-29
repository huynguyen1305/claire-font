import HeaderSection from "@/containers/Location/HeaderSection";
import LocationSection from "@/containers/Location/LocationSection";
import { Flex } from "antd";

export default function DiaDiemPage() {
  return (
    <Flex vertical gap={160} className="py-20">
      <HeaderSection />
      <LocationSection />
    </Flex>
  );
}
