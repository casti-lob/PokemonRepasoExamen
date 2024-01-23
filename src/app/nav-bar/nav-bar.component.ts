import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pokemon } from '../interfaces/Pokemon';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  search:string = "";
  @Output() newSearch:EventEmitter<string> = new EventEmitter<string>();
  find(){
    
    this.newSearch.emit(this.search)
  }
}
