import { Component, OnInit } from '@angular/core';
import { AssetService } from '../../shared/service/asset.service';
import { response } from 'express';
import { Route, Router, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule, NgFor } from '@angular/common'
import { UpdateAssetComponent } from '../update-asset/update-asset.component';

@Component({
  selector: 'app-asset-list',
  standalone: true,
  imports: [CommonModule,UpdateAssetComponent],
  templateUrl: './asset-list.component.html',
  styleUrl: './asset-list.component.css',
  providers: [AssetService]
})
export class AssetListComponent {

  public navigateFlag : boolean =false;
  public AssetDataList : any[] =[];
  public responseData : any[] =[]; 


  constructor(private asssetService: AssetService, private router: Router) { }
  items: any[] = [];
  ngOnInit() {
    this.asssetService.assetList().subscribe(
      response => {
        console.log("Get data Successfully", response.data[0]);
        this.items = response.data[0];
      },
      error => {
        console.log('error occured ', error);
      }
    )
  }
  asset1 ={
    AssetId : 0 ,
    Name:'',
    Category:'',
    Condition:'',
   Cost:0,
    Location:'',
    Status:'',
    Action:''
  }

  deleteClick(AssetId :number){

    console.log('delete records '+AssetId);
        this.asset1.AssetId=AssetId;

        this.asssetService.deleteAsset(this.asset1).subscribe(
          response=>{
            console.log("Get data Successfully", response.data[0]);
        this.items = response.data[0];
      },
      error => {
        console.log('error occured ', error);
      }
        )
  }

  asset = {
    Id: 0,
    Name: '',
    Category: '',
    Condition: '',
    Cost: 0,
    Location: ''

  }
  assetClick(data:any) {
    debugger
    this.AssetDataList = [];
    this.navigateFlag =true
    this.AssetDataList = data;
    /* console.log("Update work successfully ..!! ");

    this.asset.Id = data.AssetId;
    this.asset.Name = data.Name;
    this.asset.Category = data.Category,
    this.asset.Condition = data.Condition,
    this.asset.Cost = data.Cost,
    this.asset.Location = data.Location
 */

   // this.asssetService.setAssetData(data);

   // console.log(Id + "->" + name);

   // this.router.navigate(["update"])
  }
}


