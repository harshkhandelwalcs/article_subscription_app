import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { ReactiveFormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from '../../reducers';
import { RouterTestingModule } from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MessageModule,
        RouterTestingModule,
        MessagesModule,
        ReactiveFormsModule,
        CardModule,
        HttpClientTestingModule,
        HttpClientModule,
        StoreModule.forRoot(reducers, {
          metaReducers,
          runtimeChecks: {
            strictStateImmutability: true,
            strictActionImmutability: true
          }
        })],
      declarations: [LoginComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show user error', () => {
    component.msgs = [];
    component.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'User not found' });
    component.showUserError();
    expect(component.msgs).toEqual([{ severity: 'error', summary: 'Error Message', detail: 'User not found' }]);
  })

  it('show password error', () => {
    component.msgs = [];
    component.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Entered password is not correct.' });
    component.showPasswordError();
    expect(component.msgs).toEqual([{ severity: 'error', summary: 'Error Message', detail: 'Entered password is not correct.' }]);
  })

  it('check user', () => {
    component.userList = [
      {
        "user_id": 1,
        "password": "Test@123",
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        },
        "accountBalance": 100
      },
      {
        "user_id": 2,
        "password": "Test@123",
        "name": "Ervin Howell",
        "username": "Antonette",
        "email": "Shanna@melissa.tv",
        "address": {
          "street": "Victor Plains",
          "suite": "Suite 879",
          "city": "Wisokyburgh",
          "zipcode": "90566-7771",
          "geo": {
            "lat": "-43.9509",
            "lng": "-34.4618"
          }
        },
        "phone": "010-692-6593 x09125",
        "website": "anastasia.net",
        "company": {
          "name": "Deckow-Crist",
          "catchPhrase": "Proactive didactic contingency",
          "bs": "synergize scalable supply-chains"
        },
        "accountBalance": 125
      },
      {
        "user_id": 3,
        "password": "Test@123",
        "name": "Clementine Bauch",
        "username": "Samantha",
        "email": "Nathan@yesenia.net",
        "address": {
          "street": "Douglas Extension",
          "suite": "Suite 847",
          "city": "McKenziehaven",
          "zipcode": "59590-4157",
          "geo": {
            "lat": "-68.6102",
            "lng": "-47.0653"
          }
        },
        "phone": "1-463-123-4447",
        "website": "ramiro.info",
        "company": {
          "name": "Romaguera-Jacobson",
          "catchPhrase": "Face to face bifurcated interface",
          "bs": "e-enable strategic applications"
        },
        "accountBalance": 150
      },
      {
        "user_id": 4,
        "password": "Test@123",
        "name": "Patricia Lebsack",
        "username": "Karianne",
        "email": "Julianne.OConner@kory.org",
        "address": {
          "street": "Hoeger Mall",
          "suite": "Apt. 692",
          "city": "South Elvis",
          "zipcode": "53919-4257",
          "geo": {
            "lat": "29.4572",
            "lng": "-164.2990"
          }
        },
        "phone": "493-170-9623 x156",
        "website": "kale.biz",
        "company": {
          "name": "Robel-Corkery",
          "catchPhrase": "Multi-tiered zero tolerance productivity",
          "bs": "transition cutting-edge web services"
        },
        "accountBalance": 175
      },
      {
        "user_id": 5,
        "password": "Test@123",
        "name": "Chelsey Dietrich",
        "username": "Kamren",
        "email": "Lucio_Hettinger@annie.ca",
        "address": {
          "street": "Skiles Walks",
          "suite": "Suite 351",
          "city": "Roscoeview",
          "zipcode": "33263",
          "geo": {
            "lat": "-31.8129",
            "lng": "62.5342"
          }
        },
        "phone": "(254)954-1289",
        "website": "demarco.info",
        "company": {
          "name": "Keebler LLC",
          "catchPhrase": "User-centric fault-tolerant solution",
          "bs": "revolutionize end-to-end systems"
        },
        "accountBalance": 200
      },
      {
        "user_id": 6,
        "password": "Test@123",
        "name": "Mrs. Dennis Schulist",
        "username": "Leopoldo_Corkery",
        "email": "Karley_Dach@jasper.info",
        "address": {
          "street": "Norberto Crossing",
          "suite": "Apt. 950",
          "city": "South Christy",
          "zipcode": "23505-1337",
          "geo": {
            "lat": "-71.4197",
            "lng": "71.7478"
          }
        },
        "phone": "1-477-935-8478 x6430",
        "website": "ola.org",
        "company": {
          "name": "Considine-Lockman",
          "catchPhrase": "Synchronised bottom-line interface",
          "bs": "e-enable innovative applications"
        },
        "accountBalance": 225
      },
      {
        "user_id": 7,
        "password": "Test@123",
        "name": "Kurtis Weissnat",
        "username": "Elwyn.Skiles",
        "email": "Telly.Hoeger@billy.biz",
        "address": {
          "street": "Rex Trail",
          "suite": "Suite 280",
          "city": "Howemouth",
          "zipcode": "58804-1099",
          "geo": {
            "lat": "24.8918",
            "lng": "21.8984"
          }
        },
        "phone": "210.067.6132",
        "website": "elvis.io",
        "company": {
          "name": "Johns Group",
          "catchPhrase": "Configurable multimedia task-force",
          "bs": "generate enterprise e-tailers"
        },
        "accountBalance": 250
      },
      {
        "user_id": 8,
        "password": "Test@123",
        "name": "Nicholas Runolfsdottir V",
        "username": "Maxime_Nienow",
        "email": "Sherwood@rosamond.me",
        "address": {
          "street": "Ellsworth Summit",
          "suite": "Suite 729",
          "city": "Aliyaview",
          "zipcode": "45169",
          "geo": {
            "lat": "-14.3990",
            "lng": "-120.7677"
          }
        },
        "phone": "586.493.6943 x140",
        "website": "jacynthe.com",
        "company": {
          "name": "Abernathy Group",
          "catchPhrase": "Implemented secondary concept",
          "bs": "e-enable extensible e-tailers"
        },
        "accountBalance": 275
      },
      {
        "user_id": 9,
        "password": "Test@123",
        "name": "Glenna Reichert",
        "username": "Delphine",
        "email": "Chaim_McDermott@dana.io",
        "address": {
          "street": "Dayna Park",
          "suite": "Suite 449",
          "city": "Bartholomebury",
          "zipcode": "76495-3109",
          "geo": {
            "lat": "24.6463",
            "lng": "-168.8889"
          }
        },
        "phone": "(775)976-6794 x41206",
        "website": "conrad.com",
        "company": {
          "name": "Yost and Sons",
          "catchPhrase": "Switchable contextually-based project",
          "bs": "aggregate real-time technologies"
        },
        "accountBalance": 300
      },
      {
        "user_id": 10,
        "name": "Clementina DuBuque",
        "username": "Moriah.Stanton",
        "password": "Test@123",
        "email": "Rey.Padberg@karina.biz",
        "address": {
          "street": "Kattie Turnpike",
          "suite": "Suite 198",
          "city": "Lebsackbury",
          "zipcode": "31428-2261",
          "geo": {
            "lat": "-38.2386",
            "lng": "57.2232"
          }
        },
        "phone": "024-648-3804",
        "website": "ambrose.net",
        "company": {
          "name": "Hoeger LLC",
          "catchPhrase": "Centralized empowering task-force",
          "bs": "target end-to-end models"
        },
        "accountBalance": 325
      }
    ]
    component.enteredEmail = 'Sincere@april.biz';
    component.checkUser();
    expect(component.enteredEmail).toEqual('Sincere@april.biz');
  })
});
