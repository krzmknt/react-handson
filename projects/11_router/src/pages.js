import React from "react";
import { List, useLocation, Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <div>
      <h1>[Company Website]</h1>
    </div>
  );
};

// Outlet があると、そのルートの子ルートが表示される
export const About = () => {
  return (
    <div>
      <h1>[About]</h1>
      <Outlet />
    </div>
  );
};

export const Events = () => {
  return (
    <div>
      <h1>[Events]</h1>
    </div>
  );
};

export const Products = () => (
  <div>
    <h1>[Products]</h1>
  </div>
);

export const Contact = () => {
  return (
    <div>
      <h1>[Contact]</h1>
    </div>
  );
};

export const Whoops404 = () => {
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>
        Resouces not found at <code>{location.pathname}</code>
      </h1>
    </div>
  );
};

export const Services = () => (
  <section>
    <h2>Our Services</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, quia, quod voluptate voluptatem quos dolorum
      voluptas quas quae natus. Quisquam voluptatum, quibusdam, quia, quod
      voluptate voluptatem quos dolorum voluptas quas quae natus.
    </p>
  </section>
);

export const Location = () => (
  <section>
    <h2>僕の愛しいありさ</h2>
    {[...Array(5000)].map((_, i) => (
      <span key={i}>いつもありがとう🦭</span>
    ))}
  </section>
);
export const History = () => (
  <section>
    <h2>Our History</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      voluptatum, quibusdam, quia, quod voluptate voluptatem quos dolorum
      voluptas quas quae natus. Quisquam voluptatum, quibusdam, quia, quod
      voluptate voluptatem quos dolorum voluptas quas quae natus.
    </p>
  </section>
);
