import Controller from '@ember/controller';
import moment from 'moment';

export default Controller.extend({
  actions: {
    addTask: function() {
      const title = this.get('title')
      const date = this.get('date')

    if(title && date) {  
      const newTask = this.store.createRecord('task', {
      title: title,
      date: moment(date).format('LL')
    })
    this.set('title', '');
    this.set('date', '');
    newTask.save();}
    else{alert('Please fill in both fields')}
    },
  }
});
