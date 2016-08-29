import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {loginForm} from "./login/components/login.component";

@Component({
  selector: 'my-app',
  template: `<login></login>`,  
  directives: [ROUTER_DIRECTIVES,loginForm]
})

@RouteConfig([
    {
      path: '/',
      component: loginForm,
      name: 'LoginForm'
    }
])

export class AppComponent {

}