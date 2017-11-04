import {Component, OnInit} from '@angular/core';
import {BaseComponent} from "../../../core/base/base.component";
import {User} from "./shared/User";
import {CreateProfileService} from "./shared/create-profile.service";
import {NotificationService} from "../../../core/notification/notification.service";
import {NOTIFICATION} from "../../../core/notification/notification";

@Component({
    selector: 'app-create-profile',
    templateUrl: './create-profile.component.html',
    styleUrls: ['./create-profile.component.css'],
    providers: [CreateProfileService]
})
export class CreateProfileComponent extends BaseComponent<User, number> implements OnInit {

    constructor(private createProfileService: CreateProfileService, private notification: NotificationService) {
        super(new User());
    }

    ngOnInit() {
    }

    submit() {
        console.log(this.form.value);
        this.createProfileService.create(this.form.value, callback => {
            console.log(callback);
        });

        this.notification.showNotification(NOTIFICATION.SUCCESS, "Profile have been created");
    }
}
