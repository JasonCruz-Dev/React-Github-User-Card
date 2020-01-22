import React, { Component } from "react";
import Card from "./Components/Card";
import Search from "./Components/Search";

export default class App extends Component {
  state = {
    searchTerm: "",
    user: {},
    followers: []
  };

  componentDidMount() {
    this.getUser("JasonCruz-Dev");
  }

  getUser = searchInput => {
    this.setState({ searchTerm: searchInput });
    fetch(`https://api.github.com/users/${searchInput}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ user: res });
      })
      .catch(err => console.log(err, "Search Input Error"));
  };

  getFollowers = () => {
    fetch(`https://api.github.com/users/${this.state.searchTerm}/followers`)
      .then(res => res.json())
      .then(res => {
        this.setState({
          followers: res,
          seearchTerm: res
        });
      })
      .catch(err => console.log(err, "Following Error"));
  };

  render() {
    return (
      <div className='app'>
        <h1 className='title'>React Github User Card</h1>
        <Search getUser={this.getUser} getFollowers={this.getFollowers} />
        <Card
          user={this.state.user}
          followers={this.state.followers}
          getFollowers={this.getFollowers}
        />
      </div>
    );
  }
}
