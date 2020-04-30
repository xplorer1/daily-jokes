import { Component, OnInit } from '@angular/core';
import { BikeService } from '../../services/bike.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
	selector: 'bu-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
	models: string [] = [
		"Globo MTB 29 Full Suspension",
		"Globo Carbon Fiber Race Series",
		"Globo Time Trial Blade"
	];

	bikeform: FormGroup;
	validMessage: string = "";

	constructor(private bikeService: BikeService) { }

	ngOnInit(): void {
		this.bikeform = new FormGroup({
			name: new FormControl("", Validators.required),
			email: new FormControl("", Validators.required),
			phone: new FormControl("", Validators.required),
			model: new FormControl("", Validators.required),
			serialNumber: new FormControl("", Validators.required),
			purchasePrice: new FormControl("", Validators.required),
			purchaseDate: new FormControl("", Validators.required),
			contact: new FormControl()
		})
	}

	submitRegistration() {
		console.log("clicked")
		if(this.bikeform.valid) {
			this.validMessage = "Your bike registration was submitted successfully.";
			this.bikeService.createBike(this.bikeform.value).subscribe(
				data => {
					this.bikeform.reset();
					return true;
				},
				err => {
					return Observable.throw(err.message);
				}
			)
		}
		else {
			this.validMessage = "All fields are required."
		}
	}
}
