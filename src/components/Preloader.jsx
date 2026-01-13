import { useEffect, useState } from "react";

export default function Preloader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // page load + animation delay
    const timer = setTimeout(() => {
      setLoaded(true);
    }, 1200); // same timing as before

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${loaded ? "loaded" : ""}`}>
      <div className="animation-preloader">
        <div className="spinner"></div>

        <div className="txt-loading">
          <span data-text-preloader="C" className="letters-loading">
            C
          </span>
          <span data-text-preloader="C" className="letters-loading">
            C
          </span>
          <span data-text-preloader="C" className="letters-loading">
            C
          </span>
          <span data-text-preloader="F" className="letters-loading">
            F
          </span>
        </div>

        <p className="text-center">Loading</p>
      </div>

      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
}
