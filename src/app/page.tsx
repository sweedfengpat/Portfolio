
import dynamic from 'next/dynamic'

const HomePage = dynamic(() => import('@/components/Home'))
const MySkill = dynamic(() => import('@/components/mySkill'))
const Experience = dynamic(() => import('@/components/experience'))
const AboutMe = dynamic(() => import('@/components/aboutMe'))


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between  w-full ">
      <div className="min-h-screen p-6 xl:px-24 xl:pt-56 xl:pb-24">
        <HomePage />
      </div>
      <div className="min-h-screen  p-6 xl:p-24">
        <MySkill />
      </div>
      <div className="min-h-screen  p-6 xl:p-24 bg-black w-full">
        <Experience />
      </div>
      <div className="min-h-screen  p-6 xl:p-24">
        <AboutMe />
      </div>
    </main>
  );
}
