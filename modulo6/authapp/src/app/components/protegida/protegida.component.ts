import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styleUrls: ['./protegida.component.scss']
})
export class ProtegidaComponent implements OnInit {

  public profile: any;

  constructor(private _servicioAuth:AuthService) { }

  ngOnInit() {
    if (this._servicioAuth.userProfile) {
      this.profile = this._servicioAuth.userProfile;
      console.log(this.profile)
    } else {
      this._servicioAuth.getProfile((err, profile) => {
        this.profile = profile;
        console.log(this.profile)
      });
    }

}
}
