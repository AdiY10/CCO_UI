import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import {Filter} from '../dataClasses';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddComponentModalComponent} from './add-component-modal/add-component-modal.component';
import * as Constants from '../Constants';
import {RequestService} from '../request.service';
import {AddAppModalComponent} from './add-app-modal/add-app-modal.component';

@Component({
  selector: 'app-fleet-params',
  templateUrl: './fleet-params.component.html',
  styleUrls: ['./fleet-params.component.css']
})
export class FleetParamsComponent implements OnInit {
  @Output()
  sendFleetRequest: EventEmitter<any> = new EventEmitter<any>();
  private gridApi;
  private gridColumnApi;
  regions:any;
  OSs: any;  
  paymentOptions :any;
  
  @Input() set region(region: any[]){
    if (region !== undefined && region.length > 0){
      this.regions = region;
    }
  }

  @Input() set os(os: any[]){
    if (os !== undefined && os.length > 0){
      this.OSs = os;
    }
  }

  @Input() set payment(payment: any[]){
    if (payment !== undefined){
      this.paymentOptions = payment;
      console.log(this.paymentOptions);
    }
  }

  rowData;
  columnDefs;
  defaultColDef;
  detailCellRendererParams;
  rowSelection;
  rowSelected = false;
  compSelected = false;
  selectedOs: any;
  selectedPayment: any;
  selectedRegion: any;
  domLayout = 'autoHeight';
  constructor(private modalService: NgbModal) {
    this.columnDefs = [
      {
        field: 'app',
        cellRenderer: 'agGroupCellRenderer',
      },
      {field: 'share'},
    ];
    this.rowSelection = 'single';
    this.defaultColDef = { flex: 1 };
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          { field: 'name'},
          { field: 'vCPUs',
            cellRenderer: 'agGroupCellRenderer'},
          { field: 'memory' },
          { field: 'network' },
          { field: 'burstable' },
          { field: 'size' },
          { field: 'behavior' },
          { field: 'frequency' },
          { field: 'iops' },
          { field: 'throughput' },
          { field: 'storageType'}
        ],
        defaultColDef: { flex: 1 },
        groupDefaultExpanded: 0,
        detailRowHeight: 240,
        rowSelection: 'single',
      },
      getDetailRowData: params => {
        params.successCallback(params.data.components);
      },
    };
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  addApp() {
    this.modalService.open(AddAppModalComponent, ).result.then((result) => {
      const newItems = [this.createNewApp(result)];
      this.gridApi.applyTransaction({
        add: newItems,
      });
    });
  }

  createNewApp(result): any {
    return {
      app: result.name,
      share: result.share,
      components: [],
    };
  }

  addComponentToApp(): void {
    this.modalService.open(AddComponentModalComponent, { size: 'xl' }).result.then((result) => {
      this.addChild(result);
    });
  }

  sendRequest() {
    const data = [];
    this.gridApi.forEachNode((node) => {
      data.push(node.data);
    });
    this.sendFleetRequest.emit({selectedOs: this.selectedOs,payment: this.selectedPayment ,region: this.selectedRegion, apps: data});

  }

  private addChild(result: Filter): void {
    const row = this.gridApi.getSelectedNodes()[0].data;
    const components = row.components;
    components.push(result);
    row.components = components;

    this.gridApi.applyTransaction({update: [row]});
  }

  onRowSelected(event: any): void  {
    this.rowSelected = event.api.getSelectedNodes().length === 1 ;
  }

  onRemoveApp(): void {
    const selectedData = this.gridApi.getSelectedRows();
    this.gridApi.applyTransaction({ remove: selectedData });
  }

  removeSelectedComponents(): void {
    this.gridApi.forEachNode((node, index) => {
      const data = node.data;
      const toRemove = node.detailNode.detailGridInfo.api.getSelectedNodes()[0].data;
      data.components = data.components.filter( cmp => cmp !== toRemove);
      node.data = data;
      this.gridApi.applyTransaction({update: [data]});
    });
  }
}