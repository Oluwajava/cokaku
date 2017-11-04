import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {StudentListService} from "./shared/student-list.service";
import {BaseComponent} from "../../../core/base/base.component";
import {User} from "../create-profile/shared/User";

@Component({
    selector: 'app-table-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css'],
    providers: [StudentListService]
})
export class StudentListComponent extends BaseComponent<User, number> implements OnInit {
    updateId: string;
    students: any = [
    ]

    constructor(private router: Router, private studentListService: StudentListService) {
        super(new User())
    }

    ngOnInit() {
        this.getStudents();
    }

    viewProfile() {
        this.router.navigateByUrl('menu/user-profile');
    }

    delete(id) {
        this.studentListService.delete(id, callback => {
            console.log(callback);
        });
    }

    getStudents() {
        this.studentListService.query(null, callback => {
            this.students = callback;
            console.log(this.students);
        });
    }

    editUser(student) {
        this.updateId = student._id;
        this.form.patchValue(student);
    }

    submit() {
        this.studentListService.update(this.updateId, this.form.value, callback => {
            console.log(callback);
        });
    }
}
