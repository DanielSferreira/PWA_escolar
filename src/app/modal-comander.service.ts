import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalComanderService {



  private novoNome = new BehaviorSubject('default message');
  currentMessage = this.novoNome.asObservable();

  private mostrandoModal = new BehaviorSubject(false);
  mostrandoModalP = this.mostrandoModal.asObservable();

  getModal() {
    return this.mostrandoModal;
  }
  alternaModal(t: boolean) {
    this.mostrandoModal.next(t);
  }
  avisaLa(txt: string) {
    this.novoNome.next(txt);
  }
  constructor() { }
}
