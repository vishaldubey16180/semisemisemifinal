import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';

//import { NgModule } from '@angular/core';
//import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppNavigationComponent } from './components/app-navigation/app-navigation.component';
import {RouterModule, Routes} from "@angular/router";
import { AngularMaterialModule } from './angular-material.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OfficerLogInComponent } from './components/officer-log-in/officer-log-in.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { SaveAddressComponent } from './components/save-address/save-address.component';
import { AddAddressComponent } from './components/add-address/add-address.component';
import { SchedulePickupComponent } from './components/schedule-pickup/schedule-pickup.component';
import { RecievePackageComponent } from './components/recieve-package/recieve-package.component';
import { PackageManagementComponent } from './components/package-management/package-management.component';
import { TrackOrderComponent } from './components/track-order/track-order.component';
import { UserafterLoginstateComponent } from './components/userafter-loginstate/userafter-loginstate.component';
import { AfterLoginNavigationComponent } from './components/after-login-navigation/after-login-navigation.component';

const routes: Routes = [{ path: '', component: AppNavigationComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: AppNavigationComponent },
  { path: 'editprofile', component: EditProfileComponent },
  { path: 'officerlogin', component: OfficerLogInComponent },
  { path: 'address', component: SaveAddressComponent },
  { path: 'schedule', component: SchedulePickupComponent  },
  { path: 'addaddress', component: AddAddressComponent },
  { path: 'packagemanagement', component: PackageManagementComponent },
  { path: 'recieve', component: RecievePackageComponent },
  { path: 'track', component: TrackOrderComponent },
  { path: 'user', component: UserafterLoginstateComponent },
  { path: 'a', component: AfterLoginNavigationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
