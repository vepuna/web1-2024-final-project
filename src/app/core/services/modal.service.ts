import {Injectable} from '@angular/core'
import {BehaviorSubject, Observable} from 'rxjs'
import {IPosts} from "../models/posts.model";

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private isVisibleEditSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isVisibleEdit$: Observable<boolean> = this.isVisibleEditSubject.asObservable();
  private isVisibleCreateSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isVisibleCreate$: Observable<boolean> = this.isVisibleCreateSubject.asObservable();
  private selectedPostSubject: BehaviorSubject<IPosts | null> = new BehaviorSubject<IPosts | null>(null);
  public selectedPost$: Observable<IPosts | null> = this.selectedPostSubject.asObservable();

  constructor() { }

  openCreate() {
    this.isVisibleCreateSubject.next(true);
  }

  open(post: IPosts) {
    console.log(post);
    this.selectedPostSubject.next(post);
    this.isVisibleEditSubject.next(true);
  }

  close() {
    this.isVisibleEditSubject.next(false);
    this.isVisibleCreateSubject.next(false);
  }
}
