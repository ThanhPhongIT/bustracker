import { CommonModule } from '@angular/common';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, MinLengthValidator, ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ChangeModel } from 'src/app/models/auth/change.model';
import { AuthenticationService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/localstorage.service';
import { BaseButtonModule } from '../../button/base-button/base-button.component';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {

  form = new FormGroup({
      OldPassword: new FormControl(''),
      NewPassword: new FormControl(''),
      ConfirmPassword: new FormControl(''),
      userName: new FormControl('')
    }
  );

  err: any;
  success: any;


  // dataBtnSC = {
  //   cssClass: 'btn-sc',
  // };

  // dataBtnCancel = {
  //   cssClass: 'btn-cancel',
  // };

  constructor(
    public dialoRef: MatDialogRef<ChangePasswordComponent>,
    private authenService: AuthenticationService,
    public router: Router,
    private local: LocalStorageService
  ) {}

  ngOnInit() {
    const userName = JSON.parse(localStorage.getItem('access_user')).userName;
    this.form.get('userName').setValue(userName);
  }
  close() {
    this.dialoRef.close();
  }
  change() {
    if (this.form.get('NewPassword').value.length < 6){
      alert('Mật khẩu phải lớn hơn 6 kí tự!');
    }else if (this.form.get('ConfirmPassword').value !== this.form.get('NewPassword').value){
      alert('Mật khẩu không khớp!');
    }else{
      this.authenService.changePassword(this.form.value).subscribe(
        (res: any) => {
          this.success = res.Message + "\nBạn cần đăng nhập lại!";
        },
        (error) => {
          this.err = error.error.Message;
        }
      );
    }
  }

  confirm() {
    this.local.clear();
    this.close();
    this.router.navigate([''])
  }
}
@NgModule({
  declarations: [ChangePasswordComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, BaseButtonModule],
  exports: [ChangePasswordComponent],
})
export class ChangePasswordModule {}
