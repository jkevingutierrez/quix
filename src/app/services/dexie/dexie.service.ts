import { Injectable } from '@angular/core';

import Dexie from 'dexie';

@Injectable()
export class DexieService extends Dexie {
  constructor() {
    super('quix');
    this.version(1).stores({
      quiz: '++id',
    });
  }
}
