export const Section = ({id, title, children, className}) => {
    return (
        <section id={id} className={className + " " + "ml-10"}>
            <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
            {children}   
        </section>
    )
}