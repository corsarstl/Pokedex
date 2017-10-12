import { Component, Input } from '@angular/core';

@Component({
  selector: 'pok-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent {

  @Input() loading = false;

}
