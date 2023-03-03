import Header from "./Header";
import Footer from "./Footer";
import WactoChatbot from './WactoChatbot';

 const Layout = ({ children }) => (
    <>
        <Header />
        { children  }
        <Footer />
        </>
);
export default Layout;