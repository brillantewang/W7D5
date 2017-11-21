import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentUser) {
      return (
        <div>
          <p>Welcome, {this.props.currentUser.username}.</p>
          <button onClick={this.props.logout}>Logout</button>
        </div>
      )
    } else {
      return (
        <div>
          <Link to="/#/signup">Sign Up</Link>
          <br/>
          <Link to="/#/login">Log In</Link>
        </div>
      )
    }
  }
}

export default Greeting;
