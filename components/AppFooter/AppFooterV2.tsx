import initTranslations from "@/app/i18n";
import { Button, Divider, Flex, Input } from "antd";
import Link from "next/link";
import Image from "next/image";

import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";

import logoWhite from "@/assets/images/claire-logo-white.svg";
import facebook from "@/assets/images/fb-02.svg";
import ins from "@/assets/images/ins-01.svg";
import mess from "@/assets/images/mess-03.svg";

const i18nNamespaces = ["translation"];

const AppFooterV2 = async ({ locale }: { locale: string }) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <footer className="border-t-2 p-4 bg-zinc-800 text-zinc-200">
      <div className="container my-5 flex flex-col gap-6">
        <Flex justify="space-between" gap={20}>
          <Flex gap={40} justify="space-evenly">
            <Flex vertical gap={8}>
              <Image
                width={150}
                height={150}
                alt="image"
                src={logoWhite}
                className="mb-5"
              />
              <Link
                href="https://maps.app.goo.gl/15cT2VSTuCcHB8Uf9"
                target="_blank"
                rel="noreferrer"
              >
                18 Trần Ngọc Diện, P.Thảo Điền, Quận 2, TP.HCM
              </Link>
              <Link
                href="https://maps.app.goo.gl/REXk4wVMhpCAcxWu8"
                target="_blank"
                rel="noreferrer"
              >
                42 Đường số 17, Phú Mỹ Hưng, P. Tân Phú, Quận 7
              </Link>
              <Link
                href="https://maps.app.goo.gl/4Gq5Z6hcnGemNjN99"
                target="_blank"
                rel="noreferrer"
              >
                Số 14 Khu Biệt Thự Him Lam 3E, Phổ Quang, P.2, Q.Tân Bình
              </Link>
              <Flex className="gap-8 ">
                <Image alt="Image" src={facebook} width={30} height={30} />
                <Image alt="Image" src={ins} width={30} height={30} />
                <Image alt="Image" src={mess} width={30} height={30} />
              </Flex>
            </Flex>
            <Divider type="vertical" />
            <Flex vertical gap={20}>
              <p className="font-bold text-xl">Liên kết</p>
              <Flex vertical gap={4}>
                <Link href="/">Trang chủ</Link>
                <Link href="/ve-chung-toi">Về chúng tôi</Link>
                <Link href="/dich-vu">Dịch vụ</Link>
                <Link href="/">Điều trị lão hoá</Link>
                <Link href="/">Cảm nhận KH</Link>
                <Link href="/lien-he">Địa điểm</Link>
                <Link href="/blog">Blog</Link>
              </Flex>
            </Flex>
            <Flex vertical gap={20}>
              <p className="font-bold text-xl">Giờ mở cửa</p>
              <Flex vertical gap={4}>
                <p>9AM - 7PM</p>
              </Flex>
              <p className="font-bold text-xl">Địa điểm</p>
              <Flex vertical gap={4}>
                <p>Tp. Hồ Chí Minh</p>
              </Flex>
            </Flex>
          </Flex>
          <Flex vertical gap={20}>
            <p className="font-bold text-xl">Gọi ngay</p>
            <Flex vertical gap={2}>
              <Link href="tel:+84812345795">08-12345-791</Link>
              <Link href="tel:+84812345795">08-12345-785</Link>
              <Link href="tel:+84812345795">08-12345-795</Link>
            </Flex>
            <p className="font-bold text-xl">Đăng ký nhận tin</p>
            <Flex>
              <Input placeholder="Email" />
              <Button type="primary" className="rounded-md">
                GỬI
              </Button>
            </Flex>
            <LanguageChangerDropdown />
          </Flex>
        </Flex>
        <p>
          Claire Clinic mang đến những giải pháp làm đẹp không xâm lấn, an toàn
          và hiệu quả. Chúng tôi đã làm hài lòng hàng trăm nghìn khách hàng và
          các liệu trình thẩm mỹ và sản phẩm chăm sóc sức khoẻ hàng đầu Châu Âu.
        </p>
        <p>
          Đội ngũ bác sĩ, y tá và chuyên gia tư vấn với chuyên môn cao có thể
          đáp ứng từng nhu cầu riêng biệt của khách hàng, với phác đồ điều trị
          phù hợp và dịch vụ chăm sóc chuyên nghiệp và an toàn nhất.
        </p>
      </div>
    </footer>
  );
};

export default AppFooterV2;
