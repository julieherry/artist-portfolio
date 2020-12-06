import React from "react";
import './Footer.css';

import { TSocials } from "./types";
const year = new Date().getFullYear();

function Footer({socials, name}: {socials?: TSocials; name: string}) {
  return (
      <div className="container">
          <div>
              &copy;
              <span id="copyright">
                  {year}
              </span>
              {' '}{name}
          </div>
          <div>
            {socials && socials.instagram && <a href={socials.instagram} about="_blank">
              <img width="30px" alt="Instagram" src="/assets/socials/instagram.svg"/>
            </a>}
            {socials && socials.email && <a href={`mailto:${socials.email}`} about="_blank">
              <img width="30px" alt="Email" src="/assets/socials/email.png"/>
            </a>}
          </div>
      </div>
  );
}

export default Footer;
