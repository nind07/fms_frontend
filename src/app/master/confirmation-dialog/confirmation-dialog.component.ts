import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
 constructor(public dialogRef:MatDialogRef<any>,
  @Inject(MAT_DIALOG_DATA) public data:any){

 }
 ngOnInit(): void {
   
 }
 onSubmit(){
  this.dialogRef.close(true)
 }
 onCancel(){
  this.dialogRef.close(false)
 }
}
