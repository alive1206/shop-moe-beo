import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <div className="footer-wrapper bg-teriary py-6 px-3">
      <div className="container">
        <div>
          <ul className="list-none flex justify-end gap-3">
            <li>
              <Link
                href={"/"}
                className="footer-icon-wrapper rounded-[100%] size-12 flex justify-center items-center aspect-square bg-white hover:bg-secondary transition-all duration-300 cursor-pointer"
              >
                <FacebookOutlined className="text-2xl footer-icon text-black" />
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="footer-icon-wrapper rounded-[100%] size-12 flex justify-center items-center aspect-square bg-white hover:bg-secondary transition-all duration-300 cursor-pointer"
              >
                <InstagramOutlined className="text-2xl footer-icon text-black" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
