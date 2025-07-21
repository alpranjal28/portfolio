import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import ContactPage from '@/app/contact/page';
import emailjs from '@emailjs/browser';

// Mock the emailjs module
jest.mock('@emailjs/browser', () => ({
  sendForm: jest.fn()
}));

// Mock the react-toastify
jest.mock('react-toastify', () => ({
  toast: jest.fn()
}));

// Mock clipboard API
Object.defineProperty(navigator, 'clipboard', {
  value: {
    writeText: jest.fn()
  }
});

// Mock environment variables
process.env.NEXT_PUBLIC_SERVICE_EMAIL_ID = 'test-service-id';
process.env.NEXT_PUBLIC_TEMPLATE_ID = 'test-template-id';
process.env.NEXT_PUBLIC_PUBLIC_KEY = 'test-public-key';

describe('ContactPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders the contact page with form elements', () => {
    render(<ContactPage />);
    
    // Check if the main heading elements are present
    expect(screen.getByText('Get in touch')).toBeInTheDocument();
    
    // Check if form elements are present
    expect(screen.getAllByPlaceholderText(/your message/i)[0]).toBeInTheDocument();
    expect(screen.getAllByPlaceholderText(/your email/i)[0]).toBeInTheDocument();
    expect(screen.getAllByText(/send message/i)[0]).toBeInTheDocument();
  });

  it('handles form submission successfully', async () => {
    // Mock successful email submission
    emailjs.sendForm.mockResolvedValueOnce({ text: 'Success' });
    
    render(<ContactPage />);
    
    // Fill out the form (using the mobile version for simplicity)
    const messageInput = screen.getAllByPlaceholderText(/your message/i)[0];
    const emailInput = screen.getAllByPlaceholderText(/your email/i)[0];
    const submitButton = screen.getAllByText(/send message/i)[0];
    
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    // Check if emailjs.sendForm was called with correct parameters
    expect(emailjs.sendForm).toHaveBeenCalledWith(
      'test-service-id',
      'test-template-id',
      expect.any(Object),
      { publicKey: 'test-public-key' }
    );
    
    // Wait for success message to appear
    await waitFor(() => {
      expect(screen.getAllByText(/Message sent successfully/i)[0]).toBeInTheDocument();
    });
  });

  it('handles form submission error', async () => {
    // Mock failed email submission
    emailjs.sendForm.mockRejectedValueOnce(new Error('Failed to send email'));
    
    render(<ContactPage />);
    
    // Fill out the form
    const messageInput = screen.getAllByPlaceholderText(/your message/i)[0];
    const emailInput = screen.getAllByPlaceholderText(/your email/i)[0];
    const submitButton = screen.getAllByText(/send message/i)[0];
    
    fireEvent.change(messageInput, { target: { value: 'Test message' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.click(submitButton);
    
    // Wait for error message to appear
    await waitFor(() => {
      expect(screen.getAllByText(/Something went wrong/i)[0]).toBeInTheDocument();
    });
  });

  it('copies email to clipboard when email icon is clicked', async () => {
    const { toast } = require('react-toastify');
    
    render(<ContactPage />);
    
    // Find and click the email copy button (using attribute selector instead of role)
    const emailButton = screen.getByRole('button', { name: '' });
    fireEvent.click(emailButton);
    
    // Check if clipboard API was called with correct email
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('alpranjal28@gmail.com');
    
    // Check if toast notification was shown
    expect(toast).toHaveBeenCalledWith('Email copied to clipboard!');
  });
});
