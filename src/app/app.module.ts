import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './inicio/pages/menu/menu.component';
import { NavigationItem } from './inicio/pages/menu/navigation/navigation';
import { NavBarComponent } from './inicio/pages/menu/nav-bar/nav-bar.component';
import { NavLeftComponent } from './inicio/pages/menu/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './inicio/pages/menu/nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './inicio/pages/menu/navigation/navigation.component';
import { NavLogoComponent } from './inicio/pages/menu/nav-bar/nav-logo/nav-logo.component';
import { NavContentComponent } from './inicio/pages/menu/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './inicio/pages/menu/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './inicio/pages/menu/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './inicio/pages/menu/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ModalDialogComponent } from './inicio/modal-dialog/modal-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogContent } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';


import { SpinnerComponent } from './theme/shared/components/spinner/spinner.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    NavBarComponent,
    NavLeftComponent,
    NavRightComponent,
    NavigationComponent,
    NavLogoComponent,
    NavContentComponent,
    NavGroupComponent,
    NavItemComponent,
    NavCollapseComponent,
    GuestComponent,
    SpinnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule, MatButtonModule, MatDialogModule, ModalDialogComponent, MatDialogContent, CommonModule],
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
  providers: [NavigationItem, provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule {}
