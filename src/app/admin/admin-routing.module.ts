import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {DashboardComponent} from './menu/dashboard/dashboard.component';
import {CreateProfileComponent} from './menu/create-profile/create-profile.component';
import {StudentListComponent} from './menu/student-list/student-list.component';
import {UserProfileComponent} from './menu/user-profile/user-profile.component';

const routes: Routes = [
    {
        path: 'menu', component: MenuComponent, children:
        [
            {path: 'dashboard', component: DashboardComponent},
            {path: 'create-profile', component: CreateProfileComponent},
            {path: 'student-list', component: StudentListComponent},
            {path: 'user-profile', component: UserProfileComponent},
            {path: '', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
}
