import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {Filter} from '../../dataClasses';

@Component({
  selector: 'app-add-component-modal',
  templateUrl: './add-component-modal.component.html',
  styleUrls: ['./add-component-modal.component.css']
})
export class AddComponentModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  onApplyFilter(filter: Filter) {
    this.activeModal.close(filter);
  }
}
