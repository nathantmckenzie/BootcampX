const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
SELECT DISTINCT teachers.id as teacher,cohorts.name as cohort
FROM teachers
JOIN assistance_request ON teacher_id = teachers.id
JOIN students ON student_id = studients.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = $1
ORDER BY teacher;`

const cohort = process.argv[2] || 'JUL02'
const values = [cohort];

pool.query(queryString, values)
.then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    })
});