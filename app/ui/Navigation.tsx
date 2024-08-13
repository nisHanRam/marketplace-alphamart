import Image from "next/image";
import logo from "@/public/logo.svg";
import { Separator } from "@/components/ui/separator";

const Navigation = ({}) => {
  return (
    <nav className="p-4 flex justify-between border-b border-blue-50/10">
      <div className="flex items-center gap-2">
        <Image src={logo} height={32} alt="logo" />
        <h1 className="h6 uppercase">AlphaMart</h1>
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex items-center gap-2">
          <li>Assets</li>
          <li>FAQs</li>
        </ul>
        <Separator orientation="vertical" className="bg-blue-50/10" />
        <button className="btn">Login</button>
      </div>
    </nav>
  );
};

export default Navigation;
