import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'before',
    loadChildren: './before/before.module#BeforePageModule'
  },
  {
    path: 'orientationday',
    loadChildren: './orientationday/orientationday.module#OrientationdayPageModule'
  },
  {
    path: 'myfirstmonth',
    loadChildren: './myfirstmonth/myfirstmonth.module#MyfirstmonthPageModule'
  },
  { path: 'detailpage/:contentId', 
    loadChildren: './detailpage/detailpage.module#DetailpagePageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
