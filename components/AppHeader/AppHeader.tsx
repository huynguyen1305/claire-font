import Link from "next/link";
import LanguageChangerDropdown from "../LanguageChangerDropdown/LanguageChangerDropdown";
import MenuPC from "./MenuPC";
import ModalTuVan from "./ModalTuVan";

const AppHeader = () => {
  return (
    <>
      <div className="bg-zinc-800 text-zinc-200 p-4 text-center">
        <div className="flex px-4 justify-between items-center">
          <div className="hidden lg:block">
            <LanguageChangerDropdown />
          </div>
          <ModalTuVan />
          <div className="hidden lg:flex lg:flex-shrink-0 gap-2">
            Hotline:
            <Link href="tel:+84812345795">
              <strong> 08-12345-795</strong>
            </Link>
          </div>
        </div>
      </div>
      <MenuPC />
    </>
  );
};

export default AppHeader;
