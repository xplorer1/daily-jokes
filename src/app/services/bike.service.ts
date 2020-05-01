import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
	providedIn: 'root'
})

export class BikeService {
	constructor(private http: HttpClient) { }

	public getBikes () {
	    let token = localStorage.getItem("access_token");
		return this.http.get("/api/bikes",
            {headers: new HttpHeaders().set('Authorization', 'Bearer' + token)}
        );
	}

	public getBike(id: number) {
        let token = localStorage.getItem("access_token");
		return this.http.get("/api/bikes/" + id,
            {headers: new HttpHeaders().set('Authorization', 'Bearer' + token)});
	}

	createBike(bike) {
		let body = JSON.stringify(bike);
		return this.http.post("/api/bikes/", body);
	}
}
