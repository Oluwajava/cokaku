import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuComponent} from './menu/menu.component';
import {StudentListComponent} from './menu/student-list/student-list.component';
import {CreateProfileComponent} from './menu/create-profile/create-profile.component';
import {DashboardComponent} from './menu/dashboard/dashboard.component';
import {CoreModule} from '../core/core.module';
import {SidebarComponent} from '../components/sidebar/sidebar.component';
import {ComponentsModule} from '../components/components.module';
import {RouterModule} from '@angular/router';
import {UserProfileComponent} from './menu/user-profile/user-profile.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ApplicationRepository} from '../core/repository/application-repository';
import {HttpClientModule} from '@angular/common/http';

const COMPONENTS = [DashboardComponent,
    CreateProfileComponent,
    UserProfileComponent,
    StudentListComponent,
    MenuComponent];

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        ComponentsModule,
        RouterModule,
        ReactiveFormsModule,
        HttpClientModule
    ],
    declarations: [...COMPONENTS],
    exports: [...COMPONENTS],
    providers: [ApplicationRepository]
})
export class AdminModule {
}
