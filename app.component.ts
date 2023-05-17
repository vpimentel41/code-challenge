// app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cargueiroTipo: string;
  dataHoraSaida: Date;
  dataHoraRetorno: Date;
  quantidadeMineral: number;
  tipoMineral: string;
  cargasRecebidas: Carga[] = [];
  filtroMes: number;
  filtroAno: number;

  registrarSaidaRetorno() {
    
  }

interface Carga {
  tipoMineral: string;
  dataHoraRecebimento: Date;
  valorTotal: number;
}


  getCargasRecebidas() {
  }
}