import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-manage-fuel',
  templateUrl: './manage-fuel.component.html',
  styleUrls: ['./manage-fuel.component.scss']
})
export class ManageFuelComponent {
  displayedColumns: string[] = [
    "id",
    "contact_no",
    "createdAt",
    "full_name",
    "user_email",
    "user_type",
    "updatedAt",
    "action"
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  openAddEditEmpForm(){}
  openEditForm(data){}
}
