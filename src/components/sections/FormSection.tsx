import { Card, CardContent } from "@/components/ui/card";

const FormSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Client Intake
          </h2>
          <hr className="w-24 h-1 bg-accent mx-auto rounded" />
        </div>
        
        <Card className="max-w-4xl mx-auto shadow-soft hover:shadow-warm transition-all duration-300">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed">
              This will be a form.../Example Questions will look like...
              <form action="/">
              </form>
              <p>What is your name?</p>
              <p>What is your email?</p>
              <p>What services do you need?</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default FormSection;