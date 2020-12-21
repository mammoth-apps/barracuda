import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class HttpService {
  constructor(private httpClient: HttpClient) {}

  public get(url: string, keyValueMap?: Record<string, any>): Observable<any> {
    return this.httpClient.get(this.formatUrl(url, keyValueMap));
  }

  public delete(
    url: string,
    keyValueMap?: Record<string, any>
  ): Observable<any> {
    return this.httpClient.delete(this.formatUrl(url, keyValueMap));
  }

  public post(
    url: string,
    body: any,
    keyValueMap?: Record<string, any>
  ): Observable<any> {
    return this.httpClient.post(this.formatUrl(url, keyValueMap), body);
  }

  private formatUrl(
    url: string,
    keyValuePair: Record<string, any> = {}
  ): string {
    Object.keys(keyValuePair).forEach((key) => {
      url = url.replace(`:${key}`, keyValuePair[key]);
    });
    return url;
  }
}
