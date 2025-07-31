'use client'; // ************************************** client-side rendering
import { BiDiamond } from 'react-icons/bi'; // 다이아몬드 아이콘
import { BiLinkExternal } from 'react-icons/bi'; // 외부 링크 아이콘
import Spline from '@splinetool/react-spline'; //  spline 라이브러리
import AOS from 'aos'; // ******************* AOS 모듈 (typescript 에서는 npm i --save-dev @types/aos 를 함께 설치해야함)
import 'aos/dist/aos.css'; // ******************* AOS 모듈의 기본 스타일
import { useEffect } from 'react'; // ******************* useEffect 훅

const Hero = () => {
    // ************************************ AOS 애니메이션을 위한 함수 설정
    useEffect(() => {
        AOS.init({
            duration: 1500, // 진행 시간
            once: true, // 한번만 실행하기
        });
    }, []);

    return (
        // ---------- 최상위 컨테이너: 기본 수직정렬, 1024 이상 수평정렬, 높이 화면 90vh - 96px  ----------
        <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]'>
            {/* -----  좌측 영역 (타이틀, 설명문구, 버튼)  ----- */}
            <div
                className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'
                data-aos='fade-right' // ************* ASO 애니
                data-aos-offset='300' // ************* ASO 애니
                data-aos-easing='ease-in-sine' // ************* ASO 애니
            >
                {/* ----- 좌우 둥근바 버튼: 그라데이션 테두리, 하단 블러 ----- */}
                <div className='relative w-[95%] sm:w-48 h-10 bg-gradient-to-r from-[#656565] to-[#e99b63] shadow-[0_0_15px_rgba(255,255,255,0.4)] rounded-full'>
                    <div className='absolute inset-[3px] bg-black rounded-full flex items-center justify-center gap-1'>
                        <BiDiamond /> INTRODUCING
                    </div>
                </div>

                {/* ----------  타이틀 영역 ---------- */}
                <h1 className='text-3xl sm:text-4xl md:text-sl lg:text-6xl font-semibold tracking-wider my-8'>
                    EMAIL FOR <br />
                    DEVELOPERS
                </h1>
                {/* ----------  설명 문구 영역 ---------- */}
                <p className='text-base sm:text-lg tracking-wider texst-gray-400 max-w-[25rem] lg:max-w-[30rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa dicta non quia accusantium illo obcaecati labore,
                    voluptatum, et autem voluptas ipsam sunt recusandae odio
                    atque aut quos eius dolorem sint?
                </p>
                {/* ----------  액션 버튼 ---------- */}
                <div className='flex gap-4 mt-12'>
                    <a
                        href='#'
                        className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider
                        transition-all duration-300 hover:bg-[#1a1a1a]'
                    >
                        Documentation{' '}
                        <BiLinkExternal className='inline-block' />
                    </a>
                    <a
                        href='#'
                        className='border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm font-semibold tracking-wider
                        transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white'
                    >
                        GetStarted <BiLinkExternal className='inline-block' />
                    </a>
                </div>
            </div>

            {/* -----  3D 로봇 영역  ----- */}
            <Spline
                className='absolute lg:top-0 top-[-20%] bottom-0 lg:left-[25%] h-full -z-1'
                scene='https://prod.spline.design/gtuL1hqX7QHNkqHb/scene.splinecode'
                data-aos='fade-zoom-in' // ************* ASO 애니
                data-aos-offset='0' // ************* ASO 애니
                data-aos-delay='300' // ************* ASO 애니
                data-aos-duration='3000' // ************* ASO 애니
                data-aos-easing='ease-in-back' // ************* ASO 애니
            />
        </main>
    );
};
export default Hero;
