import { CommonModule } from '@angular/common';
import { Component, Input, NgModule, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss'],
})
export class NavMenuComponent implements OnInit, OnChanges {
  @Input() dataNavMenu;
  checkRole;
  constructor(
    private authService: AuthenticationService
  ) { }
  ngOnChanges(): void {
    this.checkRole = JSON.parse(localStorage.getItem('privilege_list')); 
    this.dataNavMenu.list.forEach(x => {
       let check = this.checkRole.find(i => i.URL === x.api);
       if(check){
         x.checkRole = true;
       }
    });
    // this.dataNavMenu.list.forEach(x => {
    //   if (this.checkRole === 'Giáo viên chủ nhiệm') {
    //     const check = x.role.includes(this.checkRole);
    //     if (check) {
    //       x.checkRole = false
    //     }
    //     else {
    //       x.checkRole = true;

    //     }
    //   }
    //   else {
    //     const check = x.role.includes('System admin', 'Giáo viên chủ nhiệm');
    //     if (check) {
    //       x.checkRole = false
    //     }
    //     else {
    //       x.checkRole = true;

    //     }
    //   }

    // });
  }

  ngOnInit(): void {


  }
}


@NgModule({
  declarations: [NavMenuComponent],
  imports: [CommonModule, RouterModule],

  exports: [NavMenuComponent],
})
export class NavComponentModule { }