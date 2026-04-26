import { faker } from '@faker-js/faker';
export interface UserData {
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
}

export interface RepoData {
    name: string;
    description: string;
    isPrivate: boolean;
}


export class UserFactory {
  static createUserData(): UserData {
    return {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      userName: faker.internet.username(),
      password: faker.internet.password({
        length: 12,
        memorable: true,
        pattern: /[A-Za-z0-9!@#$%^&*()_+]{12}/,
      }),
    };
  }

  static createRepoData(isPrivate: boolean = false): RepoData {
    return {
      name: `repo-${faker.string.alphanumeric(5)}`,
      description: faker.lorem.sentence(),
      isPrivate: isPrivate,
    };
  }
}