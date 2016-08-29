import {Injectable} from "angular2/core";
//import {Http, Headers} from "angular2/http";
import 'rxjs/add/operator/map';
import {Http, Headers} from "angular2/http";
import {Observable} from 'rxjs/observable';
import 'rxjs/Rx';

@Injectable()
export class HTTPLoginService {
	constructor (private _http: Http) {}

	postLogin(username,password): Observable {
		var json =JSON.stringify({ email: username, password: password});
		console.log(json);
		var params = json;
		var headers = new Headers();
		headers.append('Content-Type','application/x-www-form-urlencoded');
		headers.append('authorization','Basic ZnJvbnRlbmQ=');		

		return this._http.post('http://localhost:3000/v1/login',
			params, { 
				headers: headers
			})
			.map(res => res.json());
	}

}
