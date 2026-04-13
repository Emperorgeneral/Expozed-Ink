import { useScrollReveal } from '../hooks/useScrollReveal';
import { Phone, MapPin, Clock, Mail, Send } from 'lucide-react';
import { useState } from 'react';

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
  </svg>
);

export default function Contact() {
  const { ref: ref1, isVisible: vis1 } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FDF8F4] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A96E]/20 to-transparent" />
      <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-[#7A8B6F]/5" />
      <div className="absolute bottom-10 right-10 w-52 h-52 rounded-full bg-[#D4A0A0]/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          ref={ref1}
          className={`text-center mb-16 transition-all duration-800 ${vis1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <p className="font-great-vibes text-[#C9A96E] text-2xl mb-2">Let's Connect</p>
          <h2 className="font-playfair text-3xl sm:text-4xl md:text-5xl font-semibold text-[#2D2D2D] mb-4">
            Book Your <span className="text-[#7A8B6F] italic">Appointment</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-px bg-[#C9A96E]/50" />
            <div className="w-2 h-2 rounded-full bg-[#7A8B6F]/40" />
            <div className="w-12 h-px bg-[#C9A96E]/50" />
          </div>
          <p className="font-inter text-[#6B6B6B] mt-6 max-w-2xl mx-auto">
            Ready to start your tattoo journey? Fill out the form below or reach out directly. 
            I'll get back to you within 24 hours to discuss your vision.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <ContactCard
                icon={<MapPin size={20} />}
                title="Studio Location"
                lines={['333 Broadway St, Suite A', 'Estacada, OR 97023']}
              />
              <ContactCard
                icon={<Phone size={20} />}
                title="Phone"
                lines={[]}
                href="tel:+19715064142"
                linkText="(971) 506-4142"
              />
              <ContactCard
                icon={<Clock size={20} />}
                title="Studio Hours"
                lines={['By appointment only', 'Tue – Sat: 10am – 6pm', 'Sun – Mon: Closed']}
              />
              <ContactCard
                icon={<Mail size={20} />}
                title="Email"
                lines={[]}
                href="mailto:expozedink@gmail.com"
                linkText="expozedink@gmail.com"
              />
            </div>

            {/* Social Links */}
            <div>
              <p className="font-inter text-sm text-[#6B6B6B] mb-3">Follow along for daily art & updates:</p>
              <div className="flex items-center gap-3">
                <a
                  href="https://www.instagram.com/expozed_ink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center text-[#6B6B6B] hover:text-[#D4A0A0] hover:shadow-elevated transition-all duration-300"
                  aria-label="Instagram"
                >
                  <InstagramIcon />
                </a>
                <a
                  href="https://www.facebook.com/ExpozedInk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center text-[#6B6B6B] hover:text-[#D4A0A0] hover:shadow-elevated transition-all duration-300"
                  aria-label="Facebook"
                >
                  <FacebookIcon />
                </a>
                <a
                  href="https://www.tiktok.com/@expozedink"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full bg-white shadow-soft flex items-center justify-center text-[#6B6B6B] hover:text-[#D4A0A0] hover:shadow-elevated transition-all duration-300"
                  aria-label="TikTok"
                >
                  <TikTokIcon />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-soft">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-[#7A8B6F]/10 flex items-center justify-center text-[#7A8B6F] mx-auto mb-6">
                    <Send size={28} />
                  </div>
                  <h3 className="font-playfair text-2xl font-semibold text-[#2D2D2D] mb-3">
                    Message Sent! ✿
                  </h3>
                  <p className="font-inter text-[#6B6B6B]">
                    Thank you for reaching out! BreAnn will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      label="Your Name *"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(v) => setFormData({ ...formData, name: v })}
                      placeholder="Jane Doe"
                    />
                    <FormField
                      label="Email *"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(v) => setFormData({ ...formData, email: v })}
                      placeholder="jane@email.com"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <FormField
                      label="Phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(v) => setFormData({ ...formData, phone: v })}
                      placeholder="(555) 123-4567"
                    />
                    <div>
                      <label className="block font-inter text-sm font-medium text-[#2D2D2D] mb-2">
                        Service Interested In *
                      </label>
                      <select
                        required
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full font-inter text-sm border border-[#F5EDE4] rounded-xl px-4 py-3 bg-[#FDF8F4] focus:outline-none focus:border-[#7A8B6F] focus:ring-1 focus:ring-[#7A8B6F]/20 transition-all text-[#2D2D2D]"
                      >
                        <option value="">Select a service...</option>
                        <option value="custom">Custom Tattoo</option>
                        <option value="flash">Flash Design</option>
                        <option value="therapeutic">Therapeutic / Memorial</option>
                        <option value="coverup">Cover-Up / Refresh</option>
                        <option value="consultation">Consultation Only</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-inter text-sm font-medium text-[#2D2D2D] mb-2">
                      Tell Me About Your Vision *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe the tattoo you have in mind, size, placement, any inspiration or reference images..."
                      className="w-full font-inter text-sm border border-[#F5EDE4] rounded-xl px-4 py-3 bg-[#FDF8F4] focus:outline-none focus:border-[#7A8B6F] focus:ring-1 focus:ring-[#7A8B6F]/20 transition-all resize-none text-[#2D2D2D] placeholder:text-[#A09890]"
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
                    <Send size={18} />
                    Send Message
                  </button>

                  <p className="font-inter text-xs text-[#A09890] text-center">
                    I'll respond within 24 hours. For urgent inquiries, please call or text (971) 506-4142.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  title,
  lines,
  href,
  linkText,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
  linkText?: string;
}) {
  const Content = (
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-lg bg-[#7A8B6F]/10 flex items-center justify-center text-[#7A8B6F] shrink-0">
        {icon}
      </div>
      <div>
        <p className="font-inter text-xs text-[#A09890] tracking-wide uppercase mb-1">{title}</p>
        {lines.map((line) => (
          <p key={line} className="font-cormorant text-[#2D2D2D] text-lg leading-snug">{line}</p>
        ))}
        {href && linkText && (
          <a href={href} className="font-cormorant text-[#7A8B6F] text-lg hover:underline">
            {linkText}
          </a>
        )}
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block p-4 rounded-xl hover:bg-[#F5EDE4]/40 transition-colors">
      {Content}
    </a>
  ) : (
    <div className="p-4 rounded-xl">{Content}</div>
  );
}

function FormField({
  label,
  type,
  required,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  type: string;
  required?: boolean;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <div>
      <label className="block font-inter text-sm font-medium text-[#2D2D2D] mb-2">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full font-inter text-sm border border-[#F5EDE4] rounded-xl px-4 py-3 bg-[#FDF8F4] focus:outline-none focus:border-[#7A8B6F] focus:ring-1 focus:ring-[#7A8B6F]/20 transition-all text-[#2D2D2D] placeholder:text-[#A09890]"
      />
    </div>
  );
}
