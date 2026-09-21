import { Component, signal, computed, effect } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.css',
})
export class Hello {

  protected title = 'Welcome to modern angular !';

  protected isDisabled = false;

  protected doubleCount = computed( ()=> this.count() * 2);

  private readonly countLog = effect(()=> {
    console.log('Count changed', this.count())
  });

  protected onClick() {
    console.log('Button clicked')
    this.isDisabled = ! this.isDisabled;
  }

  protected count = signal( 0);

  incrementCounter() {
      this.count.update(value => value + 1);
  }

  decrementCounter() {
      this.count.update(value => value - 1);
  }

  resetCounter() {
      this.count.update(value => value = 0);
  }

}
