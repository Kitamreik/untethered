import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";


const MVPAdminDashboard: React.FC = () => {
  
  //MVP Skeleton
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
         MVP Admin Dashboard
        </h2>
             
        <div className="flex flex-col">
          <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">Intake Form Entries</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-300 rounded-lg">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="px-4 py-2 border">Name</th>
                        <th className="px-4 py-2 border">Email</th>
                        <th className="px-4 py-2 border">Phone Number</th>
                        <th className="px-4 py-2 border">Services Required</th>
                        <th className="px-4 py-2 border">Tier Selection</th>
                        <th className="px-4 py-2 border">Initial Questions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* map here */}
                    </tbody>
                  </table>
                </div>
          </div>
        </div>
       
        {/* Carousel Wrapper */}
        <Carousel className="w-full">
          <CarouselContent>
            {/* Purchases Table Slide */}
            <CarouselItem>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-4">Purchased Packages</h3>
                <div className="flex-1 overflow-x-auto overflow-y-auto max-h-[400px] border rounded-lg">
                  <table className="min-w-full border-collapse">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                      <tr>
                        <th className="px-4 py-2 border text-sm sm:text-base">User Email</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Package</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Amount ($)</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Date</th>
                      </tr>
                    </thead>
                   
                  </table>
                </div>
              </div>
            </CarouselItem>
  
            {/* Sessions Table Slide */}
            <CarouselItem>
              <div className="flex flex-col">
                <h3 className="text-2xl font-semibold mb-4">Booked Sessions</h3>
                <div className="flex-1 overflow-x-auto overflow-y-auto max-h-[400px] border rounded-lg">
                  <table className="min-w-full border-collapse">
                    <thead className="bg-gray-100 sticky top-0 z-10">
                      <tr>
                        <th className="px-4 py-2 border text-sm sm:text-base">User Email</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Package</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Session Date</th>
                        <th className="px-4 py-2 border text-sm sm:text-base">Booked At</th>
                      </tr>
                    </thead>
                    
                  </table>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
  
          {/* Carousel Controls */}
          <div className="flex justify-center gap-4 mt-4">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
  
  
};

export default MVPAdminDashboard;
