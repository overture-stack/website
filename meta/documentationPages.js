module.exports = [
  // this file describes the structure/site map of the /documentation section.
  // this is used to create the navigation between pages - the section table of contents and the previous/next buttons

  {
    title: 'Song',
    url: 'song',
    items: [
      {
        title: 'Get Started',
        url: 'get-started',
        items: [
          {
            title: 'Docker for Song',
            url: 'docker-for-song',
            items: [
              {
                title: 'Subsection',
                url: 'subsection',
              },
            ],
          },
          {
            title: 'Development',
            url: 'development',
          },
        ],
      },
      {
        title: 'Development',
        url: 'development',
      },
    ],
  },
  {
    title: 'Score',
    url: 'score',
  },
  {
    title: 'Maestro',
    url: 'maestro',
  },
];
