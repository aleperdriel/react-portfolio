export default function Tag({ colorBg = "gray-200", label }) {
    
    return (
        <p className={"inline mr-2 rounded py-1 px-2 bg-" + colorBg}>{label}</p>
    )
}