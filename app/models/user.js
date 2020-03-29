import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default class UserModel extends Model {
  @attr('string') firstName;
  @attr('string') lastName;
  @attr('string') email;
  @attr('string') avatarUrl;
  @belongsTo feature;
  @hasMany comments;

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
