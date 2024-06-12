import * as React from "react";
import { Link } from "gatsby";
import "../assets/styles/style.css";

const Layout = ({ pageTitle, titleId, subtitle, children }) => {
    return (
      <div className="container">
        <div className="contentwrap">
          <nav>
              <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/intro">Intro</Link></li>
                  <li><Link to="/cssart">CSS Art</Link></li>
                  <li><Link to="/generative">Generative</Link></li>
                  <li className="try"><Link to="/try">Try it!</Link></li>
              </ul>
          </nav>
          <main>
            <div class="main-container">
              {children}
              <div className="pageinfo" id={titleId}>
                <h1>{pageTitle}</h1>
                <h2>{subtitle}</h2>
              </div>
            </div>
          </main>
        </div>
      </div>
    )
  };

  export default Layout;