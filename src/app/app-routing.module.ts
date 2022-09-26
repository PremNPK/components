import { Input, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ModsModule } from './mods/mods.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { ViewsModule } from './views/views.module';
const routes: Routes = [
{
  path:'mods',loadChildren:()=>import('./mods/mods.module').then(m=>m.ModsModule)
},
{
  path:'views',loadChildren:()=>import('./views/views.module').then(m=>m.ViewsModule)
},
{
  path:'collections',loadChildren:()=>import('./collections/collections.module').then(m=>m.CollectionsModule)
},
{
  path:'elements',loadChildren:()=>import('./elements/elements.module').then(m=>m.ElementsModule)
},
{
  path:'',
  component:HomeComponent
},
{
  path:'**',
  component:NotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
