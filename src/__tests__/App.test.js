import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

// Your tests here


test("displays a top-level heading with the text `Hi, I'm _______`", () => {  
  render(<App />);  
  const topLevelHeading = screen.getByRole("heading", {  
    name: /hi, i'm/i,  
    exact: false,  
    level: 1,  
  });  
  expect(topLevelHeading).toBeInTheDocument();  
});  

test("displays an image with alt text identifying the content", () => {  
  render(<App />);  
  const image = screen.getByAltText("A description of yourself");  
  expect(image).toBeInTheDocument();  
  expect(image).toHaveAttribute('src', 'your-image-url.jpg'); // replace with the actual image URL  
});  

test("displays a second-level heading with the text `About Me`", () => {  
  render(<App />);  
  const aboutMeHeading = screen.getByRole("heading", {  
    name: /about me/i,  
    exact: false,  
    level: 2,  
  });  
  expect(aboutMeHeading).toBeInTheDocument();  
});  

test("displays a paragraph for the biography", () => {  
  render(<App />);  
  const biographyParagraph = screen.getByText(/this is my biography/i);  
  expect(biographyParagraph).toBeInTheDocument();  
});  

test("contains a link to GitHub", () => {  
  render(<App />);  
  const githubLink = screen.getByRole("link", { name: /github/i });  
  expect(githubLink).toBeInTheDocument();  
  expect(githubLink).toHaveAttribute('href', 'https://github.com/your-github'); // replace with your actual GitHub URL  
});  

test("contains a link to LinkedIn", () => {  
  render(<App />);  
  const linkedinLink = screen.getByRole("link", { name: /linkedin/i });  
  expect(linkedinLink).toBeInTheDocument();  
  expect(linkedinLink).toHaveAttribute('href', 'https://linkedin.com/in/your-linkedin'); // replace with your actual LinkedIn URL  
});