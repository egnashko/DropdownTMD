import { Component, OnInit } from '@angular/core';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  private muvies: any;
  private chosenMovie: any;
  private listOpen: boolean;

  constructor(private httpService: HttpService) { }

  ngOnInit() {
    this.httpService.httpGet().subscribe(data => {
      this.muvies = data.results;
      console.log(this.muvies);
    })
  }

  chooseMovie(title) {
    this.chosenMovie = title;
    this.openLits();
  }

  clearMovie() {
    this.chosenMovie = '';
  }

  openLits() {
    this.listOpen = !this.listOpen;
  }
}
