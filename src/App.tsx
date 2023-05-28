import Navbar from "@/components/navbar";
import { useEffect, useState } from "react";

import { SelectedPage } from "@/shared/types";
import Home from "@/components/home";
import Benifits from "@/components/benifits";
import OurClasses from "@/components/ourclasses";
import ContactUs from "@/components/contactus";
import Footer from "./components/footer";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );

  const [isTopOfPage, setisTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY == 0) {
        setisTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setisTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="app bg-gray-20">
      <Navbar
        selectedPage={selectedPage}
        isTopOfPage={isTopOfPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benifits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
