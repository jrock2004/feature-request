import { Factory, trait } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  feature() {
    return faker.lorem.sentences(2);
  },
  vote() {
    return 0;
  },
  status() {
    return faker.random.number({ min: 0, max: 4 });
  },
  createDate() {
    return faker.date.recent();
  },

  withComments: trait({
    afterCreate(feature, server) {
      const comments = server.createList('comment', 2, { feature }),
        users = server.schema.users.all(),
        user = users.models[Math.floor(Math.random() * users.models.length)];

      feature.update({
        comments,
        user,
      });
    },
  }),
});
