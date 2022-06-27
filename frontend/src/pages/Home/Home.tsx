import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { Router } from "../../Router";

export function Home() {
  const customHeight = {
    height: "63vh",
  };
  return (
    <>
      <Header />
      <div style={customHeight}>
        <Router />
      </div>
      <Footer />
    </>
  );
}
