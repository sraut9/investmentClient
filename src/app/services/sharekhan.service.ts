import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cacheable } from 'ngx-cacheable';

const baseUrl = environment.url + "/api/sharekhan";//'https://portfolio-shekhar.herokuapp.com/api/sharekhan';

@Injectable({
  providedIn: 'root'
})
export class SharekhanService {

  constructor(private http: HttpClient) { }
  
  @Cacheable()
  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: { title: string; description: string; }): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: { title: any; description: any; published: any; } | null): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: string): Observable<any> {
    return this.http.get(`${baseUrl}?name=${name}`);
  }
}