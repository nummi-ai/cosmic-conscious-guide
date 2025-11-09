import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Nummi different from other AI chatbots?",
      answer: "Nummi combines advanced AI with Vedic astrology to provide personalized cosmic guidance. Unlike generic chatbots, Nummi truly remembers you—your conversations, preferences, and journey—creating a deeply personal experience that evolves with you."
    },
    {
      question: "Is my personal data and conversations private?",
      answer: "Absolutely. Your privacy is our top priority. All conversations are encrypted, and your personal data is securely stored. We never share your information with third parties, and you have full control over your data at all times."
    },
    {
      question: "How accurate is the Vedic astrology?",
      answer: "Our Vedic astrology system is based on authentic ancient principles and algorithms developed with expert astrologers. We combine traditional wisdom with modern AI to provide personalized insights based on your birth chart, planetary positions, and cosmic alignments."
    },
    {
      question: "Do I need to pay to use Nummi?",
      answer: "Nummi offers a free tier with essential features including daily guidance and basic AI conversations. For unlimited access to advanced astrology insights, detailed birth chart analysis, and priority AI responses, we offer affordable premium plans starting at just $9.99/month."
    },
    {
      question: "When will Nummi be available on iOS?",
      answer: "We're working hard to bring Nummi to iOS! Sign up on our download page to get notified as soon as we launch on the App Store. In the meantime, you can enjoy the full Nummi experience on Android."
    },
    {
      question: "Can Nummi really remember past conversations?",
      answer: "Yes! Nummi has an advanced memory system that remembers your conversations, preferences, goals, and journey. This allows for more meaningful, contextual interactions that build on your history rather than starting fresh each time."
    },
    {
      question: "What kind of guidance does Nummi provide?",
      answer: "Nummi offers personalized daily cosmic guidance, relationship insights, career advice based on your chart, meditation recommendations, and practical wisdom for navigating life's challenges—all tailored to your unique astrological profile and current planetary transits."
    },
    {
      question: "Is Nummi suitable for beginners in astrology?",
      answer: "Absolutely! Nummi is designed for everyone, from complete beginners to astrology enthusiasts. The AI explains concepts in simple, easy-to-understand language and gradually introduces you to deeper astrological wisdom as you learn."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground">
              Everything you need to know about Nummi
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold text-foreground pr-4">
                    {faq.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Still have questions CTA */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <a
              href="mailto:hello@nummi.ai"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contact us at hello@nummi.ai
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
