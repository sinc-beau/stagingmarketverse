'use client';

import { Navigation } from '@/components/Navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function MimecastInterview() {
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
        <div className="max-w-[1200px] mx-auto px-8 mt-20">
          <div className="text-[#9a33df] uppercase text-[13px] tracking-[2px] font-semibold mb-8">
            Field Intelligence
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold leading-[1.1] mb-10 text-black max-w-4xl">
            Human-Centric Growth in the Age of AI: What Mimecast's Aida Kamber Is Building for 2026
          </h1>
          <p className="text-[22px] text-[#4a4a4a] leading-[1.5] mb-12 font-normal max-w-3xl">
            An interview with Aida Kamber, Vice President of Growth at Mimecast
          </p>
          <div className="flex items-center gap-5 mb-16 pb-10 border-b border-[#e5e5e5]">
            <span className="text-sm text-[#666]">
              Interviewed by <strong className="text-black">Beau Horton, VP of Marketing at SINC USA, and Jared Bral, VP of Marketverse & CDAIO Division</strong>
            </span>
            <span className="text-sm text-[#666]">•</span>
            <span className="text-sm text-[#666]">12 min read</span>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-8 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-12 items-center">
            <div className="relative">
              <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/humangrowthaiworld.png"
                  alt="Aida Kamber, Vice President of Growth at Mimecast"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-sm font-semibold mb-1">Aida Kamber</p>
                  <p className="text-xs opacity-90">Vice President of Growth, Mimecast</p>
                </div>
              </div>
            </div>

            <div>
              <div className="text-[19px] leading-[1.8] text-[#333] pl-10 border-l-4 border-[#9a33df]">
                <strong className="text-black">Aida Kamber has spent the last year and a half building a global growth engine inside Mimecast,</strong> the company many buyers still shorthand as "email security," despite evolving into something much bigger. She leads growth marketing across global campaigns, paid digital, webinars, marketing ops, and analytics. She came from Code42 when Mimecast acquired them in July 2024, was supposed to stay three to six months in transition, and ended up building an entirely new function.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-[#9a33df]/5 via-[#d52884]/5 to-transparent py-20 mb-20">
          <div className="max-w-[1200px] mx-auto px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#9a33df]/20">
                <div className="text-4xl font-bold text-[#9a33df] mb-2">33%</div>
                <div className="text-sm text-[#666]">increase in clicks from AI-powered translation</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#d52884]/20">
                <div className="text-4xl font-bold text-[#d52884] mb-2">100%</div>
                <div className="text-sm text-[#666]">opportunity influence target for marketing</div>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border border-[#9a33df]/20">
                <div className="text-4xl font-bold text-[#9a33df] mb-2">5</div>
                <div className="text-sm text-[#666]">personas in multi-threaded buying groups</div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-[900px] mx-auto px-8 pb-20">
          <div className="prose prose-lg max-w-none">
            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "I was on a  six-month transition plan originally," she says. "And then my team and I   demonstrated the value of always-on, account-based experiences we were able to bring to Mimecast. This allowed me to build a Growth Marketing team and a true demand engine for our new company.'
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Her throughline is simple: "we always start with the use case," then earn the right to tell the bigger story. That's the backdrop for this Marketverse interview, where Beau Horton (VP of Marketing, SINC USA) and Jared Bral (VP of Marketverse and the CDAIO Division) spoke with Aida Kamber about what's actually changing in enterprise growth as AI shifts discovery, trust, and measurement.
            </p>

            <h2 className="text-3xl font-bold text-black mt-16 mb-8 pb-4 border-b-2 border-[#9a33df]">
              Why your "top of funnel" content is already mid-funnel (and what to do about it)
            </h2>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Aida doesn't describe AI as a new channel. She frames it as a structural shift in how buyers arrive.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "AI has changed so much about how customers will find people now," she says. "The top of the funnel has really been commandeered by them just not interacting with us at all."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "We are doing a ton with LLM [visibility]." Her team partnered with Amplifyed  a boutique SEO and AIO agency on the West Coast, and started reorganizing around the questions buyers are asking in LLM-driven journeys, not just what ranks in classic search.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              The key reframing: what we used to call top-of-funnel is no longer early.
            </p>

            <div className="relative my-20 py-16 px-12 bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] rounded-2xl border-l-8 border-[#d52884] shadow-2xl">
              <div className="text-4xl lg:text-5xl leading-[1.3] font-bold text-[#1a1a1a] italic mb-6">
                "We may call it top of funnel, but I feel like it's actually not as top of funnel as it used to be because people can just get to the data much faster."
              </div>
              <div className="text-lg text-[#666] font-normal">
                — Aida Kamber, VP of Growth, Mimecast
              </div>
            </div>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              So the job changes. Your content is no longer trying to be the first touch in a linear journey. You're trying to be the most credible continuation of a conversation already in progress. The content has to go deeper because buyers are already deep.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "They're having a complex conversation with ChatGPT, Perplexity, Claude, Gemini," she says. "How do you make sure that you're providing all of the information the buyer needs to make an informed decision? So we're re-doing our website and rethinking how we create content, how we answer buyers' questions and meet them where they are in their buying journey."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              And here's the insight she keeps coming back to: "I think it's actually making us more customer-centric because we're having to go more in depth to answer customer questions than we used to."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              She actually joins the SEO calls when she has time. "I nerd out with those people because I think it's just so much fun. It's ever-changing!"
            </p>

            <div className="bg-[#f8f8f8] p-10 my-12 rounded-xl border-2 border-[#e5e5e5] shadow-lg">
              <h3 className="text-base uppercase tracking-[1.5px] text-[#9a33df] mb-4 font-bold">What this means for you:</h3>
              <ul className="text-[17px] leading-[1.7] text-[#333] space-y-2 ml-6">
                <li>Treat "top of funnel" as "first owned interaction," not "first interaction"</li>
                <li>Build content assuming the buyer already did the baseline research elsewhere</li>
                <li>Going deeper isn't just for mid-funnel anymore. If they're asking LLMs complex questions, your content needs to match that depth</li>
              </ul>
            </div>

            <div className="my-16 relative">
              <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/platformnarratives.png"
                  alt="Platform Narratives"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-3xl font-bold text-black mt-20 mb-8 pb-4 border-b-2 border-[#d52884]">
              Use cases convert, platform narratives don't (how to sequence your story)
            </h2>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Mimecast has been through a transformation. Two and a half years ago, the founder stepped down as CEO. The company went from public to private, bought by Permira. The new CEO, Mark, made three acquisitions: Elevate (security awareness training, led by Masha Sedova), Code42 (insider risk management), and Aware (AI for archiving and search).
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "If you think about what we call our Human Risk Command Center, that's the window pane that tells you where your highest risk lives," Aida says. "And it integrates everything. It integrates insider risk management, email risk, and allows companies to see who are their riskiest employees."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Everyone at Mimecast has their own risk score now. "I just got mine, and thought to myself, this is [too low]," she laughs. "Marketers are typically pretty bad offenders."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              But here's the GTM lesson: you don't lead with the command center.
            </p>

            <div className="relative my-20 py-16 px-12 bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] rounded-2xl border-l-8 border-[#9a33df] shadow-2xl">
              <div className="text-4xl lg:text-5xl leading-[1.3] font-bold text-[#1a1a1a] italic mb-6">
                "We can't really start talking about human risk management when we start talking to prospects. We always start with the use case."
              </div>
              <div className="text-lg text-[#666] font-normal">
                — Aida Kamber, VP of Growth, Mimecast
              </div>
            </div>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Start with shadow AI. Start with employees putting proprietary product data into ChatGPT. Start with alert fatigue. "We all have our security people, alert fatigue, right? Hey, we have to spend hours and hours on investigations," she says. "Now you can just have that single pane of glass to say give me my three most critical alerts that I should focus on today as I start my day and I know I have a hundred."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              The platform story comes after you've proven you understand their daily pain.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "Either you're being attacked - by phishing, by malware, by ransomware - or you're doing something malicious intentionally, espionage, or you're just trying to work faster and you're putting proprietary product data into ChatGPT, right?"
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              That's the layer most security tools miss. "You have identity, you have network controls, you have all of this, but really what's protecting your human layer?"
            </p>

            <div className="bg-[#f8f8f8] p-10 my-12 rounded-xl border-2 border-[#e5e5e5] shadow-lg">
              <h3 className="text-base uppercase tracking-[1.5px] text-[#9a33df] mb-4 font-bold">What this means for you:</h3>
              <ul className="text-[17px] leading-[1.7] text-[#333] space-y-2 ml-6">
                <li>Platform narratives don't convert cold. Use cases do</li>
                <li>Tell the big story after you've anchored on the daily pain</li>
                <li>If you're selling a suite, map every acquisition to a specific problem buyers already know they have</li>
              </ul>
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
              AI can scale content, but it can't replace customer trust loops
            </h2>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              AI makes "more" cheap. Aida keeps pulling the conversation back to the parts growth leaders still can't automate.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "I think that's your brand presence in everything you do," she says. Not just digital. "It's how you show up to events. It's how you show up with partners."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Then she hits the point that too many AI-forward growth strategies forget: in security and enterprise generally, peer proof beats your narrative.
            </p>

            <div className="relative my-20 py-16 px-12 bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] rounded-2xl border-l-8 border-[#d52884] shadow-2xl">
              <div className="text-4xl lg:text-5xl leading-[1.3] font-bold text-[#1a1a1a] italic mb-6">
                "Peer relationships are so important. [Your prospects] go to their peers first when they're trying to buy something."
              </div>
              <div className="text-lg text-[#666] font-normal">
                — Aida Kamber, VP of Growth, Mimecast
              </div>
            </div>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Mimecast ran a major customer event called Elevate in New York in October. The response reinforced a classic truth: "nothing can replace that face-to-face customer interaction."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              So now they're taking it on the road. Melbourne, Sydney, London. "We need to take this on the road and make sure that we're giving all customers globally the chance to experience something like this."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              And the content at these events isn't product pitches. "We really looked at support tickets. We looked at what a lot of our customers still think that we are -  email security. So we made sure that we had different sections of the event that were focused on solution area, insider risk management, governance & compliance, security awareness training, and email & collaboration threat security."
            </p>

            <div className="my-16 relative">
              <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Customer Events and Experiences"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              She's also using AI for practical scale wins. Translations, for example. "It used to be so expensive! And our regions were screaming for content in their own language.' So we used AI to get it 80% there! It's not going to be perfect like you would have somebody in-region translate, but it's 80% there and it's much better than just having it in English."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              The result? "In the last 28 days we increased our clicks by 33% by just doing that. We got 1,500 more actual clicks."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              But she's clear on what AI can't do. "How do you ensure that what is going out there still has that conversation that builds trust and is nuanced and is real rather than just being scale for the sake of scale?"
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              The answer is everything around the content. The customer experience. The peer relationships. The events.
            </p>

            <div className="relative my-20 py-16 px-12 bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] rounded-2xl border-l-8 border-[#9a33df] shadow-2xl">
              <div className="text-4xl lg:text-5xl leading-[1.3] font-bold text-[#1a1a1a] italic mb-6">
                "We go after shiny objects, especially as marketers. But the way that your customers experience you in every step of the journey still matters and that hasn't changed with AI."
              </div>
              <div className="text-lg text-[#666] font-normal">
                — Aida Kamber, VP of Growth, Mimecast
              </div>
            </div>

            <div className="bg-[#f8f8f8] p-10 my-12 rounded-xl border-2 border-[#e5e5e5] shadow-lg">
              <h3 className="text-base uppercase tracking-[1.5px] text-[#9a33df] mb-4 font-bold">What this means for you:</h3>
              <ul className="text-[17px] leading-[1.7] text-[#333] space-y-2 ml-6">
                <li>AI can accelerate content. It can't replace customer trust loops</li>
                <li>Peer proof and lived experience still close deals, especially in enterprise categories</li>
                <li>Scale is easy now. The moat is experience quality and credibility</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black mt-20 mb-8 pb-4 border-b-2 border-[#d52884]">
              Multi-threading in 2026: How AI makes buying group orchestration actually scalable
            </h2>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Every acquisition brought a new buyer, and as a result a new persona.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "For the different solution areas that we now offer, it may be a completely different persona than the IT manager that's managing the email security portion of it," Aida says.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              So they expanded personas. For governance and compliance, they're going after eDiscovery titles. For insider risk, it's security architects. For the command center view, it's the CISO.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "We focus on segmentation a ton," she says. SMB versus midmarket versus enterprise. "Multi-threading is a big part of our strategy going into next year."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Here's what's different in 2026: AI makes multi-threading at scale actually feasible.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Aida describes UserGems 2.0, which just came out. "It writes the emails for you. So you feed up case studies and you feed up what you want it to know: your knowledge base. Then, it would literally write a personalized email to five different personas."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              The personalization goes deep. "For example, you are a security leader who used Mimecast in your last job and you were a satisfied customer. At the same ime,  we are also talking to e-Discovery contact who is a new hire and is looking to improve their investigation time by 7x?? UserGems will  send  a case study from the same industry, reference the happy past champion and congratulate the new hire, referencing that his colleague used to be a happy Mimecast customer.
            </p>

            <div className="relative my-20 py-16 px-12 bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] rounded-2xl border-l-8 border-[#d52884] shadow-2xl">
              <div className="text-4xl lg:text-5xl leading-[1.3] font-bold text-[#1a1a1a] italic mb-6">
                "There's no way a BDR or sales rep without spending hours and hours doing research would be able to put all of those things together."
              </div>
              <div className="text-lg text-[#666] font-normal">
                — Aida Kamber, VP of Growth, Mimecast
              </div>
            </div>

            <div className="my-16 relative">
              <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Multi-threading and Personalization"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              The tool can look at Gong call transcripts from closed-lost opportunities to identify the buying group, then generate different narratives for each persona. "It allows us to have a different narrative for each one of them based on their use case and pain points. And she's empathetic about the philosophy: this is not BDR replacement.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              "We don't have that strategy at all. We're more co-pilot. Use AI to personalize at scale and then have BDRs do what they do best - focus on  LinkedIn and phone calls because that's where they book most of their meetings."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Her team was skeptical at first. "You start f out distrusting [AI], right? You're like let me see some samples first. And… our BDRs were amazed."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              That's the enterprise-ready AI stance: move the time-consuming research and assembly work to machines, keep the relationship work in human hands.
            </p>

            <div className="bg-[#f8f8f8] p-10 my-12 rounded-xl border-2 border-[#e5e5e5] shadow-lg">
              <h3 className="text-base uppercase tracking-[1.5px] text-[#9a33df] mb-4 font-bold">What this means for you:</h3>
              <ul className="text-[17px] leading-[1.7] text-[#333] space-y-2 ml-6">
                <li>Build your GTM around buying groups, not single personas</li>
                <li>Use AI to stack signals and personalize at scale, then deploy humans where it matters</li>
                <li>In 2026, "multi-threading" is table stakes. The differentiator is how coordinated the process is across marketing, BDR, and sales</li>
              </ul>
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
              Attribution is still a knife fight (choose models based on the question you're asking)
            </h2>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              The conversation closes where enterprise growth conversations often end up: attribution, measurement, and the constant tension between what you can track and what actually influenced the deal.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Aida doesn't pretend she solved it. She describes the familiar debates. "Is it linear? Is it uniform? Is it last touch? Is it first touch? All the attribution models that we know if you look at any of them just one way you're limiting yourself. Depends on what question you're asking, right?"
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Her team uses HockeyStack, which recently added an AI-driven model that can weigh things differently. "We know that digital is going to have more touch points and be more volume driven, but this one event really had a big impact, right? And so we're going to weigh those things differently within the attribution model just to kind of tell you truly what's bringing the lift in pipeline and you're not getting lost in the noise."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Because here's the problem with equal weighting: "When we try to look at it all as equal, digital always looks better. And I should say as a digital marketer, yay. But I know that's not the case. I know events are important."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              So her team is trying to have "a more balanced view of what does that journey truly look like?"
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              And they love building those journeys when a deal closes. "We started here with this ad. They clicked on it. They downloaded this piece of content and they were in-opportunity. We were nurturing them throughout the opportunity as well. And then they became a close-won deal."
            </p>

            <div className="relative my-20 py-16 px-12 bg-gradient-to-br from-[#f5f5f5] via-white to-[#f5f5f5] rounded-2xl border-l-8 border-[#9a33df] shadow-2xl">
              <div className="text-4xl lg:text-5xl leading-[1.3] font-bold text-[#1a1a1a] italic mb-6">
                "I want to influence 100% of opportunities. I think marketing should touch everything. Make sure they're educated throughout the buying journey and that we're providing value. And it's not like, hey, sales, all right, that's not your job now. Good luck. Close that deal, right?"
              </div>
              <div className="text-lg text-[#666] font-normal">
                — Aida Kamber, VP of Growth, Mimecast
              </div>
            </div>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Not "marketing sourced," not "marketing got credit." Marketing touched, educated, and supported.
            </p>

            <div className="bg-[#f8f8f8] p-10 my-12 rounded-xl border-2 border-[#e5e5e5] shadow-lg">
              <h3 className="text-base uppercase tracking-[1.5px] text-[#9a33df] mb-4 font-bold">What this means for you:</h3>
              <ul className="text-[17px] leading-[1.7] text-[#333] space-y-2 ml-6">
                <li>Stop arguing about the "right" model. Choose models based on the decision you're making</li>
                <li>If you weigh everything equally, you bias toward high-volume channels</li>
                <li>The goal isn't credit, it's coverage. Marketing influence across the full buying journey</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black mt-20 mb-8 pb-4 border-b-2 border-[#d52884]">
              The tech stack reality: experimentation, consolidation, and tech debt
            </h2>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              When asked about her tech stack, Aida laughs. "It's complicated."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              She told her CMO, "Please just be patient with us. We need to experiment, right?"
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Here's what they're running:
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              UserGems has been in the stack for a while, but they were using it in "a very limited fashion" for one-off signals like job changes or past champions. Now with 2.0, "they've unlocked a whole new universe of possibilities by stacking signals on top of each other and not just looking at one signal individually and they are able to integrate into Gong and target ads on LinkedIn at a person-level."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              6sense is a big part of the stack. They use workflows to automate account routing. "If you meet X criteria you go into this ad program versus if your behavior is Y and you fall into an SMB, mid-market or ENT segment you go into the appropriate track of ad campaigns."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              Aida's head of digital just spoke at the 6sense Breakthrough conference in Vegas about their workflows because "we were a beta customer. I push my team to do beta everything. So we're usually the guinea pigs."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              That doesn't always work. "It's not always fun when it doesn't work, but when it does work, I feel like we get ahead of the curve and ahead of the competition."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              They also use 6sense sales intelligence with Slack alerts. "My CMO and I have Slack alerts for two of our solution areas and seethe hottest accounts and behind their surge in importance,every day. It allows us to see the content and campaigns they are responding to, the events that trigger them to engage further, etc.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              AI agents: They're looking at Qualified to supplement the inbound BDR motion. "Our BDRs time is more valuable than just a meeting with a sales rep. That's not where they bring value. So why not have personalized emails with an AI agent, have a knowledge base to train it with that can probably answer questions better than I can and then have it directly with the calendar link schedule a meeting with the rep."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              She's honest about the tech debt problem. "I think it's much easier for new startups to have a really clean, fresh tech stack that's a lot less complicated as they have a lot less tech debt. A 20+ year old company has to reinvest itself but with a much bigger customer base, we also have the advantage of delighting a large number of customers that already trust us.
            </p>

            <div className="my-16 relative">
              <div className="h-[300px] w-full rounded-lg overflow-hidden shadow-xl">
                <img
                  src="/networkingevent.png"
                  alt="Marketing Technology Stack"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="bg-[#f8f8f8] p-10 my-12 rounded-xl border-2 border-[#e5e5e5] shadow-lg">
              <h3 className="text-base uppercase tracking-[1.5px] text-[#9a33df] mb-4 font-bold">What this means for you:</h3>
              <ul className="text-[17px] leading-[1.7] text-[#333] space-y-2 ml-6">
                <li>Beta everything if you can absorb the risk. The upside is real</li>
                <li>Build partnerships with vendors where the CSM actually engages year-round, not just at renewal</li>
                <li>Legacy mart-tech platforms create tech debt that compounds. Plan the migration now, even if it's two years out</li>
                <li>Don't use humans to do what AI agents can do. Redeploy them where they actually add value - building trust and relationships.</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-black mt-20 mb-8 pb-4 border-b-2 border-[#9a33df]">
              The 2026 growth posture Aida is modeling
            </h2>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              You can feel the shape of the next era in how Aida talks. AI is everywhere in the workflow, but it's not the strategy. The strategy is still customer focus, customer experience, personalization, and measurable influence.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              She's experimenting aggressively. She's honest about the tradeoffs. And she's clear on what hasn't changed.
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              When asked what she loves talking about, what she'd want people to ask her about, her answer is immediate: "Digital campaigns. That's where I thrive. Being able to put valuable content across each buying stage in front of our customers and users to truly help them solve a problem that they're looking to solve and then looking at how that becomes a meeting, qualified pipeline and then closed won and a happy customer."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              She pauses. "That journey just gives me so much satisfaction, knowing that my team and I were able to influence that  I'm super passionate about delivering a great customer experience, meeting the buyer where they are in their journey and  the ability to measure it  all with the tools that we now have."
            </p>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              The philosophy is consistent:
            </p>

            <ul className="text-[17px] leading-[1.7] text-[#333] space-y-2 ml-6 mb-9">
              <li>Go deeper because the buyer is already deep</li>
              <li>Start with the use case, then tell the platform story</li>
              <li>Use AI to personalize and scale, without sacrificing trust</li>
              <li>Multi-thread across buying groups</li>
              <li>Measure like an operator, not like a storyteller</li>
            </ul>

            <p className="text-[17px] leading-[1.8] text-[#333] mb-9">
              If growth and demand gen in 2026 has a competitive edge, it's this: the teams that treat AI as a co-pilot to become more customer-centric, not just more productive, will be the ones who win.
            </p>

            <div className="mt-20 mb-12 bg-gradient-to-br from-[#9a33df]/5 to-[#d52884]/5 p-12 rounded-2xl border border-[#9a33df]/20">
              <h3 className="text-2xl font-bold text-black mb-6">Closing Insight</h3>
              <p className="text-[18px] leading-[1.8] text-[#333]">
                Aida Kamber's approach to growth marketing demonstrates how enterprise leaders are adapting to the AI era not by replacing human judgment with automation, but by using AI to scale what humans do best: understanding customer needs, building trust, and delivering value at every touchpoint. Her work at Mimecast shows that the future of growth isn't about choosing between AI efficiency and human connection—it's about strategically combining both to create experiences that truly serve the buyer's journey.
              </p>
            </div>

            <div className="mt-16 p-10 bg-gradient-to-br from-[#f8f8f8] to-white rounded-2xl border-2 border-[#9a33df]/20 shadow-lg">
              <h3 className="text-sm uppercase tracking-[2px] text-[#9a33df] mb-5 font-bold">About the Interviewers</h3>
              <p className="text-[15px] leading-[1.7] text-[#555] mb-4">
                <strong>Beau Horton</strong> is VP of Marketing at SINC USA. He specializes in growth strategies and demand generation for enterprise technology companies.
              </p>
              <p className="text-[15px] leading-[1.7] text-[#555]">
                <strong>Jared Bral</strong> is VP of Marketverse & CDAIO Division. He specializes in interviewing marketing leaders about what's actually working in growth, demand generation, and field marketing. Connect with him at upcoming Marketverse events.
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
