import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./LocationEnvironment.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import Ready from "../../components/Ready/Ready";
import HelmetCOM from "../../components/HelmetCOM/HelmetCOM";
import { Helmet } from "react-helmet-async";
import page1 from "../../assets/LocationEnvironment/LocationEnvironment2/page1.jpg";


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
        <title>둔산 해링턴 플레이스 - 프리미엄</title>
        <meta
          name="description"
          content="둔산 해링턴 플레이스 프리미엄: 갑천 리버뷰, 1호선 갑천역 초역세권·2호선 트램(예정), 갤러리아·NC백화점·이마트 등 풍부한 생활 인프라, 월평공원·유림공원 녹지와 함께하는 쾌적한 주거 환경."
        />
        <link rel="canonical" href="https://www.cssdesign.kr/LocationEnvironment/primium" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="둔산 해링턴 플레이스" />
        <meta property="og:title" content="둔산 해링턴 플레이스 - 프리미엄" />
        <meta
          property="og:description"
          content="둔산 해링턴 플레이스만의 프리미엄: 리버뷰 전망, 트램 교통망, 쇼핑·교육 인프라, 자연친화 입지를 모두 갖춘 주거의 새로운 기준."
        />
        <meta property="og:url" content="https://www.cssdesign.kr/LocationEnvironment/primium" />
        <meta property="og:image" content="https://www.cssdesign.kr/img/og/primium.jpg" />
      </Helmet>

      <Header isChanged={isScroll} />
      <FixIcon />

      <Bener title="프리미엄" />

      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>
        둔산 해링턴 플레이스 - 프리미엄
      </h1>
      <p className={styles.screenReaderOnly}>
        둔산 해링턴 플레이스는 갑천 리버뷰와 초역세권 교통망, 풍부한 생활·교육 인프라,
        월평공원·유림공원 녹지까지 누릴 수 있는 차별화된 프리미엄을 제공합니다.
        쾌적한 자연환경과 도심의 편리함이 결합된 새로운 주거 가치를 경험하세요.
      </p>

      <div className={styles.textBox}>
        <div>리버뷰와 둔산 생활권의 만남</div>
        <div>해링턴 플레이스만의 프리미엄 라이프</div>
      </div>


      <img
        src={page1}
        className={styles.image3}
        alt="둔산 해링턴 플레이스-image1"
      />
      <Footer />
    </div>
  );
};

export default LocationEnvironment1;
