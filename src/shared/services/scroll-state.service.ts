import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollState {

  trendingScrollState = signal(0);


}
