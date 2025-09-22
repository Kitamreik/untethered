import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import logisticsImage from "@/assets/logistics.png";

const ConfirmationPage: React.FC = () => {
  return (
    <section className="py-16 bg-background text-center">
      <h1 className="text-3xl font-bold text-primary mb-4"> Booking Confirmed 🎉 Thank you!</h1>
      <p className="mb-6">Your intake form was successfully submitted.</p>
      <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-0">
              <img 
                src={logisticsImage}
                alt="Coaching Logistics and Next Steps with Erin's payment information. "
                className="w-full h-auto"
              />
              <hr />
              <br />
              <div className="mb-8 p-8 md:p-12 text-center">
             
                <Link
                    to="/"
                    className="inline-block px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/80"
                >
                    Back to Home
                </Link>
              
              </div>
            </CardContent>
          </Card>
        </div>
    </section>
  );
};

export default ConfirmationPage;
