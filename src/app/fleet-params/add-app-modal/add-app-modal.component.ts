import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-add-app-modal',
  templateUrl: './add-app-modal.component.html',
  styleUrls: ['./add-app-modal.component.css']
})
export class AddAppModalComponent implements OnInit {
  name: string;
//  share: boolean;
  public share = true;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {
  }

  submit(): void {
    this.activeModal.close({name: this.name, share: this.share});
  }
}