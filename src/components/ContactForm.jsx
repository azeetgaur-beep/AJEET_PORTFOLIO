import { useForm } from 'react-hook-form';
import { useForm as useFormspree } from '@formspree/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Sunflower from '../doodles/Sunflower';

const ContactForm = ({ onFocusChange }) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [state, handleSubmitFormspree] = useFormspree(import.meta.env.VITE_FORMSPREE_KEY || 'xvznkqrw');
  
  const { scrollY } = useScroll();
  
  // Creates a dynamic, pulsating golden glow that responds directly to scroll movement
  const glowFilter = useTransform(scrollY, (y) => {
    const intensity = (Math.sin(y / 30) + 1) / 2; // oscillates between 0 and 1 as user scrolls
    const blurRadius = 4 + (intensity * 16); // 4px to 20px blur
    const opacity = 0.4 + (intensity * 0.6); // 0.4 to 1.0 opacity
    return `drop-shadow(0px 0px ${blurRadius}px rgba(241, 224, 90, ${opacity}))`;
  });

  const onSubmit = async (data, e) => {
    // Honeypot check
    if (data.website) {
      return;
    }
    
    // Submit the data directly to Formspree
    await handleSubmitFormspree(e);
  };

  if (state.succeeded) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="font-display italic text-sage text-lg mb-6 drop-shadow-sm">
          Sent. I'll get back to you.
        </p>
        <motion.div 
          className="relative flex justify-center items-end h-[70px] w-[70px]"
          style={{ filter: glowFilter }}
        >
          {/* Left leaning */}
          <Sunflower className="absolute left-[5px] bottom-0 w-[24px] opacity-80 -rotate-12" stroke="currentColor" />
          {/* Right leaning */}
          <Sunflower className="absolute right-[5px] bottom-0 w-[24px] opacity-80 rotate-12" stroke="currentColor" />
          {/* Center, slightly taller/larger */}
          <Sunflower className="absolute bottom-[6px] w-[32px] opacity-100 z-10" stroke="currentColor" />
        </motion.div>
      </div>
    );
  }

  const inputClasses = "w-full block bg-transparent border-0 border-b border-white/40 py-[12px] font-body font-bold text-sm text-paper outline-none transition-colors duration-300 focus:border-white focus:border-b-2 placeholder-paper/50";
  const labelClasses = "block text-left font-body font-bold text-[10px] tracking-widest uppercase text-paper mb-[6px] cursor-pointer";
  const errorClasses = "block text-left font-body font-light text-[11px] text-dust mt-[4px]";

  return (
    <div className="border border-white/10 bg-black/20 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-2xl relative overflow-hidden group">
      {/* Subtle glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none" />
      
      <form onSubmit={handleSubmit(onSubmit)} className="text-left relative z-10">
        {/* Honeypot field - hidden */}
      <div style={{ display: 'none' }}>
        <input type="text" {...register("website")} tabIndex="-1" autoComplete="off" />
      </div>

      <div className="mb-[28px]">
        <label htmlFor="name" className={labelClasses}>Name</label>
        <input 
          id="name"
          {...register("name", { required: "Name is required" })} 
          placeholder="Jane Doe"
          className={inputClasses}
          onFocus={() => onFocusChange?.(true)}
          onBlur={() => onFocusChange?.(false)}
        />
        {errors.name && <span className={errorClasses}>{errors.name.message}</span>}
      </div>

      <div className="mb-[28px]">
        <label htmlFor="email" className={labelClasses}>Email</label>
        <input 
          id="email"
          {...register("email", { 
            required: "Email is required", 
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email format"
            }
          })} 
          placeholder="hello@example.com"
          className={inputClasses}
          onFocus={() => onFocusChange?.(true)}
          onBlur={() => onFocusChange?.(false)}
        />
        {errors.email && <span className={errorClasses}>{errors.email.message}</span>}
      </div>

      <div className="mb-[28px]">
        <label htmlFor="message" className={labelClasses}>Message</label>
        <textarea 
          id="message"
          {...register("message", { 
            required: "Message is required",
            minLength: {
              value: 10,
              message: "Message must be at least 10 characters"
            }
          })} 
          placeholder="How can we work together?"
          rows="4"
          className={`${inputClasses} resize-none`}
          onFocus={() => onFocusChange?.(true)}
          onBlur={() => onFocusChange?.(false)}
        ></textarea>
        {errors.message && <span className={errorClasses}>{errors.message.message}</span>}
      </div>

      <div className="text-center">
        <button 
          type="submit"
          disabled={state.submitting}
          className="bg-transparent rounded-none border border-white/40 font-body font-light text-xs tracking-widest uppercase text-paper px-[36px] py-[14px] mt-[8px] hover:bg-white hover:text-black transition-colors duration-300 ease-in-out disabled:opacity-50"
        >
          {state.submitting ? 'Sending...' : 'Submit'}
        </button>
      </div>
      </form>
    </div>
  );
};

export default ContactForm;
