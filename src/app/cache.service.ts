// src/app/cache.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CacheService {
  private cache: { [key: string]: any } = {};

  constructor() {}

  // Create: Add an item to the cache
  addToCache(key: string, data: any): void {
    this.cache[key] = data;
  }

  // Read: Get an item from the cache
  getFromCache(key: string): any {
    return this.cache[key] || null;
  }

  // Update: Update an item in the cache
  updateCache(key: string, data: any): void {
    if (this.cache[key]) {
      this.cache[key] = data;
    }
  }

  // Delete: Remove an item from the cache
  removeFromCache(key: string): void {
    delete this.cache[key];
  }
}
