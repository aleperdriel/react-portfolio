import Image from "next/image";


export default function ListCard({image, title, className, children }) {
    return (
        <div className={className + " " + "flex-row shadow-md my-8 mr-8 rounded-lg max-w-6xl"}>
            <Image width="auto" height="auto" src={image} className="rounded-t"></Image>
            <div className="p-10">
                <h3 className="text-2xl uppercase mb-10 border-b-2 pb-4 border-orange-500">{title}</h3>
                {children}
            </div>
        </div>
          
    )
}