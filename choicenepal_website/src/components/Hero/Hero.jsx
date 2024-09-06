import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div id="hero" className="hero container">
      <div className="heroText">
        <h1>CHOICE Humanitarian Nepal</h1>
        <p>
          Manabiya Sewa Tatha Antarsanskritik Adanpradan Kendra Nepal, (CHOICE
          Humanitarian Nepal) applies a System Approach (SA) in identifying the
          root cause of the problem, setting the priorities, and implementing
          the programs contemplating the complex community issues in a broader
          spectrum of context, connecting pattern, and perspective. We adopt
          participatory approaches to development with the conviction that
          communities are best served when people are actively engaged in the
          decision-making process reflecting the voices of the people.
        </p>
        <p>
          Manabiya Sewa is a learning organization that focuses on building a
          foundation of professional skill and expertise to be effective in
          delivering results.
        </p>
        <p>
          Education and culture, health, agriculture and livelihood,
          entrepreneurship development, environment, and disaster management are
          the core working areas of the organization. The projects also cover
          the diverse cross-cutting issues of the society. Manaviya Sewa in
          cooperation with stakeholders, launches long-term projects that
          strengthen the foundation of self-reliance of the local communities.
        </p>
        <button className="btn">Know More</button>
      </div>
    </div>
  );
};

export default Hero;
