import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from '../modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})

export class LandingComponent {
  title = 'modal';
  constructor(private _matDialog: MatDialog){}
  abrirModal():void{
    this._matDialog.open(ModalDialogComponent)
  }


  cancelar() {
    this._matDialog.closeAll();
  }

}
 
// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "app-landing",
//   templateUrl: "./landing.component.html",
//   styleUrl: './landing.component.scss'
// })
// export class LandingComponent implements OnInit {
//   constructor() {}

//   ngOnInit(): void {}
// }
