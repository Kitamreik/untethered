import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const DeletePage: React.FC = () => {
  return (
    <section className="py-16 bg-background text-center">
      <h1 className="text-3xl font-bold text-primary mb-4"> Deletion Confirmation</h1>
      <p className="mb-6">The entry was successfully removed.</p>
      <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden shadow-soft hover:shadow-warm transition-all duration-300">
            <CardContent className="p-0">
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

export default DeletePage;
