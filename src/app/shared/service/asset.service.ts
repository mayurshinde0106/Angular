import { HttpClient,HttpClientModule} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, ObservedValuesFromArray, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor(private http:HttpClient) { }
  url='http://localhost:42001/'
  
  // registeremployee(employee:any) : Observable<any>{
  //   return this.http.post<any>(this.url,employee).pipe(
  //     catchError(this.handleError)
  //   );
  // }
  
     addAsset(asset:any): Observable<any>{
       return this.http.post<any>(this.url+'PostAssetDetails',asset).pipe(
        catchError(this.handleError)
       );
    } 

    assetList():Observable<any>{
      return this.http.get<any>(this.url+'GetAssetDetails',).pipe(
        catchError(this.handleError)
      )
    }

    deleteAsset(asset:any):Observable<any>{
      return this.http.put<any>(this.url+'api/DeleteAssetDetail',asset).pipe(
        catchError(this.handleError)
      )
    }

    private handleError(error: any) :Observable<never>{
      console.error('An error is occured ',error);
      return throwError(error);
  }

  asset = {
    Id: 0,
    Name: '',
    Category: '',
    Condition: '',
    Cost: 0,
    Location: ''

  }
  setAssetData(data:any){
    debugger
    this.asset.Id = data.Id;
    this.asset.Name = data.Name;
    this.asset.Category = data.Category,
    this.asset.Condition = data.Condition,
    this.asset.Cost = data.Cost,
    this.asset.Location = data.Location
   
  }
  getAssetData(){

      console.log('service'+this.asset.Id+" - "+this.asset.Location);
    return this.asset;
  }

}
