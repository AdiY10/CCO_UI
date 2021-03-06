import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';
import { AwsGridComponent } from './aws-grid/aws-grid.component';
import { HttpClientModule } from '@angular/common/http';
import { GridFilterComponent } from './grid-filter/grid-filter.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatRadioModule} from '@angular/material/radio';
import { SingleInstanceComponent } from './single-instance/single-instance.component';
import { FleetSearchComponent } from './fleet-search/fleet-search.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FleetResultsComponent } from './fleet-results/fleet-results.component';
import { FleetParamsComponent } from './fleet-params/fleet-params.component';
import { AddComponentModalComponent } from './fleet-params/add-component-modal/add-component-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddAppModalComponent } from './fleet-params/add-app-modal/add-app-modal.component';
import { AwsDataComponent } from './aws-data/aws-data.component';
import { AzureFleetSearchComponent } from './azure-fleet-search/azure-fleet-search.component';
import { HybridCloudComponent } from './hybrid-cloud/hybrid-cloud.component';
import { AzureSingleInstanceComponent } from './azure-single-instance/azure-single-instance.component';
import { HybridSingleInstanceComponent } from './hybrid-cloud-single/hybrid-cloud-single-instance.component';

@NgModule({
  declarations: [
    AwsDataComponent,
    AppComponent,
    AwsGridComponent,
    GridFilterComponent,
    SingleInstanceComponent,
    FleetSearchComponent,
    FleetResultsComponent,
    FleetParamsComponent,
    AddComponentModalComponent,
    AddAppModalComponent,
    AzureFleetSearchComponent,
    HybridCloudComponent,
    AzureSingleInstanceComponent,
    HybridSingleInstanceComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule.withComponents([]),
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    MatTabsModule,
    NgbModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }