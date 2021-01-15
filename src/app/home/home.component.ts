import { Component, OnInit, ViewChild } from '@angular/core';
import { AnimationOptions } from 'ngx-lottie';
import { ModalAnimationComponent } from '../@shared/modal-animation/modal-animation.component';
import { TypesButton } from '../mocks/types-button';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(ModalAnimationComponent, {static: false}) modalmodalAnimation: any;
  options: AnimationOptions = {
    path: '../assets/lottie-working.json',
  };
  modalClass: string;
  effects = new TypesButton();
  array: any[] = [];
  year: number;

  constructor() {}

  ngOnInit() {
    this.array = this.effects.types();
    this.getYear();
  }

  public setEffectModal(effect: string, id?: string): void {
    this.modalClass = effect;
    setTimeout(() => this.modalmodalAnimation.show('modal'), 300);
  }

  public closeModal() {
    this.modalmodalAnimation.close('modal');
  }

  private getYear() {
    const date = new Date();
    this.year = date.getFullYear();
  }
}
