import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todoListAngular';
  ruta: String = ''
  constructor (public route: Router){
  }
  ngOnInit(){
    console.log(this.route.url)
  }
}
