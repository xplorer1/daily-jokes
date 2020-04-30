import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class BikeService {
	constructor(private http: HttpClient) { }

	public getBikes () {
		return this.http.get("/api/bikes");
	}

	public getBike(id: number) {
		return this.http.get("/api/bikes/" + id);
	}

	createBike(bike) {
		let body = JSON.stringify(bike);
		return this.http.post("/api/bikes/", body);
	}
}
