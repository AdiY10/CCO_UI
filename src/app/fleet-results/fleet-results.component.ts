import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import 'ag-grid-enterprise' ;
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { ICellRendererParams } from 'ag-grid-community';
import {RequestService} from '../request.service';

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

  constructor(private renderer: Renderer2, public requestService: RequestService) {
    this.columnDefs = [
      { headerName: 'Index', valueGetter: 'node.rowIndex + 1', maxWidth: 150 ,  cellRenderer: 'agGroupCellRenderer' },
      { headerName: 'Total Price', field: 'price', minWidth: 380, maxWidth: 400},
      { headerName: 'Region', field: 'region' , minWidth: 380, maxWidth: 400},
      { headerName: ' ', cellRenderer: (params) => this.buttonRenderer(this.requestService, params, params.node.rowIndex) },
    ];
    this.detailRowAutoHeight = true;
    this.defaultColDef = { flex: 1 };
    this.groupDefaultExpanded = 0;
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          { field: 'typeName', cellRenderer: 'agGroupCellRenderer' },
          { headerName: 'Price', field: 'priceAfterDiscount' },
          { headerName: 'Spot Price', field: 'spot_price' },
          { field: 'onDemandPrice' },
          { field: 'cpu' },
          { field: 'memory' },
          { field: 'region' },
          { headerName: 'Cloud Provider',field: 'CloudProvider' },
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
  buttonRenderer(requestService: RequestService, params: ICellRendererParams, rowIndex: number): HTMLElement {
    const button = document.createElement('button');
    button.innerText = 'Apply';
    button.style.borderRadius = '20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = 'white';
    button.style.padding = '0px 16px';
    button.style.fontSize = '14px';
    button.style.width = '85px';
    button.style.height = '38px';
    button.style.fontWeight = 'bold';
    button.style.border = 'none';
    button.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.2)';
    button.style.cursor = 'pointer';
    button.style.transition = 'background-color 0.3 ease';
    // Hover effect
    button.addEventListener('mouseenter', () => {
      button.style.backgroundColor = '#0056b3';
    });
    button.addEventListener('mouseleave', () => {
      button.style.backgroundColor = '#007bff';
    });
    button.addEventListener('click', () => {
      // handle button click event here
      //console.log(params.colDef);
      const rowNumber =  rowIndex + 1
      console.log(`Row ${rowNumber} clicked, and will be launched`);
      this.requestService.httpApplyResults(rowNumber).subscribe((result) => {
        this.data = result;
       });
    });
    return button;
  }
  onGridReady(params): void {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }
  ngOnInit(): void {
  }

}