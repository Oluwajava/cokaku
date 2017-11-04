import {Injectable} from "@angular/core";
import {BaseService, Service} from "../../../../core/base/base.service";
import {Constants} from "../../../../core/utils/constants";
import {User} from "../../create-profile/shared/User";

@Injectable()
@Service(Constants.STUDENT)
export class DashboardService extends BaseService<User, number>{

}