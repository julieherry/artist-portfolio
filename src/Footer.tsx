import React from "react";
import './Footer.css';

import { TSocials } from "./types";

function Footer({socials, name}: {socials: TSocials; name: string}) {
  return (
     <div>
       <div>
          &copy;
          <span id="copyright">
              <script>document.getElementById('copyright').appendChild(document.createTextNode(new Date().getFullYear()))</script>
          </span>
          {name}
      </div>
     </div>
  );
}

export default Footer;
