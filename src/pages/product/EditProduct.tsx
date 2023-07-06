import Layout from "../../components/layout"
import productImage from "../../assets/images/productImage.jpg"
import { TfiSettings } from "react-icons/tfi"
import { CiTimer } from "react-icons/ci"
import { TbChessKnight } from "react-icons/tb"
import { GiMoneyStack } from "react-icons/gi"
import { useForm } from "@mantine/form"
import {
    Button,
    Group,
    Select,
    SelectItem,
    TextInput,
    Textarea,
} from "@mantine/core"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../store/store"
import { useEffect, useState } from "react"
import {
    editProductState,
    updateStore,
} from "../../store/features/productSlice"
import { ProductInterface } from "../../types/product/interface"
import { fetchTrl } from "../../store/features/trlSlice"
import { fetchConfig } from "../../store/features/configurationSlice"
import UserSection from "./component/UserSection"

const EditProduct = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [, setSubmittedValues] = useState<ProductInterface>()
    const product = useAppSelector((state) => state.product.storeProduct)
    const trl = useAppSelector((state) => state.trl.storeTrl)
    const config = useAppSelector((state) => state.config.storeConfig)

    const initialValues = {
        title: product?.name,
        type: product?.type?.name,
        description: product?.description,
        video: product?.video,
        category_0: product?.categories?.[0]?.name,
        category_1: product?.categories?.[1]?.name || "",
        model_0: product?.businessModels?.[0]?.name,
        model_1: product?.businessModels?.[1]?.name,
        model_2: product?.businessModels?.[2]?.name,
        model_3: product?.businessModels?.[3]?.name,
        trlValue: product?.trl?.name,
        investmentEffort: product?.investmentEffort,
    }
    const form = useForm({
        initialValues: initialValues,
        transformValues: (values) => ({
            name: values.title,
            description: values.description,
            type: { id: 0, name: values.type },
            video: values.video,
            categories: [
                { id: 0, name: values.category_0 },
                { id: 1, name: values.category_1 },
            ],
            businessModels: [
                { id: 0, name: values.model_0 },
                { id: 1, name: values.model_1 },
                { id: 2, name: values.model_2 },
                { id: 3, name: values.model_3 },
            ],
            trl: {
                id: 0,
                name: values.trlValue,
            },
            investmentEffort: product.investmentEffort,
            user: {
                id: product.user.id,
                email: product.user.email,
                firstName: product.user.firstName,
                lastName: product.user.lastName,
                sex: product.user.sex,
                profilePicture: product.user.profilePicture,
                position: product.user.position,
            },
            company: {
                name: product.company.name,
                logo: product.company.logo,
                address: {
                    country: {
                        name: product.company.address.country.name,
                    },
                    city: {
                        name: product.company.address.city.name,
                    },
                    street: product.company.address.street,
                    house: product.company.address.house,
                    zipCode: product.company.address.zipCode,
                    longitude: product.company.address.longitude,
                    latitude: product.company.address.latitude,
                },
            },
        }),
    })

    const handleSubmitForm = () => {
        dispatch(editProductState())
        setIsSubmitted(true)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleUpdateStore = (e: any) => {
        dispatch(updateStore({ ...e }))
        handleSubmitForm()
        navigate(-1)
    }
    let trlData: readonly (string | SelectItem)[]
    if (trl) {
        trlData = trl?.map((item) => {
            return {
                label: item?.name,
                value: item?.name,
            }
        })
    } else {
        trlData = []
    }

    useEffect(() => {
        dispatch(fetchTrl())
        dispatch(fetchConfig())
    }, [dispatch])
    return (
        <>
            <Layout>
                <main className="md:p-6 p-6 mt-4 md:mt-14">
                    <form
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        onSubmit={form.onSubmit((values: any) => {
                            setSubmittedValues(values)
                            handleUpdateStore(values)
                        })}
                    >
                        <div className=" lg:flex gap-x-10">
                            <section className="basis-2/3 border-2 border-gray-200 rounded-xl my-4 ">
                                <img src={productImage} alt="" />
                                <TextInput
                                    className="font-bold text-3xl my-2 px-2"
                                    placeholder={product?.name}
                                    {...form.getInputProps("title")}
                                />
                                <TextInput
                                    className="text-black-60 text-base px-2 font-medium pb-2"
                                    placeholder={product?.type?.name}
                                    {...form.getInputProps("type")}
                                />
                                <Textarea
                                    className="text-black-200 px-2 text-sm pb-5"
                                    placeholder={product?.description}
                                    autosize
                                    minRows={2}
                                    {...form.getInputProps("description")}
                                />
                            </section>
                            {config?.hasUserSection === true && <UserSection />}
                        </div>
                        <section className="p-4 border-2 border-gray-200 rounded-xl my-8">
                            <h1>Video</h1>
                            <TextInput
                                className="text-black-60 text-base px-2 font-medium pb-2"
                                placeholder={product?.video}
                                {...form.getInputProps("video")}
                            />
                        </section>
                        <section className="text-gray-400 p-4 border-2 border-gray-200 rounded-xl">
                            <h1 className="text-black mb-4">Offer Details</h1>
                            <div className="md:flex lg:flex gap-8">
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
                                                    <div key={index}>
                                                        <TextInput
                                                            className="text-black-60 text-base px-2 font-medium pb-2"
                                                            placeholder={
                                                                category?.name
                                                            }
                                                            {...form.getInputProps(
                                                                `category_${index}`
                                                            )}
                                                        />
                                                    </div>
                                                )
                                            )}
                                        </div>
                                    </div>
                                    <div className="mb-8">
                                        <div className="mb-4">
                                            <CiTimer
                                                size={23}
                                                className="inline"
                                            />
                                            <span className="text-md pl-3">
                                                TRL
                                            </span>
                                        </div>

                                        <div>
                                            <Select
                                                data={trlData}
                                                placeholder="Pick all that you like"
                                                {...form.getInputProps(
                                                    `trlValue`
                                                )}
                                            />
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
                                                    <div key={index}>
                                                        <TextInput
                                                            className="text-black-60 text-base px-2 font-medium pb-2"
                                                            placeholder={
                                                                model?.name
                                                            }
                                                            {...form.getInputProps(
                                                                `model_${index}`
                                                            )}
                                                        />
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
                        <Group position="right" mt="md">
                            <Button
                                type="submit"
                                variant="filled"
                                className="bg-red-700 mt-2 mr-2"
                                onClick={() => navigate(-1)}
                            >
                                cancel
                            </Button>

                            {isSubmitted === false ? (
                                <Button
                                    type="submit"
                                    variant="filled"
                                    className="bg-black mt-2 mr-2"
                                >
                                    Submit
                                </Button>
                            ) : (
                                <Button
                                    variant="filled"
                                    className="bg-black mt-2 mr-2"
                                    onClick={(e) => handleUpdateStore(e)}
                                >
                                    Update Store
                                </Button>
                            )}
                        </Group>
                    </form>
                </main>
            </Layout>
        </>
    )
}

export default EditProduct
