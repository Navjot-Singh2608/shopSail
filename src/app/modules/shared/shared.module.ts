import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BirthdayPipe } from './pipes/birthday.pipe';
import { PricePipe } from './pipes/PricePipe.pipe';

const components = [HeaderComponent, FooterComponent];

const pipies = [BirthdayPipe, PricePipe];

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatIconModule],
  exports: [...components, ...pipies],
  declarations: [...components, ...pipies],
})
export class SharedModule {}
