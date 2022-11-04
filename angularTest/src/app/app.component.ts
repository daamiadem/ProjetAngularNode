import { Component , OnInit } from '@angular/core';
import {UserService} from '../app/services/userService'; 
import {user} from '../app/models/user'
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
users : user[] ; 
FormUserAdd : FormGroup;
UserAdd : user ;  




constructor(private PS: UserService, private ac: ActivatedRoute ) {
   this.PS.getAllUsers().subscribe((us) => (this.users = us));


}

ngOnInit(): void {
  this.FormUserAdd=new FormGroup({
    name:new FormControl('',Validators.required),
    date:new FormControl('',Validators.required),
    profession: new FormControl('',Validators.required),
    age: new FormControl('',Validators.required),
    
  })
}

get namec(){return this.FormUserAdd.get('name');};
get datec (){return this.FormUserAdd.get("date");};
get professionc (){return this.FormUserAdd.get("profession");};
get agec (){return this.FormUserAdd.get("age");};

  // users: any[] = [{ name: 'John' ,date : "5-10-2000" , age : 15 , profession : "Etudiant"}, { name: 'jack', date : "11-12-2015" , age :20 , profession :"Enseignant"}, { name: 'ahmed', date : "8-9-1998" , age :45 , profession : "Developpeur"},{ name: 'adam', date : "3-10-1950", age :12 ,profession : "Medecin"},{ name: 'adam', date : "2-9-1950" , age :18, profession : "Mecanicien"},{ name: 'zied', date : "8-30-1996" , age :19, profession : "Etudiant"},{ name: 'eskander', date : "8-6-2003" , age :10 , profession : "Etudiant"}];
   userFilter: any = { name: '' };


   Ajouterf(){
    this.PS.ajouterUser(this.FormUserAdd.getRawValue()).subscribe();

    this.FormUserAdd.reset();
    window.location.reload();
  }

  deleteUser(i: String) {
   
    this.PS.RemoveUser(i).subscribe();
    window.location.reload();
  }
}
