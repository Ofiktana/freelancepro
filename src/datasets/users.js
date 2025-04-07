function personData(name){

  const firstName = name.split(' ')[0]
  const lastName = name.split(' ')[1]

  return {
    name: name,
    email: `${firstName}.${lastName}@example.com`,
    avatar: `https://i.pravatar.cc/300?u=${firstName}${lastName}`,
  }
}

const projects = [
  {project: "Landing page", price: 300},
  {project: "e-Commerce", price: 850},
  {project: "Data Analysis", price: 450},
  {project: "FinTech", price: 980},
  {project: "Translation", price: 250},
  {project: "EdTech", price: 750},
  {project: "Social Media", price: 150}
];

const jobs = [
  {role: 'Junior Front End Developer', company: 'PT Digital Indonesia', tags: ['remote', '3 months contract']},
  {role: 'Web Developer', company: 'Intellisense Ltd, Germany', tags: ['remote']},
  {role: 'React Developer', company: 'Ferdy & Sons Inc.', tags: ['remote', 'Freelance']},
  {role: 'Junior Web Developer', company: 'Safari Ventures, London', tags: ['remote', '6 months contract']},
  {role: 'Junior Software Engineer', company: 'TechTrends Nig. Ltd', tags: ['permanent']},
  {role: 'Junior Front End Developer', company: 'RE Digital Inc., Denmark', tags: ['remote', '3 months contract']},
  {role: 'Web Developer', company: 'DataGen Library, Germany', tags: ['remote']},
  {role: 'React Developer', company: 'Gravity Inc.', tags: ['remote', 'Freelance']}
]

const status = [
  {status_text: 'Applied', status_color: 'yellow'},
  {status_text: 'Interview', status_color: 'green'},
  {status_text: 'Unsuccessful', status_color: 'red'},
]

const applicationDates = ['Jan 15', 'Feb 06', 'Mar 10', 'Jan 03', 'Mar 29', 'Feb 13', 'Jan 22', 'Feb 08']

export const users = [
  {
    id: 1,
    name: 'Michael Richards',
    email: personData('Michael Richards').email,
    avatar: personData('Michael Richards').avatar,
    projects: [
      {
        name: 'Steven Terry',
        email: personData('Steven Terry').email,
        avatar: personData('Steven Terry').avatar,
        project: projects[0].project,
        price: projects[0].price,
        dueBy: '1 day 2 hours',
        progressPerCent: 90
      },
      {
        name: 'Sam Banners',
        email: personData('Sam Banners').email,
        avatar: personData('Sam Banners').avatar,
        project: projects[2].project,
        price: projects[2].price,
        dueBy: '4 days 3 hours',
        progressPerCent: 60
      },
      {
        name: 'Ed Starling',
        email: personData('Ed Starling').email,
        avatar: personData('Ed Starling').avatar,
        project: projects[4].project,
        price: projects[4].price,
        dueBy: '1 days 3 hours',
        progressPerCent: 80
      },
      {
        name: 'Ken Freeman',
        email: personData('Ken Freeman').email,
        avatar: personData('Ken Freeman').avatar,
        project: projects[1].project,
        price: projects[1].price,
        dueBy: '2 days 2 hours',
        progressPerCent: 70
      },
      {
        name: 'Bright Cambridge',
        email: personData('Bright Cambridge').email,
        avatar: personData('Bright Cambridge').avatar,
        project: projects[5].project,
        price: projects[5].price,
        dueBy: '9 days 3 hours',
        progressPerCent: 20
      },
    ],
    applications:[
      {...jobs[2], ...status[1], date: applicationDates[2]},
      {...jobs[6], ...status[0], date: applicationDates[6]},
      {...jobs[5], ...status[1], date: applicationDates[5]},
      {...jobs[0], ...status[2], date: applicationDates[3]},
    ]
  },
]