import React, {Component} from "react";
import TrelloList from "./TrelloList";
import { connect } from "react-redux";
import TrelloActionButton from "./TrelloActionButton";

class App extends Component {
  render() {
    const { lists } = this.props;
    return (
      <div className="App">
      <h2>Hello World</h2>
        <div style={styles.listsContainer}>
        { lists.map(list => ( 
          <TrelloList listID= {list.id} key={list.id} title={list.title} cards={lists.cards} />
        ))}
        <TrelloActionButton list />
        </div>
      </div>
    );
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps)(App);
