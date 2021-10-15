import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileModel } from 'src/app/models/profile/profile.model';
import Swal from 'sweetalert2';
import { ChangePasswordComponent } from '../../dialog/change-password/change-password.component';

@Component({
  selector: 'app-header-info',
  templateUrl: './header-info.component.html',
  styleUrls: ['./header-info.component.scss'],
})
export class HeaderInfoComponent implements OnInit {
  @Input() dataHeaderInfo;
  profile: Observable<ProfileModel>;
  name: string;
  mediaURL: string;
  constructor(private route: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  btnLogout() {
    Swal.fire({
      title: 'Bạn có muốn đăng xuất không?',
      text: '',
      // icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      cancelButtonText: 'Không',
      confirmButtonText: 'Có',
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        this.route.navigate(['']);
      }
    });
  }

  changePassword(): void {
    this.dialog
      .open(ChangePasswordComponent, {
        data: {},
      })
      .afterClosed()
      .subscribe(() => {});
  }
}
