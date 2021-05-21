import React from "react";

import "./semester1.styles.css";

const Semester1 = (props) => (
  <div className="semester1-container">
    <div className="semester1-card">
      <img
        alt="subjects"
        src={
          "https://as2.ftcdn.net/v2/jpg/03/35/51/69/1000_F_335516989_92duQ4rLbNknEQLydDKPZ3pqqF3numft.jpg"
        }
      />

      <div className="semester1-info">
        <div className="semester1-sub-title">
          PPS <br />
          <span className="semester1-sub-description">
            Programming for problem Solving
          </span>
        </div>
      </div>
    </div>
    <div className="semester1-card">
      <img
        alt="subjects"
        src={
          "https://as1.ftcdn.net/v2/jpg/02/06/49/56/1000_F_206495605_eoaWBcift2BH2GzE5Ur7y4OKpFYhbaq5.jpg"
        }
      />
      <div className="semester1-info">
        <div className="semester1-sub-title">
          PHY <br />
          <span className="semester1-sub-description">
            Semi Conductor Physics
          </span>
        </div>
      </div>
    </div>
    <div className="semester1-card">
      <img
        alt="subjects"
        src={
          "https://as2.ftcdn.net/v2/jpg/02/90/79/31/1000_F_290793148_TgteTq13NK4Vs1DeCBDeiEWCq1fAxeTH.jpg"
        }
      />
      <div className="semester1-info">
        <div className="semester1-sub-title">
          EGD <br />
          <span className="semester1-sub-description">
            Engineering Graphics and Design
          </span>
        </div>
      </div>
    </div>
    <div className="semester1-card">
      <img
        alt="subjects"
        src={
          "https://as1.ftcdn.net/v2/jpg/01/21/92/16/1000_F_121921683_Ghb2jlzWK3GnNmVmZrdZYorHheCmE8bL.jpg"
        }
      />
      <div className="semester1-info">
        <div className="semester1-sub-title">
          MATHS <br />
          <span className="semester1-sub-description">
            Calculus and Linaer Algebra
          </span>
        </div>
      </div>
    </div>
    <div className="semester1-card">
      <img
        alt="subjects"
        src={
          "https://as2.ftcdn.net/v2/jpg/01/44/44/33/1000_F_144443361_ycoYQWodOAjjROQ5TezIJMJmD5ugltPZ.jpg"
        }
      />
      <div className="semester1-info">
        <div className="semester1-sub-title">
          BIO <br />
          <span className="semester1-sub-description">Biology for CSE</span>
        </div>
      </div>
    </div>
  </div>
);

export default Semester1;
