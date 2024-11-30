import styles from './Header.module.css';

export default function Hero({ children }) {
    return (
        <div>
            <div className="text-center p-6 text-orange-500 w-full flex align-middle">
                <h1 className="text-7xl font-bold">AURIANE LE PERDRIEL</h1>
            </div>
            <div className="flex justify-end align-bottom h-full">
                <h2 className="text-7xl font-thin">CREATIVE TECHNOLOGIST</h2>
            </div>
        </div>
    )
}