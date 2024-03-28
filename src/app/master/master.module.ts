import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/components/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsModule } from '../components/components.module';
import { AddRoleComponent } from './role-mapping/add-role/add-role.component';
import { RoleFunctionComponent } from './role-mapping/role-function/role-function.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import {
  GridModule,
  PDFModule,
  ExcelModule,
} from "@progress/kendo-angular-grid";
import { UploadsModule } from "@progress/kendo-angular-upload";
import { LoaderComponent } from 'src/app/master/loader/loader.component';
import { AppModule } from '../app.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';


import { CKEditorModule } from 'ckeditor4-angular';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { DatePipe } from '@angular/common'

import { MatTabsModule } from '@angular/material/tabs';

import { PDFExportModule } from '@progress/kendo-angular-pdf-export';

import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';
import { OrderFuelComponent } from './order-fuel/order-fuel.component';
import { ManageFuelComponent } from './manage-fuel/manage-fuel.component';

@NgModule({
  declarations: [
    
    AddRoleComponent,
    RoleFunctionComponent,
    LoaderComponent,
    ConfirmationDialogComponent,
    OrderFuelComponent,
    ManageFuelComponent,
   
  ],
  imports: [
   
    MatTabsModule,
    CommonModule,
    ButtonsModule,
    MaterialModule,
    ReactiveFormsModule,
    ComponentsModule,
    GridModule,
    PDFModule,
    ExcelModule,
    UploadsModule,
    NgxSpinnerModule,
    CKEditorModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    PDFModule,
    PDFExportModule
  ],
  providers: [DatePipe,  
  { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ]
})
export class MasterModule { }
