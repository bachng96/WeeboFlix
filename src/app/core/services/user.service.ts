import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { tap, map } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseURL = 'https://reqres.in/';
  private tokenSave = 'token';
  public user = null;
  public theme = null;
  toggleNavbar = new EventEmitter();



  constructor(private http: HttpClient) {
    let token = localStorage.getItem(this.tokenSave);
    this.theme = localStorage.getItem('theme');
    if (token) {
      let decode = jwtDecode(token);
      this.user = decode;
      this.user.token = token;
    }
  }




  

  login(user) {
    return this.http.post(`${this.baseURL}api/login`, user).pipe(
      map(
        (res) =>
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImphbmV0LndlYXZlckByZXFyZXMuaW4iLCJmaXJzdF9uYW1lIjoiSmFuZXQiLCJsYXN0X25hbWUiOiJXZWF2ZXIiLCJpZCI6IjEiLCJpc0FkbWluIjpmYWxzZSwiYXZhdGFyIjoiaHR0cHM6Ly90aC5iaW5nLmNvbS90aC9pZC9SLjJkMWRkZjg2Y2VmNTJkNWJkOGY3NDgzOWEwZWJkMjRiP3Jpaz1yJTJiYXB4emFrR2dudEJnJnBpZD1JbWdSYXcmcj0wIiwiaWF0IjoxNTE2MjM5MDIyfQ.EjjfhXNyuXaWHd5LORL-zOdrsYaIyhD34Uv-AjR5IYs'
      ),
      tap((token: string) => {
        let decode = jwtDecode(token);
        this.user = decode;
        this.user.token = token;
        localStorage.setItem(this.tokenSave, token);
      })
    );
  }


  
  isLogin() {
    return !!this.user;
  }
  getUser() {
    return this.http.get(this.baseURL + 'api/users/' + this.user.id);
  }
  logout() {
    localStorage.removeItem(this.tokenSave);
    this.user = null;
  }
  isAdmin(): boolean {
    if (this.user && this.user.isAdmin) return true;
    return false;
  }
  checkLogin(next) {
    if (this.isLogin() === false) {
      this.toggleNavbar.emit('open login form');
    } else {
      next();
    }
  }
}
