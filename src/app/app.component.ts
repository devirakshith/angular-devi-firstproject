import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  // template: `{{title}}
  //           <input type = 'text' [value]='name' (change)='display($event.target.value)'>
  //           <p>{{name}}</p>`,
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  title:String = 'Name :';
  title2:String = 'Name Two Way :';
  name:String = '';
    display(s1:String):void{
      this.name = s1
    }
}