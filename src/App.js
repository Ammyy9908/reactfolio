import React from 'react';
import './App.css';
import Home from './pages/Home';
import socketio from "socket.io-client";
import { connect } from 'react-redux';
import { setData } from './redux/actions/_appActions';
import axios from 'axios';
function App(props) {


  React.useEffect(()=>{
    const socket = socketio(`https://portfoliosrever.herokuapp.com`,{ transports: ["websocket"] });

    socket.on("data",(data)=>{
      console.log(data);
      props.setData(data)
    })
  },
  // eslint-disable-next-line
  [])


  React.useEffect(()=>{
    axios.get('https://portfoliosrever.herokuapp.com/data').then((response)=>{
      console.log(response);
      props.setData(response.data.data);
    }).catch((e)=>{
      console.log(e)
    })
  },
  // eslint-disable-next-line
  [])
   

    
  return (
    <div className="App">
      <Home/>
    </div>
  );
}


const mapDispatchToProps = (dispatch)=>({
  setData:(data)=>dispatch(setData(data))
})
export default connect(null,mapDispatchToProps)(App);
