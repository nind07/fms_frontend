import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';
import { environment } from 'src/environment/env'
@Injectable({
  providedIn: 'root'
})
export class MasterService {
  //store invoice and unit certificate in these variable
  public blogData:any
  public invoiceData:any
  public orderData: any
  public propertyData = []
  public token !: string
  constructor(private _http: HttpClient, private _sharedService: SharedService) {

  }

  getRequestHeaders(authenticate: boolean) {
    var headers: any = {
      'Accept': 'application/json'
    };
    if (authenticate) {
      // Append access token and referesh token
      // headers[ACCESS_TOKEN_KEY] = `Bearer ${this.appPreference.getAccessToken()}`;

      // if (endUrl == 'users/save' || endUrl == 'users/update') {
      headers['x-auth-token'] = this._sharedService.getAcessRoken()
      // }
    }
    return {
      headers: new HttpHeaders(headers),
    };
  }
  
  loginUser(body: any) {

    return this._http.post(environment.USER_ENDPOINT + 'login', body);
  }

  addUserRole(body: any) {
    const headers = this.getRequestHeaders(this._sharedService.isloggedin);
    return this._http.post(environment.USER_ENDPOINT + 'register', body, headers);
  }
  updateUserRole(body: any) {
    const headers = this.getRequestHeaders(this._sharedService.isloggedin);
    return this._http.post(environment.USER_ENDPOINT + 'updateUser', body, headers);
  }
  getUserRole() {
    const headers = this.getRequestHeaders(this._sharedService.isloggedin);
    return this._http.post(environment.USER_ENDPOINT + 'getAllUser', [], headers);
  }
  




  
}


