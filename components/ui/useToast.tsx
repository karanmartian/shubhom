import { useState } from 'react';

interface ToastProps {
  id: number;
  title: string;
  description: string;
  variant?: 'default' | 'destructive';
  duration?: number;
}

export const useToast = () => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const toast = ({ title, description, variant = 'default', duration = 3000 }: ToastProps) => {
    const id = Date.now();
    const newToast = { id, title, description, variant };
    
    setToasts((currentToasts) => [...currentToasts, newToast]);

    setTimeout(() => {
      setToasts((currentToasts) => currentToasts.filter((toast) => toast.id !== id));
    }, duration);
  };

  return { toast, toasts };
};

export type { ToastProps };

