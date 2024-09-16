import { map } from "lodash";
import { Search } from "lucide-react";
import Link from "next/link";

type Props = {};

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

export const Header: React.FC<Props> = () => {
  return (
    <>
      <div className="container">
        <div className="flex justify-between items-center mt-6">
          <div className="w-[50px] aspect-square relative">
            <img
              src="/brand.jpg"
              alt="Logo-brand"
              className="rounded-[50%] object-cover cursor-pointer w-full absolute"
            />
          </div>
          <nav>
            <ul className="list-none flex gap-6 justify-center">
              {map(menu, (item) => (
                <li key={item.label}>
                  <Link
                    className="no-underline text-primary font-medium"
                    href={item.href}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <Search />
          </div>
        </div>
      </div>
    </>
  );
};
