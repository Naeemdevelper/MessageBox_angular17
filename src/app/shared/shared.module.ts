import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './layouts/header/header.component';
import { MasterComponent } from './layouts/master/master.component';
import { CardComponent } from './components/card/card.component';
import { SideBarComponent } from './layouts/side-bar/side-bar.component';



@NgModule({
  declarations: [
    HeaderComponent,
    MasterComponent,
    CardComponent,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    
  ],
  
  exports:[
    CommonModule,
    RouterModule,
    CardComponent,
    HeaderComponent,
    SideBarComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
   
})
export class SharedModule { }
