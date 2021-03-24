import React, { Component } from 'react'
import './landing.scss'
import { Header } from '../header/header'
import { Footer } from '../footer/footer'

class Landing extends Component {
  render() {
    return (
      <div className="bg-for-landing">
        <div className="container landing-container">

          <main className="main-landing-container">
            <a className="cool-button" href="/keys">message</a>
            <section className="benefits-section">
              <ul className="list benefits-list">
                <li className="benefit-item">
                  <svg width="60px" height="60px">
                    <use href="./sprite.svg#icon-lock"></use>
                  </svg>
                  <h2>secure</h2>
                  <p></p>
                </li>
                <li className="benefit-item">
                  <svg width="60px" height="60px">
                    <use href="./sprite.svg#icon-shield"></use>
                  </svg>
                  <h2>anonymous</h2>
                  <p></p>
                </li>
              </ul>
            </section>
          </main>
        </div>

      </div>


    )
  }
}

export { Landing }

