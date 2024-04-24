import React from "react";
import "./BreadCrums.css";
import { Breadcrumbs } from "@mui/material";
import { Link } from "react-router-dom";
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
function BreadCrums() {
  return (
    <div className="breadcrums" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          Home
        </Link>
        <Link underline="hover" color="inherit" href="/webdesign">
          Web Design
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/webdevelopment"
          aria-current="page"
        >
          Web Development
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/contentmarketing"
          aria-current="page"
        >
          Content Marketing
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/digitalmarketing"
          aria-current="page"
        >
          Digital Marketing
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/grapgicdesign"
          aria-current="page"
        >
          Graphic Design
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/payperclick"
          aria-current="page"
        >
          Pay Per Click
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/ourwork"
          aria-current="page"
        >
          Our Work
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/casestudy"
          aria-current="page"
        >
          Case Study
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/about"
          aria-current="page"
        >
          About
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/blog"
          aria-current="page"
        >
          Blog
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="/graphicDesign"
          aria-current="page"
        >
          Graphic Design Page
        </Link>
      </Breadcrumbs>
    </div>
  );
}

export default BreadCrums;
