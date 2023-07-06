import Dashboard from "../../../../assets/sidebar/Dashboard"
import Product from "../../../../assets/sidebar/Product"
import { SidebarRoutesInterface } from "../../../../types/layout/interface"

export const treepzAdminRoute: SidebarRoutesInterface[] = [
    { icon: Dashboard, title: "Dashboard", route: "/" },
    {
        icon: Product,
        title: "Product",
        route: "/product",
    },
    
]
