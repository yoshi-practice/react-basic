import React from "react";
import Header from './Header';
import Footer from "./Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "１秒後に変わります"
    };
  }

  render() {
    setTimeout( () => { this.setState({name: "Hello!"}); }, 1000);
    return (
      <div>
        <Header />
        {this.state.name}
        <Footer />
      </div>
    );
  }
}