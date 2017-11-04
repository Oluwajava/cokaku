import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CoreModule} from './core/core.module';
import {AdminRoutingModule} from './admin/admin-routing.module';
import {MenuComponent} from './admin/menu/menu.component';

const routes: Routes = [
    {path: 'menu', component: MenuComponent},
    {path: '', redirectTo: 'menu', pathMatch: 'full'}

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        CoreModule.forRoot(),
        AdminRoutingModule,
    ],
    exports: [RouterModule, CoreModule]
})

export class AppRoutingModule {
}
