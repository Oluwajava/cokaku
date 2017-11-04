
import {OnInit} from "@angular/core";
import {BaseService} from "./base.service";
import {FormGroup} from "@angular/forms";
import {FormBuilder} from "../form/form-builder";

export class BaseComponent<M, ID> implements OnInit {

    public model: M;
    public form: FormGroup;
    constructor(model: M) {
        this.form = FormBuilder.toFormGroup(model);
    }

    ngOnInit(): void {
    }

}
