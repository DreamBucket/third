import { Injectable } from '@angular/core';
import { Dream, DreamForm } from './models/explore.model';

@Injectable()
export class ExploreService {
  dreams = [
      {
          id: '0',
          name: '아이스초코 마시기',
          x: 127.03076860251483,
          y: 37.58610880934777,
          place: '안암 스타벅스',
          memo: '메모입니다',
          likes: 15,
          progress: 60,
          stories: '',
      },
      {
          id: '2',
          name: '포켓몬 신작 구매',
          x: 127.017735682938,
          y: 37.4849669528567,
          place: '국제전자센터 제이피시스템',
          memo: '메모입니다',
          likes: 10,
          progress: 100,
          stories: '',
      },
      {
          id: '1',
          name: '집밥 먹기',
          x: 126.83468286473365,
          y: 36.69565979083702,
          place: '예산우방유쉘아파트',
          memo: '메모입니다',
          likes: 15,
          progress: 0,
          stories: '',
      },
      {
          id: '3',
          name: '독도 방문하기',
          x: 131.864523384084,
          y: 37.2424500585478,
          place: '프로토타입에 있던 예시',
          memo: '메모입니다',
          likes: 10,
          progress: 40,
          stories: '',
      },
  ];

  constructor() { }

  getAll(): Dream[] {
      return this.dreams;
  }

  add(data: DreamForm): void {
    this.dreams = [...this.dreams, {
        id: this.dreams.length.toString(),
        likes: 0,
        ...data
    }];
  }

  edit(id: string, data: DreamForm): void {
      const target = this.dreams.find(x => x.id === id);
      this.dreams[this.dreams.indexOf(target)] = {
          ...data,
          likes: target.likes,
          id,
      };
  }

  get(id: string): Dream {
      return this.dreams.find(x => x.id === id);
  }

  delete(id: string): void {
    this.dreams = [...this.dreams.filter(x => x.id !== id)];
  }
}
