import React, {Component} from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
      <h2>Hello World</h2>
      { lists.map(list => ( 
        <TrelloList key={list.id} title={list.title} cards={lists.cards} />
      ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
