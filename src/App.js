import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Components/Pages/Home";
import NavSection from "./Components/Shared/NavSection";
import Loader from "./asstes/Images/loader.gif";
import Footer from "./Components/Shared/Footer";
function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);

  return (
    <div>
      {loader ? (
        <div className='w-full h-screen flex justify-center items-center'>
          <img src={Loader} alt='' />
        </div>
      ) : (
        <>
          <NavSection />
          <Home />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
