import { HttpClient, HttpErrorResponse, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _http: HttpClient) { }

  superbaseUrl = "https://nxflmixyuutemaaqytpk.supabase.co/rest/v1"
  supabaseHeaders = new HttpHeaders().set("apiKey", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im54ZmxtaXh5dXV0ZW1hYXF5dHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1OTc2NTYsImV4cCI6MjAxMzE3MzY1Nn0.NMiNIGOchmzvUT8uUouxBB7DADQzqe30HHvlA5-v76c")

  /*getProductsList(companyId: Number): Observable<any>{
    return this._http.get<any>(this.superbaseUrl+'products?company=eq.'+companyId+'&deleted_at=is.null', { headers: this.supabaseHeaders})
  }*/

  insertarDatos(): Observable<any>{
    return this._http.post<any>(this.superbaseUrl+'viaje',{headers: this.supabaseHeaders, observe: 'response'});
  }

  updateProduct(product: any): Observable<HttpErrorResponse | any>{
    return this._http.patch<any>(this.superbaseUrl+'products?id=eq.'+product.id,product,{headers: this.supabaseHeaders, observe: 'response'});
  }

}