import {Injectable} from '@angular/core';
declare var $: any;
@Injectable()
export class NotificationService {

    constructor() {
    }

    showNotification(category, message) {
        const type = ['', 'info', 'success', 'warning', 'danger'];

        const color = Math.floor((Math.random() * 4) + 1);

        $.notify({
            icon: 'notifications',
            message: message

        }, {
            type: type[category],
            timer: 4000,
            placement: {
                from: 'top',
                align: 'right',
            }
        });
    }
}
