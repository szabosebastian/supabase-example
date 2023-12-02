import { Component } from '@angular/core';
import { SupabaseService } from "../supabase-service";
import { addWarning } from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [],
  templateUrl: './example.component.html',
  styleUrl: './example.component.scss'
})
export class ExampleComponent {

  token?: string;

  constructor(
    private readonly supabaseService: SupabaseService,
    private http: HttpClient
  ) {
  }

  async kekker() {
    const result = await this.supabaseService.kek();
    console.log(result);
  }

  signup() {
    this.supabaseService.signUp();
  }

  signin() {
    this.supabaseService.signin().then((res) => {
      console.log(res.data.session?.access_token);
      this.token = res.data.session?.access_token;
    });
  }

  edgeFuction() {
    //  this.supabaseService.function()
       this.http.get("https://wyovmloiczhxouzfczru.supabase.co/functions/v1/hello-world",
         { headers: new HttpHeaders(
          { 'Authorization': 'Bearer ' + this.token },
           ) }).subscribe();
  }
}
