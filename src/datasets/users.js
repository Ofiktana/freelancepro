export function personData(name){

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
  },
]