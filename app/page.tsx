import BlogSection from "@/containers/Home/BlogSection";
import ContentSection from "@/containers/Home/ContentSection";
import FormSection from "@/containers/Home/FormSection";
import WelcomeSection from "@/containers/Home/WelcomeSection";
import { Flex } from "antd";

export default function Home() {
  return (
    <div className="container">
      <Flex vertical gap={80}>
        <WelcomeSection />
        <ContentSection />
        <BlogSection />
        <FormSection />
      </Flex>
    </div>
  );
}
