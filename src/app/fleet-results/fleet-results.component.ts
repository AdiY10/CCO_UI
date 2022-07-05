import {Component, Input, OnInit} from '@angular/core';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';


@Component({
  selector: 'app-fleet-results',
  templateUrl: './fleet-results.component.html',
  styleUrls: ['./fleet-results.component.css']
})
export class FleetResultsComponent implements OnInit {
  rowData = [];
  showData = false;
  private gridApi;
  private gridColumnApi;
  columnDefs;
  defaultColDef;
  groupDefaultExpanded;
  detailCellRendererParams;
  detailRowAutoHeight: boolean;

  @Input() set data(data: any[]){
    if (data !== undefined && data.length > 0){
      this.rowData = data;
      this.showData = true;
    }
  }

  constructor() {
    this.columnDefs = [

      { field: 'price',  cellRenderer: 'agGroupCellRenderer' },
      { field: 'region' },
    ];
    this.detailRowAutoHeight = true;
    this.defaultColDef = { flex: 1 };
    this.groupDefaultExpanded = 0;
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          { field: 'typeName', cellRenderer: 'agGroupCellRenderer' },
          { field: 'priceAfterDiscount' },
          { field: 'spot_price' },
          { field: 'onDemandPrice' },
          { field: 'cpu' },
          { field: 'memory' },
          { field: 'region' },
          { field: 'discount' },
        ],
        defaultColDef: { flex: 1 },
        groupDefaultExpanded: 0,
        masterDetail: true,
        detailRowHeight: 240,
        detailRowAutoHeight: true,
        detailCellRendererParams: {
          detailGridOptions: {
            columnDefs: [
              { field: 'appName'},
              { field: 'componentName' },
            ],
            defaultColDef: { flex: 1 },
          },
          getDetailRowData: params => {
            params.successCallback(params.data.components);
          },
        },
      },
      getDetailRowData: params => {
        params.successCallback(params.data.instances);
      },
    };
  }
  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  ngOnInit(): void {
  }

}
