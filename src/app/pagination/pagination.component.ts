import { Component, OnInit } from "@angular/core";
import { PageEvent } from "@angular/material/paginator";
import { User } from "@/models/user.model";
import { UsersService } from "@/services/users.service";
import { MatTableDataSource } from "@angular/material/table";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"]
})
export class PaginationComponent implements OnInit {
  pageEvent: PageEvent;
  dataSource = new MatTableDataSource<User>();
  currentPage = 1;
  pageSize = 10;
  displayedColumns: string[] = ["id", "name", "username", "token"];
  users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService.getUsers(1, 10).subscribe(users => {
      this.users = [...users];
      this.dataSource.data = [...this.users];
    });
  }

  fetchResults(event) {
    this.currentPage = event.pageIndex;
    let beginIndex = event.pageIndex * event.pageSize + 1;
    let endIndex = (event.pageIndex + 1) * event.pageSize;
    if (this.users.length < endIndex) {
      this.usersService.getUsers(beginIndex, endIndex).subscribe(users => {
        this.users = this.users.concat(users);
        this.dataSource.data = users;
      });
    } else {
      let dataToDisplay = this.users.slice(beginIndex - 1, endIndex);
      this.dataSource.data = dataToDisplay;
    }
  }
}
