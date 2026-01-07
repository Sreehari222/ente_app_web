export interface LocationType {
    lat: number;
    lon: number;
}

export interface OpenHoursType {
    open: string;
    close: string;
}

export interface StoreType {
    id: number;
    title: string;
    description: string;
    image: string;
    images: string[];
    address: string;
    location: LocationType;
    phone: string;
    whatsapp: string;
    email: string;
    category: string;
    isVerified: boolean;
    rating: number;
    openHours: OpenHoursType;
}
