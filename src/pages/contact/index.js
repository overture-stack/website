import Button from "../../components/Button/index";
import React, { Component } from "react";
import PropTypes from "prop-types";
import heroImg from "./hero_img.svg";
import Helmet from "react-helmet";
import { H1, H2, H4 } from "../../components/Typography/index";
import SlackButton from "../../components/SlackButton";

import "./styles.scss";

class ContactPage extends Component {
  componentDidMount() {
    // Mount jira plugin
    window.jellDeskSettings = {
      sourceType: "web",
      source: window.location.href,
      position: { horizontal: "right", vertical: "bottom" },
      offset: { horizontal: "50px", vertical: "50px" },
      serviceUrl:
        "https://extsd.oicr.on.ca/plugins/servlet/widget?jellToken=1234567890123456789&projectKey=OV&serviceDeskId=7"
    };
  }

  jiraEndpoint = "https://extsd.oicr.on.ca/rest/embeddable/1.0/client/tickets/create-request?projectKey=OV&apiToken=1234567890123456789";

  state = {
    requestType: "1",
    name: "",
    email: "",
    description: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    let payload = {
      jellToken: "1234567890123456789",
      defaultOrg: "null",
      serviceDeskId: "7",
      fullname: this.state.name,
      email: this.state.email,
      summary: this.state.description,
      requestTypeId: this.state.requestType,
      projectKey: "OV",
      source: "null",
      fingerprint: 2226868218
    };

    // FIXME: This is failing on a CORS issue!
    fetch(this.jiraEndpoint, {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }).then(response => {
      console.log("response is ", response);
    });
  };

  render() {
    return (
      <main className="ContactPage">
        {/* Metadata */}
        <Helmet>
          <title>Overture - Contact Us</title>
          <meta
            name="description"
            content=" Looking for help with our software stack? Want to collaborate? Looking for employment? Get in touch with the Overture team."
          />
          <meta
            name="keywords"
            content="Overture, data science software, bioinformatics software, open-source software, cancer research, Ontario Institute for Cancer Research, OICR, development careers"
          />
        </Helmet>

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

        <div
          className="is-hidden-mobile"
          style={{ width: "1px", height: "72px" }}
        />

        {/* Details / info */}
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-half is-offset-3">
                <div>
                  <H2>Send us a message</H2>
                  <div className="mt3 yellow-bar" />
                  <ul className="py3">
                    <li className="bullet">
                      Looking for help with our software stack?
                    </li>
                    <li className="bullet">
                      Want to learn more about Overture?
                    </li>
                    <li className="bullet">Want to collaborate?</li>
                    <li className="bullet">Looking for employment? </li>
                  </ul>
                  <div>
                    There are many reasons to get in touch  with us and we want
                    to hear from you!
                  </div>

                  <Button type="primary" className="my2" internalLink="mailto:contact@overture.bio" >
                    Contact Us
                  </Button>
                  
                  <SlackButton className="my2" />
                </div>
              </div>

              {/* contact form HIDDEN FOR NOW */}

              {/*
              <div className="column is-half self-center">
                <form onSubmit={this.handleSubmit}>
                  <div className="field">
                    <label className="flex pb1 bold" htmlFor="requestType">
                      Request Type
                    </label>
                    <div className="select">
                      <select
                        value={this.state.requestType}
                        onChange={e =>
                                  this.setState({ requestType: e.target.value })
                                  }
                                  >
                                  <option value="1">Academic Collaborations</option>
                                  <option value="2">Consulting services</option>
                                  <option value="3">Technical support</option>
                                  <option value="4">Employment</option>
                                  <option value="5">General inquiry</option>
                                  <option value="6">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="field">
                    <label className="flex pb1 bold" htmlFor="name">
                      Your Name
                    </label>
                    <input
                      id="name"
                      className="input"
                      type="text"
                      value={this.state.name}
                      onChange={e => this.setState({ name: e.target.value })}
                      />
                  </div>
                  <div className="field">
                    <label className="flex pb1 bold" htmlFor="email">
                      Email Address
                    </label>
                    <input
                      id="email"
                      className="input"
                      type="text"
                      value={this.state.email}
                      onChange={e => this.setState({ email: e.target.value })}
                      />
                  </div>
                  <div className="field">
                    <label className="flex pb1 bold" htmlFor="desc">
                      Description
                    </label>
                    <textarea
                      id="desc"
                      className="textarea"
                      type="text"
                      value={this.state.description}
                      onChange={e =>
                                this.setState({ description: e.target.value })
                                }
                                />
                  </div>

                  <div className="pt2">
                    <button className="button bg-grey mr1">Cancel</button>
                    <button className="button is-primary">Submit</button>
                  </div>
                </form>
              </div>
              */}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default ContactPage;
