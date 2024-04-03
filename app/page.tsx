import BlogSection from "@/containers/Home/BlogSection";
import ContentSection from "@/containers/Home/ContentSection";
import FormSection from "@/containers/Home/FormSection";
import WelcomeSection from "@/containers/Home/WelcomeSection";
import { Flex, Image } from "antd";

export default function Home() {
  return (
    <Flex vertical gap={80}>
      <WelcomeSection />
      <ContentSection />
      <Image preview={false} alt="img" src="/home-page-content.png" />
      <BlogSection />
      <FormSection />
    </Flex>
  );
}
