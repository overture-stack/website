import React from 'react';
import { HOME_PATH } from '../../constants/pages';

export default function NotFoundPage() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section is-centered">
                  <h1 className="title">404: Page Not Found</h1>
                  <h2 className="subtitle">Oops! The page you're looking for doesn't exist.</h2>
                  <p className="subtitle">
                    But don't worry, you can always go back to the <a href={HOME_PATH}>homepage</a>.
                  </p>
                  <a className="button is-primary" href={HOME_PATH}>
                    Go Home
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
