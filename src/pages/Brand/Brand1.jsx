import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

import page1 from "../../assets/Brand/intro/page1.jpg";

const Brand1 = () => {
    const menuContents = [{ title: "브랜드 소개", url: "/brand/intro" }, { title: "홍보 영상", url: "/brand/video" }];
    const [isScroll, setIsScroll] = useState(false);
    const [isTextVisible, setIsTextVisible] = useState(false); // 텍스트 애니메이션 상태
    const [isImageVisible, setIsImageVisible] = useState(false); // 이미지 애니메이션 상태
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScroll(window.scrollY > 0);
            // 스크롤 시 이미지와 텍스트 애니메이션을 트리거
            if (window.scrollY > 200) {
                setIsImageVisible(true); // 이미지가 보이도록
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsTextVisible(true); // 메뉴 클릭 시 텍스트가 보이도록
        }, 500); // 딜레이를 두고 텍스트 애니메이션 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
                <Helmet>
                <title>둔산 해링턴 플레이스 - 브랜드 소개</title>
                <meta
                    name="description"
                    content="효성 해링턴 플레이스 브랜드 철학과 가치. 검증된 품질, 첨단 시공 기술, 스마트 주거 시스템으로 생활의 품격을 높입니다."
                />
                <link rel="canonical" href="https://www.cssdesign.kr/Brand/intro" />
                <meta name="robots" content="index,follow" />

                {/* Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="둔산 해링턴 플레이스" />
                <meta property="og:title" content="둔산 해링턴 플레이스 - 브랜드 소개" />
                <meta
                    property="og:description"
                    content="효성중공업의 해링턴 플레이스 브랜드 소개. 둔산 생활권·갑천 리버뷰 입지와 차별화된 설계로 새로운 주거 기준을 제시합니다."
                />
                <meta property="og:url" content="https://www.cssdesign.kr/Brand/intro" />
                <meta property="og:image" content="https://www.cssdesign.kr/images/og/main.jpg" />

                {/* (선택) Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="둔산 해링턴 플레이스 - 브랜드 소개" />
                <meta
                    name="twitter:description"
                    content="해링턴 플레이스의 가치와 철학. 품질·설계·스마트 시스템으로 완성되는 프리미엄 라이프."
                />
                <meta name="twitter:image" content="https://www.cssdesign.kr/images/og/main.jpg" />
                </Helmet>

                <Header isChanged={isScroll} />
                <FixIcon />

                {/* 기존 구조 유지, 타이틀만 교체 */}
                <Bener title="브랜드 소개" />

                <MenuBar contents={menuContents} />

                {/* h1: 그대로 두고 텍스트만 정정 */}
                <h1 className={styles.screenReaderOnly}>둔산 해링턴 플레이스 - 브랜드소개</h1>
                <p className={styles.screenReaderOnly}>
                효성중공업의 주거 브랜드 해링턴 플레이스는 검증된 품질과 첨단 설계로 안심하고 편안한 생활을 제공합니다.
                둔산 생활권과 갑천 리버뷰 입지, 스마트 홈 시스템, 세심한 커뮤니티 설계를 통해 일상의 가치를 높입니다.
                </p>

                <div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
                <div>리버뷰의 여유, 도심의 편리함을 한걸음에</div>
                <div>효성 해링턴 플레이스, 둔산의 새로운 주거 기준</div>
                </div>


            <img className={`${styles.image} ${isImageVisible ? styles.visible : ''}`} src={page1} alt="둔산 해링턴 플레이스 brand-Image1" />

            <Footer />
        </div>
    );
}

export default Brand1;
