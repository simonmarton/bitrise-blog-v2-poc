import React from 'react';

export default class Menu extends React.Component {
  state = {
    isBurgerMenuOpen: false
  };

  toggleOpen() {
    const isBurgerMenuOpen = !this.state.isBurgerMenuOpen;
    this.setState({ isBurgerMenuOpen });
  }

  render() {
    let bugerButtonClasses = 'burger';
    let menuOprionsClasses = 'menu-options';

    bugerButtonClasses += this.state.isBurgerMenuOpen ? ' open' : '';
    menuOprionsClasses += this.state.isBurgerMenuOpen ? ' opened' : '';

    return (
      // <% environment.context_class.instance_eval { include ApplicationHelper } %>
      <nav className="menu">
        <div className="menu-content">
          {/* <a className="logo" href="/"><%= svg("logo1") %></a> */}
          <ul className={menuOprionsClasses}>
            <li className="menu-option">
              <a href="https://www.bitrise.io/integrations?utm_source=bitriseblog&utm_medium=web&utm_campaign=static">
                Integrations
              </a>
            </li>
            <li className="menu-option">
              <a href="https://www.bitrise.io/pricing?utm_source=bitriseblog&utm_medium=web&utm_campaign=static">
                Pricing
              </a>
            </li>
            <li className="menu-option">
              <a href="https://www.bitrise.io/cli?utm_source=bitriseblog&utm_medium=web&utm_campaign=static">
                CLI
              </a>
            </li>
            <li className="menu-option">
              <a href="https://www.bitrise.io/contact?utm_source=bitriseblog&utm_medium=web&utm_campaign=static">
                Contact
              </a>
            </li>
            <li className="menu-option">
              <a href="http://devcenter.bitrise.io?utm_source=bitriseblog&utm_medium=web&utm_campaign=static">
                Docs
              </a>
            </li>
            <li className="side-menu-options">
              <ul>
                <li className="side-menu-option login">
                  <a href="https://www.bitrise.io/users/sign_in?utm_source=bitriseblog&utm_medium=web&utm_campaign=static">
                    Log in
                  </a>
                </li>
                <li className="side-menu-option signup">
                  <a href="https://www.bitrise.io/users/sign_in?utm_source=bitriseblog&utm_medium=web&utm_campaign=static">
                    Sign up!
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* <button className={bugerButtonClasses} onClick={() => this.toggleOpen()}><%= svg("burger") %></button> */}
        </div>
      </nav>
    );
  }
}
