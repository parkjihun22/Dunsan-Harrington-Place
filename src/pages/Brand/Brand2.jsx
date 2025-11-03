import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import YouTube from 'react-youtube';

import styles from './Brand.module.scss';
import Header from "../../components/Header/Header";
import MenuBar from "../../components/MenuBar/MenuBar";
import Footer from "../../components/Footer/Footer";
import Bener from "../../components/Bener/Bener";
import FixIcon from "../../components/FixIcon/FixIcon";
import { Helmet } from "react-helmet-async";

const Brand2 = () => {
	const menuContents = [
		{ title: "브랜드 소개", url: "/brand/intro" }, 
		{ title: "홍보 영상", url: "/brand/video" }];


	const [isScroll, setIsScroll] = useState(false);
	const [isTextVisible, setIsTextVisible] = useState(true); // isTextVisible 상태 추가
	const isMobile = useMediaQuery({ query: '(max-width: 900px)' });
	const { pathname } = useLocation(); // 현재 경로를 가져옴

	useEffect(() => {
		window.scrollTo(0, 0); // 페이지가 로드될 때 스크롤을 최상단으로 이동
	}, [pathname]); // pathname이 변경될 때마다 실행

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setIsScroll(true);
			} else {
				setIsScroll(false); 
			}
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={styles.container}>
				<Helmet>
				<title>둔산 해링턴 플레이스 - 홍보영상</title>
				<meta
					name="description"
					content="둔산 생활권과 갑천 리버뷰 입지, 세대 설계와 커뮤니티, 자연·도심 인프라를 한눈에 보는 둔산 해링턴 플레이스 홍보영상."
				/>
				<link rel="canonical" href="https://www.dwbsongs.com/Brand/video" />
				<meta name="robots" content="index,follow" />

				{/* OG 태그 */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="둔산 해링턴 플레이스" />
				<meta property="og:title" content="둔산 해링턴 플레이스 - 홍보영상" />
				<meta
					property="og:description"
					content="리버뷰 랜드마크, 둔산 해링턴 플레이스의 설계·커뮤니티·입지 프리미엄을 영상으로 만나보세요."
				/>
				<meta property="og:url" content="https://www.dwbsongs.com/Brand/video" />
				<meta property="og:image" content="https://www.dwbsongs.com/images/og/main.jpg" />

				{/* Twitter */}
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:title" content="둔산 해링턴 플레이스 - 홍보영상" />
				<meta
					name="twitter:description"
					content="갑천 리버뷰·둔산 생활권 프리미엄을 담은 홍보영상. 설계·커뮤니티·인프라를 한 번에 확인하세요."
				/>
				<meta name="twitter:image" content="https://www.dwbsongs.com/images/og/main.jpg" />
				</Helmet>

				<Header isChanged={isScroll} />
				<FixIcon />

				<Bener title="홍보영상" />

				<MenuBar contents={menuContents} />

				{/* h1: SEO용 스크린리더 텍스트 수정 (용인 → 대전/둔산) */}
				<h1 className={styles.screenReaderOnly}>둔산 해링턴 플레이스 - 홍보영상</h1>
				<p className={styles.screenReaderOnly}>
				둔산 생활권과 갑천 리버뷰를 갖춘 둔산 해링턴 플레이스의 홍보영상을 통해
				세대 설계, 첨단 커뮤니티, 풍부한 생활 인프라를 생생하게 확인하세요.
				</p>

				<div className={`${styles.textBox} ${isTextVisible ? styles.active : ''}`}>
				<div>리버뷰의 여유 위에</div>
				<div>둔산의 새로운 자부심이 시작됩니다.</div>
				</div>


			<div className={styles.videoContainer}>
				<YouTube
					videoId="hCZpdeaS3oo"
					opts={{
						width: isMobile ? "400" : "1300",
						height: isMobile ? "300" : "500",
						playerVars: {
							autoplay: 1,
							rel: 0,
							modestbranding: 1,
						},
					}}
					onEnd={(e) => {
						e.target.stopVideo(0);  // 비디오 종료 시 정지
					}}
				/>
			</div>

			<Footer />
		</div>
	)
}

export default Brand2;
