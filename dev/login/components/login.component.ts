import {Component, OnInit} from 'angular2/core';
import {HTTPLoginService} from "../services/login.service";
import {HTTP_PROVIDERS} from 'angular2/http';

@Component({
	selector: 'login',
  	templateUrl: '../../../views/templates/login.html',
  	providers: [HTTPLoginService]  
})

export class loginForm {
	public login;
	postLogin: string;


	constructor(private _httpService: HTTPLoginService){
	    this.login = {
	        "username": "",
	        "password": ""
	    };
	}

	formSubmit() {
		if (this.login.username != "" && this.login.password != ""){

			this._httpService.postLogin(this.login.username,this.login.password)
			.subscribe(
					data => alert("post Login: "+data),
					error => console.log("error" + error),
					() => console.log("Finished post login")
			);			
		}
		else{
			alert("Llenar campos obligatorios");
		}		
	}
}