import { Component, OnInit } from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {PagesService} from "../../../services/pages.service";

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  public subscription: Subscription;
  public id;

  constructor(
    private route: ActivatedRoute,
    private pagesService: PagesService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = +params['id'];
      if (this.id) {
        this.deletePage();
      }
    });
  }

  public deletePage(): void {
    this.pagesService.deletePage(this.id).subscribe(
      (result) => {
        console.log(result);
        this.id = result;
      },
      (error) => {
        console.error(error);
      }
    )
  }

}
