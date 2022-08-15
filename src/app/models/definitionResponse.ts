interface Meaning {
  partOfSpeech: string;
  definitions: {
    definition: string;
    synonyms: any[];
    antonyms: any[];
  }[];
  synonyms: any[];
  antonyms: any[];
}

interface License {
  name: string;
  url: string;
}

interface Definition {
  word: string;
  phonetics: any[];
  meanings: Meaning[];
  license: License;
  sourceUrls: string[];
}
[];

export interface DefinitionResponse extends Array<Definition> {}
