import React, { Component } from 'react'
import PropTypes from 'prop-types'
import heroImg from "./hero_img.svg";
import { H1, H2, H4 } from "../../components/Typography/index";

import "./styles.scss"


const ContactPage = () => (
  <main className="ContactPage">
    {/* HERO */}
    <section className="hero bg-green py4">
        <div className="container flex">
          <div className="hero-header-text flex flex-column column is-3 justify-center">
            <H1>Contact Us</H1>
          </div>

          <div className="column is-9 contact-hero-img is-hidden-mobile">
            <img src={heroImg} />
          </div>
      </div>
    </section>
    
    {/* Details / info */}
    <section className="container mt4">
      <div className="columns py3">
        <div className="column is-4">
          <div>
            <H4>Send us a message</H4>
            <div className="mt3 yellow-bar" />
            <ul className="py3">
              <li className="bullet">Looking for help with our software stack? </li>
              <li className="bullet">Want to learn more about Overture?</li>
              <li className="bullet">Want to collaborate?</li>
              <li className="bullet">Looking for employment? </li>
            </ul>
            <div>There are many reasons to get in touch  with us and we want to hear from you!</div>
          </div>
        </div>

        {/* contact form */}
        <div className="column is-5 is-offset-1 self-center">
          <form>
            <div className="field">
              <label className="flex pb1 bold" htmlFor="requestType">Request Type</label>
              <div className="select">
                <select>
                  <option>Academic Collaborations</option>
                  <option>Consulting services</option>
                  <option>Technical support</option>
                  <option>Employment</option>
                  <option>General inquiry</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className="field">
              <label className="flex pb1 bold" htmlFor="name">Your Name</label>
              <input id="name" className="input" type="text"/>
            </div>
            <div className="field">
              <label className="flex pb1 bold" htmlFor="email">Email Address</label>
              <input id="email" className="input" type="text"/>
            </div>
            <div className="field">
              <label className="flex pb1 bold" htmlFor="desc">Description</label>
              <input id="desc" className="input" type="text"/>
            </div>
            
            <div className="pt2">
              <button className="button bg-grey mr1">Cancel</button>
              <button className="button is-primary">Submit</button>
            </div>

          </form>
        </div>
      </div>
    </section>
    

  </main>
)


export default ContactPage
