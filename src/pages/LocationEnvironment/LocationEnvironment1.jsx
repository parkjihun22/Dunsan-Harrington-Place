import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import LocationSectionBox from "../../components/LocationSectionBox/LocationSectionBox";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import section2Image1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import section2Image2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import section2Image3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import section2Image4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import section2Image5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import section2Image6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";

const LocationSection = [
  {
    img: section2Image1,
    titleText: "둔산 생활권 중심 입지<br />탄탄한 미래가치",
    contentText:
      "대전 둔산권역 개발과 기반시설 확충으로 주거·문화 인프라 강화<br />신규 도시개발과 교통망 확장으로 미래가치 기대",
  },
  {
    img: section2Image2,
    titleText: "의료 인프라 프리미엄<br />건강 케어 특화 입지",
    contentText:
      "충남대학교병원, 선병원 등 대형 의료시설 인접<br />전문의료기관·건강검진센터 접근성 우수",
  },
  {
    img: section2Image3,
    titleText: "도시철도 2호선(트램) + 광역도로망<br />뛰어난 접근성",
    contentText:
      "대전 도시철도 2호선(트램·예정) 수혜<br />유성IC 등 광역도로망으로 주요 도시 빠른 연결",
  },
  {
    img: section2Image4,
    titleText: "생활 인프라 원스톱<br />도심 생활권 기반",
    contentText:
      "갤러리아백화점·홈플러스·대형마트·카페거리·문화시설 밀집<br />관공서·금융기관 인접으로 생활 편의성 우수",
  },
  // ⬇️ 문제였던 항목 교정
  {
    img: section2Image5,
    titleText: "리버뷰 랜드마크 스케일<br />총 336세대 프리미엄",
    contentText:
      "지하 4층~지상 35층, 3개동 구성의 랜드마크 단지<br />84·115·142·182㎡ 다양한 평형으로 라이프스타일 맞춤",
  },
  {
    img: section2Image6,
    titleText: "자연·휴식 인프라<br />쾌적한 주거환경",
    contentText:
      "갑천 리버뷰와 월평공원·유림공원 등 풍부한 녹지<br />자연과 도심이 공존하는 친환경 라이프",
  },
];



const LocationEnvironment1 = () => {
  const menuContents = [
    // { title: "입지 안내영상", url: "/FloorPlan/videos" },
    { title: "입지안내", url: "/LocationEnvironment/intro" },
    { title: "프리미엄", url: "/LocationEnvironment/primium" },
  ];
  const [isScroll, setIsScroll] = useState(false);
  const { pathname } = useLocation(); // 현재 경로를 가져옴

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
  }, [pathname]); // pathname이 변경될 때마다 실행

  // 화면 스크롤이 탑이 아니면 isScroll 값 true로 변환
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 페이지별 메타: title/description/og/canonical 만 관리 */}
        <title>둔산 해링턴 플레이스 - 입지환경</title>
        <meta
          name="description"
          content="둔산 해링턴 플레이스 입지환경: 1호선 갑천역 초역세권과 2호선 트램(예정), 계룡로·한밭대로 등 도로망, 갤러리아 타임월드·NC백화점·이마트, 월평공원·갑천 리버뷰까지 갖춘 둔산 생활권 핵심 입지."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.cssdesign.kr/LocationEnvironment/intro" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="둔산 해링턴 플레이스" />
        <meta property="og:title" content="둔산 해링턴 플레이스 - 입지환경" />
        <meta
          property="og:description"
          content="갑천역 초역세권·트램(2호선 예정)·도심 인프라·리버뷰를 누리는 둔산 해링턴 플레이스의 입지환경을 확인하세요."
        />
        <meta property="og:url" content="https://www.cssdesign.kr/LocationEnvironment/intro" />
        <meta property="og:image" content="https://www.cssdesign.kr/img/og/location.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="둔산 해링턴 플레이스 - 입지환경" />
        <meta
          name="twitter:description"
          content="둔산 생활권 핵심 입지: 1호선 갑천역, 2호선 트램(예정), 풍부한 쇼핑·교육·문화 인프라, 월평공원과 갑천 리버뷰까지."
        />
        <meta name="twitter:image" content="https://www.cssdesign.kr/img/og/location.jpg" />
        <meta name="twitter:url" content="https://www.cssdesign.kr/LocationEnvironment/intro" />

        {/* JSON-LD (대표 이미지/브레드크럼 포함) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "둔산 해링턴 플레이스 - 입지환경",
            "url": "https://www.cssdesign.kr/LocationEnvironment/intro",
            "description":
              "둔산 생활권 입지: 1호선 갑천역 초역세권, 2호선 트램(예정), 계룡로·한밭대로, 갤러리아·NC·이마트, 월평공원·갑천 리버뷰.",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://www.cssdesign.kr/img/og/location.jpg",
              "width": 1200,
              "height": 630
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.cssdesign.kr/" },
                { "@type": "ListItem", "position": 2, "name": "입지환경", "item": "https://www.cssdesign.kr/LocationEnvironment/intro" }
              ]
            }
          })}
        </script>
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="입지환경" />

      <MenuBar contents={menuContents} />

      {/* <h1> 태그를 사용하여 페이지 제목 설정 (SEO 최적화) */}
      <h1 className={styles.screenReaderOnly}>
        둔산 해링턴 플레이스 - 입지환경
      </h1>
      <p className={styles.screenReaderOnly}>
        둔산 해링턴 플레이스의 입지 정보를 확인하세요. 1호선 갑천역 초역세권과
        2호선 트램(예정), 풍부한 생활·교육·쇼핑 인프라, 월평공원과 갑천 리버뷰가
        더해진 둔산 생활권의 가치를 제공합니다.
      </p>

      <div className={styles.textBox}>
        <div>갑천 리버뷰와 둔산 생활권의 중심</div>
        <div>교통·교육·쇼핑·자연이 완성된 입지</div>
      </div>


      <img
        src={page1}
        className={styles.image2}
        alt="둔산 해링턴 플레이스입지환경-image1"
      />

      <div className={styles.section2}>
        {LocationSection.map((value, idx) => (
          <LocationSectionBox
            image={value.img}
            title={value.titleText}
            text={value.contentText}
          />
        ))}
      </div>

      <div className={styles.commonBox}>
        <div className={styles.notice}>
          ※본 홍보물의 내용과 지역도는 소비자의 이해를 돕기 위한 것으로, 개발 예정•계획 및 교통, 학교 계획 등에 관한 사항은 해당 기관의 아래 자료를 토대로 제작되었습니다. 사업계획 및 일정은 개발계획별 사업주체에 의해 변경될 수 있으며, 둔산 해링턴 플레이스 사업주체 및 시공사와 무관합니다.
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
