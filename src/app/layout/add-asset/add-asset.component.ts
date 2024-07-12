import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AssetService } from '../../shared/service/asset.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-add-asset',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-asset.component.html',
  styleUrl: './add-asset.component.css',
  providers:[AssetService]
})
export class AddAssetComponent {

  constructor (private http:HttpClient,private assetService:AssetService){}
  asset ={
    AssetId : 0 ,
    Name:'',
    Category:'',
    Condition:'',
   Cost:0,
    Location:'',
    Status:'',
    Action:''
  }
 // url='http://localhost:42001/PostAssetDetails'

onSubmit(){
    console.log(this.asset);


    this.assetService.addAsset(this.asset).subscribe(
      response=>{
              console.log("Added Successfully",response.data);
            },
            error=>{
              console.log("Failed",error)
            }
    )
 }
}