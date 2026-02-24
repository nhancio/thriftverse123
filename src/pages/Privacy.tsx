import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8 sm:py-10 max-w-3xl px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold mb-6 sm:mb-8">Privacy Policy</h1>

        <div className="prose prose-sm max-w-none text-muted-foreground space-y-6">
          <p className="text-foreground font-medium">Last updated: February 2026</p>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">1. Information We Collect</h2>
            <p>When you use Thryft, we collect information you provide directly, including:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Name, email address, and profile photo when you sign in</li>
              <li>Location data when you grant permission or enter it manually</li>
              <li>Product listing details such as photos, descriptions, and pricing</li>
              <li>Phone number if you opt in for notifications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Provide and improve Thryft’s services</li>
              <li>Show your product listings to potential buyers</li>
              <li>Send notifications about your listings and transactions</li>
              <li>Prevent fraud and keep the platform safe</li>
              <li>Personalise your experience based on location and preferences</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">3. How We Store Your Data</h2>
            <p>
              Your data is stored on secure servers. We use industry-standard measures to protect your personal information.
              Product images and listing details are stored in the cloud so we can display them to buyers and manage your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">4. Your Rights</h2>
            <p>You can:</p>
            <ul className="list-disc pl-6 space-y-1 mt-2">
              <li>Access your personal data</li>
              <li>Request deletion of your account and data</li>
              <li>Opt out of notifications</li>
              <li>Update or correct your information in your profile</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">5. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, contact us at{" "}
              <a href="tel:7095288950" className="text-primary hover:underline">7095288950</a>.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
