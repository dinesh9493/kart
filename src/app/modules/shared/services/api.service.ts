import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../configs/url.config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getNewsApi() {
    return this.http.get(API_URL.GET_NEWS_DETAILS);
  }
  
  getNewsPosts() {
    return this.http.post(API_URL.GET_UPDATED_POSTS, null);
  }
}
