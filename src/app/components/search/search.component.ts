import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {

  heroes: any[] = [];
  termino: string;
  @Input() index: number;

  constructor( private activatedRoute: ActivatedRoute,
               private _heroesService: HeroesService,
               private router: Router) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe( params => {
      this.termino = params[ 'termino' ];
      this.heroes = this._heroesService.searchHeroes( params [ 'termino' ] );
      console.log(this.heroes);
    });
  }

  verHeroe() {
    console.log(this.index);
    this.router.navigate( ['/heroe', this.index] );
  }

}
