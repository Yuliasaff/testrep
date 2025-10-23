import { BookShowcase } from '@/components/BookShowcase';
import { BundlePricing } from '@/components/BundlePricing';
import { Countdown } from '@/components/Countdown';
import { FAQ } from '@/components/FAQ';
import { Hero } from '@/components/Hero';
import { LeadCapture } from '@/components/LeadCapture';
import { SamplePreview } from '@/components/SamplePreview';
import { Testimonials } from '@/components/Testimonials';
import { TrustBar } from '@/components/TrustBar';
import { ValueProps } from '@/components/ValueProps';

export default function LaunchPage() {
  return (
    <main className="flex flex-col gap-12">
      <Hero />
      <TrustBar />
      <ValueProps />
      <BookShowcase />
      <SamplePreview />
      <BundlePricing />
      <Testimonials />
      <FAQ />
      <Countdown />
      <LeadCapture />
    </main>
  );
}
