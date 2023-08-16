import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './Components/product-list/product-list.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';

//import { CartComponent } from './Components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //[FormsModule,ReactiveFormsModule],
    RouterModule.forRoot([
      //{path: 'home', component: HomeComponent},
      //{path:'cart',component:CartComponent},
      {path:'home',component:HomeComponent},
      {path:'product-list',component:ProductListComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
