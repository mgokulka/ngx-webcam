import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CacheService } from '../cache.service';

@Component({
  selector: 'cache-demo',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div>
    <h2>Cache Demo</h2>
    <button (click)="getData()">Fetch Data</button>
    <button (click)="updateData()">Update Data</button>
    <button (click)="deleteData()">Delete Data</button>
    <div *ngIf="cachedData">
      <h3>Cached Data:</h3>
      <pre>{{ cachedData | json }}</pre>
    </div>
  </div>
`
})
export class CacheDemoComponent {

  cachedData: any;

  constructor(private cacheService: CacheService) {}

  getData(): void {
    const cacheKey = 'example_data';
    const cachedData = this.cacheService.getFromCache(cacheKey);

    if (cachedData) {
      this.cachedData = cachedData;
      console.log('Data retrieved from cache:', cachedData);
    } else {
      // Simulate an API call or actual data retrieval here
      const fetchedData = { id: 1, name: 'John Doe', age: 30 };
      this.cacheService.addToCache(cacheKey, fetchedData);
      this.cachedData = fetchedData;
      console.log('Data retrieved from API:', fetchedData);
    }
  }

  updateData(): void {
    const cacheKey = 'example_data';
    const updatedData = { id: 1, name: 'Jane Doe', age: 32 };
    this.cacheService.updateCache(cacheKey, updatedData);
    this.cachedData = updatedData;
    console.log('Data updated in cache:', updatedData);
  }

  deleteData(): void {
    const cacheKey = 'example_data';
    this.cacheService.removeFromCache(cacheKey);
    this.cachedData = null;
    console.log('Data deleted from cache.');
  }
}
