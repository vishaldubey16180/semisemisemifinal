import { BrowserModule } from '@angular/platform-browser';
//import { NgModule } from '@angular/core';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { SaveAddressComponent } from './components/save-address/save-address.component';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import { HttpClientModule } from '@angular/common/http';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OfficerLogInComponent } from './components/officer-log-in/officer-log-in.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { SchedulePickupComponent } from './components/schedule-pickup/schedule-pickup.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { CheckAvailabilityComponent } from './components/check-availability/check-availability.component';
import { PaymentOptionComponent } from './components/payment-option/payment-option.component';
import { PackageHistoryComponent } from './components/package-history/package-history.component';
import { CustomerCareComponent } from './components/customer-care/customer-care.component';
import { PackageManagementComponent } from './components/package-management/package-management.component';
import { RecievePackageComponent } from './components/recieve-package/recieve-package.component';
import { AfterLoginNavigationComponent } from './components/after-login-navigation/after-login-navigation.component';
import { AfterLoginOfficerNavComponent } from './components/after-login-officer-nav/after-login-officer-nav.component';
import { UserafterLoginstateComponent } from './components/userafter-loginstate/userafter-loginstate.component';
//wserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    SaveAddressComponent,
    AppNavigationComponent,
    HomePageComponent,
    OfficerLogInComponent,
    EditProfileComponent,
    AddAddressComponent,
    SchedulePickupComponent,
    TrackOrderComponent,
    CheckAvailabilityComponent,
    PaymentOptionComponent,
    PackageHistoryComponent,
    CustomerCareComponent,
    PackageManagementComponent,
    RecievePackageComponent,
    AfterLoginNavigationComponent,
    AfterLoginOfficerNavComponent,
    UserafterLoginstateComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, 
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
