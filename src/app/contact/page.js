
import 'tailwindcss/tailwind.css'
import "../../app/globals.css"
import PillLink from '../components/PillLink';


export default function Contact() {
  return (
    <main className='h-[calc(100vh-2.5rem)] grid items-center'>
      <div className='text-center'>
        <h2 className="text-9xl font-bebas my-10">WANT TO WORK TOGETHER ?</h2>
        <div className="">
          <PillLink to="mailto:'auriane.le.perdriel@outlook.fr">Email</PillLink>
          <PillLink to="https://linkedin.com/in/aurianedev">LinkedIn</PillLink>
          <PillLink to="https://github.com/aleperdriel">Github</PillLink>
        </div>
      </div>
    </main>


  );
}
