import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-aws-grid',
  templateUrl: './aws-grid.component.html',
  styleUrls: ['./aws-grid.component.css']
})
export class AwsGridComponent implements OnInit {

  title = 'my-app';

  showData = true;
  @Input() set data(data: any[]){
    if (data !== undefined && data.length > 0){
      this.rowData = data;
      this.showData = true;
    }
  }
  columnDefs = [
    { headerName: 'Type name',
      field: 'typeName',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Type family',
      field: 'family',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Spot price (USD/H)',
      field: 'spot_price',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'OnDemand Price (USD/H)',
      field: 'onDemandPrice',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Region',
      field: 'region',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'vCPUs GB',
      field: 'cpu',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Memory GB',
      field: 'memory',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'CPU/Price Score',
      field: 'CPU_Score',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Memory/Price Score',
      field: 'Memory_Score',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Spot discount (%)',
      field: 'discount',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Interruption Frequency',
      field: 'interruption_frequency',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Network GB/s',
      field: 'network',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Storage Type',
      field: 'volumeType',
      filter: 'agTextColumnFilter',
      sortable: true},
    { headerName: 'Storage price (USD*GB)/H',
      field: 'storagePrice',
      filter: 'agTextColumnFilter',
      sortable: true},
  ];

  rowData = [];
  ngOnInit(): void {
  }
}
