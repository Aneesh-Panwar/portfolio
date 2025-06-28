import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import Head from "./components/Head";
import MainSec from "./components/MainSec";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const visited = localStorage.getItem("visited");

    if (!visited) {
      localStorage.setItem("visited", "true");

      // Simulate data fetching or asset loading (1.5s here)
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500); // Adjust to match actual load time

      return () => clearTimeout(timer);
    } else {
      setLoading(false); // Skip loader on repeat visit
    }
  }, []);

  return (
    <div className="lg:px-100 relative h-screen">
      {/* Animate loader fade-out */}
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>

      {!loading && (
        <div className="relative">
          <div id="home">
            <Head />
          </div>

          <div>
            <MainSec />
          </div>

          <div className="relative z-50 mt-0">
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
