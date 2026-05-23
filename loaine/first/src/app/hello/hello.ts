import { Component, signal,computed } from '@angular/core';

@Component({
  selector: 'app-hello',
  imports: [],
  templateUrl: './hello.html',
  styleUrl: './hello.scss',
})
export class Hello {
  protected title  = 'Welcome to app';
  protected isDisabled = false;
  protected counter = signal(0); // writable signals
  protected doubleCounter = computed(()=>this.counter()*2) //compyted signals
  protected onClick(): void{
    console.log('Button clicked');
    this.isDisabled = !this.isDisabled;
  }
  protected incCounter(){
    this.counter.update( c => c+1)
  }
  protected decCounter(){
    this.counter.update( c => c-1)
  }
  protected resetCounter(){
    this.counter.set(0)
  }
}