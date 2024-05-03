import { faker } from '@faker-js/faker';

export default function generateCustomer() {
  const fakeCustomer = {
    id: faker.datatype.uuid(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    address: {
      line1: faker.address.streetAddress(),
      line2: '',
      city: faker.address.city(),
      state: faker.address.stateAbbr(),
      zip: faker.address.zipCode(),
    },
    notes: faker.lorem.sentence(),
    profilePicture: faker.image.avatar(),
    createdAt: faker.date.past().toISOString(),
    updatedAt: faker.date.recent().toISOString(),
  };

  return fakeCustomer;
}
