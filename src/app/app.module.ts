import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './superadmin/pages/menu/menu.component';
import { NavigationItem } from './superadmin/pages/menu/navigation/navigation';
import { NavBarComponent } from './superadmin/pages/menu/nav-bar/nav-bar.component';
import { NavLeftComponent } from './superadmin/pages/menu/nav-bar/nav-left/nav-left.component';
import { NavRightComponent } from './superadmin/pages/menu/nav-bar/nav-right/nav-right.component';
import { NavigationComponent } from './superadmin/pages/menu/navigation/navigation.component';
import { NavLogoComponent } from './superadmin/pages/menu/nav-bar/nav-logo/nav-logo.component';
import { NavContentComponent } from './superadmin/pages/menu/navigation/nav-content/nav-content.component';
import { NavGroupComponent } from './superadmin/pages/menu/navigation/nav-content/nav-group/nav-group.component';
import { NavCollapseComponent } from './superadmin/pages/menu/navigation/nav-content/nav-collapse/nav-collapse.component';
import { NavItemComponent } from './superadmin/pages/menu/navigation/nav-content/nav-item/nav-item.component';
import { SharedModule } from './theme/shared/shared.module';
import { GuestComponent } from './theme/layout/guest/guest.component';
import { SpinnerComponent } from './theme/shared/components/spinner/spinner.component';
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
  imports: [BrowserModule, AppRoutingModule, SharedModule, BrowserAnimationsModule],
  providers: [NavigationItem],
  bootstrap: [AppComponent]
})
export class AppModule {}
