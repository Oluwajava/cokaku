import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationService} from "./notification/notification.service";
import {ApplicationRepository} from "./repository/application-repository";
import {HttpRepository} from "./repository/http-repository";
import {CoreService} from "./core.service";

const MODULES = [];

@NgModule({
    imports: [
        CommonModule,
        ...MODULES
    ],
    declarations: [],
    exports: [...MODULES],
    providers: [NotificationService, ApplicationRepository, HttpRepository, CoreService]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
