import { Component } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import {MatToolbarModule} from '@angular/material/toolbar';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bat-ui';

  show: boolean;

  toggleVissibility(nf) {
    // nf.classList();
    if (nf.classList.contains('show')) {
      nf.classList.remove('show');
    } else {
      nf.classList.add('show');
    }
  }
}
