
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="pt-[120px] pb-[120px] overflow-hidden scroll-mt-[80px]">
      <div className="max-w-[480px] mx-auto text-center px-6">
        
        <h2 className="font-display italic font-bold text-[32px] md:text-[44px] text-paper leading-tight">
          Let's make something.
        </h2>
        
        <p className="font-body font-light text-sm text-paper/70 mt-3">
          No brief too small. No idea too strange.
        </p>
        
        <div className="mt-[52px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
