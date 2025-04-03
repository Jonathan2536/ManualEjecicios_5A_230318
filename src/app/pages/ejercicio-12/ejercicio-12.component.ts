import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CommonModule } from '@angular/common';

export interface TravelData {
  name: string;
  destination: string;
  year: number;
}

@Component({
  selector: 'app-ejercicio-12',
  templateUrl: './ejercicio-12.component.html',
  styleUrls: ['./ejercicio-12.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule
  ]
})
export class Ejercicio12Component implements OnInit, AfterViewInit { 
  displayedColumns: string[] = ['name', 'destination', 'year'];
  dataSource: MatTableDataSource<TravelData>;
  pageLength: number = 5;

  @ViewChild(MatPaginator) paginator!: MatPaginator;  // Agrega el operador de aserción `!`
  @ViewChild(MatSort) sort!: MatSort;  // Agrega el operador de aserción `!`

  constructor() {
    const travelData: TravelData[] = [
      { name: 'Juan', destination: 'Paris', year: 2023 },
      { name: 'Maria', destination: 'Tokyo', year: 2025 },
      { name: 'Carlos', destination: 'New York', year: 2024 },
      { name: 'Ana', destination: 'London', year: 2023 },
      { name: 'Luis', destination: 'Rome', year: 2023 },
      { name: 'Sofia', destination: 'Berlin', year: 2026 },
      { name: 'Miguel', destination: 'Madrid', year: 2023 },
      { name: 'Valeria', destination: 'Sydney', year: 2024 },
      { name: 'Pedro', destination: 'Dubai', year: 2023 },
      { name: 'Laura', destination: 'Los Angeles', year: 2025 },
      { name: 'David', destination: 'Shanghai', year: 2026 },
      { name: 'Carmen', destination: 'Moscow', year: 2024 },
      { name: 'Javier', destination: 'Rome', year: 2025 },
      { name: 'Patricia', destination: 'Paris', year: 2023 },
      { name: 'Raul', destination: 'Tokyo', year: 2023 },
    ];

    this.dataSource = new MatTableDataSource(travelData);
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    // Asignación de paginator y sort después de que las vistas hayan sido inicializadas
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
