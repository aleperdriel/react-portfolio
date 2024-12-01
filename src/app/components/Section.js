export const Section = ({title, children, className}) => {
    return (
        <section className={className + " " + "ml-10"}>
            <h2 className="text-4xl font-bold text-center mb-6">{title}</h2>
            {children}   
        </section>
    )
}