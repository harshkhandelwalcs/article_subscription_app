import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserState } from 'src/app/reducers/user.reducer';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { UserService} from '../../services/user.service'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });
  userList: any;
  enteredEmail: any;
  enteredPassword: any;
  msgs: any;
  
  constructor(private userService:UserService,private formBuilder: FormBuilder, private store: Store<UserState>, private router: Router) {

  }

  ngOnInit() {
    localStorage.setItem('subscribedArticles',JSON.stringify([]));
    this.store.select<any>('users').subscribe((data) => {
      if (data.users) {
        this.userList = data.users;
      }
    })
  }
  onSubmit() {
    this.enteredEmail = this.loginForm.get('email').value;
    this.enteredPassword = this.loginForm.get('password').value;
    this.checkUser();
    this.loginForm.reset();
  }
  checkUser() {
    const getUser = this.userList.filter((user) => {
      if (this.enteredEmail) {
        return this.enteredEmail == user.email
      }
    })
    if (getUser.length) {
      if (this.enteredPassword == getUser[0].password) {
        this.saveUserData(getUser);
        this.router.navigate(['/article/list']);
      }else{
        this.showPasswordError();
      }
    } else {
      this.showUserError();
    }
  }
  showUserError() {
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User not found' });
  }

  showPasswordError(){
    this.msgs = [];
    this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Entered password is not correct.' });
  }

  saveUserData(getUser){
    localStorage.setItem("userData",JSON.stringify(getUser[0]));
    this.userService.localData.next(getUser[0]);
  }
}
