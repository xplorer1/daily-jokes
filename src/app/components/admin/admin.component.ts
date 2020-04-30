import { Component, OnInit } from '@angular/core';
import { BikeService } from "../../services/bike.service";

@Component({
  selector: 'bu-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
	public bikes;

	constructor(private bikeService: BikeService) { }

	ngOnInit(): void {
		this.getBikes();
	}

	getBikes() {
		this.bikeService.getBikes().subscribe(
			data => {this.bikes = data},
			err => {console.log(err.message)},
			() => {console.log("bikes loaded successfully")}
		)
	}

}
