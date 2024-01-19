# react-imagepreloader

A simple React hook for preloading images on the client side.

## Description

The `react-imagepreloader` is a lightweight and customizable React hook that facilitates the preloading of images in your React applications. It can be particularly useful when you want to ensure that images are loaded before rendering certain components, improving the user experience by reducing latency.

This hook becomes `especially` beneficial in scenarios where your application involves large `background images or heavy assets`, where delayed loading could result in a less-than-optimal user interface experience.

## Installation

To install the library, use your preferred package manager:

```bash
npm install react-imagepreloader

Usage
Example
Here's a simple example demonstrating how to use the useImageLoader hook:

import React from 'react';
import useImageLoader from 'react-imagepreloader';

// ... your component code ...

const YourComponent = () => {
  // An array of image URLs to be preloaded
  const allCards = [
    'url1.jpg',
    'url2.jpg',
    'url3.jpg',
    // ... add more image URLs as needed
  ];

  // Using the useImageLoader hook
  const imagesLoaded = useImageLoader({
    images: allCards,
    onError: () => {
      console.log("Failed to load images!");
      // Handle error if needed
    },
    onSuccess: () => {
      console.log("Images loaded successfully!");
      // Proceed with rendering your component or any other logic
    },
  });

  // Your component rendering logic based on imagesLoaded state
  return (
    <div>
      {imagesLoaded ? (
        // Render your component when images are loaded
        <YourComponentContent />
      ) : (
        // Optionally, display a loading indicator or fallback content
        <LoadingIndicator />
      )}
    </div>
  );
};

export default YourComponent;

```

Adjust the allCards array with the URLs of the images you want to preload. The useImageLoader hook will notify you when the images are successfully loaded or if there's an error during the process.

Feel free to customize the onError and onSuccess callbacks to fit your application's specific requirements.