import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

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
            .map((response:Response) => response.json());
    }
}