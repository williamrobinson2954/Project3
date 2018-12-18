import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UserModule } from './User/user/user.module';
import { BatchModule } from '../app/Batch/batch/batch.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ErrorComponent } from './error-handling/error/error.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { QcComponent } from './qc/qc.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ErrorComponent,
    QcComponent,
  ],
  imports: [
    BrowserModule,
    UserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
