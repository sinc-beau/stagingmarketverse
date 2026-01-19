'use client';

import { MessageCircle, ExternalLink, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { useState } from 'react';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  content: string;
  linkedinUrl?: string;
}

interface TestimonialsProps {
  testimonials?: Testimonial[];
}

const defaultTestimonials: Testimonial[] = [
  {
    name: 'Nycole Walsh',
    title: 'Senior Manager, Digital Marketing and Revenue | Head of Research',
    company: 'Kickstand',
    content: `Y'all, I go to a lot of conferences. Some are networking frenzies, some are content firehoses. Some are…well, let's just say "good for the lanyard collection." But Marketverse really stuck the landing.

SINC USA brought together a truly curated group of senior marketers, kept us all in one place (Lost Pines in Austin, 10/10 no notes), and had everyone on the same content track. Which meant — for once — you didn't need to play Where's Waldo to meet people. You met everyone. And they were AWESOME. Like, "I want to be in a group chat with these people forever" awesome.

The content? No pitches, no vendor booths. Just actual insight. I walked away from every session with something actionable, useful, or slightly mind-blowing.

My top three:
1) LinkedIn with Richard Bliss — finally, real data on what's going on post-algo shift.
2) A Million Tiny Whispers with Ido Mart from Manychat — a fresh take on impressions that made me rethink how we measure and message.
3) Dana Tan from Under Armour on AI search visibility — including the mic drop moment when she said, in response to a question about the impact of PR: "It's huge! I have talked to our PR firm more in the past 6 months than in the past 8 years. Our CEO doing an interview that will live online is the biggest thing we can do." (She's soooooo not wrong.)

Also: shoutout to the unhinged brilliance of my group's first-night dinner convo on wrestling walk on songs. OBVIOUSLY the most important networking question you can discuss (mine is Cities in Dust by Siouxsie and the Banshees, for the curious.)

Huge thanks to Beau Horton, Jared Bral, Katherine Lerner, and the entire SINC team for hosting an amazing time — and for letting Kristina Kennedy and me crash your second-ever CMO event. Y'all are definitely onto something big. Already counting down to the next one!

Senior marketers: come find me at the next Marketverse. You'll leave smarter and with much better walk-on music.`,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7391237384924745728'
  },
  {
    name: 'Sheena Hakimian',
    title: 'Sr. Director Consumer Digital Marketing',
    company: 'Conde Nast',
    content: `I'm still buzzing from this week's Marketverse event in Austin!

Huge thank you to the entire SINC USA team for creating such a fun, collaborative, and engaging experience…and for inviting me to be part of it!

Over three days, I got to connect with 68 incredible marketers from across the country, and I'm walking away with new ideas, friendships, and a deeper sense of community (who doesn't need that these days?!).

And an extra special thank you to everyone who joined my session. It was such a gift to share my two favorite topics: digital marketing and resilience.

P.S. I think I officially pulled off the cowboy hat. Marketverse, I hope to see you again soon!`,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7391159904889180160'
  },
  {
    name: 'Melita Romero',
    title: 'Director Digital Marketing and Demand Gen',
    company: 'Williams Lea',
    content: `Marketing invites a lot of opinions, so it's an absolute treat to spend time with and learn from people who genuinely master the craft -- those who don't just talk theory, but deliver tangible results.

I thoroughly enjoyed the two days at Marketverse, gaining valuable insight from real-world use cases and candid discussions.

Huge thanks to the Marketverse & SINC USA team for the opportunity to share my experience with AI and represent Williams Lea/RR Donnelley -- being on a panel with Enrique Tapia, Dave Michela, Mohib Ahmad, and Anamika Gupta was a blast. I can't remember how many times I said "human in the loop".

Gotta give props to my new best friend Brisket; he is a highlight.`,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7390052344136314880'
  },
  {
    name: 'Kirsten Anderson',
    title: 'Sr. Director Marketing Operations',
    company: 'Mercy Corps',
    content: `Earlier this week I attended Marketverse, hosted by SINC USA. It was a thoughtfully curated event that led to meaningful conversations with marketers from across the country, and from a wide variety of sectors.

The thing we had in common: shared challenges, shared frameworks, and lots of questions about AI and the future of marketing.

I left the event invigorated, feeling validated, and with many new friends from across the country.

Keep asking questions, keep learning, and keep connecting. Thanks Marketverse!`,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7390050614577152000'
  },
  {
    name: 'James McGill',
    title: 'CMO',
    company: 'Teradyne Robotics',
    content: `What an incredible experience presenting at SINC USA Marketverse 2025!

It was an honor to engage with a room full of talented individuals on my passion: cultivating high-performance teams that can thrive in complexity.

We covered a lot, from redefining customer-centricity for complex tech journeys to fostering real collaboration that (finally) breaks down silos. The energy and questions were fantastic.

A huge thank you to SINC USA for having me and to everyone who attended and contributed to the discussion!`,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7389697804182601728'
  },
  {
    name: 'Rachel Kiwior',
    title: 'Director of Marketing',
    company: 'J.T. & Margaret Talkington College of Visual & Performing Arts',
    content: `What an incredible experience at my second Marketverse event hosted by SINC USA!

Thoughtfully curated sessions led to meaningful conversations with marketers from all over the country.

The SINC team gave us a true Texas experience with our favorite longhorn, Brisket, some amazing and thought provoking speakers, and new friends who understand the day to day challenges and successes of an ever changing marketing landscape.

It's so important to keep learning no matter the industry you're in.`,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7389696009905430531'
  },
  {
    name: 'Jeffrey Siegel',
    title: 'Director of Marketing Strategy',
    company: 'Cisco',
    content: `I had the pleasure of attending SINC USA's Marketverse conference this week. It was a unique experience - a small, invite-only group of senior marketing leaders from both B2B and B2C brands, hosted in a quiet resort.

The intimate setting allowed for a very unique content model - it was largely all attendee-driven presentations (i.e. not sponsored sessions). This meant we had some very honest discussions across a range of topics that attendees found interesting and wanted to share. Of course, there was plenty of AI to discuss, but it was refreshing engage across a range of other topics impacting marketers today.

A few key takeaways and ideas that I brought back with me:

Attitude, Agility and Adaptability are the traits of a successful team in the evolving AI era. Teams that can open themselves to new norms, experiment and adjust are going to succeed.

AI is still new to everyone, but clearly a priority that can yield real results. Marketing is uniquely positioned to go very far, very fast with AI - if we're willing to experiment, explore and take chances.

The metrics we're accountable to are still a challenge because most of the C-Suite/BOD still doesn't get what marketing really can accomplish. However, leaders CAN change the discussion. Full-funnel campaigns that incorporate brand-building strategies can move the needle on both fronts. ICP engagement metrics can resonate with sales leaders and move us beyond the MSP/MQL nightmare. It's about having a clear strategy and story that helps your partners understand how marketing supports their success.

Humans need to own the foundations and steer our AI journeys. We can't hand off marketing to an AI autopilot without a general 'middling' of the brand. Data, creative strategy & messaging and operational design are the human elements that need to be focused on so AI can execute effectively for your brand.

SEO / GEO / AIO is a very fraught world right now. Brands need to pay close attention to how their markets are engaging with them and how they are found and positioned in both traditional search and AI. There are no clear answers (yet), but lots of opportunities to explore and experiment.

Thank you SINC USA for hosting a great event and thank you to all the attendees for the interesting presentations and fascinating discussions. Next time I promise I'll help fuel the conversation from the stage!`,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7389694291079708672'
  },
  {
    name: 'Megan Imbert',
    title: 'Sr Director Marketing',
    company: 'Marketing Leadership',
    content: `Sending huge gratitude to SINC for curating an energizing space filled with brilliant, forward-thinking leaders reimagining the future of marketing.

From AI's growing role in shaping strategy to what it truly takes to build a modern marketing team, the conversations were authentic & insightful.

It was an honor to join the panel on building better sales and marketing rhythms with Ruthie Senanayake exploring how alignment, communication, intention and trust become the foundation for growth in today's ever-changing landscape.

What I loved most about Marketverse was the collective spirit in the room, leaders openly sharing lessons, challenges and fresh ideas for where marketing is heading next.

It's clear that the future belongs to teams who combine data with intuition, innovation with empathy, and creativity with purpose.

Thank you Beau Horton for being an incredible thoughtful host!`,
    linkedinUrl: 'https://www.linkedin.com/feed/update/urn:li:activity:7389315373365596160'
  }
];

export default function Testimonials({ testimonials = defaultTestimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(null);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 3 < 0 ? Math.max(0, testimonials.length - 3) : prev - 3));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern-light opacity-40" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-black/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-6 tracking-tight">
            The Real Talk
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unfiltered experiences from marketing leaders who joined the conversation
          </p>
        </div>

        <div className="relative">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {visibleTestimonials.map((testimonial, idx) => {
              const actualIndex = currentIndex + idx;
              return (
                <div
                  key={actualIndex}
                  className="group relative cursor-pointer"
                  onClick={() => setSelectedTestimonial(actualIndex)}
                >
                  <div className="absolute -inset-1 bg-gradient-to-r from-black via-gray-600 to-black rounded-2xl opacity-0 group-hover:opacity-100 blur transition duration-500" />

                  <div className="relative bg-white rounded-2xl border-2 border-black p-6 shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    <Quote className="w-8 h-8 text-black mb-4 flex-shrink-0" />

                    <div className="relative flex-1 mb-6">
                      <p className="text-gray-700 leading-relaxed font-medium line-clamp-6">
                        {testimonial.content}
                      </p>
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                    </div>

                    <div className="mt-auto pt-4 border-t-2 border-black">
                      <h3 className="text-lg font-black text-black">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm font-bold text-gray-700 mt-1">
                        {testimonial.title}
                      </p>
                      <p className="text-sm text-gray-600 font-medium">
                        {testimonial.company}
                      </p>
                    </div>

                    <button className="mt-4 text-sm text-black font-bold hover:underline text-left">
                      Read Full Story →
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevTestimonial}
              disabled={currentIndex === 0}
              className="p-3 rounded-xl border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx * 3)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    Math.floor(currentIndex / 3) === idx
                      ? 'w-8 bg-black'
                      : 'w-2 bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to testimonial set ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              disabled={currentIndex + 3 >= testimonials.length}
              className="p-3 rounded-xl border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:text-black"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {selectedTestimonial !== null && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedTestimonial(null)}
        >
          <div
            className="bg-white rounded-2xl border-2 border-black max-w-3xl w-full max-h-[80vh] overflow-y-auto p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedTestimonial(null)}
              className="absolute top-6 right-6 p-2 rounded-xl border-2 border-black bg-white hover:bg-black hover:text-white transition-all duration-300"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <Quote className="w-12 h-12 text-black mb-6" />

            <div className="text-gray-700 text-lg leading-relaxed font-medium mb-8 whitespace-pre-line">
              {testimonials[selectedTestimonial].content}
            </div>

            <div className="pt-6 border-t-2 border-black">
              <h3 className="text-2xl font-black text-black mb-2">
                {testimonials[selectedTestimonial].name}
              </h3>
              <p className="text-base font-bold text-gray-700 mb-1">
                {testimonials[selectedTestimonial].title}
              </p>
              <p className="text-base text-gray-600 font-medium mb-6">
                {testimonials[selectedTestimonial].company}
              </p>

              {testimonials[selectedTestimonial].linkedinUrl && (
                <a
                  href={testimonials[selectedTestimonial].linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white font-bold rounded-xl hover:bg-gray-800 transition-all duration-300"
                >
                  <span>View on LinkedIn</span>
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
