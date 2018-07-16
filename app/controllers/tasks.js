import Controller from '@ember/controller';

export default Controller.extend({

  actions:{
    deleteTask: function(task){
      this.store.findRecord('task', task.id, { backgroundReload: false }).then(function(task) {
        task.destroyRecord(); 
      });
    }
  }
});
