import { Component } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.sharedService.isRegisterPage = true;
  }

}
