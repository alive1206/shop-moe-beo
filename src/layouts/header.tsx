import { map } from "lodash";
import { Search, ShoppingCart, User } from "lucide-react";
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
    <div>
      <div className="container">
        <div className="flex justify-between items-center">
          <div className="w-[75px] aspect-square relative">
            <img
              src="/brand.jpg"
              alt="Logo-brand"
              className="rounded-[50%] object-cover cursor-pointer w-full absolute"
            />
          </div>
          <nav>
            <ul className="list-none flex gap-16 justify-center">
              {map(menu, (item) => {
                return (
                  <li key={item.label}>
                    <Link
                      className={`no-underline font-medium ${
                        item.label === activeMenu?.label
                          ? "text-[#e5938e] active"
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
            <Search className="cursor-pointer" />
            <User className="cursor-pointer" />
            <ShoppingCart className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};
