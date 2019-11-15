import { Component, OnInit } from '@angular/core';
import { WeatherapiService } from '../../app/services/weatherapi.service'
import { Store, Action } from '@ngrx/store'
import { Observable } from 'rxjs'

interface AppState {
  contador: number;
}


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  clima;
  constructor(private ws:WeatherapiService,
              private store: Store<AppState>){
    
  this.store.subscribe(state=>{
    console.log('click',state)

    const myObservable =  Observable.create(function(observe){
      observe.next('Bienvenidos al test');
      observe.complete()
    });
    const subs = myObservable.subscribe({
      next: x => console.log(x),
      complete: () => console.log('Gracias')
    });

  });
    
  }

  ngOnInit(){

  }

  getClima(ciudad:string, paisCode:string){
    this.ws.getclima(ciudad, paisCode).subscribe(
      body=> {
        this.clima=body
        console.log(body)
      },
      err => console.log (err)
    )
  }

  EnviarLocation(ciudad:HTMLInputElement, paisCode:HTMLInputElement){
      const accion: Action = {
        type:'INCREMENTAR'
      }
    this.store.dispatch(accion);
    this.getClima(ciudad.value, paisCode.value)
    ciudad.value=""
    paisCode.value=""
    ciudad.focus();
    return false ;
  }

}
