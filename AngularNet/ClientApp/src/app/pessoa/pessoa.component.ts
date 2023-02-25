import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { Pessoa } from './model/pessoa.model';

@Component({
  selector: 'app-pessoa',
  templateUrl: './pessoa.component.html',
  styleUrls: ['./pessoa.component.css']
})
export class PessoaComponent implements OnInit {
  public pessoa: Pessoa = new Pessoa();
  constructor(private http: HttpClient, @Inject('BASE_URL') private baseUrl: string) { }

  ngOnInit(): void {
  }
  salvar(): void {
    this.http.post(this.baseUrl +"Pessoa", this.pessoa).subscribe((result:any) =>{
      alert(result.nome);
    })
  }
}
