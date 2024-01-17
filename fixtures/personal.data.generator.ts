import { faker } from '@faker-js/faker';
import { generateDateTimeOrDate, formatDateTimeOrDate } from './date.data.generator';

interface PersonalData {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  phoneNum: string;
}

export function generatePersonalData(): PersonalData {
  return {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    dateOfBirth: formatDateTimeOrDate(faker.date.between({from:generateDateTimeOrDate(85, 'years', 'past'), to:generateDateTimeOrDate(14, 'years', 'past')}), 'date'),

    phoneNum: faker.phone.number('########'),
  };
}

export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function generateRandomTitle(): string  {
  const titles = ["Dr", "Miss", "Mr", "Mrs", "Ms", "Mx"];
  // Returns a single title randomly chosen from the list above.
  const randomIndex = randomIntFromInterval(0, titles.length - 1);
  return titles[randomIndex];
}
