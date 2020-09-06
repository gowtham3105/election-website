import React from 'react';
import CardList from './Components/Cardlist/CardList';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  render() {
    const { robots } = this.state;
    return (<CardList robots={robots} />);

  }
}

export default App;