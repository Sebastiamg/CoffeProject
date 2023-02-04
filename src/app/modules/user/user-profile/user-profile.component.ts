import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent {

  constructor(private readonly userService: UserService) {}

  protected user = {
    id: 0,
    name: "",
    email: "",
    password: "",
    status: true,
    profile: {
      role: "",
      surname: "",
      phone: 0,
      photo: ""
    }
  } 

  // readonly inputs
  protected readonly = true;

  //get user from local storage
  getUserfromStorage() {
    const user = JSON.parse(localStorage.getItem("user") as string);
    return this.user = user;
  }

  // update user and user profile
  updateuUserProfile() {
      const updatedUser = this.user;

      if (!this.readonly) {
        return this.userService.updateUserProfile(updatedUser.id, updatedUser).subscribe(res => {
          console.log(res);
          localStorage.setItem("user", JSON.stringify(updatedUser)),
          this.getUserfromStorage();
          this.readonly = !this.readonly;
        });
      } 
      return console.log("Edit...")
  }

  // delete user
  deleteUser() {
    const userId = this.user.id;
    const deleteConfirmation = confirm("Seguro");

    if (deleteConfirmation) {
      console.log("Eliminando usruario...")
      return this.userService.deleteUser(userId).subscribe(res => {
        console.log(res)
        this.resetStorage();
        window.location.href = "http://localhost:4200/auth/login";
      });
    } else {
      return console.log(false)
    }
  }

  resetStorage() {
    localStorage.setItem("isLogged", "false");
    localStorage.setItem("userName", " ");
    localStorage.setItem("user", "");
  }

  ngOnInit() {
    this.getUserfromStorage()
  }
}
