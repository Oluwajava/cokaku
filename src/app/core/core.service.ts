import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Constants} from "./utils/constants";

@Injectable()
export class CoreService {

    constructor(private _http: HttpClient) {
    }


    httpPost<T>(endpointUrl: string, payload, options?: HttpHeaders): Observable<any> {
        return this._http.post<T>(Constants.BASE_URL + endpointUrl, payload, options || {});
    }

    httpPut<T>(endpointUrl: string, payload, options?: HttpHeaders): Observable<any> {
        return this._http.put<T>(Constants.BASE_URL + endpointUrl, payload, options || {});
    }

    httpGet<T>(endpointUrl: string, options?: HttpHeaders): Observable<any> {
        return this._http.get<T>(Constants.BASE_URL + endpointUrl, options || {});
    }

    httpDelete<T>(endpointUrl: string, id: number): Observable<any> {
        return this._http.delete<T>(Constants.BASE_URL + endpointUrl, {
            params: new HttpParams().set('id', '' + id),
        });
    }

}
