'use client';

import { Navigation } from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function AerospikeInterview() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <Dialog open={joinModalOpen} onOpenChange={setJoinModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Join Marketverse</DialogTitle>
            <DialogDescription>
              Share your marketing insights with growth and demand gen leaders.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name</label>
              <Input placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Company</label>
              <Input placeholder="Your company" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Title</label>
              <Input placeholder="Your role" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Why do you want to join?</label>
              <Textarea placeholder="Tell us about your marketing experience..." rows={4} />
            </div>
            <Button className="w-full bg-gradient-to-r from-[#9a33df] to-[#d52884] hover:opacity-90">
              Submit Application
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={partnerModalOpen} onOpenChange={setPartnerModalOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Partner With Marketverse</DialogTitle>
            <DialogDescription>
              Reach growth and demand gen marketing leaders at exclusive events.
            </DialogDescription>
          </DialogHeader>
          <form className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium mb-1.5 block">Full Name</label>
              <Input placeholder="Your name" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <Input type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Company</label>
              <Input placeholder="Your company" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Title</label>
              <Input placeholder="Your role" />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Partnership Interest</label>
              <Textarea placeholder="Tell us about your partnership goals..." rows={4} />
            </div>
            <Button className="w-full bg-gradient-to-r from-[#9a33df] to-[#d52884] hover:opacity-90">
              Request Partnership Info
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      <article className="pt-20">
        <div className="max-w-[1200px] mx-auto px-8 mt-16">
          <div className="text-[#9a33df] uppercase text-[13px] tracking-[2px] font-semibold mb-5">
            Field Intelligence
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-6 text-black max-w-4xl">
            From Predictive AI to Human-Guided Scale: Inside Aerospike's Global Marketing Strategy
          </h1>
          <p className="text-[22px] text-[#4a4a4a] leading-[1.5] mb-9 font-normal max-w-3xl">
            A conversation with Gaurav Deshpande, Chief Marketing Officer, and Amanda Morris, Senior Manager of Communications & Digital Marketing at Aerospike
          </p>
          <div className="flex items-center gap-5 mb-12 pb-8 border-b border-[#e5e5e5]">
            <span className="text-sm text-[#666]">
              Interview by <strong className="text-black">Jared Bral, VP & Head of Marketverse Brand</strong>
            </span>
            <span className="text-sm text-[#666]">•</span>
            <span className="text-sm text-[#666]">8 min read</span>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/aerospike-gaurav-deshpande.webp"
                  alt="Gaurav Deshpande, Chief Marketing Officer at Aerospike"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold mb-1">Gaurav Deshpande</p>
                  <p className="text-xs opacity-90">Chief Marketing Officer, Aerospike</p>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[19px] leading-[1.8] text-[#333] pl-10 border-l-4 border-[#9a33df]">
                <strong className="text-black">Aerospike sits at the heart of real-time enterprise data.</strong> The company's Real-Time Data Platform enables global organizations such as Adobe, PayPal, and Sony Interactive Entertainment to process billions of transactions per second with ultra-low latency.
                <br /><br />
                At the center of that story is Gaurav Deshpande, a former engineer turned marketing leader who joined Aerospike to expand its global presence and spotlight how its technology powers predictive AI and machine learning inference at scale.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#9a33df]/5 via-[#d52884]/5 to-transparent py-20 mb-20">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#9a33df]/20">
                <div className="text-4xl font-bold text-[#9a33df] mb-2">60%</div>
                <div className="text-sm text-[#666]">of revenue from AI/ML inference workloads</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#d52884]/20">
                <div className="text-4xl font-bold text-[#d52884] mb-2">2x</div>
                <div className="text-sm text-[#666]">pipeline growth Q2 to Q3</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#9a33df]/20">
                <div className="text-4xl font-bold text-[#9a33df] mb-2">80%</div>
                <div className="text-sm text-[#666]">account-based marketing focus</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-8 pb-20">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-black mt-16 mb-8 pb-4 border-b-2 border-[#9a33df]">
              Building a Global Marketing Engine
            </h2>

            <p className="text-xl font-bold text-black mt-11 mb-5 leading-[1.5]">
              Jared: Aerospike is used in some of the world's most data-intensive environments. How global is your customer base today?
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Gaurav:</strong> We have customers across North America, Europe, Israel, India, and even parts of Africa, truly a worldwide footprint. What's especially interesting is that nearly 60% of our revenue and about half of our customers use Aerospike for AI and machine learning inference at scale. When I joined, one of my priorities was to make that story known: to bring those customer successes and our technology's unique value proposition to market.
            </p>

            <div className="my-16 relative">
              <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Global Marketing Strategy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-xl font-bold text-black mt-11 mb-5 leading-[1.5]">
              Jared: You mentioned rethinking go-to-market when you came on board. How do you define that?
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Gaurav:</strong> I look at marketing and sales as one motion. I call it AMORE, like the Italian word for love. It stands for Accounts, Meetings, Opportunities, Revenue, and Efficiency.
            </p>

            <div className="bg-gradient-to-br from-[#9a33df] to-[#d52884] p-8 rounded-xl text-white my-12 shadow-2xl">
              <h3 className="text-xl font-bold mb-6 uppercase tracking-wider">The AMORE Framework</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold opacity-50">A</div>
                  <div>
                    <div className="font-bold text-lg">Accounts</div>
                    <div className="text-sm opacity-90">Defining who we want to reach</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold opacity-50">M</div>
                  <div>
                    <div className="font-bold text-lg">Meetings</div>
                    <div className="text-sm opacity-90">Engaging the right ICPs, hands-on engineers, and architects</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold opacity-50">O</div>
                  <div>
                    <div className="font-bold text-lg">Opportunities</div>
                    <div className="text-sm opacity-90">What grows from those interactions</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold opacity-50">R</div>
                  <div>
                    <div className="font-bold text-lg">Revenue</div>
                    <div className="text-sm opacity-90">The financial outcomes we measure</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold opacity-50">E</div>
                  <div>
                    <div className="font-bold text-lg">Efficiency</div>
                    <div className="text-sm opacity-90">Optimizing every touchpoint</div>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              We've focused heavily on account-based marketing, roughly 80% of our outreach is account-based, and it's paying off. We doubled pipeline from Q2 to Q3 and expect another significant jump in Q4.
            </p>

            <h2 className="text-3xl font-bold text-black mt-20 mb-8 pb-4 border-b-2 border-[#d52884]">
              The AI Marketing Stack
            </h2>

            <p className="text-xl font-bold text-black mt-11 mb-5 leading-[1.5]">
              Jared: What tools are powering that engine?
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Gaurav:</strong> We use Marketo for marketing operations, Salesforce as our core CRM, and Qualified for conversational engagement. We're adding Clay and Drippify next quarter, along with LinkedIn and a few AI-driven systems for account intelligence.
            </p>

            <div className="my-16 relative">
              <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="AI Marketing Technology"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-xl font-bold text-black mt-11 mb-5 leading-[1.5]">
              Jared: Speaking of AI, how is your team applying it in practice?
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Gaurav:</strong> We're using AI across multiple fronts. Our digital team uses it to generate first-cut content before refining it. Tools like Keyplay help us identify accounts with the highest intent. Reo.dev flags developers engaging with our site and downloading our products. Glean supports internal research so our reps can prepare more intelligently. Each use case is about improving precision and freeing up time for higher-value work.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Amanda:</strong> AI has expanded what's possible for us. It's not just about efficiency, it's about seeing new possibilities that weren't visible before.
            </p>

            <div className="relative my-20 py-16 px-12 bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] rounded-2xl border-l-8 border-[#d52884] shadow-2xl">
              <div className="text-4xl lg:text-5xl leading-[1.3] font-bold text-[#1a1a1a] italic mb-6">
                "AI isn't replacing our work; it's expanding what we can see and accomplish."
              </div>
              <div className="text-lg text-[#666] font-normal">
                — Amanda Morris, Sr. Manager, Communications & Digital Marketing, Aerospike
              </div>
            </div>

            <div className="my-16 p-8 bg-gradient-to-br from-[#9a33df]/5 via-white to-[#d52884]/5 rounded-xl border border-[#9a33df]/30 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">Share Your Marketing Knowledge</h3>
                  <p className="text-[15px] text-[#666] leading-relaxed">
                    Join a community of marketing leaders sharing insights on what's working in growth and demand generation.
                  </p>
                </div>
                <Button
                  onClick={() => setJoinModalOpen(true)}
                  className="bg-gradient-to-r from-[#9a33df] to-[#d52884] hover:opacity-90 text-white px-8 py-5 rounded-lg font-semibold whitespace-nowrap"
                >
                  Join Marketverse
                </Button>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-20 mb-8 pb-4 border-b-2 border-[#9a33df]">
              The Confident Toddler & The Stubborn Teenager
            </h2>

            <p className="text-xl font-bold text-black mt-11 mb-5 leading-[1.5]">
              Jared: You've described AI with two metaphors, the confident toddler and the stubborn teenager. Can you explain?
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Gaurav:</strong> (laughs) Sure. AI today swings between two personas. The confident toddler thinks it knows everything but often gets things wrong. The teenager ignores feedback and insists it's right. That's the stage we're in, probably the first or second inning of a nine-inning game. AI moves fast, but it still needs human guidance. Used correctly, it can accelerate production and decision-making; left alone, it can go off the rails quickly.
            </p>

            <div className="my-16 grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#9a33df]/10 to-white p-8 rounded-xl border-2 border-[#9a33df]/30">
                <div className="text-6xl mb-4">👶</div>
                <h4 className="text-xl font-bold text-[#9a33df] mb-3">The Confident Toddler</h4>
                <p className="text-sm text-[#666]">Thinks it knows everything but often gets things wrong</p>
              </div>
              <div className="bg-gradient-to-br from-[#d52884]/10 to-white p-8 rounded-xl border-2 border-[#d52884]/30">
                <div className="text-6xl mb-4">😤</div>
                <h4 className="text-xl font-bold text-[#d52884] mb-3">The Stubborn Teenager</h4>
                <p className="text-sm text-[#666]">Ignores feedback and insists it's right</p>
              </div>
            </div>

            <p className="text-xl font-bold text-black mt-11 mb-5 leading-[1.5]">
              Jared: What skills do you look for as you build your marketing team for this next phase?
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Gaurav:</strong> People who can create their own ideas and use AI as an accelerator, not a substitute. We view AI as productivity improvement, not headcount reduction.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Amanda:</strong> Exactly. It enables us to do more and uncover new ways to work. Our team culture is very data-driven. We have real-time updates flowing through Slack from our tools so everyone sees what's happening. That visibility helps us make faster, smarter decisions.
            </p>

            <div className="my-16 relative">
              <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Marketing Team Collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-20 mb-8 pb-4 border-b-2 border-[#d52884]">
              Intent Data & Human Judgment
            </h2>

            <p className="text-xl font-bold text-black mt-11 mb-5 leading-[1.5]">
              Jared: Intent data is another theme that comes up in almost every CMO conversation. How do you approach it?
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Gaurav:</strong> Intent data is a bit of a four-letter word in marketing. Everyone claims to have great intent data, but it's often oversold. For us, first-party intent is most valuable. We connect signals from reo.dev website downloads, and engagement activity to triangulate real buying intent. Automation helps, but we still rely on human judgment to interpret it correctly.
            </p>

            <div className="bg-[#f8f8f8] p-10 my-12 rounded-xl border-2 border-[#e5e5e5] shadow-lg">
              <h3 className="text-base uppercase tracking-[1.5px] text-[#9a33df] mb-4 font-bold">Key Insight</h3>
              <p className="text-[17px] leading-[1.7] text-[#333]">
                First-party intent signals from website engagement, product downloads, and direct interactions provide the most reliable indicators of buying intent—when combined with human judgment.
              </p>
            </div>

            <div className="my-16 p-8 bg-gradient-to-br from-[#d52884]/5 via-white to-[#9a33df]/5 rounded-xl border border-[#d52884]/30 shadow-sm">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-2">Want to Reach Marketing Leaders?</h3>
                  <p className="text-[15px] text-[#666] leading-relaxed">
                    Partner with Marketverse to connect with growth and demand gen marketing leaders at exclusive events.
                  </p>
                </div>
                <Button
                  onClick={() => setPartnerModalOpen(true)}
                  className="bg-gradient-to-r from-[#d52884] to-[#9a33df] hover:opacity-90 text-white px-8 py-5 rounded-lg font-semibold whitespace-nowrap"
                >
                  Partner With Us
                </Button>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-20 mb-8 pb-4 border-b-2 border-[#9a33df]">
              Zero to One vs. One to a Million
            </h2>

            <p className="text-xl font-bold text-black mt-11 mb-5 leading-[1.5]">
              Jared: You've talked about the zero-to-one challenge in AI. How do you see that shaping your team's work?
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              <strong className="text-black">Gaurav:</strong> I borrow from Peter Thiel's Zero to One. Zero to one is human innovation, people like Amanda and me experimenting, creating, and testing new things. One to a thousand or a million is AI, scaled, repeatable, human-guided. You still need people to design the system and ensure context doesn't get lost. Without those guardrails, you get the kind of mistakes we've all seen, like a chatbot promising free cars.
            </p>

            <div className="relative my-20 py-16 px-12 bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] rounded-2xl border-l-8 border-[#9a33df] shadow-2xl">
              <div className="text-4xl lg:text-5xl leading-[1.3] font-bold text-[#1a1a1a] italic mb-6">
                "Zero to one is human innovation. One to a million is AI, scaled, repeatable, and human-guided."
              </div>
              <div className="text-lg text-[#666] font-normal">
                — Gaurav Deshpande, CMO, Aerospike
              </div>
            </div>

            <div className="my-16 relative">
              <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Innovation and Scale"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="mt-20 mb-12 bg-gradient-to-br from-[#9a33df]/5 to-[#d52884]/5 p-12 rounded-2xl border border-[#9a33df]/20">
              <h3 className="text-2xl font-bold text-black mb-6">Closing Insight</h3>
              <p className="text-[18px] leading-[1.8] text-[#333]">
                Deshpande sees marketing's future as a partnership between intelligence and intuition, where AI accelerates what humans imagine. For Aerospike, that balance is more than philosophy; it's how a company built for real-time scale keeps pace in a world of instant decisions.
              </p>
            </div>

            <div className="mt-16 p-10 bg-gradient-to-br from-[#f8f8f8] to-white rounded-2xl border-2 border-[#9a33df]/20 shadow-lg">
              <h3 className="text-sm uppercase tracking-[2px] text-[#9a33df] mb-5 font-bold">About the Interviewer</h3>
              <p className="text-[15px] leading-[1.7] text-[#555]">
                <strong>Jared Bral</strong> is VP & Head of Marketverse Brand. He specializes in interviewing marketing leaders about what's actually working in growth, demand generation, and field marketing. Connect with him at upcoming Marketverse events.
              </p>
            </div>

            <div className="mt-16 pt-8 border-t-2 border-[#e5e5e5] text-center">
              <Link
                href="/field-intelligence"
                className="inline-block px-10 py-5 bg-gradient-to-r from-[#9a33df] to-[#d52884] text-white text-lg font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Back to Field Intelligence
              </Link>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
