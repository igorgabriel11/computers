import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarrinhoComponent } from './carrinho.component';
import { FormsModule } from '@angular/forms';
import { CarrinhoRoutingModule } from './carrinho-routing.module';


@NgModule({
  declarations: [
    CarrinhoComponent
  ],
  imports: [
    CommonModule,
    CarrinhoRoutingModule,
    FormsModule
  ]
})
export class CarrinhoModule { }
