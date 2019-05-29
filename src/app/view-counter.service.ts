import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { HttpClient } from '@angular/common/http';
import * as m from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ViewCounterService {

  constructor(private db: AngularFirestore, private http: HttpClient) { }

  addView(path: string) {
    const mm = m().format('MMDDYYYY');
    this.http.get('https://jsonip.com/').subscribe((id: any) => {
        this.db.collection('ViewCount').doc(`${id.ip}__${path.replace(/\//g, '_')}__${mm}`).set({
          path: path,
          viewDate: m().toLocaleString(),
          identifier: id.ip
        });
      });
  }

  getViews(path: string) {
    return this.db.collection('ViewCount').ref.where('path', '==', path).get();
  }
}
