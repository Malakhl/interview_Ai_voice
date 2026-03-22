import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from "../App";

describe('Frontend Professional Smoke Test', () => {
  
  it('should render the application without crashing', () => {
    const { container } = render(<App />);
   
    expect(container).toBeDefined();
  });

  it('should display the main layout elements', () => {
    render(<App />);
    
    
    const interviewElements = screen.getAllByText(/Interview/i);
    const mainElement = interviewElements[0];
    
    expect(mainElement).toBeInTheDocument();
  });

});