// types/booking.ts
//booking for admin page has diff type as we are populating booking listingId and userId with full required data for manger page
export interface Booking {
    _id: string;
    listingId: string; 
    userId: string; 
    startDate: string;
    endDate: string;
    status: string;
  }
  