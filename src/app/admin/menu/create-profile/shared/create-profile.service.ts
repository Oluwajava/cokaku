import {Injectable} from '@angular/core';
import {BaseService, Service} from '../../../../core/base/base.service';
import {User} from './User';
import {Constants} from "../../../../core/utils/constants";

@Injectable()
@Service(Constants.STUDENT)
export class CreateProfileService extends BaseService<User, number> {

}