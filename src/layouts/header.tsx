import {
  SearchOutlined,
  ShoppingCartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { map } from "lodash";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Products",
    href: "/products",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Blog",
    href: "/blog",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export const Header: React.FC = () => {
  const pathname = usePathname();
  const activeMenu = menu.find((item) => item.href === pathname);
  return (
    <div className="header-wrapper px-3">
      <div className="container">
        <div className="flex justify-between items-center py-3">
          <div className="w-[75px] aspect-square relative">
            <img
              src="/brand.jpg"
              alt="Logo-brand"
              className="rounded-[50%] object-cover cursor-pointer w-full absolute"
            />
          </div>
          <nav className="max-[768px]:hidden">
            <ul className="list-none flex gap-16 justify-center">
              {map(menu, (item) => {
                return (
                  <li key={item.label}>
                    <Link
                      className={`no-underline font-medium ${
                        item.label === activeMenu?.label
                          ? "text-secondary active"
                          : "text-primary"
                      }`}
                      href={item.href}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex gap-6">
            <SearchOutlined className="cursor-pointer text-xl" />
            <UserOutlined className="cursor-pointer text-xl" />
            <ShoppingCartOutlined className="cursor-pointer text-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};
