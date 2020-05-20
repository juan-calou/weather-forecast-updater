import React, { Component } from 'react';
import axios from 'axios';
import firebase from '../components/firebase';

const KEY = process.env.REACT_APP_API_KEY;
const PERGAMINO = process.env.REACT_APP_PERGAMINO_ID;
const BSAS = process.env.REACT_APP_BUENOS_AIRES_ID

export default class StorePredictions extends Component {

  constructor(props) {
    super(props);
  }

  formatDate = d => {
    var date = new Date(d * 1000);
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    var yyyy = date.getFullYear();
    var hh = date.getHours();
    if(dd < 10) dd = '0' + dd;
    if(mm < 10) mm = '0' + mm;

    return(mm + '/' + dd + '/' + yyyy + ' - ' + hh);
  }

  componentDidMount() {

    axios.get( 'https://api.openweathermap.org/data/2.5/forecast?id=' + PERGAMINO + '&appid=' + KEY)
      .then(res => {
        const today = new Date().getTime();
        const datenice = this.formatDate(today / 1000);
        const prediction = {
          city: PERGAMINO,
          date: today,
          datenice,
          forecast: res.data
        };
    
        firebase.db.collection('predictions').add(prediction);
      })
      .catch(error => {
        console.log(error);
      });

    axios.get( 'https://api.openweathermap.org/data/2.5/forecast?id=' + BSAS + '&appid=' + KEY)
      .then(res => {
        const today = new Date().getTime();
        const datenice = this.formatDate(today / 1000);
        const prediction = {
          city: BSAS,
          date: today,
          datenice,
          forecast: res.data
        };
    
        firebase.db.collection('predictions').add(prediction);
      })
      .catch(error => {
        console.log(error);
      });
    
  }

  render() {
    return (
      <div>
        Done!
      </div>
    );
  }
}
