import { Injectable, Optional } from '@angular/core';
import { Response, Http, RequestOptions, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ApiService {

  private baseUrl: string;

  constructor(
    private router: Router,
    private http: Http) {
    // for setting API base url
    this.baseUrl = 'http://localhost:8001/assets/json/';
  }

  private getHeader(): any {
    const headers: Headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return headers;
  }

  public get(url: string): Promise<any> {
    // this.loaderService.display(true);
    return this.http.get(this.baseUrl + url, { headers: this.getHeader() })
      .toPromise()
      .then(res => this.handleSuccess(res))
      .catch(err => this.handleError(err));
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error);
  }

  private handleSuccess(res: any): Promise<any> {
    return Promise.resolve(res);
  }
}
