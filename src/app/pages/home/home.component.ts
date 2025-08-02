import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ContactoComponent } from '../../components/contacto/contacto.component';
import { HistoriaComponent } from '../../components/historia/historia.component';
import { SaboresComponent } from '../../components/sabores/sabores.component';
import { TestimoniosComponent } from '../../components/testimonios/testimonios.component';

@Component({
  selector: 'app-home',
  imports: [HeroComponent, ContactoComponent, HistoriaComponent, 
    SaboresComponent, TestimoniosComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
