import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Loading } from "../../components/Loading";

const Layout = ({ Component }: Component) => {
  return (
    <>
      <Header />
      {<Component />}
      <Footer />
      <Loading />
    </>
  );
};
export default Layout;
