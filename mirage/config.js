// export default function() {
//   this.namespace = '/api';

//   this.get('/api/tasks', function() {
//     return {
//       tasks: [
//         { id: 1, title: 'Zelda' },
//         { id: 2, title: 'Link' },
//         { id: 3, title: 'Epona' },
//       ]
//     }
//   });
//   this.passthrough('http://api.tasks/**');
// }

// export default function () {
//   this.namespace = '/api/';
//   this.get('/tasks', ({ tasks }) => (tasks.all()));
// }

export default function () {
    this.namespace = '/api/';

    this.get('/tasks', (schema) => {
      return schema.tasks.all();
    });

    this.get('/suggestion', (schema) => {
      return schema.tasks.find(2);
    });
  
    this.post('/tasks', (schema, request) => {
      const attrs = JSON.parse(request.requestBody).data;
      return schema.tasks.create(attrs);
    });

    this.delete('/tasks/:id', () => {
    });
    
}