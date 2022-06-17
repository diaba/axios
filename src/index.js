import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import axios from 'axios';

class Prayer extends React.Component {
  constructor() {
    super();
    this.state={
      data:''
    };
    this.getData =() =>{
      axios
        .get("http://api.aladhan.com/v1/currentTimestamp?zone=Europe/London")
        .then((response) => console.log(response));
        // .then((response) =>
        //   this.setState({ data: response.data.data[0].timings.Fajr })
        // );
    }
  };
  render() {
    return (
      <div>
         <button className="btn btn-primary" onClick={this.getData}>Test</button>
      <h4>Fajr :{this.state.data}</h4>
      </div>
     
    )
  }
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Prayer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
