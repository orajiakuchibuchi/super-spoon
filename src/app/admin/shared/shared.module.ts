import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    FormsModule
  ],
  exports: [
    HeaderComponent,
    NgxPaginationModule,
    SearchComponent
  ]
})
export class SharedModule { }
