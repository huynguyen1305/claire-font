import BlogSection from "@/containers/Home/BlogSection";
import ContentSection from "@/containers/Home/ContentSection";
import FormSection from "@/containers/Home/FormSection";
import WelcomeSection from "@/containers/Home/WelcomeSection";
import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";
import { Flex } from "antd";
import initTranslations from "@/app/i18n";
import ImageSection from "@/containers/Home/ImageSection";

const i18nNamespaces = ["translation"];

const getDataBlog = async () => {
  const res = await fetch(
    "https://claire.io.vn/wp-json/wp/v2/posts?categories=40"
  );
  return res.json();
};

export const revalidate = 10;

export default async function Home({ params: { locale } }: any) {
  const { resources } = await initTranslations(locale, i18nNamespaces);

  const dataBlog = await getDataBlog();

  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <Flex vertical gap={80}>
        <WelcomeSection />
        <ContentSection />
        <ImageSection />
        <BlogSection data={dataBlog} />
        <FormSection />
      </Flex>
    </TranslationsProvider>
  );
}
