import Menu from "./Menu"

export const Layout = ({ children, ...divProps }) => {
    return (
        <div {...divProps}>
            <Menu />
            {
                children
            }
        </div>
    )
}