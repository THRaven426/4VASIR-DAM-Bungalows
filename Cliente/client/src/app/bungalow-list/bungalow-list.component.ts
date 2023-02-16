import { Component, OnInit } from '@angular/core';
import { Bungalow } from '../shared/bungalow';
import { BungalowService } from '../core/bungalow.service';

@Component({
  selector: 'app-bungalow-list',
  templateUrl: './bungalow-list.component.html',
  styleUrls: ['./bungalow-list.component.scss']
})
export class BungalowListComponent implements OnInit{
  bungalows: Bungalow[] = [];
  constructor(private bungalowService: BungalowService) {}

  ngOnInit() {
    this.bungalowService
      .getBungalows()
      .subscribe((data: Bungalow[]) => (this.bungalows = data));
  }
}
