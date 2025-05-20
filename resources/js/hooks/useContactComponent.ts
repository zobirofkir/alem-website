import { useState, useEffect } from 'react';
import { router } from '@inertiajs/react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface UseContactComponentProps {
  theme?: 'light' | 'dark' | 'auto';
}

const useContactComponent = ({ theme = 'auto' }: UseContactComponentProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  // Handle theme changes
  useEffect(() => {
    if (theme === 'dark') {
      setIsDarkMode(true);
    } else if (theme === 'light') {
      setIsDarkMode(false);
    } else {
      // Auto mode - detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
      
      // Listen for changes in system preference
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
      
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, [theme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    router.post('/contacts', formData, {
      onStart: () => {
        setIsSubmitting(true);
        setSubmitStatus(null);
      },
      onSuccess: () => {
        setSubmitStatus({
          success: true,
          message: 'Message envoyé avec succès! Nous vous répondrons bientôt.'
        });
        
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      },
      onError: (errors) => {
        setSubmitStatus({
          success: false,
          message: 'Une erreur est survenue. Veuillez réessayer.'
        });
      },
      onFinish: () => {
        setIsSubmitting(false);
      }
    });
  };

  return {
    formData,
    isDarkMode,
    isSubmitting,
    submitStatus,
    handleChange,
    handleSubmit
  };
};

export default useContactComponent;