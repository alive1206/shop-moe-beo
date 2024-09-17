import { Footer } from "./footer";
import { Header } from "./header";

type Props = {
  children: React.ReactNode;
};

export const Main: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Header />
      <main className="min-h-[calc(100vh - 96px - 49px)] px-3">{children}</main>
      <Footer />
    </div>
  );
};
