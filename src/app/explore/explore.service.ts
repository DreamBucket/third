import { Injectable } from '@angular/core';
import { Dream, DreamForm } from './models/explore.model';

@Injectable()
export class ExploreService {
  dreams = [
      {
          id: '2',
          name: '포켓몬 신작 구매하기',
          x: 127.017735682938,
          y: 37.4849669528567,
          place: '국제전자센터 제이피시스템',
          memo: '메모입니다',
          likes: 10,
          progress: 100,
          stories: [],
      },
      {
          id: '1',
          name: '어머니와 함께 요리하기',
          x: 126.83468286473365,
          y: 36.69565979083702,
          place: '예산우방유쉘아파트',
          memo: '메모입니다',
          likes: 15,
          progress: 40,
          stories: [],
      },
      {
          id: '3',
          name: '독도 방문하기',
          x: 131.864523384084,
          y: 37.2424500585478,
          place: '독도',
          memo: '메모입니다',
          likes: 10,
          progress: 40,
          stories: [],
      },
      {
            id: '4',
            name: "코믹월드에서 쇼핑하기",
            memo: '',
            place: "코믹월드 부산지점",
            likes: 3,
            progress: 20,
            stories: [],
            x: 129.114999153672,
            y: 35.1653742632376,
      },
      {
            id: "5",
            likes: 16,
            memo: '',
            name: "카이스트 놀러가기",
            place: "KAIST 본원",
            progress: 0,
            stories: [],
            x: 127.36128608273715,
            y: 36.37049682178313,
      },
      {
            id: "6",
            likes: 1,
            memo: "",
            name: "어렸을때 갔던 스키장 방문",
            place: "알펜시아리조트 스키700",
            progress: 30,
            stories: [],
            x: 128.67369623433868,
            y: 37.656944034960325,
      },
      {
          id: '0',
          name: '아이스초코 마시기',
          x: 127.03076860251483,
          y: 37.58610880934777,
          place: '안암 스타벅스',
          memo: '메모입니다',
          likes: 15,
          progress: 60,
          stories: [],
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
