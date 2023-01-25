import { TestBed } from '@angular/core/testing';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';

import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { HttpStatusCode } from '@angular/common/http';

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService]
    });

    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  //Correct method
  it('GetUsers() should call GET method', () => {
    const GetApiMethod = 'GET';

    service.getUsers().subscribe();

    const req = httpTestingController.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toBe(GetApiMethod);
    req.flush(null);
  });

  it('GetUserById() should call GET method', () => {
    const GetApiMethod = 'GET';
    const id = '0';

    service.getUserById(id).subscribe();

    const req = httpTestingController.expectOne(`${environment.apiUrl}/users/${id}`);
    expect(req.request.method).toBe(GetApiMethod);
    req.flush(null);
  });

  it('AddUser() should call POST method', () => {
    const GetApiMethod = 'POST';
    const user = {email: "email@example.com", password: "password"}

    service.addUser(user).subscribe();

    const req = httpTestingController.expectOne(`${environment.apiUrl}/users`);
    expect(req.request.method).toBe(GetApiMethod);
    req.flush(null);
  });

  it('ResetPassword() should call POST method', () => {
    const GetApiMethod = 'POST';
    const email = 'email@example.com';

    service.resetPassword(email).subscribe();

    const req = httpTestingController.expectOne(`${environment.apiUrl}/users/resetPassword`);
    expect(req.request.method).toBe(GetApiMethod);
    req.flush(null);
  });

  it('Login() should call POST method', () => {
    const GetApiMethod = 'POST';
    const email = 'email@example.com';
    const password = 'password';

    service.login(email, password).subscribe();

    const req = httpTestingController.expectOne(`${environment.apiUrl}/auth/login`);
    expect(req.request.method).toBe(GetApiMethod);
    req.flush(null);
  });

  //Correct URL
  it('GetUsers() should call correct URL', () => {
    const url = `${environment.apiUrl}/users`;

    service.getUsers().subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.url).toBe(url);
    req.flush(null);
  });

  it('GetUserById() should call correct URL', () => {
    const id = '1';
    const url = `${environment.apiUrl}/users/${id}`;

    service.getUserById(id).subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.url).toBe(url);
    req.flush(null);
  });

  it('AddUser() should call correct URL', () => {
    const user = {email: "email@example.com", password: "password"}
    const url = `${environment.apiUrl}/users`;

    service.addUser(user).subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.url).toBe(url);
    req.flush(null);
  });

  it('ResetPassword() should call correct URL', () => {
    const email = 'email@example.com';
    const url = `${environment.apiUrl}/users/resetPassword`;

    service.resetPassword(email).subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.url).toBe(url);
    req.flush(null);
  });

  it('Login() should call correct URL', () => {
    const email = 'email@example.com';
    const password = 'password';
    const url = `${environment.apiUrl}/auth/login`;

    service.login(email, password).subscribe();

    const req = httpTestingController.expectOne(url);
    expect(req.request.url).toBe(url);
    req.flush(null);
  });

  //Correct data
  it('GetUsers() should fetch correct data', () => {
    const url = `${environment.apiUrl}/users`;
    const users = [
      {id: "1", email: "test1@email.com", password: "password_1"},
      {id: "2", email: "test2@email.com", password: "password_2"},
      {id: "3", email: "test3@email.com", password: "password_3"}
    ];

    service.getUsers().subscribe(res => {
      expect(res).toEqual(users);
    });

    const req = httpTestingController.expectOne(url);
    req.flush(users);
  });

  it('GetUserById() should fetch correct data', () => {
    const user = {id: "1", email: "test1@email.com", password: "password_1"};
    const url = `${environment.apiUrl}/users/${user.id}`;

    service.getUserById(user.id).subscribe(res => {
      expect(res).toEqual(user);
    });

    const req = httpTestingController.expectOne(url);
    req.flush(user);
  });

  it('AddUser() should fetch correct data', () => {
    const url = `${environment.apiUrl}/users`;
    const user = {id: "1", email: "test1@email.com", password: "password_1"};

    service.addUser({email: user.email, password: user.password}).subscribe(res => {
      expect(res).toEqual(user);
    });

    const req = httpTestingController.expectOne(url);
    req.flush(user);
  });

  it('ResetPassword() should fetch correct data', () => {
    const url = `${environment.apiUrl}/users/resetPassword`;
    const email = 'email@example.com';

    service.resetPassword(email).subscribe(res => {
      expect(res.status).toEqual(202);
    });

    const req = httpTestingController.expectOne(url);
    req.flush(null, { status: 202, statusText: 'Accepted'});
  });

  it('Login() should fetch correct data', () => {
    const url = `${environment.apiUrl}/auth/login`;
    const email = 'email@example.com';
    const password = 'password';

    service.login(email, password).subscribe(res =>{}, err => {
      expect(err.status).toEqual(401);
    });

    const req = httpTestingController.expectOne(url);
    req.flush(null, {status: 401, statusText: 'Unauthorized'});
  });

});
