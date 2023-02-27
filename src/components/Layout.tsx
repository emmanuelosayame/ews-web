import Header from "@components/Header";
import Footer from "@components/Footer";
import { ReactNode } from "react";

const Layout = ({
  children,
  initialTrans = false,
}: {
  children: ReactNode;
  initialTrans?: boolean;
}) => {
  return (
    <>
      <Header initialTrans={initialTrans} />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
