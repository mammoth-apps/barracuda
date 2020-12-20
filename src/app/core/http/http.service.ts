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

  /**
   * Executes a post request and use the formatter to replace any placeholders
   *
   * @param {string} url Url to fire your post request at
   * @param {*} body Body parameters
   * @param {Record<string, any>} [keyValueMap] Used to replace placeholders in the url
   * @param {HttpClientOptions} [options] Optional client options
   * @returns {Observable<any>}
   * @memberof HttpService
   */
  public post(
    url: string,
    body: any,
    keyValueMap?: Record<string, any>
  ): Observable<any> {
    return this.httpClient.post(this.formatUrl(url, keyValueMap), body);
  }

  /**
   * Takes a url and will replace any placeholders with their key in the map
   *
   * @private
   * @param {string} url A url with placeholders 'api/:test/budget
   * @param {Record<string, any>} [keyValuePair={}] A key value map containing a matching key to anything `:*` {test: 123}
   * @returns {string} The formatted string with the placeholders removed 'api/123/budget'
   * @memberof HttpService
   */
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
