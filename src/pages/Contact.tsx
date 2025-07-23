import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    
    // Simulate API call (replace with actual fetch to your backend)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: '', email: '', message: '' });
    
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
        <Mail className="mr-3" /> Get In Touch
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">Name</label>
              <input
                type="text"
                id="name"
                placeholder='Your name'
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className={`w-full px-4 py-2 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:bg-gray-900 dark:border-gray-600'}`}
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                id="email"
                placeholder='Your Email'
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:bg-gray-900 dark:border-gray-600'}`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">Message</label>
              <textarea
                id="message"
                rows={5}
                placeholder='Say something Dude!'
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className={`w-full px-4 py-2 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:bg-gray-900 dark:border-gray-600'}`}
              ></textarea>
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary flex items-center justify-center w-full"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  Send Message <Send className="ml-2" size={18} />
                </>
              )}
            </button>

            {isSuccess && (
              <div className="p-3 bg-green-100 dark:bg-green-900/50 text-green-700 dark:text-green-300 rounded-lg text-center">
                Message sent successfully!
              </div>
            )}
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="text-indigo-500 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">mchankuxieey@gmail.com, chankuzieey@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="text-indigo-500 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+234 911 7304 305, +234 912 0770 399</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-indigo-500 mt-1 mr-3" size={20} />
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-gray-600 dark:text-gray-400">Nigeria, Kaduna</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h2 className="text-xl font-semibold mb-4">Availability</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-2">
              I'm currently available for freelance work and full-time positions.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Typically respond within <span className="font-medium">24 hours</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}