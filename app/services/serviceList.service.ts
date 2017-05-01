import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ListService {
    private _url: string = "app/apidata/listServiceData.json";
    constructor(private _http: Http){}
    getEmployees() {
        // without Http
        // return [
        //     {'id': 1, 'name': 'Taras', 'gender': 'Male'},
        //     {'id': 1, 'name': 'Natalia', 'gender': 'Female'},
        //     {'id': 1, 'name': 'Ostap', 'gender': 'Male'},
        //     {'id': 1, 'name': 'Nazar', 'gender': 'Male'}
        // ];

        // with Http
        return this._http.get(this._url)
            .map((response:Response) => response.json())
            .catch(this._errorHandler);
    }
    _errorHandler(error: Response) {
        console.error(error);
        return Observable.throw(error || "Server Error");
    }
}