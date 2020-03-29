import { Factory, association } from 'ember-cli-mirage';
import faker from 'faker';

export default Factory.extend({
  comment() {
    return faker.lorem.sentences(1);
  },
  like() {
    return 0;
  },
  createDate() {
    return faker.date.past();
  },

  user: association(),
});
