import Route from '@ember/routing/route';

export default class FeaturesRoute extends Route {
  async model() {
    return await this.store.findAll('feature', {
      include: 'comments,user',
    });
  }
}
