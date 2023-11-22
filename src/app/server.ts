import * as express from 'express';

const app = express();
const port = 3000;

app.use(express.json());

const team: any[] = []; // Assuming you have a global team array

app.get('/api/getTeam', (req:any, res: { json: (arg0: any[]) => void; }) => {
  res.json(team);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});