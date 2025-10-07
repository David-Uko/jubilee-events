import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Checkbox } from "./ui/checkbox";
import { toast } from "sonner";
import { Loader2, Sparkles } from "lucide-react";

const bookingSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits"),
  eventType: z.string().min(1, "Please select an event type"),
  date: z.string().min(1, "Please select a date"),
  time: z.string().min(1, "Please enter a time"),
  location: z.string().min(5, "Location must be at least 5 characters"),
  notes: z.string().optional(),
  saxophonist: z.boolean().optional(),
  photoGift: z.boolean().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface BookingFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage: string;
  packagePrice: string;
}

const BookingForm = ({ isOpen, onClose, selectedPackage, packagePrice }: BookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    
    try {
      // Here we'll send the booking email
      const response = await fetch(`${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-booking-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          package: selectedPackage,
          price: packagePrice,
        }),
      });

      if (!response.ok) throw new Error('Failed to send booking');

      setShowSuccess(true);
      reset();
      
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 5000);

    } catch (error) {
      console.error('Booking error:', error);
      toast.error("Failed to submit booking. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-md bg-card border-primary/50">
          <div className="text-center py-8">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 mx-auto animate-pulse-glow">
              <Sparkles className="text-primary-foreground" size={40} />
            </div>
            <h3 className="font-heading font-bold text-3xl mb-4 gradient-text">Booking Confirmed!</h3>
            <p className="text-muted-foreground mb-6 font-body">
              Thank you — your appointment and package have been successfully booked.
            </p>
            <div className="space-y-2 text-sm text-muted-foreground font-body bg-muted/20 rounded-lg p-4">
              <p>✓ The Jubilee Events team will reach out shortly via email or phone to confirm your details.</p>
              <p>✓ A confirmation email has been sent to your inbox.</p>
              <p className="pt-2">If you have any immediate questions, please contact us at:</p>
              <p className="font-semibold text-foreground">jubileeeventsyyc@gmail.com</p>
              <p className="font-semibold text-foreground">587-700-8564</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-primary/50">
        <DialogHeader>
          <DialogTitle className="font-heading text-3xl gradient-text">Book Your Event</DialogTitle>
          <DialogDescription className="text-muted-foreground font-body">
            Selected Package: <span className="font-bold text-foreground">{selectedPackage}</span> - {packagePrice}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName">Full Name *</Label>
              <Input
                id="fullName"
                {...register("fullName")}
                className="bg-input/50 border-border focus:border-primary transition-colors"
                placeholder="John Doe"
              />
              {errors.fullName && <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>}
            </div>

            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...register("email")}
                className="bg-input/50 border-border focus:border-primary transition-colors"
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-destructive text-sm mt-1">{errors.email.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                {...register("phone")}
                className="bg-input/50 border-border focus:border-primary transition-colors"
                placeholder="587-700-8564"
              />
              {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <Label htmlFor="eventType">Event Type *</Label>
              <Select onValueChange={(value) => setValue("eventType", value)}>
                <SelectTrigger className="bg-input/50 border-border focus:border-primary">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="birthday">Birthday</SelectItem>
                  <SelectItem value="anniversary">Anniversary</SelectItem>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="other">Other Special Event</SelectItem>
                </SelectContent>
              </Select>
              {errors.eventType && <p className="text-destructive text-sm mt-1">{errors.eventType.message}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="date">Event Date *</Label>
              <Input
                id="date"
                type="date"
                {...register("date")}
                min={new Date().toISOString().split('T')[0]}
                className="bg-input/50 border-border focus:border-primary transition-colors"
              />
              {errors.date && <p className="text-destructive text-sm mt-1">{errors.date.message}</p>}
            </div>

            <div>
              <Label htmlFor="time">Event Time *</Label>
              <Input
                id="time"
                type="time"
                {...register("time")}
                className="bg-input/50 border-border focus:border-primary transition-colors"
              />
              {errors.time && <p className="text-destructive text-sm mt-1">{errors.time.message}</p>}
            </div>
          </div>

          <div>
            <Label htmlFor="location">Location / Venue *</Label>
            <Input
              id="location"
              {...register("location")}
              className="bg-input/50 border-border focus:border-primary transition-colors"
              placeholder="123 Celebration Ave, Calgary, AB"
            />
            {errors.location && <p className="text-destructive text-sm mt-1">{errors.location.message}</p>}
          </div>

          <div>
            <Label htmlFor="notes">Additional Notes / Requests</Label>
            <Textarea
              id="notes"
              {...register("notes")}
              className="bg-input/50 border-border focus:border-primary transition-colors min-h-[100px]"
              placeholder="Any special requests or details we should know about..."
            />
          </div>

          {(selectedPackage === "Golden Glitz" || selectedPackage === "Platinum Prestige") && (
            <div className="space-y-3 bg-muted/20 rounded-lg p-4">
              <Label>Add-ons</Label>
              {selectedPackage === "Platinum Prestige" && (
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="photoGift"
                    onCheckedChange={(checked) => setValue("photoGift", checked as boolean)}
                  />
                  <label htmlFor="photoGift" className="text-sm font-body cursor-pointer">
                    Customized Photo Gift (Included)
                  </label>
                </div>
              )}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="saxophonist"
                  onCheckedChange={(checked) => setValue("saxophonist", checked as boolean)}
                />
                <label htmlFor="saxophonist" className="text-sm font-body cursor-pointer">
                  Saxophonist Performance (Included)
                </label>
              </div>
            </div>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-lg py-6 bg-gradient-to-r from-primary via-secondary to-accent hover:shadow-2xl transition-all duration-300"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 animate-spin" />
                Submitting...
              </>
            ) : (
              "Confirm Booking"
            )}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingForm;
