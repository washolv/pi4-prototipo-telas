import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let jwt = localStorage.getItem('access_token');
        if(!request.url.startsWith('//viacep.com.br/ws')){
          if (jwt) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer${jwt}`
                }
            });
        }
        }

        return next.handle(request);
    }
}
