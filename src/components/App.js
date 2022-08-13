import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from '../logo.svg';
import '../styles/App.css';
// pull in actions from action/index
import { getChars } from '../actions/index';


class App extends Component {
  componentDidMount() {
    this.props.getChars()
  }
  render() {
    return (
      <div className="App">
      {this.props.fetching ? <h3>Waiting On the Force</h3>: null}
        {this.props.fetching ? (
          <img src={logo} className="App-logo" alt="logo" />
        ) : (
          <ul>
            {this.props.chars.map(char => {
              return <li key={char.name}>{char.name}</li>;
            })}
          </ul>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    fetching: state.fetching,
    fetched: state.fetched,
    error: state.error,
    chars: state.chars
  }
}
// our mapDispatchToProps needs to have two properties inherited from state
// the chars and the fetching boolean
export default connect(mapStateToProps, { getChars
})(App);
