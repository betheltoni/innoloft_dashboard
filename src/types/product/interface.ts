export interface ProductInterface {
    id: number
    name: string
    description: string
    picture: string
    type: {
        id: number
        name: string
    }
    categories: {
        id: number
        name: string
    }[]
    implementationEffortText: string
    investmentEffort: string
    trl: {
        id: number
        name: string
    }
    video: string
    user: {
        id: number
        email: string
        firstName: string
        lastName: string
        sex: number
        profilePicture: string
        position: string
    }
    company: {
        name: string
        logo: string
        address: {
            country: {
                name: string
            }
            city: {
                name: string
            }
            street: string
            house: string
            zipCode: string
            longitude: number
            latitude: number
        }
    }
    businessModels: {
        id: number
        name: string
    }[]
}

export interface ITrl {
    id: string
    name: string
    description: string
}

export interface IConfig {
    id: string
    logo: string
    mainColor: string
    hasUserSection: boolean
}