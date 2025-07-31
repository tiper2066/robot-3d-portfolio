'use client';
import { BiMenu } from 'react-icons/bi'; // react-icons (Boxicons)
import AOS from 'aos'; // ******************* AOS 모듈 (typescript 에서는 npm i --save-dev @types/aos 를 함께 설치해야함)
import 'aos/dist/aos.css'; // ******************* AOS 모듈의 기본 스타일
import { useEffect } from 'react'; // ******************* useEffect 훅

const Header = () => {
    // ************************************ AOS 애니메이션을 위한 함수 설정
    useEffect(() => {
        AOS.init({
            duration: 1500, // 진행 시간
            once: true, // 한번만 실행하기
        });
    }, []);

    const toggleMobileMenu = () => {
        const mobileMenu = document.querySelector('#mobileMenu');
        if (mobileMenu?.classList.contains('hidden')) {
            mobileMenu?.classList.remove('hidden');
        } else {
            mobileMenu?.classList.add('hidden');
        }
    };

    return (
        <header className='flex justify-between items-center py-4 px-4 lg:px-20'>
            {/* ----- 사이트 로고 ----- */}
            <h1
                className='text-3xl md:text-4xl lg:text-5xl font-light m-0'
                data-aos='fade-down' // ************* ASO 애니
                data-aos-easing='linear' // ************* ASO 애니
                data-aos-duration='1500' // ************* ASO 애니
            >
                MCODE
            </h1>

            {/* ----- 네비게이션 메뉴 ----- */}
            <nav className='hidden md:flex items-center gap-12'>
                <a
                    className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
                    href='#'
                    data-aos='fade-down' // ************* ASO 애니
                    data-aos-easing='linear' // ************* ASO 애니
                    data-aos-duration='1000' // ************* ASO 애니
                >
                    COMPANY
                </a>
                <a
                    className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
                    href='#'
                    data-aos='fade-down' // ************* ASO 애니
                    data-aos-easing='linear' // ************* ASO 애니
                    data-aos-duration='1500' // ************* ASO 애니
                >
                    FEATURES
                </a>
                <a
                    className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
                    href='#'
                    data-aos='fade-down' // ************* ASO 애니
                    data-aos-easing='linear' // ************* ASO 애니
                    data-aos-duration='2000' // ************* ASO 애니
                >
                    RESOURCES
                </a>
                <a
                    className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
                    href='#'
                    data-aos='fade-down' // ************* ASO 애니
                    data-aos-easing='linear' // ************* ASO 애니
                    data-aos-duration='2500' // ************* ASO 애니
                >
                    DOCS
                </a>
            </nav>

            {/* ----- Sign In 버튼 ----- */}
            {/* 기본숨김, 기본 텍스트 검정, 배경 회색, 좌우 원형 모서리, 테두리없음, 마우스 오버 시 흰색으로 트랜지션 */}
            <button
                className='hidden md:block bg-[#a7a7a7] text-black py-3 px-8 rounded-full border-none font-medium 
                            transition-all duration-500 hover:bg-white cursor-pointer z-50'
            >
                SIGNIN
            </button>

            {/* -----  모바일 메뉴 섹션 ----- */}
            {/* ----- 햄버거 버튼: 모바일에서 보임 ----- */}
            <button onClick={toggleMobileMenu}>
                <BiMenu className='text-4xl md:hidden p-2 z-50' />
            </button>

            {/* ----- 모바일 네비게이션 메뉴 : 위에서 64px 아래 전체 영역으로 고정. 70% 투명도, 배경 블러 ----- */}
            <div
                id='mobileMenu'
                className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black/70 backdrop-blur-md'
            >
                <nav className='flex flex-col gap-6 items-center'>
                    <a
                        className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
                        href='#'
                    >
                        COMPANY
                    </a>
                    <a
                        className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
                        href='#'
                    >
                        FEATURES
                    </a>
                    <a
                        className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
                        href='#'
                    >
                        RESOURCES
                    </a>
                    <a
                        className='text-base tracking-wider transition-colors hover:text-gray-300 z-50'
                        href='#'
                    >
                        DOCS
                    </a>
                </nav>
            </div>
        </header>
    );
};
export default Header;
