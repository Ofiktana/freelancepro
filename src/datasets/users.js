function personData(name){

  const firstName = name.split(' ')[0]
  const lastName = name.split(' ')[1]

  return {
    name: name,
    email: `${firstName}.${lastName}@example.com`,
    avatar: `https://i.pravatar.cc/300?u=${firstName}${lastName}`,
  }
}

export function totalEarnings(arr){
  return (
    arr.reduce((total, num) => {
      return total + num.income
    },0)
  )
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

// export const users = [
//   {
//     id: 1,
//     name: 'Michael Richards',
//     role: 'Front-End Developer',
//     email: personData('Michael Richards').email,
//     avatar: personData('Michael Richards').avatar,
//     projects: [
//       {
//         name: 'Steven Terry',
//         email: personData('Steven Terry').email,
//         avatar: personData('Steven Terry').avatar,
//         project: projects[0].project,
//         price: projects[0].price,
//         dueBy: '1 day 2 hours',
//         progressPerCent: 90
//       },
//       {
//         name: 'Sam Banners',
//         email: personData('Sam Banners').email,
//         avatar: personData('Sam Banners').avatar,
//         project: projects[2].project,
//         price: projects[2].price,
//         dueBy: '4 days 3 hours',
//         progressPerCent: 60
//       },
//       {
//         name: 'Ed Starling',
//         email: personData('Ed Starling').email,
//         avatar: personData('Ed Starling').avatar,
//         project: projects[4].project,
//         price: projects[4].price,
//         dueBy: '1 days 3 hours',
//         progressPerCent: 80
//       },
//       {
//         name: 'Ken Freeman',
//         email: personData('Ken Freeman').email,
//         avatar: personData('Ken Freeman').avatar,
//         project: projects[1].project,
//         price: projects[1].price,
//         dueBy: '2 days 2 hours',
//         progressPerCent: 70
//       },
//       {
//         name: 'Bright Cambridge',
//         email: personData('Bright Cambridge').email,
//         avatar: personData('Bright Cambridge').avatar,
//         project: projects[5].project,
//         price: projects[5].price,
//         dueBy: '9 days 3 hours',
//         progressPerCent: 20
//       },
//     ],
//     applications:[
//       {...jobs[2], ...status[1], date: applicationDates[2]},
//       {...jobs[6], ...status[0], date: applicationDates[6]},
//       {...jobs[5], ...status[1], date: applicationDates[5]},
//       {...jobs[0], ...status[2], date: applicationDates[3]},
//       {...jobs[3], ...status[0], date: applicationDates[4]},
//     ],
//     earnings:[
//       {month: 'Jan', jobs: 5, income: 4500},
//       {month: 'Feb', jobs: 6, income: 5700},
//       {month: 'Mar', jobs: 4, income: 4600},
//       {month: 'Apr', jobs: 5, income: 5300},
//       {month: 'May', jobs: 7, income: 8500},
//       {month: 'Jun', jobs: 6, income: 6500},
//       {month: 'Jul', jobs: 5, income: 5000},
//       {month: 'Aug', jobs: 4, income: 4800},
//       {month: 'Sep', jobs: 5, income: 6300},
//       {month: 'Oct', jobs: 6, income: 6400},
//       {month: 'Nov', jobs: 5, income: 4600},
//       {month: 'Dec', jobs: 7, income: 7800},
//     ],
//     skills:[
//       {skill: 'UI/UX Design', score: 85},
//       {skill: 'Front-end Tech', score: 95},
//       {skill: 'Project/Team Mgt', score: 100},
//       {skill: 'Presentation', score: 90},
//       {skill: 'SEO', score: 75},
//     ]
//   },
// ]

export const users = [
  {
    id: 1,
    name: 'Michael Richards',
    email: personData('Michael Richards').email,
    avatar: personData('Michael Richards').avatar,
    role: 'Front End Developer',
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
    applications: [
      { ...jobs[2], ...status[1], date: applicationDates[2] },
      { ...jobs[6], ...status[0], date: applicationDates[6] },
      { ...jobs[5], ...status[1], date: applicationDates[5] },
      { ...jobs[0], ...status[2], date: applicationDates[3] },
      { ...jobs[3], ...status[0], date: applicationDates[4] },
    ],
    earnings: [
      { month: 'Jan', jobs: 5, income: 4500 },
      { month: 'Feb', jobs: 6, income: 5700 },
      { month: 'Mar', jobs: 4, income: 4600 },
      { month: 'Apr', jobs: 5, income: 5300 },
      { month: 'May', jobs: 7, income: 8500 },
      { month: 'Jun', jobs: 6, income: 6500 },
      { month: 'Jul', jobs: 5, income: 5000 },
      { month: 'Aug', jobs: 4, income: 4800 },
      { month: 'Sep', jobs: 5, income: 6300 },
      { month: 'Oct', jobs: 6, income: 6400 },
      { month: 'Nov', jobs: 5, income: 4600 },
      { month: 'Dec', jobs: 7, income: 7800 },
    ],
    skills: [
      { skill: 'UI/UX Design', score: 85 },
      { skill: 'Front-end Tech', score: 95 },
      { skill: 'Project/Team Mgt', score: 100 },
      { skill: 'Presentation', score: 90 },
      { skill: 'SEO', score: 75 },
    ]
  },
  {
    id: 2,
    name: 'Jessica Tran',
    email: personData('Jessica Tran').email,
    avatar: personData('Jessica Tran').avatar,
    role: 'UI/UX Designer',
    projects: [
      {
        name: 'Leo Jacobs',
        email: personData('Leo Jacobs').email,
        avatar: personData('Leo Jacobs').avatar,
        project: projects[1].project,
        price: projects[1].price,
        dueBy: '3 days 5 hours',
        progressPerCent: 75
      },
      {
        name: 'Naomi Fields',
        email: personData('Naomi Fields').email,
        avatar: personData('Naomi Fields').avatar,
        project: projects[3].project,
        price: projects[3].price,
        dueBy: '5 days 2 hours',
        progressPerCent: 40
      },
      {
        name: 'Tyson Marks',
        email: personData('Tyson Marks').email,
        avatar: personData('Tyson Marks').avatar,
        project: projects[6].project,
        price: projects[6].price,
        dueBy: '2 days 1 hour',
        progressPerCent: 65
      },
      {
        name: 'Ella Roman',
        email: personData('Ella Roman').email,
        avatar: personData('Ella Roman').avatar,
        project: projects[6].project,
        price: projects[6].price,
        dueBy: '1 day 6 hours',
        progressPerCent: 50
      },
      {
        name: 'Chris Lang',
        email: personData('Chris Lang').email,
        avatar: personData('Chris Lang').avatar,
        project: projects[0].project,
        price: projects[0].price,
        dueBy: '6 days 4 hours',
        progressPerCent: 85
      },
    ],
    applications: [
      { ...jobs[1], ...status[0], date: applicationDates[1] },
      { ...jobs[3], ...status[1], date: applicationDates[4] },
      { ...jobs[4], ...status[2], date: applicationDates[0] },
      { ...jobs[6], ...status[2], date: applicationDates[6] },
      { ...jobs[2], ...status[0], date: applicationDates[5] },
    ],
    earnings: [
      { month: 'Jan', jobs: 4, income: 4000 },
      { month: 'Feb', jobs: 5, income: 5200 },
      { month: 'Mar', jobs: 6, income: 6100 },
      { month: 'Apr', jobs: 5, income: 5700 },
      { month: 'May', jobs: 6, income: 6900 },
      { month: 'Jun', jobs: 7, income: 7200 },
      { month: 'Jul', jobs: 6, income: 6100 },
      { month: 'Aug', jobs: 5, income: 5800 },
      { month: 'Sep', jobs: 4, income: 4700 },
      { month: 'Oct', jobs: 5, income: 6200 },
      { month: 'Nov', jobs: 6, income: 7100 },
      { month: 'Dec', jobs: 5, income: 6400 },
    ],
    skills: [
      { skill: 'UI/UX Design', score: 90 },
      { skill: 'Front-end Tech', score: 80 },
      { skill: 'Project/Team Mgt', score: 85 },
      { skill: 'Presentation', score: 88 },
      { skill: 'SEO', score: 70 },
    ]
  },
  {
    id: 3,
    name: 'Carlos Mendez',
    email: personData('Carlos Mendez').email,
    avatar: personData('Carlos Mendez').avatar,
    role: 'Product Manager',
    projects: [
      {
        name: 'Julia Snow',
        email: personData('Julia Snow').email,
        avatar: personData('Julia Snow').avatar,
        project: projects[2].project,
        price: projects[2].price,
        dueBy: '7 days 1 hour',
        progressPerCent: 55
      },
      {
        name: 'Ryan Scott',
        email: personData('Ryan Scott').email,
        avatar: personData('Ryan Scott').avatar,
        project: projects[0].project,
        price: projects[0].price,
        dueBy: '3 days 3 hours',
        progressPerCent: 68
      },
      {
        name: 'Tina Oliver',
        email: personData('Tina Oliver').email,
        avatar: personData('Tina Oliver').avatar,
        project: projects[3].project,
        price: projects[3].price,
        dueBy: '2 days 4 hours',
        progressPerCent: 85
      },
      {
        name: 'Liam Fox',
        email: personData('Liam Fox').email,
        avatar: personData('Liam Fox').avatar,
        project: projects[1].project,
        price: projects[1].price,
        dueBy: '5 days 5 hours',
        progressPerCent: 30
      },
      {
        name: 'Cindy Black',
        email: personData('Cindy Black').email,
        avatar: personData('Cindy Black').avatar,
        project: projects[4].project,
        price: projects[4].price,
        dueBy: '4 days 2 hours',
        progressPerCent: 78
      },
    ],
    applications: [
      { ...jobs[0], ...status[1], date: applicationDates[1] },
      { ...jobs[2], ...status[2], date: applicationDates[3] },
      { ...jobs[4], ...status[0], date: applicationDates[5] },
      { ...jobs[5], ...status[1], date: applicationDates[2] },
      { ...jobs[6], ...status[2], date: applicationDates[0] },
    ],
    earnings: [
      { month: 'Jan', jobs: 6, income: 6100 },
      { month: 'Feb', jobs: 7, income: 7200 },
      { month: 'Mar', jobs: 5, income: 5600 },
      { month: 'Apr', jobs: 6, income: 6300 },
      { month: 'May', jobs: 4, income: 4400 },
      { month: 'Jun', jobs: 6, income: 6600 },
      { month: 'Jul', jobs: 5, income: 5800 },
      { month: 'Aug', jobs: 6, income: 6100 },
      { month: 'Sep', jobs: 4, income: 4700 },
      { month: 'Oct', jobs: 6, income: 6400 },
      { month: 'Nov', jobs: 5, income: 5400 },
      { month: 'Dec', jobs: 7, income: 7700 },
    ],
    skills: [
      { skill: 'UI/UX Design', score: 80 },
      { skill: 'Front-end Tech', score: 90 },
      { skill: 'Project/Team Mgt', score: 95 },
      { skill: 'Presentation', score: 85 },
      { skill: 'SEO', score: 72 },
    ]
  },
  {
    id: 4,
    name: 'Monique Harper',
    email: personData('Monique Harper').email,
    avatar: personData('Monique Harper').avatar,
    role: 'Front End Developer',
    projects: [
      {
        name: 'Dylan Reese',
        email: personData('Dylan Reese').email,
        avatar: personData('Dylan Reese').avatar,
        project: projects[4].project,
        price: projects[4].price,
        dueBy: '2 days 3 hours',
        progressPerCent: 62
      },
      {
        name: 'Lana Vee',
        email: personData('Lana Vee').email,
        avatar: personData('Lana Vee').avatar,
        project: projects[6].project,
        price: projects[6].price,
        dueBy: '3 days 6 hours',
        progressPerCent: 50
      },
      {
        name: 'Grace Hall',
        email: personData('Grace Hall').email,
        avatar: personData('Grace Hall').avatar,
        project: projects[1].project,
        price: projects[1].price,
        dueBy: '6 days 1 hour',
        progressPerCent: 77
      },
      {
        name: 'Jude Knox',
        email: personData('Jude Knox').email,
        avatar: personData('Jude Knox').avatar,
        project: projects[3].project,
        price: projects[3].price,
        dueBy: '4 days 4 hours',
        progressPerCent: 68
      },
      {
        name: 'Peter Chow',
        email: personData('Peter Chow').email,
        avatar: personData('Peter Chow').avatar,
        project: projects[2].project,
        price: projects[2].price,
        dueBy: '1 day 2 hours',
        progressPerCent: 92
      },
    ],
    applications: [
      { ...jobs[1], ...status[1], date: applicationDates[2] },
      { ...jobs[0], ...status[0], date: applicationDates[0] },
      { ...jobs[3], ...status[2], date: applicationDates[3] },
      { ...jobs[5], ...status[2], date: applicationDates[5] },
      { ...jobs[4], ...status[0], date: applicationDates[4] },
    ],
    earnings: [
      { month: 'Jan', jobs: 5, income: 4900 },
      { month: 'Feb', jobs: 6, income: 5800 },
      { month: 'Mar', jobs: 5, income: 5100 },
      { month: 'Apr', jobs: 4, income: 4700 },
      { month: 'May', jobs: 7, income: 6900 },
      { month: 'Jun', jobs: 6, income: 6400 },
      { month: 'Jul', jobs: 5, income: 5400 },
      { month: 'Aug', jobs: 4, income: 4600 },
      { month: 'Sep', jobs: 6, income: 6200 },
      { month: 'Oct', jobs: 7, income: 7000 },
      { month: 'Nov', jobs: 6, income: 6600 },
      { month: 'Dec', jobs: 7, income: 7500 },
    ],
    skills: [
      { skill: 'UI/UX Design', score: 88 },
      { skill: 'Front-end Tech', score: 93 },
      { skill: 'Project/Team Mgt', score: 89 },
      { skill: 'Presentation', score: 91 },
      { skill: 'SEO', score: 80 },
    ]
  },
];
