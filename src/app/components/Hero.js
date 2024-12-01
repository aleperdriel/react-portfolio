export default function Hero() {
    return (
        <div className='grid grid-cols-2 grid-rows-1 h-[calc(100vh-2.5rem)] px-6'>
            {/* <div className="bg-hero_bg backdrop-blur bg-cover filter blur-sm absolute h-full w-full z-0"></div> */}
            <div className="col-start-1 row-start-1 col-span-1 text-left">
                <h1 className="text-9xl font-bold p6 text-orange-500 font-bebas">AURIANE LE PERDRIEL</h1>
            </div>
            <div className="col-start-2 row-start-2 row-end-2 col-span-1 text-right flex-wrap">
                <h2 className="text-9xl font-bold font-bebas">CREATIVE TECHNOLOGIST</h2>
            </div>
        </div>
    )
}