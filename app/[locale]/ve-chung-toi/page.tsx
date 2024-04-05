import React from "react";
import aboutSucManh from "@/assets/images/about-power.png";
import aboutPrivate from "@/assets/images/about-private.png";
import aboutDoiNgu from "@/assets/images/about-doingu.png";
import aboutSanPham from "@/assets/images/about-sanpham.png";
import Image from "next/image";
import CarouselContainer from "@/components/CarouselContainer/CarouselContainer";

import TranslationsProvider from "@/components/TranslationsProvider/TranslationsProvider";
import initTranslations from "@/app/i18n";

const i18nNamespaces = ["translation"];

const page = async ({ params: { locale } }: any) => {
  const { resources } = await initTranslations(locale, i18nNamespaces);
  return (
    <TranslationsProvider
      namespaces={i18nNamespaces}
      locale={locale}
      resources={resources}
    >
      <CarouselContainer />
      <div className="py-10 flex flex-col">
        <section className="container py-10 mb-10 flex flex-col gap-8">
          <h2 className="text-3xl text-center uppercase font-extrabold">
            Claire Private Clinic
          </h2>
          <p className="text-center lg:w-2/3 mx-auto">
            Claire Private Clinic là hệ thống cơ sở chăm sóc sức khoẻ làn da
            theo tiêu chuẩn y khoa cao cấp. Nơi thấu hiểu, tư vấn về các giải
            pháp, công nghệ phục hồi nhằm tái tạo và duy trì sức khoẻ làn da tự
            nhiên tốt nhất cho khách hàng.
          </p>
        </section>
        <section className="bg-gray-100 flex flex-col gap-8 py-4 lg:py-0">
          <div className="container flex items-center flex-wrap gap-4 lg:gap-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-1 lg:p-10">
              <h4 className="text-3xl uppercase font-extrabold text-center lg:text-left">
                Sức mạnh và giá trị
              </h4>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                Claire /kleər/ trong tiếng Pháp đơn giản là sạch sẽ và tươi sáng
                và cũng có nghĩa là trong sáng và minh bạch. Đó cũng là tên gọi
                thân yêu cho một cô bé hoặc cậu bé.
              </p>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                Trong thị trường thẩm mỹ “vàng thau lẫn lộn”, thật giả khó
                lường. Claire mong muốn là đơn vị uy tín, với tiêu chuẩn y khoa
                chính thống và máy móc hiện đại, minh bạch không có sự pha trộn
                tạp chất hay đánh lận khái niệm trong làm đẹp.
              </p>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                Trên hết, không theo đuổi vẻ đẹp nhân tạo theo các tiêu chuẩn
                vàng, các khái niệm sắc đẹp thay đổi liên tục, Claire luôn đặt
                sức khoẻ làn da, vẻ đẹp tự nhiên là kim chỉ nang trong điều trị
                và định hướng chăm sóc khách hàng dài lâu.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Image
                src={aboutSucManh}
                alt="aboutSucManh"
                width={690}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className=" flex flex-col gap-8 py-4 lg:py-0">
          <div className="container flex items-center flex-wrap gap-4 lg:gap-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-2 lg:p-10">
              <h4 className="text-3xl uppercase font-extrabold text-center lg:text-right">
                Private
              </h4>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                Từ khoá đại hiện cho hình ảnh của Claire, là một trong những số
                ít cơ sở thật sự đề cao và tập trung vào tôn trọng sự bảo mật
                thông tin, sự riêng tư của khách hàng khi đến điều trị cũng như
                cá nhân hoá mọi trị liệu và trải nghiệm của khách hàng tại cơ
                sở.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-1">
              <Image
                src={aboutPrivate}
                alt="aboutSucManh"
                width={690}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="bg-gray-100 flex flex-col gap-8 py-4 lg:py-0">
          <div className="container flex items-center flex-wrap gap-4 lg:gap-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-1 lg:p-10">
              <h4 className="text-3xl uppercase font-extrabold text-center lg:text-left">
                Đội ngũ nhân lực
              </h4>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                Đội ngũ bác sĩ và nhân viên y khoa tận tâm, giàu kinh nghiệm
                chính là niềm tự hào và tài sản vô giá của CLAIRE PRIVATE
                CLINIC, là bảo chứng hùng hồn cho chất lượng điều trị & dịch vụ
                của chúng tôi.
              </p>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full">
                Bác sĩ chuyên khoa của chúng tôi được đào tạo từ những trường
                Đại học hàng đầu đã được cấp phép và có thẩm quyền, chúng tôi
                chỉ thực hiện các kỹ thuật mới nhất và chính thống. Đảm bảo tất
                cả các trị liệu không chỉ được thực hiện một cách an toàn mà còn
                đạt kỳ vọng làm đẹp của mọi khách hàng.
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <Image
                src={aboutDoiNgu}
                alt="aboutSucManh"
                width={690}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className=" flex flex-col gap-8 py-4 lg:py-0">
          <div className="container flex items-center flex-wrap gap-4 lg:gap-0 lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex flex-col gap-4 order-2 lg:order-2 lg:p-10">
              <h4 className="text-3xl uppercase font-extrabold text-center lg:text-right">
                Sản phẩm và dịch vụ minh bạch
              </h4>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full ">
                Chúng tôi luôn sử dụng các sản phẩm từ những thương hiệu dược mỹ
                phẩm cao cấp và uy tín của thế giới.
              </p>
              <p className="text-sm md:text-base lg:text-lg lg:leading-10 text-justify w-full ">
                Hệ thống dịch vụ sử dụng những máy móc công nghệ cao hàng đầu
                trên toàn thế giới trong lĩnh vực thẩm mỹ được công nhận và đạt
                chứng chỉ như CE, FDA Approved
              </p>
            </div>
            <div className="w-full lg:w-1/2 order-1 lg:order-1">
              <Image
                src={aboutSanPham}
                alt="aboutSucManh"
                width={690}
                height={900}
                className="w-full object-cover"
              />
            </div>
          </div>
        </section>
        <br />
        <br />
        <br />
      </div>
    </TranslationsProvider>
  );
};

export default page;
