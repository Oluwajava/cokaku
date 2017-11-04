import {BaseModel} from '../../../../core/base/base.model';

export class User extends BaseModel {

    firstName = '';
    lastName = '';
    dateOfBirth = '';
    address = '';
    guardianName = '';
    guardianEmail = '';
    guardianAddress = '';

    constructor() {
        super();
    }

}