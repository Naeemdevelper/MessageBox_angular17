import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-compose',
  standalone: true,
  imports: [SharedModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './compose.component.html',
  styleUrl: './compose.component.scss'
})
export class ComposeComponent {

}
