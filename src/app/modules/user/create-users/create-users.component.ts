import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-create-users',
  templateUrl: './create-users.component.html',
  styleUrls: ['./create-users.component.css']
})
export class CreateUsersComponent {
  constructor(private readonly userservice: UserService) {}

  protected users: any = [];

  // get all users from db
  getAllUsers() {
    return this.userservice.getAllUsers().subscribe(res => {
      console.log(res)
        const myUser = JSON.parse(localStorage.getItem("user")!);
      console.log(myUser.id)
      Object.values(res).filter(x => x.id != myUser.id).forEach(user => this.users.push(user))
      

    })
  }

  //show / hidde info
  showInfo(tick: boolean, cardId: string) {
    const card = (document.querySelector(`#${cardId}`) as HTMLElement)!;
    tick ? card.style.display = "flex":
    card.style.display = "none"
  }

  // Call DeleteUser method from user.service
  deleteUser(id: number) {
    return this.userservice.deleteUser(id).subscribe(res => {
      this.users = []
      this.getAllUsers()
    })
  }

  // Call CreateUser method from user.service
  protected newUser = {
    name: "",
    email: "",
    password: "",
    status: true,
    profile: {
      role: "",
      phone: 1,
      photo: "https://static.vecteezy.com/system/resources/thumbnails/009/292/244/small/default-avatar-icon-of-social-media-user-vector.jpg"
    }
  } 

  createUser() { 
    // ok/error info creation
    const p = document.createElement("p");
    p.classList.add("text-center");

    let data = this.newUser;
      data.name = data.name.trim()
      data.email = data.email.trim()
      data.password = data.password.trim()
      data.profile.role = data.profile.role;
      data.profile = data.profile;

    // empty inputs validation
    if (Object.values(data).some(x => x == "") || Object.values(data.profile).some(x => x == "")) {
      // Error Message
      p.textContent = "Error: Llena todos los campos";
      p.classList.add("text-slate-800")
      document.querySelector("#submitButton")?.insertAdjacentElement("afterend", p);
      setTimeout(() => {
        p.remove()
      }, 2500);
    } else {
      // ok Message
      p.textContent = "Usuario creado correctamente";
      p.classList.add("text-slate-200")
      document.querySelector("#submitButton")?.insertAdjacentElement("afterend", p);
      setTimeout(() => {
        p.remove()
      }, 2500);

      // call service
      return this.userservice.createUser(data).subscribe(res => {
        console.log(res)
        this.users = []
        this.getAllUsers();
        (document.querySelector("#createForm") as HTMLFormElement).reset();
      })
    }
    return
  }


  ngOnInit() {
    this.getAllUsers()
  }
}
