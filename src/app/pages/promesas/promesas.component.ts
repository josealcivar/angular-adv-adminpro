import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa = new Promise((resolve, reject)=> {
      if(false){
        resolve('hola mundo');
      }else{
        reject("algo salió mal");
      }
    });

    promesa.then(res=>{
      console.info(res);
    }).catch((err)=>{
      console.error("eerror en mi promesa", err);
    });
    console.log("fin init");
  }

  getUsuarios(){
    // "reqres.in/api/users"
    const promesa = new Promise(resolve=>
      
      fetch("reqres.in/api/users")
        .then(res=>{
          res.json()
          .then(body=>resolve(body.data))
        }).catch(err=>{})
      );
      return promesa;
  }

}
