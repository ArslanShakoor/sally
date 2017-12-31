//edit form fields we can create all type of forms and fileds our form utils we have renderForm and fields reuseable components
export default [
  {
    name: 'start_date',
    label: 'start date',
    type: 'date',
    design: 'col6',
    req: true,
    hr: 'none'
  },
  {
    name: 'end_date',
    label: 'end date',
    type: 'date',
    design: 'col6',
    hr: 'none'
  },

  {
    name: 'rate',
    label: 'rate',
    type: 'text',
    design: 'col6',
    min_length: 1,
    max_length: 5,
    req: true,
    hr: 'none'
  },
  {
    name: 'status',
    label: 'Status',
    type: 'select',
    design: 'col6',
    req: true,
    hr: ''
  },
  {
    name: 'vehicle',
    label: 'Vehicle',
    type: 'text',
    design: 'col12',
    min_length: 2,
    max_length: 15,
    req: true,
    hr: ''
  },
  {
    name: 'first_name',
    label: 'first name',
    type: 'text',
    design: 'col6',
    min_length: 2,
    max_length: 15,
    req: true,
    hr: 'none'
  },
  {
    name: 'last_name',
    label: 'last name',
    type: 'text',
    design: 'col6',
    min_length: 2,
    max_length: 15,
    req: true,
    hr: 'none'
  },
  {
    name: 'email',
    label: 'Email',
    type: 'email',
    design: 'col12',
    hr: 'none'
  }
];
