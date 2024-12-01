import Section from "./Section";

export default function PillLink({ to, children }) {
    return (
        <a href={to} className="rounded-full border border-gray-400 py-2 px-4 mx-4 hover:bg-zinc-200 ">{children}</a>
    )
}