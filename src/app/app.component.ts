import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'GestaWeb';
  mostrarMenu : boolean = false;

  constructor(private router: Router) {}
    
    ngOnInit(){
      this.router.events.subscribe(event => {
        if(event instanceof NavigationEnd){
          //ocultar el menú en las rutas de autentiocación
          const rutasSinMenu = ['/auth/login','/inicio/landing'];
          this.mostrarMenu = !rutasSinMenu.includes(event.urlAfterRedirects);
        }
      });
    }
  } 
  
