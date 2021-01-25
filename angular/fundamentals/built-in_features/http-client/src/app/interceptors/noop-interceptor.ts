import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {InterceptorToggleService} from "./interceptor-toggle.service";

@Injectable()
export class NoopInterceptor implements HttpInterceptor{
  constructor(private interceptorsToggle: InterceptorToggleService) {
  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if(this.interceptorsToggle.noopInterceptor){
      console.log("Noop intercepted!");
      return next.handle(req);
    }
    return next.handle(req);
  }
}
