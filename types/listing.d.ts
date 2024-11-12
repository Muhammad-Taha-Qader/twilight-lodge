// types/listing.d.ts

export interface Listing {
    id: string;
    title: string;
    location: string;
    distance: string;
    dateRange: string;
    price: number;
    rating: number;
    isFavorite: boolean;
    isSoldOut: boolean;
    images: string[];
    description: string;
  }
  