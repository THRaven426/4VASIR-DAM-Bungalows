import { Component, Input } from '@angular/core';
import { Bungalow } from 'src/app/shared/bungalow';

@Component({
  selector: 'app-bungalow-item',
  templateUrl: './bungalow-item.component.html',
  styleUrls: ['./bungalow-item.component.scss']
})
export class BungalowItemComponent {
  @Input() bungalow: Bungalow = {
    id: 0,
    id_zona: 0,
    title: "",
    price: 0,
    people_cantity: 0,
    description: '',
    image: '',
  };
}
