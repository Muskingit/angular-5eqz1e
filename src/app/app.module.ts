import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule, Routes } from '@angular/router';
// import { Claimstatus } from './Claim Status/claimstatus.component';
import { ClaimComponent } from './ClaimStatus/claim.component';
import { DocComponent } from './DocumentsRecevied/doc.component';
import {MatCardModule} from '@angular/material/card';


const routes: Routes = [
  { path: '', redirectTo: 'claim', pathMatch: 'full' },
  { path: 'claim', component: ClaimComponent },
  { path: 'doc', component: DocComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    MatTabsModule,
    RouterModule.forRoot(routes),
    MatCardModule,
  ],
  declarations: [AppComponent, ClaimComponent, DocComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
