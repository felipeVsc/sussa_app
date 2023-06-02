interface IPerson {
  firstName: string;
  lastName: string;
}

export function getFullName(person: IPerson) {
  return `${person.firstName} ${person.lastName}`;
}