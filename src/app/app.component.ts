import { Component} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website', 'status'];
  // filterSelectObj: { name: string; columnProp: string; options: never[]; }[];
  filterValues: any;
  filterSelectObj: any;
  filterSelectObjt: any;

  constructor(
    ) {
          // Object to create Filter for
    this.filterSelectObj = [
      {
        name: 'PAYS',
        columnProp: 'nationalite',
        options: []
      }
    ];
    this.filterSelectObjt = [
      {
        name: 'NAME MOVIE',
        columnProp: 'nom',
        options: []
      },
      {
        name: 'REALISATEUR',
        columnProp: 'realisateur',
        options: []
      }
    ]
    }
  
    ngOnInit() {
      this.getRemoteData();
  
      // Overrride default filter behaviour of Material Datatable
      this.dataSource.filterPredicate = this.createFilter();
    }

      // Get Uniqu values from columns to build filter
  getFilterObject(fullObj:any[], key:any) {
    const uniqChk: any[] = [];
    fullObj.filter((obj) => {
      if (!uniqChk.includes(obj[key])) {
        uniqChk.push(obj[key]);
      }
      return obj;
    });
    return uniqChk;
  }

  getRemoteData() {

    const  remoteDummyData = [
      {
        "nom": "KIRIKOU ET LES BETES SAUVAGES",
        "realisateur": "OCELOT Michel / GALUP Bénédicte",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 43,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 4.8
     },
     {
        "nom": "DELPHINE 1, YVAN 0",
        "realisateur": "FARRUGIA Dominique",
        "annee_production": 1996,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 38,
        "nb_premiere_partie": 1,
        "moyenne_diffusion_par_an": 4.2
     },
     {
        "nom": "KIRIKOU ET LA SORCIERE",
        "realisateur": "OCELOT Michel",
        "annee_production": 1995,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 36,
        "nb_premiere_partie": 20,
        "moyenne_diffusion_par_an": 4
     },
     {
        "nom": "DEUX HEURES MOINS LE QUART AVANT JESUS-CHRIST",
        "realisateur": "YANNE Jean",
        "annee_production": 1982,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 33,
        "nb_premiere_partie": 22,
        "moyenne_diffusion_par_an": 3.7
     },
     {
        "nom": "NIKITA",
        "realisateur": "BESSON Luc",
        "annee_production": 1989,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 33,
        "nb_premiere_partie": 24,
        "moyenne_diffusion_par_an": 3.7
     },
     {
        "nom": "11 COMMANDEMENTS (LES)",
        "realisateur": "DESAGNAT François / SORRIAUX Thomas",
        "annee_production": 2003,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 32,
        "nb_premiere_partie": 26,
        "moyenne_diffusion_par_an": 4
     },
     {
        "nom": "ASTERIX ET LA SURPRISE DE CESAR",
        "realisateur": "BRIZZI Gaëtan / BRIZZI Paul",
        "annee_production": 1985,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 32,
        "nb_premiere_partie": 31,
        "moyenne_diffusion_par_an": 4
     },
     {
        "nom": "ASTERIX CHEZ LES BRETONS",
        "realisateur": "VAN LAMSWEERDE Pino",
        "annee_production": 1985,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 31,
        "nb_premiere_partie": 29,
        "moyenne_diffusion_par_an": 3.9
     },
     {
        "nom": "DOUZE TRAVAUX D'ASTERIX (LES)",
        "realisateur": "GOSCINNY René / UDERZO Albert",
        "annee_production": 1975,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 30,
        "nb_premiere_partie": 26,
        "moyenne_diffusion_par_an": 3.3
     },
     {
        "nom": "FLIC OU VOYOU",
        "realisateur": "LAUTNER Georges",
        "annee_production": 1979,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 29,
        "nb_premiere_partie": 21,
        "moyenne_diffusion_par_an": 3.2
     },
     {
        "nom": "FOUS DU STADE (LES)",
        "realisateur": "ZIDI Claude",
        "annee_production": 1972,
        "nationalite": "France",
        "derniere_diffusion": 2017,
        "nb_diffusion": 29,
        "nb_premiere_partie": 22,
        "moyenne_diffusion_par_an": 4.1
     },
     {
        "nom": "LIGUE DES GENTLEMEN EXTRAORDINAIRES (LA)",
        "realisateur": "NORRINGTON Stephen",
        "annee_production": 2003,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 29,
        "nb_premiere_partie": 20,
        "moyenne_diffusion_par_an": 3.2
     },
     {
        "nom": "REGRETS (LES)",
        "realisateur": "KAHN Cédric",
        "annee_production": 2008,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 29,
        "nb_premiere_partie": 1,
        "moyenne_diffusion_par_an": 4.8
     },
     {
        "nom": "SCOUT TOUJOURS",
        "realisateur": "JUGNOT Gérard",
        "annee_production": 1985,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 29,
        "nb_premiere_partie": 20,
        "moyenne_diffusion_par_an": 3.2
     },
     {
        "nom": "YAMAKASI",
        "realisateur": "ZEITOUN Ariel",
        "annee_production": 2000,
        "nationalite": "France",
        "derniere_diffusion": 2017,
        "nb_diffusion": 28,
        "nb_premiere_partie": 20,
        "moyenne_diffusion_par_an": 4
     },
     {
        "nom": "ASTERIX ET LE COUP DU MENHIR",
        "realisateur": "GRIMOND Philippe",
        "annee_production": 1988,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 27,
        "nb_premiere_partie": 25,
        "moyenne_diffusion_par_an": 3.4
     },
     {
        "nom": "TOUR MONTPARNASSE INFERNALE (LA)",
        "realisateur": "NEMES Charles",
        "annee_production": 2000,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 27,
        "nb_premiere_partie": 21,
        "moyenne_diffusion_par_an": 3
     },
     {
        "nom": "VIE EST UN LONG FLEUVE TRANQUILLE (LA)",
        "realisateur": "CHATILIEZ Etienne",
        "annee_production": 1987,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 27,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 3.4
     },
     {
        "nom": "ASTERIX ET CLEOPATRE",
        "realisateur": "GOSCINNY René / UDERZO Albert",
        "annee_production": 1968,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 26,
        "nb_premiere_partie": 25,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "ASTERIX LE GAULOIS",
        "realisateur": "GOSCINNY René / UDERZO Albert",
        "annee_production": 1967,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 26,
        "nb_premiere_partie": 22,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "BIDASSES EN FOLIE (LES)",
        "realisateur": "ZIDI Claude",
        "annee_production": 1971,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 26,
        "nb_premiere_partie": 21,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "CACTUS (LE)",
        "realisateur": "BITTON Gérard / MUNZ Michel",
        "annee_production": 2005,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 26,
        "nb_premiere_partie": 8,
        "moyenne_diffusion_par_an": 3.3
     },
     {
        "nom": "COUP DE FOUDRE A NOTTING HILL",
        "realisateur": "MICHELL Roger",
        "annee_production": 1999,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 26,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "GLOIRE DE MON PERE (LA)",
        "realisateur": "ROBERT Yves",
        "annee_production": 1989,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 26,
        "nb_premiere_partie": 17,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "MUHAMMAD ALI THE GREATEST",
        "realisateur": "KLEIN William",
        "annee_production": 1974,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 26,
        "nb_premiere_partie": 4,
        "moyenne_diffusion_par_an": 4.3
     },
     {
        "nom": "VILAINE",
        "realisateur": "BENES Jean-Patrick / MAUDUIT Allan",
        "annee_production": 2007,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 26,
        "nb_premiere_partie": 22,
        "moyenne_diffusion_par_an": 3.3
     },
     {
        "nom": "ASTERIX ET LES INDIENS",
        "realisateur": "HAHN Gerhard",
        "annee_production": 1994,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 23,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "CARTOUCHE",
        "realisateur": "DE BROCA Philippe",
        "annee_production": 1961,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "CHARLOTS FONT L'ESPAGNE (LES)",
        "realisateur": "GIRAULT Jean",
        "annee_production": 1972,
        "nationalite": "France",
        "derniere_diffusion": 2017,
        "nb_diffusion": 25,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 3.6
     },
     {
        "nom": "CHASSEURS DE DRAGONS",
        "realisateur": "IVERNEL Guillaume / HEMMEN François",
        "annee_production": 2006,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "DALTON (LES)",
        "realisateur": "HAIM Philippe",
        "annee_production": 2004,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "FAST AND FURIOUS : TOKYO DRIFT",
        "realisateur": "LIN Justin",
        "annee_production": 2005,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "RETOUR DE LA MOMIE (LE)",
        "realisateur": "SOMMERS Stephen",
        "annee_production": 2001,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "SOUS-DOUES (LES)",
        "realisateur": "ZIDI Claude",
        "annee_production": 1979,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "SOUS-DOUES EN VACANCES (LES)",
        "realisateur": "ZIDI Claude",
        "annee_production": 1981,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "TINTIN ET LE LAC AUX REQUINS",
        "realisateur": "LEBLANC Raymond",
        "annee_production": 1972,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 10,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "TINTIN ET LE MYSTERE DE LA TOISON D'OR",
        "realisateur": "VIERNE Jean-Jacques",
        "annee_production": 1961,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "TINTIN ET LE TEMPLE DU SOLEIL",
        "realisateur": "LEBLANC Raymond",
        "annee_production": 1969,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 10,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "TRAVERSEE DE PARIS (LA)",
        "realisateur": "AUTANT-LARA Claude",
        "annee_production": 1956,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 25,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 3.1
     },
     {
        "nom": "V POUR VENDETTA",
        "realisateur": "MCTEIGUE James",
        "annee_production": 2005,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 25,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 3.1
     },
     {
        "nom": "CHAOS",
        "realisateur": "GIGLIO Tony",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 24,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 3
     },
     {
        "nom": "COMME T'Y ES BELLE",
        "realisateur": "AZUELOS Lisa",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 24,
        "nb_premiere_partie": 20,
        "moyenne_diffusion_par_an": 2.7
     },
     {
        "nom": "DIKKENEK",
        "realisateur": "VAN HOOFSTADT Olivier",
        "annee_production": 2005,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 24,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 2.7
     },
     {
        "nom": "GUERRE DES BOUTONS (LA)",
        "realisateur": "ROBERT Yves",
        "annee_production": 1961,
        "nationalite": "France",
        "derniere_diffusion": 2017,
        "nb_diffusion": 24,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 3.4
     },
     {
        "nom": "KING RISING : AU NOM DU ROI",
        "realisateur": "BOLL Uwe",
        "annee_production": 2007,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2018,
        "nb_diffusion": 24,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 3
     },
     {
        "nom": "P.R.O.F.S.",
        "realisateur": "SCHULMANN Patrick",
        "annee_production": 1985,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 24,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.7
     },
     {
        "nom": "RETOUR VERS LE FUTUR",
        "realisateur": "ZEMECKIS Robert",
        "annee_production": 1985,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 24,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.7
     },
     {
        "nom": "RRRRRRR !!!",
        "realisateur": "CHABAT Alain",
        "annee_production": 2003,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 24,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 3
     },
     {
        "nom": "TOUR DU MONDE EN 80 JOURS (LE)",
        "realisateur": "CORACI Frank",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 24,
        "nb_premiere_partie": 17,
        "moyenne_diffusion_par_an": 2.7
     },
     {
        "nom": "3 AMIS",
        "realisateur": "BOUJENAH Michel",
        "annee_production": 2006,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 23,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 3.3
     },
     {
        "nom": "AMOUR AUX TROUSSES (L')",
        "realisateur": "DE CHAUVERON Philippe",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2017,
        "nb_diffusion": 23,
        "nb_premiere_partie": 20,
        "moyenne_diffusion_par_an": 3.3
     },
     {
        "nom": "ANTHONY ZIMMER",
        "realisateur": "SALLE Jérôme",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 17,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "BAISER MORTEL DU DRAGON (LE)",
        "realisateur": "NAHON Chris",
        "annee_production": 2001,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 10,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "INCONTROLABLE",
        "realisateur": "SHART Raffy",
        "annee_production": 2005,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 17,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "J'AI FAIM !!!",
        "realisateur": "QUENTIN Florence",
        "annee_production": 2000,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 17,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "LEON",
        "realisateur": "BESSON Luc",
        "annee_production": 1993,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "PEAU D'ANE",
        "realisateur": "DEMY Jacques",
        "annee_production": 1970,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "RETOUR VERS LE FUTUR 2",
        "realisateur": "ZEMECKIS Robert",
        "annee_production": 1989,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "S.O.S. FANTOMES",
        "realisateur": "REITMAN Ivan",
        "annee_production": 1984,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "SAHARA",
        "realisateur": "EISNER Breck",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 23,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "STALINGRAD",
        "realisateur": "ANNAUD Jean-Jacques",
        "annee_production": 2001,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2017,
        "nb_diffusion": 23,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 3.3
     },
     {
        "nom": "TINTIN ET LES ORANGES BLEUES",
        "realisateur": "CONDROYER Philippe",
        "annee_production": 1964,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "X-MEN, L'AFFRONTEMENT FINAL",
        "realisateur": "RATNER Brett",
        "annee_production": 2006,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 23,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "4 FANTASTIQUES ET LE SURFER D'ARGENT (LES)",
        "realisateur": "STORY Tim",
        "annee_production": 2007,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 17,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "BANDIDAS",
        "realisateur": "ROENNING Joachim / SANDBERG Espen",
        "annee_production": 2005,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "BILLY ELLIOT",
        "realisateur": "DALDRY Stephen",
        "annee_production": 2000,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "CHATEAU DE MA MERE (LE)",
        "realisateur": "ROBERT Yves",
        "annee_production": 1989,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "GAZON MAUDIT",
        "realisateur": "BALASKO Josiane",
        "annee_production": 1994,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "GRAND BLEU (LE) VERSION LONGUE",
        "realisateur": "BESSON Luc",
        "annee_production": 1987,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "HEROINES",
        "realisateur": "KRAWCZYK Gérard",
        "annee_production": 1996,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 1,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "I, ROBOT",
        "realisateur": "PROYAS Alex",
        "annee_production": 2004,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "IL ETAIT UNE FOIS DANS L'OUEST",
        "realisateur": "LEONE Sergio",
        "annee_production": 1969,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "MAMMA MIA !",
        "realisateur": "LLOYD Phyllida",
        "annee_production": 2007,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 22,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 3.1
     },
     {
        "nom": "MONDE PERDU (LE)",
        "realisateur": "SPIELBERG Steven",
        "annee_production": 1997,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "ON L'APPELLE TRINITA",
        "realisateur": "CLUCHER E. B.",
        "annee_production": 1971,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 9,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "PACHA (LE)",
        "realisateur": "LAUTNER Georges",
        "annee_production": 1967,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 17,
        "moyenne_diffusion_par_an": 2.8
     },
     {
        "nom": "PLAN DE TABLE",
        "realisateur": "RAYNAL Christelle",
        "annee_production": 2011,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 17,
        "moyenne_diffusion_par_an": 4.4
     },
     {
        "nom": "SEPT ANS DE MARIAGE",
        "realisateur": "BOURDON Didier",
        "annee_production": 2003,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "THE EXPATRIATE",
        "realisateur": "STOLZL Philipp",
        "annee_production": 2012,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 4.4
     },
     {
        "nom": "X-MEN",
        "realisateur": "SINGER Bryan",
        "annee_production": 2000,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "X-MEN 2",
        "realisateur": "SINGER Bryan",
        "annee_production": 2002,
        "nationalite": "autres nationalités",
        "derniere_diffusion": 2019,
        "nb_diffusion": 22,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "BANDE A PICSOU : LE TRESOR DE LA LAMPE PERDUE (LA)",
        "realisateur": "BRIZZI Gaëtan / BRIZZI Paul / HATHCOCK Bob / MARCOS RODRIC Mathias / PALLANT Clive / WOODCOCK Vincent",
        "annee_production": 1989,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 21,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.3
     },
     {
        "nom": "CROCODILE DUNDEE",
        "realisateur": "FAIMAN Peter",
        "annee_production": 1986,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2018,
        "nb_diffusion": 21,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "FILLE DE D'ARTAGNAN (LA)",
        "realisateur": "TAVERNIER Bertrand",
        "annee_production": 1993,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2016,
        "nb_diffusion": 21,
        "nb_premiere_partie": 7,
        "moyenne_diffusion_par_an": 3.5
     },
     {
        "nom": "JURASSIC PARK",
        "realisateur": "SPIELBERG Steven",
        "annee_production": 1992,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 21,
        "nb_premiere_partie": 9,
        "moyenne_diffusion_par_an": 2.3
     },
     {
        "nom": "MEN IN BLACK",
        "realisateur": "SONNENFELD Barry",
        "annee_production": 1997,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 21,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.3
     },
     {
        "nom": "OPERATION CORNED BEEF (L')",
        "realisateur": "POIRE Jean-Marie",
        "annee_production": 1990,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 21,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "PROTEGER ET SERVIR",
        "realisateur": "LAVAINE Eric",
        "annee_production": 2009,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 21,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 3.5
     },
     {
        "nom": "SLUMDOG MILLIONAIRE",
        "realisateur": "BOYLE Danny",
        "annee_production": 2008,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 21,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 3
     },
     {
        "nom": "TATIE DANIELLE",
        "realisateur": "CHATILIEZ Etienne",
        "annee_production": 1989,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 21,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.3
     },
     {
        "nom": "UNE SEMAINE SUR DEUX (ET LA MOITIE DES VACANCES SCOLAIRES)",
        "realisateur": "CALBERAC Ivan",
        "annee_production": 2008,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 21,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 3
     },
     {
        "nom": "WOLFHOUND, L'ULTIME GUERRIER",
        "realisateur": "LEBEDEV Nikolai",
        "annee_production": 2007,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 21,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.3
     },
     {
        "nom": "ASTERIX ET LES VIKINGS",
        "realisateur": "FJELDMARK Stephan",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "BOSSU (LE)",
        "realisateur": "DE BROCA Philippe",
        "annee_production": 1997,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "BOUGE !",
        "realisateur": "CORNUAU Jérôme",
        "annee_production": 1997,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 2,
        "moyenne_diffusion_par_an": 2.5
     },
     {
        "nom": "BOUM (LA)",
        "realisateur": "PINOTEAU Claude",
        "annee_production": 1980,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 10,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "CANONS DE NAVARONE (LES)",
        "realisateur": "LEE THOMPSON Jack",
        "annee_production": 1960,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "CERVEAU (LE)",
        "realisateur": "OURY Gérard",
        "annee_production": 1968,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "CINQUIEME ELEMENT (LE)",
        "realisateur": "BESSON Luc",
        "annee_production": 1997,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "DIABOLO MENTHE",
        "realisateur": "KURYS Diane",
        "annee_production": 1977,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 9,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "GRAND BLOND AVEC UNE CHAUSSURE NOIRE (LE)",
        "realisateur": "ROBERT Yves",
        "annee_production": 1972,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "GRAND RESTAURANT (LE)",
        "realisateur": "BESNARD Jacques",
        "annee_production": 1966,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "J'AURAIS VOULU ETRE UN DANSEUR",
        "realisateur": "BERLINER Alain",
        "annee_production": 2005,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2018,
        "nb_diffusion": 20,
        "nb_premiere_partie": 2,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "JO",
        "realisateur": "GIRAULT Jean",
        "annee_production": 1971,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 20,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.5
     },
     {
        "nom": "JUMANJI",
        "realisateur": "JOHNSTON Joe",
        "annee_production": 1995,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "LARGO WINCH",
        "realisateur": "SALLE Jérôme",
        "annee_production": 2008,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.5
     },
     {
        "nom": "MADAME IRMA",
        "realisateur": "BOURDON Didier / FAJNBERG Yves",
        "annee_production": 2006,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "MEDAILLON (LE)",
        "realisateur": "CHAN Gordon",
        "annee_production": 2003,
        "nationalite": "France",
        "derniere_diffusion": 2017,
        "nb_diffusion": 20,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "MEMOIRE DANS LA PEAU (LA)",
        "realisateur": "LIMAN Doug",
        "annee_production": 2001,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "ON CONTINUE A L'APPELER TRINITA",
        "realisateur": "CLUCHER E. B.",
        "annee_production": 1972,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "OSCAR",
        "realisateur": "MOLINARO Edouard",
        "annee_production": 1967,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "OSS 117 : LE CAIRE, NID D'ESPIONS",
        "realisateur": "HAZANAVICIUS Michel",
        "annee_production": 2005,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "PHILADELPHIA",
        "realisateur": "DEMME Jonathan",
        "annee_production": 1993,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "POUR 100 BRIQUES T'AS PLUS RIEN",
        "realisateur": "MOLINARO Edouard",
        "annee_production": 1982,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 16,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "REGNE DU FEU (LE)",
        "realisateur": "BOWMAN Rob",
        "annee_production": 2002,
        "nationalite": "Europe",
        "derniere_diffusion": 2017,
        "nb_diffusion": 20,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.9
     },
     {
        "nom": "THE FULL MONTY",
        "realisateur": "CATTANEO Peter",
        "annee_production": 1997,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.5
     },
     {
        "nom": "TROIE",
        "realisateur": "PETERSEN Wolfgang",
        "annee_production": 2003,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.2
     },
     {
        "nom": "VENGEANCE DU SERPENT A PLUMES (LA)",
        "realisateur": "OURY Gérard",
        "annee_production": 1984,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 20,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.5
     },
     {
        "nom": "XXX",
        "realisateur": "COHEN Rob",
        "annee_production": 2001,
        "nationalite": "France",
        "derniere_diffusion": 2016,
        "nb_diffusion": 20,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 3.3
     },
     {
        "nom": "ARSENE LUPIN",
        "realisateur": "SALOME Jean-Paul",
        "annee_production": 2003,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2018,
        "nb_diffusion": 19,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "BANLIEUE 13",
        "realisateur": "MOREL Pierre",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 9,
        "moyenne_diffusion_par_an": 2.1
     },
     {
        "nom": "BATMAN BEGINS",
        "realisateur": "NOLAN Christopher",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.1
     },
     {
        "nom": "CAMPING A LA FERME",
        "realisateur": "SINAPI Jean-Pierre",
        "annee_production": 2004,
        "nationalite": "autres nationalités",
        "derniere_diffusion": 2018,
        "nb_diffusion": 19,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "CITE DE LA PEUR (LA)",
        "realisateur": "BERBERIAN Alain",
        "annee_production": 1993,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.1
     },
     {
        "nom": "CROCODILE DUNDEE 2",
        "realisateur": "CORNELL John",
        "annee_production": 1988,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 19,
        "nb_premiere_partie": 9,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "CROISIERE (LA)",
        "realisateur": "POUZADOUX Pascale",
        "annee_production": 2010,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 4.8
     },
     {
        "nom": "ENFANTS DE TIMPELBACH (LES)",
        "realisateur": "BARY Nicolas",
        "annee_production": 2007,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "FANTOMAS",
        "realisateur": "HUNEBELLE André",
        "annee_production": 1964,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.1
     },
     {
        "nom": "INCROYABLE HULK (L')",
        "realisateur": "LETERRIER Louis",
        "annee_production": 2008,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "JOURNEE DE LA JUPE (LA)",
        "realisateur": "LILIENFELD Jean-Paul",
        "annee_production": 2008,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 19,
        "nb_premiere_partie": 5,
        "moyenne_diffusion_par_an": 3.8
     },
     {
        "nom": "MAGNIFIQUE (LE)",
        "realisateur": "DE BROCA Philippe",
        "annee_production": 1973,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 19,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.7
     },
     {
        "nom": "MEILLEURS AMIS DU MONDE (LES)",
        "realisateur": "RAMBALDI Julien",
        "annee_production": 2010,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 18,
        "moyenne_diffusion_par_an": 2.7
     },
     {
        "nom": "ODETTE TOULEMONDE",
        "realisateur": "SCHMITT Eric-Emmanuel",
        "annee_production": 2006,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "PIEGE DE CRISTAL",
        "realisateur": "MacTIERNAN John",
        "annee_production": 1987,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 9,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "PLACARD (LE)",
        "realisateur": "VEBER Francis",
        "annee_production": 2000,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.7
     },
     {
        "nom": "RASTA ROCKETT",
        "realisateur": "TURTELTAUB Jon",
        "annee_production": 1993,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.1
     },
     {
        "nom": "RETOUR DU GRAND BLOND (LE)",
        "realisateur": "ROBERT Yves",
        "annee_production": 1974,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.1
     },
     {
        "nom": "SAINT (LE)",
        "realisateur": "NOYCE Phillip",
        "annee_production": 1997,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.4
     },
     {
        "nom": "SOIF DE L'OR (LA)",
        "realisateur": "OURY Gérard",
        "annee_production": 1992,
        "nationalite": "Europe",
        "derniere_diffusion": 2016,
        "nb_diffusion": 19,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 3.8
     },
     {
        "nom": "TOUS A L'OUEST",
        "realisateur": "JEAN-MARIE Olivier",
        "annee_production": 2006,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 10,
        "moyenne_diffusion_par_an": 2.1
     },
     {
        "nom": "VENGEANCE DANS LA PEAU (LA)",
        "realisateur": "GREENGRASS Paul",
        "annee_production": 2006,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.1
     },
     {
        "nom": "ZIZANIE (LA)",
        "realisateur": "ZIDI Claude",
        "annee_production": 1977,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 19,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.1
     },
     {
        "nom": "2 FAST 2 FURIOUS",
        "realisateur": "SINGLETON John",
        "annee_production": 2003,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 9,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "4 FANTASTIQUES (LES)",
        "realisateur": "STORY Tim",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 10,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "CODE MERCURY",
        "realisateur": "BECKER Harold",
        "annee_production": 1998,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "ENTRE LES MURS",
        "realisateur": "CANTET Laurent",
        "annee_production": 2007,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2017,
        "nb_diffusion": 18,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 3
     },
     {
        "nom": "FANTOMAS SE DECHAINE",
        "realisateur": "HUNEBELLE André",
        "annee_production": 1965,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "FAST AND FURIOUS 4",
        "realisateur": "LIN Justin",
        "annee_production": 2008,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 10,
        "moyenne_diffusion_par_an": 2.3
     },
     {
        "nom": "FLYBOYS",
        "realisateur": "BILL Tony",
        "annee_production": 2006,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2017,
        "nb_diffusion": 18,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "GO FAST",
        "realisateur": "VAN HOOFSTADT Olivier",
        "annee_production": 2007,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 18,
        "nb_premiere_partie": 15,
        "moyenne_diffusion_par_an": 3
     },
     {
        "nom": "HOOK",
        "realisateur": "SPIELBERG Steven",
        "annee_production": 1991,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "IRENE",
        "realisateur": "CALBERAC Ivan",
        "annee_production": 2001,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "IRON MAN",
        "realisateur": "FAVREAU Jon",
        "annee_production": 2007,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2.3
     },
     {
        "nom": "JOUR DE GLOIRE (LE)",
        "realisateur": "BESNARD Jacques",
        "annee_production": 1976,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "MARGINAL (LE)",
        "realisateur": "DERAY Jacques",
        "annee_production": 1983,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "OURS (L')",
        "realisateur": "ANNAUD Jean-Jacques",
        "annee_production": 1987,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "PALAIS ROYAL !",
        "realisateur": "LEMERCIER Valérie",
        "annee_production": 2004,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "ROBIN DES BOIS",
        "realisateur": "SCOTT Ridley",
        "annee_production": 2010,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "ROIS MAGES (LES)",
        "realisateur": "BOURDON Didier / CAMPAN Bernard",
        "annee_production": 2001,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "S.O.S. FANTOMES 2",
        "realisateur": "REITMAN Ivan",
        "annee_production": 1989,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 8,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "SOLITAIRE (LE)",
        "realisateur": "DERAY Jacques",
        "annee_production": 1986,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2017,
        "nb_diffusion": 18,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "TAXI 3",
        "realisateur": "KRAWCZYK Gérard",
        "annee_production": 2001,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 12,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "TEMPS MODERNES (LES)",
        "realisateur": "CHAPLIN Charles",
        "annee_production": 1935,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 6,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "TERMINATOR 3 : LE SOULEVEMENT DES MACHINES",
        "realisateur": "MOSTOW Jonathan",
        "annee_production": 2003,
        "nationalite": "Europe",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 13,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "THE QUEEN",
        "realisateur": "FREARS Stephen",
        "annee_production": 2005,
        "nationalite": "France",
        "derniere_diffusion": 2017,
        "nb_diffusion": 18,
        "nb_premiere_partie": 10,
        "moyenne_diffusion_par_an": 2.6
     },
     {
        "nom": "THE SCORE",
        "realisateur": "OZ Frank",
        "annee_production": 2001,
        "nationalite": "France",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "TOTALE (LA)",
        "realisateur": "ZIDI Claude",
        "annee_production": 1991,
        "nationalite": "Etats-Unis",
        "derniere_diffusion": 2019,
        "nb_diffusion": 18,
        "nb_premiere_partie": 11,
        "moyenne_diffusion_par_an": 2
     },
     {
        "nom": "UN TICKET POUR L'ESPACE",
        "realisateur": "LARTIGAU Eric",
        "annee_production": 2005,
        "nationalite": "France",
        "derniere_diffusion": 2018,
        "nb_diffusion": 18,
        "nb_premiere_partie": 14,
        "moyenne_diffusion_par_an": 2.3
     }
    ].sort((a, b) => (a.nb_diffusion < b.nb_diffusion) ? 1 : -1).slice(0,5);
    this.dataSource.data = remoteDummyData;

    this.filterSelectObj.filter((o: any) => {
      o.options = this.getFilterObject(remoteDummyData, o.columnProp) as any;
    });

    this.filterSelectObjt.filter((o: any) => {
      o.options = this.getFilterObject(remoteDummyData, o.columnProp) as any;
    });
  }

  // Called on Filter change
  filterChange(filter: any, event: any) {
    //let filterValues = {}
    this.filterValues[filter.columnProp]  = event.target.value.trim().toLowerCase()
    this.dataSource.filter = JSON.stringify(this.filterValues)
  }

  // Custom filter method fot Angular Material Datatable
  createFilter() {
    let filterFunction = function (data: any, filter: string): boolean {
      let searchTerms = JSON.parse(filter);
      let isFilterSet = false;
      for (const col in searchTerms) {
        if (searchTerms[col].toString() !== '') {
          isFilterSet = true;
        } else {
          delete searchTerms[col];
        }
      }

      console.log(searchTerms);

      let nameSearch = () => {
        let found = false;
        if (isFilterSet) {
          for (const col in searchTerms) {
            searchTerms[col].trim().toLowerCase().split(' ').forEach((word: any) => {
              if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                found = true
              }
            });
          }
          return found
        } else {
          return true;
        }
      }
      return nameSearch()
    }
    return filterFunction
  }


  // Reset table filters
  resetFilters() {
    this.filterValues = {}
    this.filterSelectObj.forEach((value:any, key:any) => {
      value.modelValue = undefined;
    })
    this.filterSelectObjt.forEach((value:any, key:any) => {
      value.modelValue = undefined;
    })
    this.dataSource.filter = "";
  }


}

