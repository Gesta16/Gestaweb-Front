import { Component, Injectable } from '@angular/core';

export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  icon?: string;
  url?: string;
  classes?: string;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  children?: Navigation[];
}

export interface Navigation extends NavigationItem {
  children?: NavigationItem[];
}
const NavigationItems = [
  {
    id: 'default',
    title: 'Dashboard',
    type: 'item',
    classes: 'nav-item',
    url: '/home',
    icon: 'fas fa-user',
    breadcrumbs: false

  },
  {
    id: 'list-admin',
    title: 'Administradores',
    type: 'item',
    classes: 'nav-item',
    url: '/superadmin/list-admin',
    icon: 'ti ti-dashboard',
    breadcrumbs: false
  },
  {
    id: 'list-superadmin',
    title: 'SuperAdmin',
    type: 'item',
    classes: 'nav-item',
    url: '/superadmin/list-superadmin',
    icon: 'ti ti-dashboard',
    breadcrumbs: false
  }
];

@Injectable()
export class NavigationItem {
  get() {
    return NavigationItems;
  }
}
