import Image from 'next/image'
import Homepage from '../components/home/Homepage';


export default async function Home() {
    const response=await fetch(`${process.env.DOMAIN}/api/`,{ cache: 'force-cache' });
    const sampleData=await response.json();

  return (
    <main className="bg-primary min-h-screen mx-auto">
      <Homepage data={sampleData} />
    </main>
  )
}
