import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'
import {IPosts} from "../models/posts.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private isVisibleSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isVisible$: Observable<boolean> = this.isVisibleSubject.asObservable();
  private selectedPostSubject: BehaviorSubject<IPosts| null> = new BehaviorSubject<IPosts | null>(null);
  public selectedPost$: Observable<IPosts | null> = this.selectedPostSubject.asObservable();

  constructor() { }

  open(post: IPosts) {
    console.log(post);
    this.selectedPostSubject.next(post);
    this.isVisibleSubject.next(true);
  }

  close() {
    this.isVisibleSubject.next(false);
  }
}
