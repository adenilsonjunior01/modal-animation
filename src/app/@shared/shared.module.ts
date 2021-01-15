import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from '@app/material.module';
import { LoaderComponent } from './loader/loader.component';
import { ModalAnimationComponent } from './modal-animation/modal-animation.component';

@NgModule({
  imports: [FlexLayoutModule, MaterialModule, CommonModule],
  declarations: [LoaderComponent, ModalAnimationComponent],
  exports: [LoaderComponent, ModalAnimationComponent],
})
export class SharedModule {}
