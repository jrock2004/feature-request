import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class FeatureModel extends Model {
  @attr('string') feature;
  @attr('number') vote;
  @attr('number') status;
  @attr('date') createDate;
  @belongsTo user;
  @hasMany comments;
}
