import { Link } from "react-router-dom";
import errorImage from "../../public/assets/img/inner-page/404.png";

export default function ErrorPage() {
  return (
    <div>
      {/* Hero Section Start */}
      <div
        className="breadcrumb-wrapper fix bg-cover"
        style={{ backgroundImage: "url(assets/img/inner-page/breadcrumb.png)" }}
      >
        <div className="container">
          <div className="page-heading">
            <div className="breadcrumb-sub-title">
              <h1 className="wow fadeInUp" data-wow-delay=".3s">
                404 Error
              </h1>
            </div>
            <ul className="breadcrumb-items wow fadeInUp" data-wow-delay=".5s">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa-solid fa-chevron-right" />
              </li>
              <li>404 Error</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Error Section Start */}
      <section className="error-section section-padding fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="error-item">
                <div className="error-image">
                  <img src={errorImage} alt="404 Error" />
                </div>
                <div className="error-content">
                  <h2>Page Not Found</h2>
                  <p>
                    Whether through financial aid, resources, or time. It
                    reflects kindness, compassion, and humanity, making the
                    bring hope to the less fortunate.
                  </p>
                  <Link to="/" className="theme-btn">
                    Back To Home <i className="fa-solid fa-arrow-right-long" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
