import React, { Component } from "react";

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };
  }

  //   componentDidUpdate(prevState) {
  //     if (prevState !== this.state.input) {
  //     }
  //   }

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  handleSubmit = e => {
    e.prevent.getUser(this.state.input);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchTerm !== this.state.searchTerm) {
      console.log("SearchTerm: We have a state change!");

      const follower = this.state.searchTerm.filter(people =>
        people.login.toLowerCase().includes(this.state.searchTerm.toLowerCase())
      );
      this.setState({
        followers: follower
      });
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            placeholder='Search...'
            value={this.state.input}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}
