import {Component, OnDestroy, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {DataService} from "../../../services/data.service";
import {Subscription} from "rxjs";
import {ArticlephotosService} from "../../../services/articlephotos.service";
import {AddEditArticlephotoComponent} from "../../shared/add-edit-articlephoto/add-edit-articlephoto.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";

@Component({
  selector: 'app-articlephotos',
  templateUrl: './articlephotos.component.html',
  styleUrls: ['./articlephotos.component.scss']
})
export class ArticlephotosComponent implements OnInit, OnDestroy {

  public subscription: Subscription;
  public loggedUser;
  public parentMessage = 'message from parent';
  public articlephotos = [];
  public displayedColumns = ['articleID', 'photoID', 'description', 'edit'];

  constructor(
    private router: Router,
    private dataService: DataService,
    private articlephotosService: ArticlephotosService,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.subscription = this.dataService.currentUser.subscribe(user => this.loggedUser = user);
    this.articlephotosService.getArticlephotos().subscribe(
      (result) => {
        console.log(result);
        this.articlephotos = result;
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

  public receiveMessage(event): void {
    console.log(event);
  }

  public openModal(articlephoto?): void {
    const data = {
      articlephoto
    };
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '550px';
    dialogConfig.height = '700px';
    dialogConfig.data = data;
    const dialogRef = this.dialog.open(AddEditArticlephotoComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      if (result) {
        this.articlephotos = result;
      }
    });
  }

  public addNewArticlephoto(): void {
    this.openModal();
  }

  public editArticlephoto(articlephoto): void {
    this.openModal(articlephoto);
  }
}
