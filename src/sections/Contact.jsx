import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-muted/20 mb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="font-display italic text-5xl md:text-6xl text-sage mb-6">Let's build <br />something.</h2>
          <p className="text-muted font-light mb-8 max-w-sm">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
          <a href="mailto:hello@example.com" className="text-lg hover:text-dust transition-colors">hello@example.com</a>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
