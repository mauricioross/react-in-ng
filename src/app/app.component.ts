import { Component } from '@angular/core';
import {CustomReactComponentWrapperComponent} from '../CustomReactComponentWrapper';
import {CustomReactCompWrapperComponent} from '../CustomReactCompWrapper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-app';
  public counter = 21;

  public handleOnClick(stateCounter: number) {
    this.counter++;
  }
}
