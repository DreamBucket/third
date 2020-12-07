import { Injectable } from '@angular/core';
import { Spot, SpotForm } from './models/explore.model';

@Injectable()
export class ExploreService {
  spots = [
      {
          id: '0',
          name: '디자인이',
          x: 127.03076860251483,
          url: 'https://lh3.googleusercontent.com/proxy/-Ki0St2yEiFmkblkROCS7c5VHgrNZWBUXACWTEZHxnWfVSKKAWdIiVe8mMOmIMvgYtzKgzA_mvJz-BhsrMdrToEGcwpIaCy8ZsccUAuD4pbJQhZglQ79o7wcjEs2tVEv5crBSTPhzwBiPDf0pGaXwzkeIhe7TeWryIdFRPMCshg',
          y: 37.58610880934777,
      },
      {
          id: '1',
          name: '들어가고',
          x: 127.0333557589,
          url: 'https://lh3.googleusercontent.com/proxy/ayhuBqwg7apEqItN0bZ0rlwL6p5QK05N4d77QAHqpQ9l0ApdE6AMZOu37uGvz49ns-aqunQjsQfIinV8b6BGs1mfGYyo77-4fmx0Wtm-u0hRJX_3GBStdgqPq3cqC3f5vgfZQEx731zgLISEoolFmkFl5ynYKf9Gfldl5A',
          y: 37.5888363125305,
      },
      {
          id: '2',
          name: '있어요',
          x: 127.02101344673,
          url: 'https://yeyak.seoul.go.kr/fileDownload.web?p=/TB_PLACEATCHFL/2015/04/20/1531&n=1O6TlSV4LE2f1o479oOHa2gz9oa4y6&on=%EC%95%88%EC%95%94%EB%8F%99%20%EC%8B%A0%EC%B2%AD%EC%82%AC%20%EC%A0%84%EA%B2%BD.jpg',
          y: 37.5856063929983,
      },
      {
          id: '2',
          name: '안암동 주민센터',
          x: 127.02101344673,
          url: 'https://yeyak.seoul.go.kr/fileDownload.web?p=/TB_PLACEATCHFL/2015/04/20/1531&n=1O6TlSV4LE2f1o479oOHa2gz9oa4y6&on=%EC%95%88%EC%95%94%EB%8F%99%20%EC%8B%A0%EC%B2%AD%EC%82%AC%20%EC%A0%84%EA%B2%BD.jpg',
          y: 37.5856063929983,
      },
      {
          id: '2',
          name: '안암동 주민센터',
          x: 127.02101344673,
          url: 'https://yeyak.seoul.go.kr/fileDownload.web?p=/TB_PLACEATCHFL/2015/04/20/1531&n=1O6TlSV4LE2f1o479oOHa2gz9oa4y6&on=%EC%95%88%EC%95%94%EB%8F%99%20%EC%8B%A0%EC%B2%AD%EC%82%AC%20%EC%A0%84%EA%B2%BD.jpg',
          y: 37.5856063929983,
      },
      {
          id: '2',
          name: '안암동 주민센터',
          x: 127.02101344673,
          url: 'https://yeyak.seoul.go.kr/fileDownload.web?p=/TB_PLACEATCHFL/2015/04/20/1531&n=1O6TlSV4LE2f1o479oOHa2gz9oa4y6&on=%EC%95%88%EC%95%94%EB%8F%99%20%EC%8B%A0%EC%B2%AD%EC%82%AC%20%EC%A0%84%EA%B2%BD.jpg',
          y: 37.5856063929983,
      },
  ];

  constructor() { }

  getAll(): Spot[] {
      return this.spots;
  }

  add(data: SpotForm): void {
    this.spots = [...this.spots, {
        id: this.spots.length.toString(),
        ...data
    }];
  }

  edit(id: string, data: SpotForm): void {
      const target = this.spots.find(x => x.id === id);
      this.spots[this.spots.indexOf(target)] = {
          ...data,
          id,
      };
  }

  get(id: string): Spot {
      return this.spots.find(x => x.id === id);
  }

  delete(id: string): void {
    this.spots = [...this.spots.filter(x => x.id !== id)];
  }
}
