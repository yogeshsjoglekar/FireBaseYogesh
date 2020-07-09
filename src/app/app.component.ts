import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  name = 'Angular 6';

  ngOnInit() {
    firebase.initializeApp({
    apiKey: "AIzaSyD5kHdUUmk5P7_UFhILQ2-tRcw_eTzFPwI",
    authDomain: "fir-yogesh.firebaseapp.com",
    databaseURL: "https://fir-yogesh.firebaseio.com",
    projectId: "fir-yogesh",
    storageBucket: "fir-yogesh.appspot.com",
    messagingSenderId: "481372910039",
    appId: "1:481372910039:web:7036aadaacd97bff925b92",
    measurementId: "G-DY2TJ7GKZM"
    });
  }

}
