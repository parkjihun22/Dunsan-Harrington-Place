import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import styles from "./FloorPlan.module.scss";
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Emodel = () => {
  const menuContents = [
    { title: "84A", key: "84A" },
    { title: "115", key: "115" },
    // { title: "84A", key: "84A" },
    // { title: "84B", key: "84B" },
  ];

  const vrUrls = {
    "84A": "http://xn--lu1b73e99amcr0p82hcwdu3mrku8ybruin5gtnb.com/vtour/tour_84a.html",
    "115": "http://xn--lu1b73e99amcr0p82hcwdu3mrku8ybruin5gtnb.com/vtour/tour_115.html",
    // "84A": "https://www.prugio.com/hb/2025/onecluster/vr/84a.html",
    // "84B": "https://www.prugio.com/hb/2025/onecluster/vr/84b.html",
  };





  const [selectedType, setSelectedType] = useState("84A");
  const { pathname } = useLocation();
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Helmet>
        {/* 핵심 SEO 페이지: E-모델하우스 */}
        <title>둔산 해링턴 플레이스 - E-모델하우스</title>
        <meta
          name="description"
          content="둔산 해링턴 플레이스 E-모델하우스를 온라인에서 VR 가상투어로 둘러보세요. 세대별 평면도, 인테리어, 공간 활용 설계를 실감나게 체험할 수 있습니다."
        />
        <meta name="robots" content="index,follow" />
        <link rel="canonical" href="https://www.cssdesign.kr/FloorPlan/Emodel" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="둔산 해링턴 플레이스" />
        <meta property="og:title" content="둔산 해링턴 플레이스 - E-모델하우스" />
        <meta
          property="og:description"
          content="VR 가상투어로 만나는 둔산 해링턴 플레이스 E-모델하우스. 세대별 평면도와 인테리어를 온라인에서 실감나게 체험하세요."
        />
        <meta property="og:url" content="https://www.cssdesign.kr/FloorPlan/Emodel" />
        <meta property="og:image" content="https://www.cssdesign.kr/img/og/emodel.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="둔산 해링턴 플레이스 - E-모델하우스" />
        <meta
          name="twitter:description"
          content="둔산 해링턴 플레이스 E-모델하우스를 VR 투어로 온라인에서 경험하세요. 평면도와 인테리어를 생생하게 확인할 수 있습니다."
        />
        <meta name="twitter:image" content="https://www.cssdesign.kr/img/og/emodel.jpg" />
        <meta name="twitter:url" content="https://www.cssdesign.kr/FloorPlan/Emodel" />

        {/* JSON-LD (구조화 데이터) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "둔산 해링턴 플레이스 - E-모델하우스",
            "url": "https://www.cssdesign.kr/FloorPlan/Emodel",
            "description":
              "둔산 해링턴 플레이스 E-모델하우스를 온라인 VR 투어로 확인하세요. 세대별 평면도, 인테리어, 공간 활용을 실감나게 경험할 수 있습니다.",
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "contentUrl": "https://www.cssdesign.kr/img/og/emodel.jpg",
              "width": 1200,
              "height": 630
            },
            "breadcrumb": {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://www.cssdesign.kr/" },
                { "@type": "ListItem", "position": 2, "name": "E-모델하우스", "item": "https://www.cssdesign.kr/FloorPlan/Emodel" }
              ]
            }
          })}
        </script>
      </Helmet>



      <Header isChanged={isScroll} />
      <FixIcon />
      <Bener title="E-모델하우스" />
      <MenuBar contents={menuContents} />

      <h1 className={styles.screenReaderOnly}>둔산 해링턴 플레이스 - E-모델하우스</h1>

      <div className={styles.tabMenu}>
        {menuContents.slice(0, 5).map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedType(tab.key)}
            className={`${styles.tabButton} ${selectedType === tab.key ? styles.activeTab : ""}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className={styles.vrSection}>
        <p className={styles.vrDescription}>
          화면의 아무 곳이나 클릭하시면 해당 VR을 감상하실 수 있습니다.
        </p>
        <iframe
          className={styles.vrIframe}
          src={vrUrls[selectedType]}
          title={`${selectedType} VR`}
          allowFullScreen
          frameBorder="0"
        />
      </div>

      <Footer />
    </div>
  );
};

export default Emodel;
