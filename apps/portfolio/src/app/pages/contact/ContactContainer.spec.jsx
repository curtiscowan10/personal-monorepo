import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@personal-monorepo/shared-theme';
import ContactContainer from './ContactContainer';

const renderWithProviders = (component) => {
  return render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>{component}</ThemeProvider>
    </BrowserRouter>
  );
};

describe('ContactContainer', () => {
  it('should render successfully', () => {
    renderWithProviders(<ContactContainer />);
    expect(screen.getByText('Get In Touch')).toBeTruthy();
  });

  it('should render header section with correct content', () => {
    renderWithProviders(<ContactContainer />);

    expect(screen.getByText('Get In Touch')).toBeTruthy();
    expect(screen.getByText(/I'd love to hear from you/)).toBeTruthy();
  });

  it('should render contact form with all fields', () => {
    renderWithProviders(<ContactContainer />);

    expect(screen.getByText('Send Me a Message')).toBeTruthy();
    expect(screen.getByLabelText('Your Name')).toBeTruthy();
    expect(screen.getByLabelText('Your Email')).toBeTruthy();
    expect(screen.getByLabelText('Subject')).toBeTruthy();
    expect(screen.getByLabelText('Your Message')).toBeTruthy();
    expect(screen.getByRole('button', { name: /send message/i })).toBeTruthy();
  });

  it('should initialize form fields with empty values', () => {
    renderWithProviders(<ContactContainer />);

    expect(screen.getByLabelText('Your Name')).toHaveValue('');
    expect(screen.getByLabelText('Your Email')).toHaveValue('');
    expect(screen.getByLabelText('Subject')).toHaveValue('');
    expect(screen.getByLabelText('Your Message')).toHaveValue('');
  });

  it('should handle form input changes correctly', () => {
    renderWithProviders(<ContactContainer />);

    const nameInput = screen.getByLabelText('Your Name');
    const emailInput = screen.getByLabelText('Your Email');
    const subjectInput = screen.getByLabelText('Subject');
    const messageInput = screen.getByLabelText('Your Message');

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
    fireEvent.change(messageInput, { target: { value: 'Test message' } });

    expect(nameInput).toHaveValue('John Doe');
    expect(emailInput).toHaveValue('john@example.com');
    expect(subjectInput).toHaveValue('Test Subject');
    expect(messageInput).toHaveValue('Test message');
  });

  it('should handle form submission and show success alert', async () => {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    renderWithProviders(<ContactContainer />);

    // Fill out form
    fireEvent.change(screen.getByLabelText('Your Name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.change(screen.getByLabelText('Your Email'), {
      target: { value: 'john@example.com' },
    });
    fireEvent.change(screen.getByLabelText('Subject'), {
      target: { value: 'Test Subject' },
    });
    fireEvent.change(screen.getByLabelText('Your Message'), {
      target: { value: 'Test message' },
    });

    // Submit form
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Check that console.log was called with form data
    expect(consoleSpy).toHaveBeenCalledWith('Form submitted:', {
      name: 'John Doe',
      email: 'john@example.com',
      subject: 'Test Subject',
      message: 'Test message',
    });

    // Check that success alert is shown
    expect(
      screen.getByText("Thank you for your message! I'll get back to you soon.")
    ).toBeTruthy();

    // Check that form is reset
    expect(screen.getByLabelText('Your Name')).toHaveValue('');
    expect(screen.getByLabelText('Your Email')).toHaveValue('');
    expect(screen.getByLabelText('Subject')).toHaveValue('');
    expect(screen.getByLabelText('Your Message')).toHaveValue('');

    consoleSpy.mockRestore();
  });

  it('should render contact information section', () => {
    renderWithProviders(<ContactContainer />);

    expect(screen.getByText('Contact Information')).toBeTruthy();
    expect(screen.getByText('Email')).toBeTruthy();
    expect(screen.getByText('hello@portfolio.com')).toBeTruthy();
    expect(screen.getByText('Phone')).toBeTruthy();
    expect(screen.getByText('+1 (555) 123-4567')).toBeTruthy();
    expect(screen.getByText('Location')).toBeTruthy();
    expect(screen.getByText('San Francisco, CA')).toBeTruthy();
  });

  it('should render social links section', () => {
    renderWithProviders(<ContactContainer />);

    expect(screen.getByText('Follow Me')).toBeTruthy();

    // Check that social links have correct attributes
    const socialButtons = screen.getAllByRole('link');
    const linkedInButton = socialButtons.find(
      (button) =>
        button.getAttribute('href') === 'https://linkedin.com/in/portfolio'
    );
    const githubButton = socialButtons.find(
      (button) => button.getAttribute('href') === 'https://github.com/portfolio'
    );
    const twitterButton = socialButtons.find(
      (button) =>
        button.getAttribute('href') === 'https://twitter.com/portfolio'
    );

    expect(linkedInButton.getAttribute('target')).toBe('_blank');
    expect(githubButton.getAttribute('target')).toBe('_blank');
    expect(twitterButton.getAttribute('target')).toBe('_blank');
  });

  it('should render availability section', () => {
    renderWithProviders(<ContactContainer />);

    expect(screen.getByText('Availability')).toBeTruthy();
    expect(
      screen.getByText(/I'm currently available for freelance/)
    ).toBeTruthy();
  });

  it('should handle alert close correctly', async () => {
    renderWithProviders(<ContactContainer />);

    // Submit form to show alert
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    // Wait for alert to appear
    await waitFor(() => {
      expect(
        screen.getByText(
          "Thank you for your message! I'll get back to you soon."
        )
      ).toBeTruthy();
    });

    // Close alert
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);

    // Alert should be closed
    await waitFor(() => {
      expect(
        screen.queryByText(
          "Thank you for your message! I'll get back to you soon."
        )
      ).not.toBeTruthy();
    });
  });

  it('should have correct CSS classes applied', () => {
    const { container } = renderWithProviders(<ContactContainer />);

    expect(container.querySelector('.contact')).toBeTruthy();
    expect(container.querySelector('.contact__header')).toBeTruthy();
    expect(container.querySelector('.contact__form')).toBeTruthy();
    expect(container.querySelector('.contact__sidebar')).toBeTruthy();
  });

  it('should not show success alert initially', () => {
    renderWithProviders(<ContactContainer />);
    expect(
      screen.queryByText(
        "Thank you for your message! I'll get back to you soon."
      )
    ).not.toBeTruthy();
  });

  it('should match snapshot', () => {
    const { container } = renderWithProviders(<ContactContainer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
