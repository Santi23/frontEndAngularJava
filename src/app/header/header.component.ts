import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  titleHeader="APLICACIÓN  ANGULAR (FRONT-END) - JAVA SPRING MAVEN (BACK-END)";

  constructor() { }

  ngOnInit(): void {
  }

}
