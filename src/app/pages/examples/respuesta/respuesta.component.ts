import {Component, OnInit, Inject } from '@angular/core';

import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.scss']
})
export class RespuestaComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<RespuestaComponent>,
    @Inject(MAT_DIALOG_DATA) public data:{decripcion:any, animal:any, foto:any}
  ) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
