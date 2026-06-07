import React from 'react';
import { useForm } from 'react-hook-form';

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6 mt-8 max-w-md">
      <div>
        <input 
          {...register("name", { required: true })} 
          placeholder="Your Name"
          className="w-full bg-surface border-b border-muted/30 pb-2 focus:outline-none focus:border-sage transition-colors text-ink placeholder:text-muted bg-transparent"
        />
        {errors.name && <span className="text-xs text-dust mt-1 block">This field is required</span>}
      </div>
      
      <div>
        <input 
          {...register("email", { required: true, pattern: /^\S+@\S+$/i })} 
          placeholder="Your Email"
          className="w-full bg-surface border-b border-muted/30 pb-2 focus:outline-none focus:border-sage transition-colors text-ink placeholder:text-muted bg-transparent"
        />
        {errors.email && <span className="text-xs text-dust mt-1 block">Please enter a valid email</span>}
      </div>
      
      <div>
        <textarea 
          {...register("message", { required: true })} 
          placeholder="Your Message"
          rows="4"
          className="w-full bg-surface border-b border-muted/30 pb-2 focus:outline-none focus:border-sage transition-colors text-ink placeholder:text-muted bg-transparent resize-none"
        ></textarea>
        {errors.message && <span className="text-xs text-dust mt-1 block">This field is required</span>}
      </div>
      
      <button 
        type="submit"
        className="self-start mt-4 bg-ink text-paper px-8 py-3 rounded-full hover:bg-sage hover:text-ink transition-colors font-display italic"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
