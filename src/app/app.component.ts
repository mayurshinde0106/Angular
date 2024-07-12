import { Component } from '@angular/core';
import { RouterLink, RouterOutlet ,Router} from '@angular/router';
import { AddAssetComponent } from './layout/add-asset/add-asset.component';
import { HttpClientModule } from '@angular/common/http';
import { AssetListComponent } from './layout/asset-list/asset-list.component';
import { UpdateAssetComponent } from './layout/update-asset/update-asset.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,AddAssetComponent,AssetListComponent,UpdateAssetComponent,HttpClientModule,RouterLink,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AssetManagement';

  constructor(private router:Router){}

  updateAsset(){
    console.log("hello");
    this.router.navigate(['/update']);  
  }

   viewAsset(){
    console.log("hello");
    this.router.navigate(['/assetlist']);  
  }
}
