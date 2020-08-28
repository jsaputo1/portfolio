const frontEndProjects = {

  s1: {
    title: "Aloha",
    demoLink: "https://www.johnsaputo.net/aloha",
    githubLink: "https://github.com/jsaputo1/aloha",
    thumbnail: "/images/thumbnails/aloha.png",
    description: "Aloha is a single page design of an online clothing store. It was designed mobile first with responsive views for Tablet and Desktop.",
    technologies: "CSS, HTML, JavaScript",
    notes: null,
  },

  s2: {
    title: "Instanews",
    demoLink: "https://www.johnsaputo.net/instanews",
    githubLink: "https://github.com/jsaputo1/instanews",
    thumbnail: "/images/thumbnails/instanews.png",
    description: "Instanews is a single page web app that allows users to filter top news stories pulled from the New York Times API. Designed mobile first, it is fully responsive with views for mobile, tablet and desktop.",
    technologies: "jQuery, SASS, HTML, gulp",
    notes: null,
  },

  s3: {
    title: "Fifa Teams",
    demoLink: "https://www.johnsaputo.net/fifa",
    githubLink: null,
    thumbnail: "/images/thumbnails/fifa.png",
    description: "Built in Spring 2020, this was a fun project to help pass time during the COVID-19 lockdown. This single page site was made to track the custom teams created in a Playstation FIFA 20 league.",
    technologies: "jQuery, SASS,  HTML, gulp",
    notes: null,
  },

  s4: {
    title: "Portfolio",
    demoLink: "https://www.johnsaputo.net/",
    githubLink: "https://github.com/jsaputo1/portfolio",
    thumbnail: "/images/thumbnails/portfolio.png",
    description: "A website to showcase my projects. My portfolio was designed with React with all components custom developed using Storybook. It is responsive with views for Desktop, Tablet and Mobile.",
    technologies: "React, JavaScript, SASS, Storybook",
    notes: null,
  }
};

const fullStackProjects = {

  s1: {
    title: "Scheduler",
    demoLink: "https://www.johnsaputo.net/scheduler",
    githubLink: "https://github.com/jsaputo1/scheduler",
    thumbnail: "/images/thumbnails/scheduler.png",
    description: "The Interview Scheduler is a single page web app built with React that allows users to book, edit and cancel interviews. Testing was done with Jest and Cypress, components were created using Storybook. The site was deployed with Heroku and Netlify.",
    technologies: "React, Storybook, SASS, PostgreSQL, Node, Express, Jest, Cypress ",
    notes: "The Heroku server auatomatically shuts down after 30 minutes of inactivity. The API data may take 30 seconds to 1 minute to load. ",
  },

  s2: {
    title: "Cup O Sugah",
    demoLink: "https://www.youtube.com/watch?v=ANXvLV38fXI",
    githubLink: "https://github.com/jsaputo1/neighbourhood",
    thumbnail: "/images/thumbnails/cuposugah.png",
    description: "CupOSugah is a social media website that allows users to see and post events in their neighbourhood. After the user registers their account, the app uses Google Maps geocoding API to determine their location. The user is then able to join either of the two neighbourhoods closest to them.",
    technologies: "React, SASS, PostgreSQL, Node, Express, Google Maps API, Twilio API",
    notes: "The app has not been deployed yet, the link will take you to a video walkthrough on YouTube.",
  },

  s3: {
    title: "Tweeter",
    demoLink: "https://www.johnsaputo.net/tweeter",
    githubLink: "https://github.com/jsaputo1/tweeter",
    thumbnail: "/images/thumbnails/tweeter.png",
    description: "Tweeter is a simple, single-page Twitter clone where users can post new tweets. The site is responsive with a mobile view. The app was deployed on Heroku.",
    technologies: "jQuery, CSS, HTML, JavaScript, Node, Express",
    notes: null,
  },

  s4: {
    title: "Tiny App",
    demoLink: null,
    githubLink: "https://github.com/jsaputo1/tinyapp",
    thumbnail: "/images/thumbnails/tinyApp.png",
    description: "TinyApp is a full stack web application that allows users to shorten long URLs, similar to bit.ly. Users are able to register an account which will allow them to view and manage previous entries. Testing was done with mocha and chai.",
    technologies: "JavaScript, EJS, CSS, HTML, Node, Express, Mocha, Chai",
    notes: " The app has not been deployed yet, please visit the GitHub link for screenshots",
  },
};

const wordPressProjects = {

  s1: {
    title: "Inhabitent",
    demoLink: "https://www.johnsaputo.net/inhabitent",
    githubLink: "https://github.com/jsaputo1/inhabitent",
    thumbnail: "/images/thumbnails/inhabitent.png",
    description: "Inabitent is a WordPress web store for outdoor/camping equipment. The theme was built from scratch and allows the site administrator to easily add/remove/edit content through WordPress without the need to code.",
    technologies: "WordPress, PHP, SASS, jQuery, gulp",
    notes: null,
  },

  s2: {
    title: "Quotes on Dev",
    demoLink: "https://www.johnsaputo.net/qod",
    githubLink: "https://github.com/jsaputo1/quotesondev",
    thumbnail: "/images/thumbnails/qod.png",
    description: "Quotes on Dev is a multi page web app that shows random developer themed quotes, and allows registered users to submit their own quotes. The app uses Word Press as the content management system and is fully responsive with views for Desktop, Tablet and mobile.",
    technologies: "WordPress, PHP, SASS, jQuery, gulp",
    notes: "New quotes can only be submitted by registered users. Registration has not been implemented yet, you are able to view the submit page but cannot register an account yet.",
  },

  s3: {
    title: "The League",
    demoLink: "https://www.johnsaputo.net/league/",
    githubLink: "https://github.com/jsaputo1/fifa-league",
    thumbnail: "/images/thumbnails/the-league.png",
    description: "Designed to mimic TheScore.ca this was a fun project to help pass time during the COVID-19 lockdown. This site was created to track scores and standings for a Playstation FIFA 20 league. Word Press is used as a content management system",
    technologies: "WordPress, PHP, SASS, jQuery, gulp",
    notes: "This was designed specifically for mobile.",
  },
};

module.exports = { frontEndProjects, fullStackProjects, wordPressProjects };