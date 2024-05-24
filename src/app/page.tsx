
import dynamic from 'next/dynamic'

const AboutMe = dynamic(() => import('@/components/aboutMe'))
const MySkill = dynamic(() => import('@/components/mySkill'))
const Project = dynamic(() => import('@/components/project'))


export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center justify-between  w-full ">
      <div className="min-h-screen p-24">
        <AboutMe />
      </div>
      <div className="min-h-screen  p-24">
        <MySkill />
      </div>
      <div className="min-h-screen  p-24 bg-black w-full">
        <Project />
      </div>

    </main>
  );
}
