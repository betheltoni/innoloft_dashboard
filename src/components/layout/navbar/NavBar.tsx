import { NavBarInterface } from "../../../types/layout/interface"
import { HiMenuAlt2 } from "react-icons/hi"
import { useAppDispatch, useAppSelector } from "../../../store/store"
import { useEffect } from "react"
import { fetchConfig } from "../../../store/features/configurationSlice"

const NavBar = ({ setOpenSideBar, noTopNav }: NavBarInterface) => {
    const dispatch = useAppDispatch()
    const config = useAppSelector((state) => state.config.storeConfig)
    useEffect(() => {
        dispatch(fetchConfig())
    }, [dispatch])
    console.log(config)

    return (
        <>
            <nav className={`w-full  pt-6  ${!noTopNav && ""} `}>
                {!noTopNav && (
                    <>
                        <div className=" flex items-center justify-end gap-8 mr-4 lg:mr-12 pb-4 ">
                            <div className=" md:hidden cursor-pointer mr-auto ml-6">
                                <HiMenuAlt2
                                    size={28}
                                    onClick={() => setOpenSideBar(true)}
                                />
                            </div>
                            <img src={config?.logo} alt="" className="w-[15%] h-[50px]" />
                        </div>
                        <hr className="text-white-100 border-solid border-1 border-blue-20" />
                    </>
                )}
            </nav>
        </>
    )
}

export default NavBar
