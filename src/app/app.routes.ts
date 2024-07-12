import { Routes } from '@angular/router';
import { UpdateAssetComponent } from './layout/update-asset/update-asset.component';
import { AssetListComponent } from './layout/asset-list/asset-list.component';
import { AddAssetComponent } from './layout/add-asset/add-asset.component';
import { AppComponent } from './app.component';
export const routes: Routes = [
    
    // { path: "", component: AppComponent },
    { path: "addAsset", component: AddAssetComponent },
    { path: "assetlist", component: AssetListComponent },
    { path: "update", component: UpdateAssetComponent },


];
