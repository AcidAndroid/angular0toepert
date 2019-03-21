import { Component, OnInit } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styleUrls: ['./dona.component.sass']
})
export class DonaComponent implements OnInit {

   // Doughnut
   public doughnutChartLabels: Label[] = ['Tamales', 'Gelatinas', 'Tortas'];
   public doughnutChartData: MultiDataSet = [
     [350, 450, 100],
     [50, 150, 120],
     [250, 130, 70],
   ];
   public doughnutChartType: ChartType = 'doughnut';

   // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }) {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }) {
    console.log(event, active);
  }
  Actualizar(){
   
    this.doughnutChartData=[[ Math.random() * 100,Math.random() * 100,Math.random() * 100]]
    return
    
  }
  constructor() { }

  ngOnInit() {
  }

}
