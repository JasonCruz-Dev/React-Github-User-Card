import React, { Component } from "react";
import FollowerCard from "./FollowerCard";

export default class FollowerList extends Component {
  render() {
    return (
      <>
        {this.props.followerData.map((user, index) => {
          return <FollowerCard key={user.id} index={index} userData={user} />;
        })}
      </>
    );
  }
}
