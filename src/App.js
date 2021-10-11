import React from 'react';
import './App.css';
import Home from './pages/Home';
import socketio from "socket.io-client";
import { connect } from 'react-redux';
import { addWork, setData, setWorks } from './redux/actions/_appActions';
import axios from 'axios';
function App(props) {


  React.useEffect(()=>{
    const socket = socketio(`https://portfoliosrever.herokuapp.com`,{ transports: ["websocket"] });

    socket.on("data",(data)=>{
      console.log(data);
      const {name} = data;
      document.window.title(name);
      props.setData(data)
    })

    socket.on("work",(work)=>{
      console.log(work);
      props.addWork(work)
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

    axios.get('https://portfoliosrever.herokuapp.com/works').then((response)=>{
      console.log(response);
      const {works} = response.data;
      props.setWorks(works);
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
  setData:(data)=>dispatch(setData(data)),
  setWorks:(works)=>dispatch(setWorks(works)),
  addWork:(work)=>dispatch(addWork(work))
})
export default connect(null,mapDispatchToProps)(App);
