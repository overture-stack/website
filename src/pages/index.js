import React, { Component } from 'react'
import PropTypes from 'prop-types'
import heroImg from './home/hero_img.svg'
import './home/styles.scss'
import {H1} from "../components/Typography/index";

const HomePage = () => (
  <main className="HomePage">

    {/* HERO */}

    <section className="hero bg-green science-hero">
      <div className="hero-body">
        <div className="container flex">
          <div className="flex flex-column column is-half justify-center">
            <h1 className="title pb3">
              Worry less, Science More
            </h1>
            <h2 className="subtitle">
              Overture is a collection of open-source, extendable solutions for big-data genomic science that you can use to support your research.
            </h2>
          </div>
          
          <div className="column is-half is-hidden-mobile">
            <img src={heroImg}/>
          </div>
        </div>
      </div>
    </section>
    
    {/* Bundle Section */}
    <section className="container mt4 pt2">
      <div className="flex column items-center">
        <H1 className="flex-auto pr2">Get started with our bioinformatics core bundle:</H1>
        <button className="button is-primary is-medium">Download Core</button>
      </div>
    </section>



  </main>
)

export default HomePage
