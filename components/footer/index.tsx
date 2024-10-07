import LangDropDown from "../lang-dropdown";

export default function Footer() {
  return (
    <footer className="mt-10 bg-[#f8f9fa] text-sm">
      <section className="flex pt-10 px-8 pb-5 flex-col md:flex-row">
        <div className="flex mr-8 mb-8">
        </div>
        <div className="flex flex-1 gap-5 text-[#5f6368] mb-6 md:mb-0 flex-wrap md:flex-nowrap">
          <a className="hover:text-black hover:cursor-pointer">About snaptik</a>
          <a className="hover:text-black hover:cursor-pointer">snaptik Product</a>
          <a className="hover:text-black hover:cursor-pointer">Privacy</a>
          <a className="hover:text-black hover:cursor-pointer">Terms</a>
        </div>
        <div className="flex gap-5 text-[#5f6368] items-baseline">
          <p className="hover:text-black hover:cursor-pointer">Help</p>
          <LangDropDown />
        </div>
      </section>
    </footer>
  );
}
