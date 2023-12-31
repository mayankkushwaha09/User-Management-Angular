import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  team: any;

  
  constructor(private teamService: UserService) {
    this.team = this.teamService.getTeam();
  }

  ngOnInit() {
    this.team = this.teamService.getTeam();
}
} 
