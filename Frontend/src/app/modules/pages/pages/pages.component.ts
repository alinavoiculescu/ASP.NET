import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Subscription} from "rxjs";
import {PagesService} from "../../../services/pages.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {AddEditPageComponent} from "../../shared/add-edit-page/add-edit-page.component";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public loggedUser;
  public parentMessage = 'message from parent';
  public pages = [];
  public displayedColumns = ['id', 'publicationDate', 'shortDescription', 'edit', 'delete'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private pagesService: PagesService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.pagesService.getPages().subscribe(
      (result) => {
        console.log(result);
        this.pages = result;
      },
      (error) => {
        console.log(error);
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  public logout(): void {
    localStorage.setItem('Role', 'BasicUser');
    this.router.navigate(['/login']);
  }

  public openModal(page?): void {
    const data = {
      page
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddEditPageComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.pages = result;
      }
    });
  }

  public addNewPage(): void {
    this.openModal();
  }

  public editPage(page): void {
    this.openModal(page);
  }

  public deletePage(id): void {
    this.router.navigate(['/page', id]);
  }

}
