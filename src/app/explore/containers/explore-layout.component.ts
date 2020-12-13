import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared/shared.service';
import { ExploreService } from '../explore.service';
import { Dream } from '../models/explore.model';

@Component({
  selector: 'app-explore-layout',
  templateUrl: './explore-layout.component.html',
  styleUrls: ['./explore-layout.component.scss']
})
export class ExploreLayoutComponent implements OnInit {
  kakao = window['kakao'];
  map: any;
  markers: any[] = [];

  dreamList: Dream[];
  dreams: Dream[];
  nameFilter = '';

  constructor(
    public exploreService: ExploreService,
    public sharedService: SharedService,
  ) { }

  ngOnInit(): void {
    this.sharedService.title = '둘러보기';
    this.sharedService.view = 'explore';
    const container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
    const options = { //지도를 생성할 때 필요한 기본 옵션
      center: new this.kakao.maps.LatLng(37.585953, 127.028881), //지도의 중심좌표.
      level: 3 //지도의 레벨(확대, 축소 정도)
    };
    this.map = new this.kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

    this.dreamList = this.exploreService.getAll();
    this.dreams = this.dreamList;

    this.dreamList.forEach(x => {
      // 마커가 표시될 위치입니다 
      const markerPosition  = new this.kakao.maps.LatLng(x.y, x.x); 
      // 마커를 생성합니다
      const marker = new this.kakao.maps.Marker({
        position: markerPosition
      });
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(this.map);
      console.log(x);
      let iwContent = `
      <div style="width: 200px; padding:10px">
        <strong>
          <a href="" title="${x.place}">${x.place}</a>
        </strong>
        <div class="content">
            <div>`;
      iwContent = iwContent +
            `${x.name}</div>
        </div>
      </div>`; // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      const iwPosition = new this.kakao.maps.LatLng(x.y, x.x); //인포윈도우 표시 위치입니다
      // 인포윈도우를 생성합니다
      const infowindow = new this.kakao.maps.InfoWindow({
        position : iwPosition, 
        content : iwContent,
      });
      // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
      infowindow.open(this.map, marker); 
    });

    this.filter();

    // if (this.dreams.length !== 0) {
    //   const bounds = new this.kakao.maps.LatLngBounds();
    //   bounds.extend(new this.kakao.maps.LatLng(this.dreams[0].y, this.dreams[0].x));
    //   this.map.setBounds(bounds);
    // }
  }

  filter(): void {
    const bounds = new this.kakao.maps.LatLngBounds();
    const data = this.dreams.filter(x => x.place.includes(this.nameFilter) || x.name.includes(this.nameFilter))
    if (data.length !== 0) {
      data.forEach(location => {
        const marker = new this.kakao.maps.Marker({
            map: this.map,
            position: new this.kakao.maps.LatLng(location.y, location.x) 
        });
        bounds.extend(new this.kakao.maps.LatLng(location.y, location.x));
      });
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      this.map.setBounds(bounds);
    }
  }

  movemap(value: Dream): void {
    console.log(value);
    const bounds = new this.kakao.maps.LatLngBounds();
    bounds.extend(new this.kakao.maps.LatLng(value.y, value.x));
    this.map.setBounds(bounds);
  }

  onDelete(id: string): void {
    this.exploreService.delete(id);
    this.dreamList = this.exploreService.getAll();
    this.filter();
  }

}
