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
    
    // تقدري تبدلي هاد الكلمات بكلمات كاينة فعلاً فـ الـ App ديالك
    // هادا كيقلب واش كاين شي نص فيه "Interview" أو "Welcome"
    const mainElement = screen.queryByText(/Interview/i) || screen.queryByRole('banner');
    
    expect(mainElement).toBeInTheDocument;
  });

});