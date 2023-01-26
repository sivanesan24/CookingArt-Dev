import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-drop-down-content',
  templateUrl: './drop-down-content.component.html',
  styleUrls: ['./drop-down-content.component.scss']
})
export class DropDownContentComponent implements OnInit{

  constructor(public dialogRef: MatDialogRef<DropDownContentComponent>) {}

  public ngOnInit(): void {
    this.dialogRef.updatePosition({
      top: '85px',
      right: '200px'
    })
  }

  public sendDishes(i: number) {
    this.dialogRef.close(i);
  }

}
