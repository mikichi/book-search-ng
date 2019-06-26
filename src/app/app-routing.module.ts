import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { appRoutes } from "./common/constracts/app-routes";

const routes: Routes = [

  /** デフォルト画面 */
  {
    path: '',
    pathMatch: 'full',
    redirectTo: appRoutes.bookSearch.path,
    data: appRoutes.bookSearch.data,
  },
  /** TODO 404 Not Found */

  /****************************************
   * アプリケーション
   ****************************************/
  appRoutes.bookSearch,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
