import Icon from "../../components/Icon/index";
import React, { Component } from "react";
import PropTypes from "prop-types";
import heroImg from "./hero_img.svg";
import academicImg from "./academic.svg";
import techImg from "./tech_support.svg";
import "./styles.scss";
import { H1, H2, H4 } from "../../components/Typography/index";
import Badge from "../../components/Badge/index";

const ServicesPage = () => (
  <main className="ServicesPage">

    {/* HERO */}

    <section className="hero section bg-green services-top-hero">
        <div className="container flex">
          <div className="flex flex-column column is-half justify-center">
            <H1 className="py2">
              Services
            </H1>
            <H4>
              Interested by our expertise or software stack and need help getting started? Want to collaborate with us on exciting new projects? We are here to help! 
            </H4>
          </div>

        </div>
    </section>

    {/* Academic Collaborations  */}
    <section className="hero">
      <div className="hero-body">
        <div className="container flex items-center">
          {/* Copy  */}
          <div className="column">
            <H2>Academic Collaborations.</H2>
            <div className="my3 yellow-bar" />
            <p className="">
              We welcome collaborations in the academic domain. We have extensive experience and can team up with you as a co-applicant for your grant proposals. Our team’s extensive knowledge can help deliver high-profile projects by deploying or modifying our software stacks and building custom solutions for joint projects.
            </p>
            <a href="#" className="mt3 button is-primary is-medium">Request a collaboration</a>
          </div>

          {/* Img  */}
          <div className="column is-half is-offset-1 is-hidden-mobile">
            <img src={academicImg} />
          </div>
        </div>
      </div>
    </section>


    {/* Consulting  */}
    <section className="hero  bg-grey">
      <div className="">
        <div className="container flex items-center">
          {/* Img  placeholder */}
          <div className="column consulting-hero is-5 is-hidden-mobile"> </div>

          {/* Copy  */}
          <div className="column is-offset-1 p3">
            <H2>Consulting.</H2>
            <div className="my3 yellow-bar" />
            <p> We will work autonomously or alongside your team to fully understand your business needs and integrate Overture into your projects. We will help accelerate your success at any stage of your project ! </p>
            <ul className="py3">
              <li className="bullet">Project architecture, best practices</li>
              <li className="bullet">Migration & software integration</li>
              <li className="bullet">Custom development</li>
              <li className="bullet">Scalability</li>
            </ul>
            <a href="#" className="mt1 button is-primary is-medium">Request a collaboration</a>
          </div>

        </div>
      </div>
    </section>


    {/* Academic Collaborations  */}
    <section className="hero">
      <div className="hero-body">
        <div className="container flex items-center">
          {/* Copy  */}
          <div className="column">
            <H2>Technical support.</H2>
            <div className="my3 yellow-bar"/>
            <p>Our team of professionals speak business but dream in code.  We love building open-source solutions and are passionate about helping you worry less, science more.</p>
            <ul className="py3">
              <li className="bullet">Technical audits</li>
              <li className="bullet">Step-by-step guidance</li>
              <li className="bullet">Troubleshooting</li>
            </ul>
            <a href="#" className="mt1 button is-primary is-medium">Request technical support</a>
          </div>

          {/* Img  */}
          <div className="column is-half is-offset-1 is-hidden-mobile">
            <img src={techImg} />
          </div>
        </div>
      </div>
    </section>

    {/* Bottom Hero */}

  </main>
);

export default ServicesPage;
