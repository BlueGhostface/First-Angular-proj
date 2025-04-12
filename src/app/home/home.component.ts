import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';
import { CounterComponent } from '../components/counter/counter.component';

@Component({
  selector: 'app-home',
  imports: [GreetingComponent,CounterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  homemessage = signal('hello angular from routeroutlet')

  keyUpHandler( event: KeyboardEvent) {
    console.log(`user typed this key ${event.key}`) //belangrijk backticks `` en niet '' singlequotes
  }
}
