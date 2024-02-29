import AdminHeader from "../../components/AdminHeader"

export default function ColorBoxLayout({children , left , right}) {
    const isSidebar = true
    return(
        <section>
            {children}
            <AdminHeader />
            {isSidebar ? left : right}
        </section>
    )
}