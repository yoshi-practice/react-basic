import React from "react";
import Header from './Header/Header';
import Footer from "./Footer/Footer";

export default class Layout extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Welcome"
    };
  }

  changeTitle() {
    this.setState({name});
  }

  render() {
    setTimeout( () => { this.setState( { name: "hello state!" } ) }, 2000);
    return (
      <div>
        <Header name={this.state.name} changeTitle={this.changeTitle.bind(this)} />
        <Footer />
      </div>
    );
  }
}