import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  render() {
    return (
        <h1>From redux state: {this.props.bla}</h1>
    );
  }
}

function mapStateToProps(state, ownProps) {
    return {
        bla: state
    }
}

export default connect(mapStateToProps)(App);