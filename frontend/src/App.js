import React from 'react';
import CardList from './Components/Cardlist/CardList';
import Electioncard from './Components/Electioncard/Electioncard';
import Countdown from 'react-countdown';
import './App.css';
import Flip from "./Flip";
import Tick from '@pqina/flip';
import Homedetails from './Components/Homedetails/Homedetails';
import Footer from './Components/Footer/Footer';
import Renderer from './Components/Renderer'



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
        // const { robots } = this.state;

    return (<div><Homedetails/>
      <Countdown
    date={Date.now() + 1000000}
    renderer={Renderer}
  />
       <Footer/></div>


       );
       
  } 
}

export default App;

