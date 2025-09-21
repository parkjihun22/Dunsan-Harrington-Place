// src/components/MobileOverviewSection/MobileOverviewSection.jsx

import React, { useState, useEffect } from "react";
import styles from "./MobileOverviewSection.module.scss";

// 1) 모바일 메인 히어로 이미지
import heroImage from "../../assets/Main/heroImage.jpg";
// 2) 입지환경 지도
import mobileMap from "../../assets/LocationEnvironment/LocationEnvironment1/page1.jpg";
import mobileMap2 from "../../assets/LocationEnvironment/LocationEnvironment2/page2.jpg";
// 3) 프리미엄 슬라이드 이미지들
import slide1 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-1.jpg";
import slide2 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-2.jpg";
import slide3 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-3.jpg";
import slide4 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-4.jpg";
import slide5 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-5.jpg";
import slide6 from "../../assets/LocationEnvironment/LocationEnvironment1/session2-6.jpg";

const items = [
  {
    key: "overview",
    label: "사업개요",
    content: (
      <ul className={styles.detailList}>
        <li>
          <strong>사업명</strong>
          <span>둔산 해링턴 플레이스 리버파크</span>
        </li>
        <li>
          <strong>대지위치</strong>
          <span>대전광역시 서구 월평동 1491번지 일원</span>
        </li>
        <li>
          <strong>건축규모</strong>
          <span>지하 4층 ~ 지상 35층, 아파트 3개동</span>
        </li>
        <li>
          <strong>주택형</strong>
          <span>전용 84㎡, 115㎡, 142㎡, 182㎡</span>
        </li>
        <li>
          <strong>세대수</strong>
          <span>총 336세대</span>
        </li>
        <li>
          <strong>시공사</strong>
          <span>효성중공업㈜</span>
        </li>
        <li>
          <strong>시행사</strong>
          <span>우리자산신탁</span>
        </li>
        <li>
          <strong>입주예정</strong>
          <span>2028년 3월</span>
        </li>
      </ul>
    ),
  },
  {
    key: "location",
    label: "입지환경",
    content: (
      <div className={styles.mapGrid}>
        <img
          src={mobileMap}
          className={styles.mapImage}
          alt="입지환경 지도 1"
        />
        <img
          src={mobileMap2}
          className={styles.mapImage}
          alt="입지환경 지도 2"
        />
      </div>
    ),
  },
  {
    key: "premium",
    label: "프리미엄",
    content: (
      <>
        {/* 프리미엄 섹션 상단 문단 */}
        <div className={styles.premiumIntro}>
          <h3 className={styles.premiumTitle}>GREAT PREMIUM</h3>
          <p className={styles.premiumSubtitle}>
            갑천 리버뷰와 둔산 생활권을 동시에 누리는<br />
            둔산 해링턴 플레이스 프리미엄 라이프
          </p>
        </div>

        {/* 슬라이더 */}
        <PremiumSlider />
      </>
    ),
  },
];

function PremiumSlider() {
  const slides = [
    {
      img: slide1,
      title: "갑천 리버뷰 & 둔산 생활권 프리미엄",
      desc:
        "영구 리버뷰 조망권 확보<br/>월평공원·갑천 수변공원 인접<br/>쾌적한 자연환경과 도심 라이프의 균형",
    },
    {
      img: slide2,
      title: "교육·생활 인프라 프리미엄",
      desc:
        "월평초·봉명중·한밭고 등 도보 통학 가능<br/>둔산 학원가 초근접<br/>갤러리아 타임월드·NC백화점·이마트 등 생활편의 풍부",
    },
    {
      img: slide3,
      title: "광역 교통망 확충 프리미엄",
      desc:
        "지하철 1호선 갑천역 초역세권<br/>대전 도시철도 2호선(트램·예정) 개통 호재<br/>계룡로·한밭대로 등 주요 도로망으로 빠른 접근성",
    },
    {
      img: slide4,
      title: "스마트 커뮤니티 & 특화 설계",
      desc:
        "지상공원화 설계와 풍부한 조경<br/>피트니스·실내골프·맘스스테이션 등 커뮤니티<br/>스마트홈 IoT·첨단 보안시스템 적용",
    },
    {
      img: slide5,
      title: "다양한 평형 구성의 프리미엄",
      desc:
        "전용 84㎡ 위주, 115·142·182㎡까지 다양한 선택지<br/>희소성 높은 펜트하우스 공급<br/>수요 맞춤형 주거공간 제공",
    },
    {
      img: slide6,
      title: "효성 해링턴 플레이스 브랜드 가치",
      desc:
        "효성중공업 시공, 해링턴 플레이스 브랜드 적용<br/>검증된 품질과 차별화된 설계<br/>대전 둔산의 새로운 랜드마크",
    },
  ];


  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(id);
  }, [slides.length]);

  const nextSlide = () =>
    setCurrent((c) => (c + 1 + slides.length) % slides.length);
  const prevSlide = () =>
    setCurrent((c) => (c - 1 + slides.length) % slides.length);

  const handleTouchStart = (e) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e) => setTouchEndX(e.touches[0].clientX);
  const handleTouchEnd = () => {
    if (touchStartX == null || touchEndX == null) return;
    const dist = touchStartX - touchEndX;
    if (dist > 50) nextSlide();
    else if (dist < -50) prevSlide();
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div
      className={styles.premiumSlider}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={styles.slide}>
        <img src={slides[current].img} alt="" />
        <div className={styles.caption}>
          <h4
            dangerouslySetInnerHTML={{ __html: slides[current].title.replace(/\n/g, "<br/>") }}
          />
          <p
            dangerouslySetInnerHTML={{ __html: slides[current].desc }}
          />
        </div>
      </div>
      <div className={styles.dots}>
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={idx === current ? styles.dotActive : styles.dot}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </div>
  );
}

export default function MobileOverviewSection() {
  const [openKey, setOpenKey] = useState(null);
  const toggle = (key) => setOpenKey(openKey === key ? null : key);

  return (
    <section className={styles.overviewSection}>
      {/* ─── 헤더 영역 ─── */}
      <header className={styles.overviewHeader}>
        <div className={styles.preTitle}>HILLSTATE BUSINESS</div>
        <div className={styles.line} />
        <h2 className={styles.mainTitle}>사업안내</h2>
      </header>

      {/* ─── 히어로 이미지 ─── */}
      <img src={heroImage} className={styles.heroImage} alt="단지 전경" />

      {/* ─── 아코디언 항목 ─── */}
      {items.map(({ key, label, content }) => (
        <div key={key} className={styles.accordionItem}>
          <button
            className={`${styles.accordionHeader} ${openKey === key ? styles.active : ""}`}
            onClick={() => toggle(key)}
          >
            <span className={styles.label}>{label}</span>
            <span className={`${styles.arrow} ${openKey === key ? styles.up : styles.down}`} />
          </button>
          {openKey === key && <div className={styles.accordionContent}>{content}</div>}
        </div>
      ))}
    </section>
  );
}
