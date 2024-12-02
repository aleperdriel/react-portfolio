export const Section = ({id, title, children, className}) => {
    return (
        <section id={id} className={className + " " + ""}>
            <h2 className="text-7xl font-bold my-6 px-24 border-y-2 border-orange-500 w-full p-6">{title}</h2>
            {children}   
        </section>
    )
}