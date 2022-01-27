const express = require('express');
const PORT = process.env.PORT || 8000;
const cors = require('cors');

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => res.send({ status: '༼ つ ◕_◕ ༽つ app working ┌( ಠ_ಠ)┘' }));

app.listen(PORT, () =>
  console.log(`server started on port ${PORT} ༼ つ ◕_◕ ༽つ (☞ﾟヮﾟ)☞☜(ﾟヮﾟ☜)`)
);
