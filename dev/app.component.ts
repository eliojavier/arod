import {Component} from 'angular2/core';
//import {ContactListComponent} from "./contacts/contact-list.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
//import {HTTPTestComponent} from "./http-component/http-test.component";
import {loginForm} from "./login/components/login.component";


@Component({
  selector: 'my-app',
  template: `      
      <div class="main">
        <router-outlet></router-outlet>
      </div>
    `,  
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
//directives: [ContactListComponent]
//directives: [HTTPTestComponent]