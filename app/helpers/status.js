import { helper } from '@ember/component/helper';

const statusEnum = {
  0: 'New',
  1: 'Under Review',
  2: 'Planned',
  3: 'In Progress',
  4: 'Completed',
};

export default helper(function status(args) {
  const [currentStatus] = args;

  return statusEnum[currentStatus];
});
