import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private storage: Storage

  constructor() {
    this.storage = window.localStorage
  }

  getItem(key: string): any {
    const storedValue = this.storage.getItem(key)

    try {
      return storedValue ? JSON.parse(storedValue) : null
    } catch (error) {
      return storedValue
    }
  }

  saveState(key: string, value: any): void {
    console.log('Saving state to LocalStorage:', key, value)
    const serializedValue = JSON.stringify(value)
    this.storage.setItem(key, serializedValue)
  }

  removeItem(key: string): void {
    this.storage.removeItem(key)
  }

  clear(): void {
    this.storage.clear()
  }
}
