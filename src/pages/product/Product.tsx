import Layout from "../../components/layout"
import productImage from "../../assets/images/productImage.jpg"
import { TfiSettings } from "react-icons/tfi"
import { CiEdit, CiTimer } from "react-icons/ci"
import { TbChessKnight } from "react-icons/tb"
import { GiMoneyStack } from "react-icons/gi"
import { Button } from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../store/store"
import UserSection from "./component/UserSection"

const Product = () => {
    const product = useAppSelector((state) => state.product.storeProduct)
    const config = useAppSelector((state) => state.config.storeConfig)

    const navigate = useNavigate()
    return (
        <>
            <Layout>
                <main className="md:p-6 p-6 mt-4 md:mt-14">
                    <div className="lg:flex gap-x-10">
                        <section className="basis-2/3 border-2 border-gray-200 rounded-xl my-4 ">
                            <img src={productImage} alt="" />
                            <div className="flex justify-between">
                                <h1 className="font-bold text-3xl my-2 px-2">
                                    {product?.name}
                                </h1>
                                <Button
                                    variant="filled"
                                    className="bg-black mt-2 mr-2"
                                    leftIcon={<CiEdit size="23" />}
                                    onClick={() => navigate("/product/edit")}
                                >
                                    Edit
                                </Button>
                            </div>
                            <p className="text-black-60 text-base px-2 font-medium pb-2">
                                {product?.type?.name}
                            </p>
                            <p className="text-black-200 px-2 text-sm pb-5">
                                {product?.description}
                            </p>
                        </section>
                        {config?.hasUserSection === true && <UserSection />}
                    </div>
                    <section className="p-4 border-2 border-gray-200 rounded-xl my-8">
                        <h1>Video</h1>
                        <iframe
                            allowFullScreen
                            className="w-[100%] h-[500px]"
                            src={product.video}
                        ></iframe>
                    </section>
                    <section className="text-gray-400 p-4 border-2 border-gray-200 rounded-xl">
                        <h1 className="text-black mb-4">Offer Details</h1>
                        <div className="lg:flex gap-8">
                            <section className="basis-1/2">
                                <div className="mb-8">
                                    <div className="mb-4">
                                        <TfiSettings
                                            size={22}
                                            className="inline"
                                        />
                                        <span className="text-md pl-3">
                                            Technology
                                        </span>
                                    </div>
                                    <div className="flex gap-x-8">
                                        {product?.categories?.map(
                                            (category, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-200 py-1 px-2 rounded-full"
                                                >
                                                    <p className="text-sm">
                                                        {category?.name}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="mb-4">
                                        <CiTimer size={23} className="inline" />
                                        <span className="text-md pl-3">
                                            TRL
                                        </span>
                                    </div>

                                    <div>
                                        <p className="bg-gray-200 text-sm py-1 px-2 w-fit rounded-full">
                                            {product?.trl?.name}
                                        </p>
                                    </div>
                                </div>
                            </section>
                            <section className="basis-1/2">
                                <div className="mb-8">
                                    <div className="mb-4">
                                        <TbChessKnight
                                            size={23}
                                            className="inline"
                                        />
                                        <span className="text-md pl-3">
                                            Business Model
                                        </span>
                                    </div>

                                    <div className="gap-y-4 grid grid-cols-2 md:grid-cols-3 lg:flex gap-x-8">
                                        {product?.businessModels?.map(
                                            (model, index) => (
                                                <div
                                                    key={index}
                                                    className="bg-gray-200 py-1 px-2 rounded-full"
                                                >
                                                    <p className="text-sm">
                                                        {model?.name}
                                                    </p>
                                                </div>
                                            )
                                        )}
                                    </div>
                                </div>
                                <div className="mb-8">
                                    <div className="mb-4">
                                        <GiMoneyStack
                                            size={23}
                                            className="inline"
                                        />
                                        <span className="text-md pl-3">
                                            Costs
                                        </span>
                                    </div>

                                    <div>
                                        <p className="bg-gray-200 text-sm py-1 px-2 w-fit rounded-full">
                                            {product?.investmentEffort}
                                        </p>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </section>
                </main>
            </Layout>
        </>
    )
}

export default Product
