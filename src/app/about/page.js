
import 'tailwindcss/tailwind.css'
import "../../app/globals.css"
import Image from 'next/image';
import aboutImg from "../about.png"
import ListCard from '../components/ListCard';


export default function About() {
  return (
    <div className=' text-center'>
      <h2 className="text-4xl mt-10">About me</h2>

      <div className='flex mt-6 text-left'>
        <p>Ex reprehenderit in aute consectetur eu enim est excepteur esse elit. In eu exercitation ut do adipisicing proident proident ipsum mollit est dolor voluptate consectetur. Aliquip id esse ea laborum quis dolor exercitation anim. Laboris velit fugiat laborum consectetur culpa sint ad qui mollit. Veniam magna nulla labore ex exercitation est sunt. Nisi duis exercitation laborum labore sint ea labore eu est nulla nostrud.

Qui dolore pariatur est cupidatat ea culpa laboris voluptate ex nulla duis mollit. Nulla elit consequat dolore minim elit. Consectetur officia ea magna nisi duis labore sit pariatur culpa. Consectetur cupidatat elit ea ad ipsum in consequat proident. Ullamco proident quis cupidatat sint dolore culpa. Laborum ea proident amet consequat officia Lorem ipsum mollit. Labore fugiat incididunt ullamco et voluptate nulla veniam proident velit anim incididunt est laborum commodo.</p>
        <Image src={aboutImg} width="400" height="200" className="rounded-full object-cover"></Image>
      </div> 
      <div>
        <h3 className='font-bold text-2xl'>Education</h3>
        
      </div>
      <div>
        <h3 className='font-bold text-2xl'>Professionnal experiences</h3>
        
      </div>
    </div>

  );
}
