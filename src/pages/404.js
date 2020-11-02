import React from 'react';

export default function NotFoundPage() {
  return (
    <div>
      <section className="hero is-primary is-bold is-large">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section is-centered">
                  <h1 className="title">404: NOT FOUND</h1>
                  <h2 className="subtitle">The page you were looking for doesn't exist.</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
