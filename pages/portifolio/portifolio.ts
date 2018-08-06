import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-portifolio',
  templateUrl: 'portifolio.html'
})
export class PortifolioPage {
  
  // pages: Array<{ title: string, root: any, icon: string }>  =  [
  pages: Array<{ title: string, root: any }>  =  [
    {title:'Home'       , root: 'HomePage'       /*, icon:'home'*/},
    {title:'Experience' , root: 'ExperiencePage' /*, icon:'flask'*/},
    {title:'Projects'   , root: 'ProjectsPage'   /*, icon:'bulb'*/},
    {title:'Contact'    , root: 'ContactPage'    /*, icon:'contact'*/}
  ];
  
  constructor(public navCtrl: NavController) {}

}
