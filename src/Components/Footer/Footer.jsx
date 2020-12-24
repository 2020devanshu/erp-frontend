import React from "react";
import "./Footer.css";
import { Call, Mail, PhoneAndroid } from "@material-ui/icons";

const Footer = () => {
  return (
    <div className="footer container-fluid">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <h2>Serosoft Solutions</h2>
          <br />
          <p>
            We are a leading educational software and solutions company,
            promoted by a dynamic team of erstwhile I-Bankers, US graduates and
            MBAs. We are part of the prestigious 50-year old Hindustan Group of
            Companies (www.hindustangroup.com).
          </p>
          <br />
          <h2>Awards & Achievements</h2>
          <br />
          <p>
            Deloitte Fast 50 | Asia Pacific (APAC) 2018 | 2018 Red Herring |
            EdTech Cool Tool Awards 2019 Finalist in SIS Category
          </p>
        </div>
        <div className="col-sm-6 col-md-3">
          <h2>Knowledge Center</h2>
          <br />
          <p>Product Sheets</p>

          <p>Case Studies</p>

          <p>Info Videos</p>

          <p>Infographics</p>

          <p>Team in Action</p>

          <p>Media Coverage</p>

          <p>Events</p>

          <p>Blog</p>

          <p>Popular Searches</p>

          <p>Sitemap</p>
        </div>
        <div className="col-sm-6 col-md-3">
          <h2>Reach Us</h2>
          <br />
          <p>
            <Call /> +91-731-4010735
          </p>
          <p>
            <PhoneAndroid /> +91-94250-66144
          </p>
          <p>
            <Mail /> academia@serosoft.in
          </p>
          <br />
          <p>
            Botswana | Ghana | India | Indonesia <br />
            | Kenya | Nigeria | Oman | Papua
            <br />
            New Guinea | South Africa | UAE
            <br />| UK | USA | Vietnam | Zimbabwe
          </p>
          <br />
          <h2>Our Parterns</h2>
          <br />
          <p>Microsoft</p>
        </div>
        <div className="col-sm-6 col-md-3">
          <h2>Address</h2>
          <p>
            5th Floor Milinda’s Manor, <br /> 2 RNT Marg, <br /> Opposite
            Treasure Island Next,
            <br /> Indore - 452001,
            <br /> MP - India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
