import { treepzAdminRoute } from "./utils/routes"
import { NavLink } from "react-router-dom"
import styles from "./sidebar.module.scss"
import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { fetchConfig } from "../../../store/features/configurationSlice"
const SideBar = () => {
    const dispatch = useAppDispatch()
    const config = useAppSelector((state) => state.config.storeConfig)
    useEffect(() => {
        dispatch(fetchConfig())
    }, [dispatch])

    return (
        <aside className={`w-full text-base pb-8 pt-8 h-screen`} style={{backgroundColor: `${config?.mainColor}`}}>
            <ul className="pb-20">
                {treepzAdminRoute.map((item, index) => {
                    return (
                        <NavLink
                            to={item.route}
                            key={index}
                            className={({ isActive }) =>
                                isActive
                                    ? `flex p-4 font-inter   ${styles.active}`
                                    : "flex p-4 text-gray-100 font-inter "
                            }
                        >
                            <item.icon />
                            <span className="pl-4 cursor-pointer font-inter ">
                                {item.title}
                            </span>
                        </NavLink>
                    )
                })}
                <hr className="my-6 border border-white-5 w-[90%] mx-auto" />
            </ul>
        </aside>
    )
}

export default SideBar
