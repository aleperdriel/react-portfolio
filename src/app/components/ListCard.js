import Image from "next/image";


export default function ListCard({image, className, children }) {
    return (
        <div className={className + " " + "flex items-center p-10 shadow-md my-8 mr-8 rounded-lg max-w-6xl"}>
            <Image width="400" height="200" src={image}></Image>
            <p className="mx-16">Qui elit magna veniam dolor ad occaecat ad deserunt Qui elit magna veniam dolor ad occaecat ad deseruntQui elit magna veniam dolor ad occaecat ad deserunt Qui elit magna veniam dolor ad occaecat ad deserunt.</p>
        </div>
          
    )
}