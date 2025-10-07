import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@4.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface BookingData {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  date: string;
  time: string;
  location: string;
  notes?: string;
  saxophonist?: boolean;
  photoGift?: boolean;
  package: string;
  price: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const bookingData: BookingData = await req.json();
    console.log("Processing booking request:", { name: bookingData.fullName, package: bookingData.package });

    // Email to Jubilee Events (company)
    const companyEmail = await resend.emails.send({
      from: "Jubilee Events <onboarding@resend.dev>",
      to: ["jubileeeventsyyc@gmail.com"],
      subject: `New Booking: ${bookingData.package} - ${bookingData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #7c2cf8, #f25c1d); border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 8px;">
            <h1 style="color: #7c2cf8; margin-bottom: 20px;">🎉 New Event Booking!</h1>
            
            <h2 style="color: #333; margin-top: 30px;">Package Details</h2>
            <p style="font-size: 18px; color: #f25c1d; font-weight: bold;">${bookingData.package} - ${bookingData.price}</p>
            
            <h2 style="color: #333; margin-top: 30px;">Client Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${bookingData.fullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${bookingData.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${bookingData.phone}</td>
              </tr>
            </table>

            <h2 style="color: #333; margin-top: 30px;">Event Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Event Type:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${bookingData.eventType}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Date:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${bookingData.date}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Time:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${bookingData.time}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Location:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${bookingData.location}</td>
              </tr>
            </table>

            ${bookingData.saxophonist || bookingData.photoGift ? `
            <h2 style="color: #333; margin-top: 30px;">Add-ons</h2>
            <ul style="list-style: none; padding: 0;">
              ${bookingData.saxophonist ? '<li style="padding: 5px 0;">✓ Saxophonist Performance</li>' : ''}
              ${bookingData.photoGift ? '<li style="padding: 5px 0;">✓ Customized Photo Gift</li>' : ''}
            </ul>
            ` : ''}

            ${bookingData.notes ? `
            <h2 style="color: #333; margin-top: 30px;">Additional Notes</h2>
            <p style="background: #f5f5f5; padding: 15px; border-radius: 5px;">${bookingData.notes}</p>
            ` : ''}

            <div style="margin-top: 30px; padding: 20px; background: linear-gradient(135deg, #7c2cf8, #f25c1d); border-radius: 5px; text-align: center;">
              <p style="color: white; margin: 0; font-size: 14px;">Follow up with the client as soon as possible!</p>
            </div>
          </div>
        </div>
      `,
    });

    console.log("Company email sent:", companyEmail);

    // Confirmation email to client
    const clientEmail = await resend.emails.send({
      from: "Jubilee Events <onboarding@resend.dev>",
      to: [bookingData.email],
      subject: "Booking Confirmed - Jubilee Events",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: linear-gradient(135deg, #7c2cf8, #f25c1d); border-radius: 10px;">
          <div style="background: white; padding: 30px; border-radius: 8px;">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #7c2cf8; margin: 0;">🎉 Jubilee Events</h1>
              <p style="color: #666; font-style: italic; margin-top: 5px;">Crafting Moments, Weaving Memories</p>
            </div>

            <div style="background: linear-gradient(135deg, #7c2cf8, #f25c1d); padding: 20px; border-radius: 8px; text-align: center; margin-bottom: 30px;">
              <h2 style="color: white; margin: 0;">✓ Booking Confirmed!</h2>
            </div>

            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Dear ${bookingData.fullName},
            </p>

            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              Thank you for choosing Jubilee Events! We're thrilled to help you create an unforgettable celebration.
            </p>

            <h3 style="color: #7c2cf8; margin-top: 30px;">Your Booking Summary</h3>
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 15px;">
              <p style="margin: 10px 0;"><strong>Package:</strong> ${bookingData.package}</p>
              <p style="margin: 10px 0;"><strong>Price:</strong> ${bookingData.price}</p>
              <p style="margin: 10px 0;"><strong>Event Type:</strong> ${bookingData.eventType}</p>
              <p style="margin: 10px 0;"><strong>Date:</strong> ${bookingData.date}</p>
              <p style="margin: 10px 0;"><strong>Time:</strong> ${bookingData.time}</p>
              <p style="margin: 10px 0;"><strong>Location:</strong> ${bookingData.location}</p>
            </div>

            <h3 style="color: #7c2cf8; margin-top: 30px;">What Happens Next?</h3>
            <ul style="color: #333; line-height: 1.8;">
              <li>Our team will review your booking details</li>
              <li>We'll reach out via email or phone within 24 hours to confirm all details</li>
              <li>We'll work with you to customize every aspect of your celebration</li>
              <li>On the event day, we'll arrive early to ensure everything is perfect</li>
            </ul>

            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin-top: 30px;">
              <h4 style="color: #7c2cf8; margin-top: 0;">Need to reach us?</h4>
              <p style="margin: 5px 0; color: #333;">📧 jubileeeventsyyc@gmail.com</p>
              <p style="margin: 5px 0; color: #333;">📞 587-700-8564</p>
            </div>

            <p style="font-size: 16px; color: #333; line-height: 1.6; margin-top: 30px;">
              We're excited to make your celebration extraordinary!
            </p>

            <p style="font-size: 16px; color: #333; line-height: 1.6;">
              With joy and celebration,<br>
              <strong style="color: #7c2cf8;">The Jubilee Events Team</strong>
            </p>
          </div>
        </div>
      `,
    });

    console.log("Client confirmation email sent:", clientEmail);

    return new Response(
      JSON.stringify({ success: true, message: "Booking emails sent successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-booking-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
