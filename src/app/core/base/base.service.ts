import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {CrudOperations} from './crud-operations';
import {ApplicationRepository} from '../repository/application-repository';

@Injectable()
export class BaseService<M, ID> implements CrudOperations {


    private _path: string = ' ';

    constructor(public applicationRepository: ApplicationRepository) {
        this._path = this['path$'];
    }

    create(data: any, callback?: (callback: any) => void): void {
        console.log(this.path);
        this.applicationRepository.create<M>({
            destination: this.path,
            item: data
        }, callback2 => callback(callback2));
    }

    update(id: string, data: M, callback?: (callback: any) => void): void {
        this.applicationRepository.update<M>({
            destination: this.path + id,
            item: data
        }, callback2 => callback(callback2));
    }

    query(options?: any, callback?: (callback: any) => void): void {
        if (options == null) {
            this.applicationRepository.query<M>({
                destination: this.path
            }, callback2 => callback(callback2));
        } else {
            this.applicationRepository.query<M>({
                destination: this.path + options.destination,
                options: options.option,

            }, callback2 => callback(callback2));
        }

    }

    delete(id: any, callback?: (callback: any) => void): void {
        console.log(this.path);
        this.applicationRepository.delete<M>({
            destination: this.path + id,
            id: id,
            item: this.path,
        }, callback2 => callback(callback2));
    }

    find(id: number, callback?: (callback: any) => void): void {
        this.applicationRepository.query<M>({
            id: id,
            item: this.path,
            options: {
                params: new HttpParams().set('id', '' + id),
            }
        }, callback2 => callback(callback2));
    }

    get path(): string {
        return this._path;
    }

    set path(value: string) {
        this._path = value;
    }
}

export function Service(args: string): Function {
    return (constructor: Function) => {
        constructor.prototype.path$ = args;
    };
}
