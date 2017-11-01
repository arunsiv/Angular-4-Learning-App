import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]' //--> adds component by attribute
  //selector: '.app-servers'  //--> adds component by class
  selector: 'app-servers',    //--> adds component by element
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  btnText = "Hello There!!";
  enableButton = false;
  messageOnClick = "Button was not clicked";
  userTypedMessage = "";

  constructor() { 
    setTimeout(() => {
      this.enableButton = true;
    }, 3000);
  }

  ngOnInit() {
  }
  
  onButtonClick() {
    this.messageOnClick = "Button was clicked!! " + this.userTypedMessage;
  }

  onUserTyping(event: Event) {
    console.log(event);
    this.userTypedMessage = (<HTMLInputElement>event.target).value;
  }
}