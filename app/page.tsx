import Button from "@/components/Button/Button";
import { MENU } from "@/constant/URL";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-blue-700">
      <div className="logo ">
        <b>
          <span>Welcome to </span>m<span>y</span> portfolio
        </b>
      </div>

      <Link href={MENU.HOMEPAGE}>
        <button
          className={`absolute bottom-10 left-[45%] p-2 rounded-md text-[50px] text-white font-bold hover:shadow-white hover:shadow-md hover:border hover:border-white`}
        >
          Explore!
        </button>
      </Link>
    </div>
  );
}
