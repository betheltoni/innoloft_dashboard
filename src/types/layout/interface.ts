import { Dispatch, ReactNode, SetStateAction } from "react"

export interface NavBarInterface {
    setOpenSideBar: Dispatch<SetStateAction<boolean>>
    noTopNav?: boolean
}
export interface SidebarRoutesInterface {
    icon: React.FunctionComponent
    title: string
    route: string
}

export interface LayoutProps {
    pageTitle?: string
    children: ReactNode
    noTopNav?: boolean
}
