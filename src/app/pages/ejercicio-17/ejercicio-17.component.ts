import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para *ngFor si usas en el HTML
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-ejercicio-17',
  standalone: true, // Esto indica que el componente es standalone
  imports: [CommonModule], // Importamos CommonModule para poder usar directivas como *ngFor
  templateUrl: './ejercicio-17.component.html',
  styleUrls: ['./ejercicio-17.component.css']
})
export class Ejercicio17Component {
  // Datos de la gráfica en formato JSON
  public chartData = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Ventas",
        data: [10, 20, 30, 40, 50, 60],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  };

  ngOnInit() {
    // Registramos los componentes de Chart.js que necesitamos
    Chart.register(...registerables);

    // Crear el gráfico de barras cuando el componente se haya inicializado
    new Chart('myChart', {
      type: 'bar', // Tipo de gráfico (barras)
      data: this.chartData, // Datos a mostrar
      options: {
        responsive: true, // Hacerlo responsivo
        plugins: {
          legend: {
            position: 'top', // Ubicación de la leyenda
          },
          tooltip: {
            enabled: true // Habilitar tooltips
          }
        }
      }
    });
  }
}
  