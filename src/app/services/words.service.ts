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
      `${process.env['NG_APP_WORD_API']}?count=${count}`
    );
  }

  getDefinition(word: string): Observable<string> {
    return this.http
      .get<DefinitionResponse>(
        `${process.env['NG_APP_DICTIONARY_API']}/${word}`
      )
      .pipe(map((data) => data[0].meanings[0].definitions[0].definition));
  }
}
