export const routes = (app) => {
  app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hola desde el backend!' });
  });

  // Define other routes here
};