import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  countvalue = signal(0)

  increment(){
    this.countvalue.update(val => val+1)
  }
  decrement(){
    this.countvalue.update(val => val-1)
  }
  reset(){
    this.countvalue.set(0)
  }

}
