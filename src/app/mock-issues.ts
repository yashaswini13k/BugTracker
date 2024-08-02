import { Issue } from "./issue";


export const issues: Issue[] = [
  {
    // id:1,
    issueNo: 1,
    projectid: 'P1',
    title:  'Add email validation in registration form',
    description: 'Validate the email entered in the user registration form',
    priority: 'high',
    type: 'Feature',
  file:null,
  comments: []
  },
  {
    // id: 2,
    issueNo: 2,
    projectid: 'P2',
    title:  'Display the adress details of a customer',
    description: 'Add a column to display the details of the customer address in the customer list',
    priority: 'low',
    type: 'Feature',
    file: null,
    comments:[]
  },
  {
    // id:3,
    issueNo: 3,
    projectid: 'P2',
    title:  'Export to CSV is not working',
    description: 'The export process of a report into CSV format throws an error',
    priority: 'high',
    type: 'Bug',
    file: null,
    comments:[]
  },
  {
    // id:4,
    issueNo: 4,
    projectid: 'P3',
    title:  'Locale settings per user',
    description: 'Add settings configure the locale of the current user',
    priority: 'low',
    type: 'Feature',
    file: null,
    comments:[]
  },
  {
    // id:5,
    issueNo: 5,
    projectid: 'P4',
    title:  'Add new customer tutorial',
    description: 'Create a tutorial on how to add a new customer into the application',
    priority: 'high',
    type: 'Documentation',
    file: null,
    comments:[]
  },
];