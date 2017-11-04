import {Component, OnInit} from '@angular/core';
import * as Chartist from 'chartist';
import {DashboardService} from "./shared/dashboard.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
    providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

    students: any = [];

    constructor(private dashboardService: DashboardService) {
    }

    ngOnInit() {
        this.dashboardService.query(null, callback => {
            this.students = callback;
        });
    }

}
