import { Factory } from 'ember-cli-mirage';

export default Factory.extend({
  title(i) {
    return `Task ${i}`;
  },
  date: function() {
    return new Date()
  }
});
