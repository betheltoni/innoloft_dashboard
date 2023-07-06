import { FaUser } from "react-icons/fa"
import { HiOfficeBuilding } from "react-icons/hi"
import { TiLocation } from "react-icons/ti"
import SimpleMap from "../../../components/map/Map"
import { useAppSelector } from "../../../store/store"

const UserSection = () => {
    const product = useAppSelector((state) => state.product.storeProduct)
    return (
        <section className="basis-1/3 border-2 border-gray-200 rounded-xl mx-auto">
            <div>
                <h1 className="text-lg text-gray-300 p-2">Offered by</h1>
                <img
                    src={product?.company?.logo}
                    alt=""
                    className="w-[50%] ml-5"
                />
                <div className=" p-3 rounded-lg ml-1 mb-4 mr-1 ">
                    <img
                        src={product?.user?.profilePicture}
                        alt=""
                        className="inline rounded-full p-2 w-[200px] h-[200px]"
                    />
                    <div>
                        <div className="flex gap-2">
                            <FaUser size={20} className="text-gray-400" />
                            <p className="text-xl font-bold">
                                {" "}
                                {product?.user?.firstName}{" "}
                                {product?.user?.lastName}
                            </p>
                        </div>
                        <div className="flex gap-2">
                            <HiOfficeBuilding
                                size={20}
                                className="text-gray-400"
                            />
                            <p className="text-sm font-medium">
                                {product?.company?.name}
                            </p>
                            <p className="text-sm font-medium">
                                ({product?.user?.position})
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2 ">
                    <div className="flex ml-4">
                        <TiLocation
                            size={23}
                            className="text-gray-400 inline"
                        />
                        <span className="text-sm">
                            {product?.company?.address?.house}{" "}
                            {product?.company?.address?.street}{" "}
                            {product?.company?.address?.city?.name}{" "}
                            {product?.company?.address?.country?.name} (
                            {product?.company?.address?.zipCode})
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <SimpleMap />
            </div>
        </section>
    )
}

export default UserSection
