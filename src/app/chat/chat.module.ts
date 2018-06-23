import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { SharedModule } from '../shared/shared.module';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PickerModule
  ],
  declarations: [ChatComponent],
  exports: [ChatComponent],
  providers: []
})
export class ChatModule { }
