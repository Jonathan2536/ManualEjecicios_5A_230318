import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-ejercicio-16',
  templateUrl: './ejercicio-16.component.html',
  styleUrls: ['./ejercicio-16.component.css']
})
export class Ejercicio16Component implements AfterViewInit {

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createBarChart();
  }

  private createBarChart(): void {
    const barCtx = document.getElementById('barChart') as HTMLCanvasElement;
    
    new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
        datasets: [{
          label: 'Minutos activos',
          data: [7, 4, 8, 7, 4, 0, 0],
          backgroundColor: [
            'rgba(52, 152, 219, 0.7)',
            'rgba(52, 152, 219, 0.7)',
            'rgba(52, 152, 219, 0.7)',
            'rgba(52, 152, 219, 0.7)',
            'rgba(52, 152, 219, 0.7)',
            'rgba(231, 76, 60, 0.7)',
            'rgba(231, 76, 60, 0.7)'
          ],
          borderColor: [
            'rgba(52, 152, 219, 1)',
            'rgba(52, 152, 219, 1)',
            'rgba(52, 152, 219, 1)',
            'rgba(52, 152, 219, 1)',
            'rgba(52, 152, 219, 1)',
            'rgba(231, 76, 60, 1)',
            'rgba(231, 76, 60, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
