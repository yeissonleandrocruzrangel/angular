import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomersModule } from './customers/customers.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
