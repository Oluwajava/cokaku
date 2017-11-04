import {Repository} from './repository.interface';
import {Specification} from './specification';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {RepositoryData} from './repository-data';
import {CoreService} from '../core.service';

@Injectable()
export class HttpRepository implements Repository<any> {


    constructor(private coreService: CoreService) {
        console.log('HttpRepository INitialized');
    }

    add<T>(data: RepositoryData): Observable<any> {
        return this.coreService.httpPost<T>(data.destination, data.item, data.options || {});
    }

    addItems<T>(data: RepositoryData): void {
        for (const item of data.items) {
            this.coreService.httpPost<T>(data.destination, item, data.options || {});
        }
    }

    update<T>(data: RepositoryData): Observable<any> {
        return this.coreService.httpPut<T>(data.destination, data.item, data.options || {});
    }

    remove<T>(data: RepositoryData): Observable<any> {
        return this.coreService.httpDelete<T>(data.destination, data.id);
    }

    removeItems<T>(data: RepositoryData): void {
        for (const item of data.items) {
            this.coreService.httpDelete<T>(data.destination, data.id);
        }
    }

    query<T>(data: RepositoryData): Observable<any> {
        return this.coreService.httpGet<T>(data.destination, data.options || {});
    }


}
