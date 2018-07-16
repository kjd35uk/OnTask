import moment from 'moment'

export default function(server) {
  let task = server.create('tasks', {title: 'Wash windows', date: moment().format('LL')});
  let task2 = server.create('tasks', {title: 'Make burritos', date: 'July 16, 2018'});
  let task3 = server.create('tasks', {title: 'Learn Ember', date: 'July 24, 2018'});

  server.createList('tasks', 0, {task}, {task2}, {task3});

  /*
    Seed your development database using your factories.
    This data will not be loaded in your tests.
  */
}
