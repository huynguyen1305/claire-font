import Link from "next/link";
import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";
import MenuPC from "./MenuPC";

const AppHeader = () => {
  return (
    <>
      <div className="bg-zinc-800 text-zinc-200 p-4 text-center hidden lg:block">
        <div className="flex px-4 justify-between items-center">
          <div>
            <LanguageChangerDropdown />
          </div>
          <div>
            Nhập mã <strong>GIAMGIA15</strong> để <strong>giảm giá 15%</strong>{" "}
            cho đơn hàng từ 2 sản phẩm
          </div>
          <div>
            Hotline:{" "}
            <Link href="tel:+84812345795">
              <strong>08-12345-795</strong>
            </Link>
          </div>
        </div>
      </div>
      <MenuPC />
    </>
  );
};

export default AppHeader;
