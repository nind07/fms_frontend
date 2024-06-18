import { Component, ViewChild, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

// Define Post interface locally
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  dataSource: MatTableDataSource<Post>; // Use MatTableDataSource<Post> for type safety
  displayedColumns: string[] = ['id', 'title', 'body'];
  searchText: string = '';
  pageSizeOptions: number[] = [5, 10, 25]; // Define page size options
  pageSize: number = 10; // Initialize page size
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchPosts();
  }

  fetchPosts(): void {
    this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: Post[]) => {
        if (data && data.length > 0) {
          this.dataSource = new MatTableDataSource<Post>(data); // Initialize MatTableDataSource with data
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
          this.dataSource.filterPredicate = (data, filter: string) => {
            const searchText = filter.trim().toLowerCase();
            return (
              data.id.toString().includes(searchText) ||
              data.title.toLowerCase().includes(searchText) ||
              data.body.toLowerCase().includes(searchText)
            );
          };
        } else {
          console.error('No data received from the API');
        }
      }, error => {
        console.error('Error fetching data:', error);
      });
  }

  applyFilter(): void {
    this.dataSource.filter = this.searchText.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
