import { Component,Input,OnInit } from '@angular/core';
import { AssetService } from '../../shared/service/asset.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-update-asset',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './update-asset.component.html',
  styleUrl: './update-asset.component.css'
})
export class UpdateAssetComponent {

@Input()responseData : any[] =[] ;
public AssetList : any[] =[];
  constructor(private assetServive: AssetService) { }
  
  
  private asset:any;

  ngOnInit(){
    debugger
    this.AssetList = this.responseData;
        //this.asset=;
       // console.log("update route "+this.assetServive.getAssetData().Name);
  }
  ngOnChange(responseData : any){
debugger
  }
  

 

}
