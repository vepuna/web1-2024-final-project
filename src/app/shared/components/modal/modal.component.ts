import {Component, OnInit} from '@angular/core';
import {ModalService} from "../../../core/services/modal.service";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html'
})
export class ModalComponent implements OnInit{

  constructor(public modalService: ModalService) {

  }

  ngOnInit(): void {

    }
}
