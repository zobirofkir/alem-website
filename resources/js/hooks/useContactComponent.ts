import { useState, useEffect } from 'react';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface UseContactComponentProps {
  theme?: 'light' | 'dark' | 'auto';
}

export const useContactComponent = ({ theme = 'auto' }: UseContactComponentProps = {}) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  useEffect(() => {
    if (theme !== 'auto') {
      setIsDarkMode(theme === 'dark');
      return;
    }
    
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setIsDarkMode(e.matches);
    darkModeMediaQuery.addEventListener('change', handleChange);
    
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, [theme]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return {
    formData,
    isDarkMode,
    handleChange,
    handleSubmit
  };
};

export default useContactComponent;