SELECT cohorts.name as cohort_name, count(students.*) as student_count
FROM cohorts
JOIN students ON cohorts.id = cohort_id
HAVING student_count >= 18
GROUP BY cohort_name
ORDER BY student_count;