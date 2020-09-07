import React, { Component} from 'react';
import ReactPlayer from 'react-player/lazy'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import CardList from './Components/Cardlist/CardList';
import './App.css';

var loginState = false;

window.videoStatus = false;



class Video extends Component {
  constructor(props) {
    super(props)

    this.state ={
      
    }
    
      
    }
  

  render(){
    
    return (
      <div>       
        <Modal
          show={true}
          onHide={() => {showModel(false, "");}}
          size = 'lg'
          centered
        >
          <ReactPlayer url = {this.props.videourl} controls playing  width='100' height='420px' />
        </Modal>
      </div>
    );
  }
}

class NavBar extends Component {
  constructor(props) {
    super(props)

    //var show = false;
    this.state = {
      show: false,
      
    }

  }
 

  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg"  variant="light" className = "NavBar" >
          <Navbar.Brand href="#home"><div className='primary_Text'>IITDH Elections</div></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />

          <Navbar.Collapse id="responsive-navbar-nav" className='NavBar' >
            <Nav className="mr-auto " fill>
              <Nav.Link href="#features" className = "NavLink"><div className='secondary_Text'>Positions</div></Nav.Link>
              <Nav.Link href="#pricing" className="NavLink">Voting</Nav.Link>
              <Nav.Link href="#pricing" className="NavLink">TimeLine</Nav.Link>
              <Nav.Link href="#pricing" className="NavLink">Important Dates</Nav.Link>
              <Nav.Link href="#pricing" className="NavLink">Contact Us</Nav.Link>
            </Nav>

            <Nav fill> 
              <Nav.Link href="#pricing"><Button className='Button'>{loginState ? 'Sign Out':'Sign In'}</Button></Nav.Link>
            </Nav>
            

            
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}




class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      show:false,
      videourl: "https://www.youtube.com/watch?v=qmN1Gf8rRc8",
      robots: []
      
    }
    showModel = showModel.bind(this)
  } 

  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => { this.setState({ robots: users }) });
  }

  render()
  {

    const { robots } = this.state;
    return (      
      <div >
        <NavBar/>
        <br/>
        {this.state.show ?<Video videourl = {this.state.videourl}/>:" "}
        <br/>
       
        <CardList robots={robots} />
        
      </div>
    )
  }
}

function showModel(val, url){
      this.setState({show: val});
      this.setState({videourl:url});
  }

export {App, Video, showModel};