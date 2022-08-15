import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DefinitionResponse } from '../models/definitionResponse';

@Injectable({
  providedIn: 'root',
})
export class WordsService {
  constructor(private http: HttpClient) {}

  getRandomWords(count: number = 4) {
    return this.http.get<string[]>(
      `https://random-word-form.herokuapp.com/random/noun?count=${count}`
    );
  }

  getDefinition(word: string): Observable<string> {
    return this.http
      .get<DefinitionResponse>(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      )
      .pipe(map((data) => data[0].meanings[0].definitions[0].definition));
  }
}
