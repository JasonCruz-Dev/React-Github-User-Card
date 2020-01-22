import React, { Component } from "react";
import FollowerCard from "./FollowerCard";

export default class Followers extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false
    };
  }

  toggleOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log("Why", this.props.getFollowers());
    this.props.getFollowers();
  };

  render() {
    return (
      <>
        <button className='followerBtn' onClick={this.toggleOpen}>
          {this.state.isOpen === false ? "Show Followers" : "Hide Followers"}
        </button>
        <div className='followers'>
          {this.props.followers &&
            this.state.isOpen === true &&
            this.props.followers.map((flwr, index) => {
              return (
                <a href={flwr.html_url} target='_blank' rel='noopener noreferrer' key={flwr.id}>
                  <div className='followerCard'>
                    <FollowerCard key={flwr.id} index={index} user={flwr} />
                  </div>
                </a>
              );
            })}
        </div>
      </>
    );
  }
}
