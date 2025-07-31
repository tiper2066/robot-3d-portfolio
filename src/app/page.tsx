import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Home() {
    return (
        <main>
            {/* ---------- Gradient Image : 스팟라이트 효과 : 우상단 배치, 투명도 60% z-index -1 ---------- */}
            <img
                className='absolute top-0 right-0 opacity-60 -z-10'
                src='/gradient.png'
                alt='gradient'
            />
            {/* ---------- 시각효과 위한 Blur 효과 배경 빛: 우상단에서 아래로 커질 예정 ---------- */}
            {/* x,y 이동없이 블러 900px(잘안보여서 200으로 설정함), 스프레드 20px, 블러색 #e99b63 시계반대로 30도 회전, 제일 아래 배치  */}
            <div className='h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_200px_20px_#e99b63] -rotate-[30deg] -z-10'></div>

            {/* ---------- Header 섹션 ---------- */}
            <Header />
            {/* ---------- Hero 섹션 ---------- */}
            <Hero />
        </main>
    );
}
