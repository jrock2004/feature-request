import Model, { attr, belongsTo } from '@ember-data/model';

export default class CommentModel extends Model {
  @attr('string') comment;
  @attr('number') like;
  @attr('date') createDate;
  @belongsTo feature;
  @belongsTo user;
}
