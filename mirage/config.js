import faker from 'faker';

faker.seed(123);

export default function () {
  this.namespace = '/api';

  this.resource('features');
}
