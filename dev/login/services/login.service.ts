import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import 'rxjs/add/operator/map';
import {Headers} from "angular2/http";


@Injectable()
export class HTTPLoginService {
	constructor (private _http: Http) {}

	getCurrentTime() {
		return this._http.get('http://date.jsontest.com')
			.map(res => res.json());
	}

	postJSON() {
		var json =JSON.stringify({ var1: 'test', var2: 3});
		var params = 'json'+ json;
		var headers = new Headers();
		headers.append('Content-Type','application/x-www-form-urlencoded');

		return this._http.post('http://validate.jsontest.com',
			params, { 
				headers: headers
			}			)
			.map(res => res.json());
	}

	postLogin(username,password) {
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
