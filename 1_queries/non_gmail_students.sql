SELECT name, email, id, cohort_id
FROM students
WHERE NOT LIKE '%@gmail.com'
AND phone IS NULL;