import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private text: string = `Porque todos pecaram e destituídos estão da glória de Deus;
  Sendo justificados gratuitamente pela sua graça, pela redenção que há em Cristo Jesus.
  Ao qual Deus propôs para propiciação pela fé no seu sangue, para demonstrar a sua justiça pela remissão dos
  pecados dantes cometidos, sob a paciência de Deus;
  Para demonstração da sua justiça neste tempo presente, para que ele seja justo e justificador daquele que tem fé
  em Jesus.
  Onde está logo a jactância? É excluída. Por qual lei? Das obras? Não; mas pela lei da fé.
  Concluímos, pois, que o homem é justificado pela fé sem as obras da lei.

  Romanos 3:23-28`;

}
