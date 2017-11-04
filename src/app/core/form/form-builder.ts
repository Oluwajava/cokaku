import {FormControl, FormGroup, Validators} from "@angular/forms";

export class FormBuilder {

    static toFormGroup(model: Object) {
        let group: any = {};

        Object.getOwnPropertyNames(model).forEach(key => {
                group[key] = new FormControl();
        })

        return new FormGroup(group);
    }
}