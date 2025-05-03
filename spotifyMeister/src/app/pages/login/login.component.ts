import { SpotifyService } from './../../Services/spotify-service.service';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-login',
  imports: [
    CommonModule,
    RouterModule
  ],
  standalone:true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {



  constructor(private spotifyService : SpotifyService) {}

  ngOnInit(): void {
    this.verificaTokenUrlCallBack();
  }

  verificaTokenUrlCallBack(){
    const token = this.spotifyService.obterTokenUrlCallBack();

    if(!!token){
      this.spotifyService.definirAcessToken(token);
    }


  }

  abrirPaginaLogin(){
    window.location.href = this.spotifyService.obterUrlLogin();
  }

}
