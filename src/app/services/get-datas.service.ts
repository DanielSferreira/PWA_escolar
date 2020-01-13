import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDatasService {

  constructor(private http: HttpClient) { }

  conf = './';
}
