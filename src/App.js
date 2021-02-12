import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div class="container-for-padding">
        <header class="container header">
          <h1>
            <a class="link header-logo" href="/" aria-label="logo of privacy guard">PG</a>
          </h1>
          <input class="header-input" />
          <button class=" menu-btn" type="button" aria-label="menu button">
            <svg class=" menu-svg" width="50px" height="50px">
              <use class="icon-menu" href="./sprite.svg#icon-menu-btn"></use>
            </svg>
          </button>
        </header>
        <div class="main-wrapper">
          <main class="container-main container ">
            <div class="main-content-padding">
              <section>
                <h2 class="public-keys">public keys</h2>
                <ul class="public-keys-wrapper list">
                  <li class="public-keys-item">
                    <svg width="14px" height="14px">
                      <use href="./sprite.svg#icon-rectangle-keys"></use>
                    </svg>0x76521e72
                  </li>
                  <li class="public-keys-item">
                    <svg width="14px" height="14px">
                      <use href="./sprite.svg#icon-rectangle-keys"></use>
                    </svg>0x76521e72
                  </li>
                </ul>
              </section>
              <section class="messages-section">
                <h2 class="messages">messages</h2>
                <ul class="list messages-wrapper">
                  <li class="message-item">
                    <p class="key-in-message key-in-message-1">0x7852e1f</p>
                    <p class="text-message"></p>
                  </li>
                  <li class="message-item">
                    <p class="key-in-message key-in-message-2">0x7852e1f</p>
                    <p class="text-message"></p>
                  </li>
                </ul>
                <div class="message-input-div">
                  <input class="message-input" type="text" />
                  <button class="message-btn" type="button" aria-label="send message button">send</button>
                </div>
              </section>
            </div>
          </main>
        </div>
        <footer class="container footer-lines">
          <a class="footer-logo" href="/" aria-label="logo of privacy guard">PG</a>
          <div class="footer-flex">
            <nav class="footer-navigation">
              <ul class="list navigation-list">
                <li class="navigation-list-item">
                  <a href="/" aria-label="about us">About</a>
                </li>
                <li class="navigation-list-item">
                  <a href="/" aria-label="licence">Licence</a>
                </li>
                <li class="navigation-list-item">
                  <a href="/" aria-label="conect us">Conect us</a>
                </li>
              </ul>
            </nav>
            <p class="copyright">Copyright 2021 Privacy Guard Messages</p>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
