import React from "react";
import { PagesNavbar } from "../../common";
import "./PagesHeader.css";

function PagesHeader() {
  return (
    <section>
      <section className="pages-header-title">Pop the Bubble.</section>
      <hr className="thick-header-seperator" />
      <PagesNavbar firstLink="HOME" secondLink="ABOUT US" thirdLink="RULES" />
      <hr className="thin-header-seperator" />
    </section>
  );
}

export default PagesHeader;
