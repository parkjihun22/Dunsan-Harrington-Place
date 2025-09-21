import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="둔산 해링턴 플레이스-benerimage"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    const cls = `${styles.text} ${isLoaded ? styles.showText : ''}`;
  
    // 메인/브랜드/프로모션 공통 카피
    if (
      text === '힐스테이트' ||
      text === '홍보영상' ||
      text === '체크포인트' ||
      text === '당첨자서류안내' ||
      text === '둔산 해링턴 플레이스'
    ) {
      return (
        <>
          <div className={cls}>하루의 무게를 내려놓는 순간, 리버뷰로 완성되는 프리미엄.</div>
          <div className={cls}>둔산 생활권의 중심, 1호선 <b>갑천역</b> 초역세권이 일상을 바꿉니다.</div>
          <div className={cls}>효성 <b>해링턴 플레이스</b>가 제안하는 새로운 주거 기준.</div>
        </>
      );
    }
  
    // 사업/세대/인테리어/청약 공통 카피
    if (
      text === '사업개요' ||
      text === '세대안내' ||
      text === '인테리어' ||
      text === '청약안내' ||
      text === '모집공고안내' ||
      text === '인지세납부안내'
    ) {
      return (
        <>
          <div className={cls}>둔산 생활권 핵심입지, <b>갑천 리버뷰</b>와 초역세권의 가치를 동시에.</div>
          <div className={cls}>도시철도 1호선 연결, 2호선(트램·예정)로 더 촘촘해질 교통 네트워크.</div>
          <div className={cls}>84/115/142/182㎡까지 다채로운 타입으로 라이프스타일에 맞춘 선택.</div>
          <div className={cls}>효성중공업 주거 브랜드, <b>해링턴 플레이스</b>.</div>
        </>
      );
    }
  
    // 입지/프리미엄
    if (text === '입지환경' || text === '프리미엄') {
      return (
        <>
          <div className={cls}>역·학·생활이 완성된 둔산 라이프: <b>갑천역</b>·둔산 학원가·도심 인프라.</div>
          <div className={cls}>갤러리아 타임월드·NC백화점·이마트와 월평공원, 그리고 <b>갑천 수변</b>의 여유.</div>
        </>
      );
    }
  
    // 단지안내
    if (text === '단지안내') {
      return (
        <>
          <div className={cls}>지상공원화 설계와 여유로운 동선, 품격을 높이는 커뮤니티.</div>
          <div className={cls}>스마트 홈(IoT)·보안·에너지 관리까지, 일상의 편의를 새롭게.</div>
          <div className={cls}>둔산 해링턴 플레이스, <b>리버뷰 랜드마크</b>로 당신의 생활을 바꿉니다.</div>
        </>
      );
    }
  
    return null;
  };
  
