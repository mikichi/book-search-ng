export class GoogleBook {
  id: string;
  kind: string;
  etag: string;
  accessInfo: {
    accessViewStatus: string;
    country: string;
    embeddable: boolean;
    epub: {
      isAvailable: boolean;
      acsTokenLink: string;
    }
    pdf: {
      isAvailable: boolean;
      acsTokenLink: string;
    }
    publicDomain: boolean;
    quoteSharingAllowed: boolean;
    textToSpeechPermission: string;
    viewability: string;
    webReaderLink: string;
  };
  saleInfo: {
    buyLink: string;
    country: string;
    isEbook: boolean;
    listPrice: {
      amount: number;
      currencyCode: string;
    }
    offers: {
      finskyOfferType: number;
      listPrice: {
        amountInMicros: number;
        currencyCode: string;
      }
      retailPrice: {
        amountInMicros: number;
        currencyCode: string;
      }
    }[]
    retailPrice: {
      amount: number;
      currencyCode: string;
    }
    saleability: string;
  };
  searchInfo: {
    textSnippet
  };
  volumeInfo: {
    allowAnonLogging: boolean;
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: {
      smallThumbnail: string;
      thumbnail: string;
    }
    industryIdentifiers: {
      identifier: string;
      type: string;
    }[];
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: {
      containsEpubBubbles: false;
      containsImageBubbles: false;
    }
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: {
      text: true;
      image: true;
    }
    title: string;
  };
  selfLink: string;
}
