import { Injectable } from "@angular/core";
import { createClient, SupabaseClient } from "@supabase/supabase-js";


export interface Profile {
  id?: string;
  username: string;
  website: string;
  avatar_url: string;
}

@Injectable({
  providedIn: 'root',
})
export class SupabaseService {
  supabaseUrl = "https://wyovmloiczhxouzfczru.supabase.co";
  supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind5b3ZtbG9pY3poeG91emZjenJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0NDgxNTgsImV4cCI6MjAxNzAyNDE1OH0.wFKkR0qFStun3yd08NpRGDgMJBl_0eWKQ8R_36-t5Ok";
  supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey);
    console.log(this.supabase);
  }

   kek() {
    return this.supabase.from('todo').select('*');
    // console.log(data);
    // console.log(error);
  }

  signUp() {
    return  this.supabase.auth.signUp({
      email: 'whizott@gmail.com',
      password: 'password'
    })
  }

  signin() {
    return  this.supabase.auth.signInWithPassword({
      email: 'whizott@gmail.com',
      password: 'password'
    })
  }


  function(){
    this.supabase.functions.invoke("hello-world")
  }

  // profile(user: User) {
  //     return this.supabase
  //         .from('profiles')
  //         .select(`username, website, avatar_url`)
  //         .eq('id', user.id)
  //         .single()
  // }
  //
  // authChanges(callback: (event: AuthChangeEvent, session: Session | null) => void) {
  //     return this.supabase.auth.onAuthStateChange(callback)
  // }
  //
  // signIn(email: string) {
  //     return this.supabase.auth.signInWithOtp({ email })
  // }
  //
  // signOut() {
  //     return this.supabase.auth.signOut()
  // }
  //
  // updateProfile(profile: Profile) {
  //     const update = {
  //         ...profile,
  //         updated_at: new Date(),
  //     }
  //
  //     return this.supabase.from('profiles').upsert(update)
  // }
  //
  // downLoadImage(path: string) {
  //     return this.supabase.storage.from('avatars').download(path)
  // }
  //
  // uploadAvatar(filePath: string, file: File) {
  //     return this.supabase.storage.from('avatars').upload(filePath, file)
  // }
}

