
import NavBar from "./navbar/NavBar"
import { useState } from "react";
import { Drawer } from "@mantine/core";
import { FaTimes } from "react-icons/fa";
import { LayoutProps } from "../../types/layout/interface";
import SideBar from "./sidebar/SideBar";

const Layout = ({ children, noTopNav }: LayoutProps) => {
    const [openSideBar, setOpenSideBar] = useState(false)
    return (
        <div className="h-screen relative">
            <div className="w-full lg:w-[calc(100%-256px)] md:w-[calc(100%-256px)] fixed right-0 z-20 bg-white-100 pb-3 md:pb-0">
                <NavBar noTopNav={noTopNav} setOpenSideBar={setOpenSideBar}  />
            </div>
            <div className="relative md:pl-64 h-full">
                <div className="hidden md:block fixed bg-black-100 left-0 w-64  h-[100%] overflow-y-auto">
                    <SideBar/>
                </div>
                <>
                    <Drawer
                        opened={openSideBar}
                        onClose={() => setOpenSideBar(false)}
                        size="75%"
                        withCloseButton={false}
                        padding={0}
                        // styles={() => ({
                        //     drawer: {
                        //         padding: 0,
                        //         backgroundColor: "transparent",
                        //         overflow: "auto",
                        //     }
                        // })}
                    >
                        <div className="relative">
                            <div className=" md:hidden  absolute right-10 top-10">
                                <FaTimes 
                                    size={20} 
                                    style={{color:"#FFFFFF"}} 
                                    onClick={() => setOpenSideBar(false)} 
                                    onKeyDown={() => setOpenSideBar(false)}/>
                            </div>
                            <div className="w-full h-3/4 md:h-[500px] overflow-y-scroll md:pt-[75px] bg-black-100">
                                <SideBar/>
                            </div>
                        </div>
                    </Drawer>
                </>
                <main
                    className={`w-full h-full overflow-y-auto  ${
                        !noTopNav && "py-5 lg:px-2"
                    } `}
                >
                    {children}
                </main>
            </div>
        </div>
    )
}

export default Layout
