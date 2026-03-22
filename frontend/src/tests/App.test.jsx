import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from "../App";

describe('Frontend Professional Smoke Test', () => {
  
  it('should render the application without crashing', () => {
    const { container } = render(<App />);
    // كيتأكد أن الـ App تلونات (rendered) وماعطات حتى Error
    expect(container).toBeDefined();
  });

  it('should display the main layout elements', () => {
    render(<App />);
    
    // بلاصة queryByText، غانستعملو getAllByText وناخدو أول عنصر [0]
    // هكا حتى يلا لقى 20 "Interview" ماغايعطيش Error
    const interviewElements = screen.getAllByText(/Interview/i);
    const mainElement = interviewElements[0];
    
    expect(mainElement).toBeInTheDocument();
  });

});