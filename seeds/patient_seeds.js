const { Patient } = require('../models');

const PatientData = [
  {
    patient_id: '1',
    first_name: 'Robert',
    last_name: 'Boucher, Jr.',
    phone_number: '210-123-4567',
    address:'123 address way',
    city: 'New Orleans',
    state: 'LA',
    zip_code: '55783',
    age: '24',
    gender: 'M',
    drug_allergies: 'gatorade',
    insurance: 'Humana',
    surgery_id: '12',
    doctor_id: '15',

  },
  {
    patient_id: '2',
    first_name: 'Robbie',
    last_name: 'Hart',
    phone_number: '310-123-4567',
    address:'321 house street',
    city: 'san antonio',
    state: 'tx',
    zip_code: '12321',
    age: '45',
    gender: 'm',
    drug_allergies: 'heartache',
    insurance: 'none',
    surgery_id: '2',
    doctor_id: '5',
  },
  {
    patient_id: '3',
    first_name: 'Virginia',
    last_name: 'Venit',
    phone_number: '410-123-4567',
    address:'Happy Gilmore Way',
    city: 'Augusta',
    state: 'GA',
    zip_code: '34523',
    age: '32',
    gender: 'F',
    drug_allergies: 'golfers',
    insurance: 'PGA',
    surgery_id: '5',
    doctor_id: '5',
  },
  {
    patient_id: '4',
    first_name: 'Veronica',
    last_name: 'Vaughn',
    phone_number: '510-123-4567',
    address:'Madison Ave',
    city: 'Hollywood',
    state: 'CA',
    zip_code: '32422',
    age: '22',
    gender: 'F',
    drug_allergies: 'penguins',
    insurance: 'Humana',
    surgery_id: '5',
    doctor_id: '3',
  },
  {
    patient_id: '5',
    first_name: 'Chubbs',
    last_name: 'Peterson',
    phone_number: '210-123-3423',
    address:'123 Heavenly Way',
    city: 'Augusta',
    state: 'GA',
    zip_code: '23452',
    age: '42',
    gender: 'M',
    drug_allergies: 'alligators',
    insurance: 'PGA',
    surgery_id: '4',
    doctor_id: '2',
  },
  {
    patient_id: '6',
    first_name: 'Happy',
    last_name: 'Gilmore',
    phone_number: '210-634-3454',
    address:'123 Long Drive',
    city: 'Dallas',
    state: 'TX',
    zip_code: '23422',
    age: '35',
    gender: 'M',
    drug_allergies: 'putting',
    insurance: 'PGA',
    surgery_id: '1',
    doctor_id: '3',
  }
];

const seedPatient = () => Patient.bulkCreate(PatientData);

module.exports = seedPatient;