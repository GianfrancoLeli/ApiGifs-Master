import { Component, OnInit } from '@angular/core';
import { GifsService } from './../gifs.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gifs',
  templateUrl: './gifs.component.html',
  styleUrls: ['./gifs.component.css']
})
export class GifsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private gifsService: GifsService) { }

  q: string;
  gifs: any = [];

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.q = params['q'];

      this.gifsService.getGifs(this.q).subscribe(gifs => {
        this.gifs = gifs;
      });
    });
  }

}
