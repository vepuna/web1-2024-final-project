import {Component, OnInit} from '@angular/core';
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {CreatePostComponent} from "../create-post/create-post.component";
import {EditPostComponent} from "../edit-post/edit-post.component";
import {ImageUrlPipe} from "../../../../shared/pipe/image-url.pipe";
import {ModalComponent} from "../../../../shared/components/modal/modal.component";
import {ClaimsService} from "../../../../core/services/claims.service";
import {AuthService} from "../../../../core/services/auth.service";

@Component({
  selector: 'app-table-claims',
  standalone: true,
  imports: [
    AsyncPipe,
    CreatePostComponent,
    EditPostComponent,
    ImageUrlPipe,
    ModalComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './table-claims.component.html'
})
export class TableClaimsComponent implements OnInit {

  constructor(
    protected claimsService: ClaimsService,
    private authService: AuthService) {}

  deleteClaim(claimId: number){
    const token = this.authService.getToken();
    console.log('deleteClaim')
    this.claimsService.deleteClaim(claimId, token).subscribe();
  }

  ngOnInit(): void {
    this.loadClaims();
    console.log('work')
  }

  loadClaims(){
    const token = this.authService.getToken();
    this.claimsService.getClaims(token).subscribe();
    console.log(this.claimsService.claims);
  }

}
