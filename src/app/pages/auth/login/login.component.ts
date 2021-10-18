import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  errorLogin: any;
  constructor(
    private router: Router,
    private localStorage: LocalStorageService,
    private authService: AuthenticationService,
  ) { }
  error = '';
  data = {
    type: {
      phone: 'phone',
      password: 'password',
    },
  };
  ngOnInit(): void {

  }

  getPrivilegeList(token): void {
    this.authService.getPrivilegeList(token).subscribe(res => {
      console.log(res);
      localStorage.setItem('privilege_list', JSON.stringify(res.Payload));
    });
  }

  login(ev): void {
    this.authService.login(ev.username, ev.password).subscribe(
      (res) => {
        if (res.Role === 'Parent') {
          this.error = 'Tài khoản này không có quyền đăng nhập.';
        }
        else {
          localStorage.setItem('access_token', res.access_token);
          this.getPrivilegeList(res.access_token);
          localStorage.setItem('access_user', JSON.stringify(res));
          setTimeout(() => {
            this.router.navigateByUrl('/main/member').then(r => console.log(r));

          }, 1000);
        }
      }, (error) => {
        console.log(error);
        this.error = 'Sai tên đăng nhập hoặc mật khẩu.';
      }, () => {

      }
    );


  }
  routeTo(e): void {
    console.log(e);
  }
}
