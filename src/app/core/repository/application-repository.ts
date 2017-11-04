import {Injectable} from "@angular/core";
import {HttpRepository} from "./http-repository";
import {RepositoryData} from "./repository-data";

/**
 * Created by Mayokun on 7/28/2017.
 */

@Injectable()
export class ApplicationRepository {

    constructor(private httpRepository: HttpRepository) {
    }

    create<T>(data: RepositoryData, callback?: (callback: any) => void): any {
        this.httpRepository.add<T>(data).subscribe(response => {
            callback(response);
            return response;
        }, error => console.log(error));
    }

    query<T>(data: RepositoryData, callback?: (callback: any) => void) {
        this.httpRepository.query<T>(data).subscribe(response => {
                callback(response);
                return response;
            }, error => {
                console.log(error);
            }
        );
    }

    update<T>(data: RepositoryData, callback?: (callback: any) => void) {
        this.httpRepository.update<T>(data).subscribe(response => {
            callback(response);
            return response;
        }, error => console.log(error));
    }

    delete<T>(data: RepositoryData, callback?: (callback: any) => void) {
        this.httpRepository.remove<T>(data).subscribe(response => {
            return response;
        }, error => console.log(error));
    }
}


