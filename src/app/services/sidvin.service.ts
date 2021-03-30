import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, EMPTY } from 'rxjs';
import { environment } from '../../environments/environment';
import { Cacheable } from 'ngx-cacheable';

const baseUrl = environment.url + "/api/sidvin";//'https://portfolio-shekhar.herokuapp.com/api/sidvin';
interface my {
  name: string,
  id: string,
  type: string,
  invested_nav_price: string,
  last_nav_price: string,
  unit_no_of_shares: string,
  total_cost: string,
  current_value: string,
  total_return: string,
  percent: string   
}

@Injectable({
  providedIn: 'root'
})
export class SidvinService {

  pagecache: Observable<any> = EMPTY;

  constructor(private http: HttpClient) { }

  @Cacheable()
  getAll(): Observable<any> {

    // if (this.pagecache != EMPTY) {
    //   console.log("catched value.....");
    //   console.log(this.pagecache);
    //   return this.pagecache;
    // }
    
      // console.log("making request to url.....");
      // this.pagecache = this.http.get(baseUrl);
      // console.log(this.pagecache);
      // return this.pagecache;
      let res: any = this.http.get(baseUrl) 
      //console.log("res: " + JSON.stringify(res));
      return res;
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
    // .pipe(shareReplay(1)),
    // catchError(err => {
    //   delete this.pagecatche[0];
    //   return EMPTY;
    // });
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