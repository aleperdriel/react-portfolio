import Section from ".//Section";

export default function Header({ children }) {
    return (
        <nav className="flex">
            <div className=""></div>
            <div className="ml-auto mt-4 w-1/3">
                <ul className="flex justify-around uppercase">
                    <li>About</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
        </nav>
    )
}