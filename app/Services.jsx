// Services.jsx
import React from 'react';
import ServiceCard from './ServiceCard'; // Import the ServiceCard component
import services from "./servicesList";

function Services() {
  return (
    <>
      {
        services.map((service) => (
          <ServiceCard service={service} key={service} /> // Pass each service as a prop to ServiceCard
        ))
      }
    </>
  );
}

export default Services;
