import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { SideBarComponent } from '../../shared/layouts/side-bar/side-bar.component';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [SharedModule],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.scss'
})
export class MessagesComponent {

}
