export default function PillLink({ to, className, children }) {
    return (
        <a href={to} className={className + " " + "rounded-full border border-gray-400 py-2 px-4 mx-4 hover:bg-zinc-200 inline-block" }>{children}</a>
    )
}