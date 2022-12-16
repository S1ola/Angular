import { Component, OnInit } from '@angular/core';
import {Frais} from "../metier/Frais";
import {Router,  ActivatedRoute, ParamMap} from "@angular/router";
import {FichefraisServiceService} from "../service/fichefrais-service.service";
import {Etat} from "../metier/Etat";
import {EtatServiceService} from "../service/etat-service.service";
@Component({
  selector: 'app-ajoutfichefrais',
  templateUrl: './ajoutfichefrais.component.html',
  styleUrls: ['./ajoutfichefrais.component.css']
})
export class AjoutfichefraisComponent implements OnInit {
  public  mesFrais:Frais[]=[];
  public unFrais!  : Frais ;
  private fraisid!:number;
  public titre:string="Ajout d'un frais";
  private paramMap!: ParamMap[];
  private error: string='';
  public mesEtat: Etat[]=[];


  constructor(private unES: EtatServiceService, private unFS: FichefraisServiceService,
              private ActivatedRoute: ActivatedRoute, private unRouteur: Router) { }

  ngOnInit(): void {

  }

  annuler():void{
    this.unRouteur.navigate(['/accueil']);

  }

  valider():void {

    let valeur=localStorage.getItem('id');
    this.unFrais.id_visiteur=Number(valeur);
    this.unFS.addFicheFrais(this.unFrais).subscribe(
      () => {

      },
      (error)=> {
        this.error  = error.messages;
      }
    );
    if (this.error !='')
      alert("Erreur survenue " + this.error);
    else
      alert("Ajout réussie !");
    this.unRouteur.navigate(['/accueil']);
  }

}
