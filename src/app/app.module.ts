import {HandleDataService} from './services/handle-data.service';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {appRoutes} from './app.routes';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {APIInterceptor} from './utils/interceptors/api.interceptor';
import {AuthInterceptor} from './utils/interceptors/auth.interceptor';
import {HashLocationStrategy, LocationStrategy, registerLocaleData} from '@angular/common';
import {LoaderService} from './services/loader.service';
import {CiCommonModule, S3FileService} from '@consult-indochina/common';
import {NgxSpinnerModule} from 'ngx-spinner';
import {NZ_I18N, vi_VN} from 'ng-zorro-antd/i18n';
import vi from '@angular/common/locales/vi';
import {FormsModule} from '@angular/forms';

registerLocaleData(vi);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    HttpClientModule,
    CiCommonModule.forRoot({
      S3_URL:
        'https://li1jm77bc8.execute-api.ap-southeast-1.amazonaws.com/prod/presigned',
    }),
    NgxSpinnerModule,
    FormsModule,
  ],
  providers: [
    LoaderService,
    S3FileService,
    HandleDataService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: APIInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: LocationStrategy,
      useClass: HashLocationStrategy,
    },
    {provide: NZ_I18N, useValue: vi_VN},
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
