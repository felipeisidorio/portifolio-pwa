import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PortifolioPage } from './portifolio';

@NgModule({
  declarations: [
    PortifolioPage,
  ],
  imports: [
    IonicPageModule.forChild(PortifolioPage),
  ]
})
export class PortifolioPageModule {}
