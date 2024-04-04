"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import i18nConfig from "@/app/i18nConfig";
import { Select } from "antd";
import Image from "next/image";
import vn from "@/assets/images/vn.svg";
import us from "@/assets/images/us.svg";

export default function LanguageChangerDropdown() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (e: string) => {
    const newLocale = e;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (currentLocale === i18nConfig.defaultLocale) {
      router.push("/" + newLocale + currentPathname);
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`)
      );
    }

    router.refresh();
  };

  return (
    <Select
      defaultValue={currentLocale}
      style={{ width: 140, color: "white" }}
      onChange={handleChange}
      variant="borderless"
      className="border-[1px] border-gray-500"
      options={[
        {
          value: "vi",
          label: (
            <div className="flex gap-2 ">
              <Image width={20} height={20} src={vn} alt="Tiếng Việt" /> Tiếng
              Việt
            </div>
          ),
        },
        {
          value: "en",
          label: (
            <div className="flex gap-2 ">
              <Image width={20} height={20} src={us} alt="English" /> English
            </div>
          ),
        },
      ]}
    />
  );
}
