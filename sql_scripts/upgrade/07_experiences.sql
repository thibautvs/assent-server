-- experience_type
INSERT INTO experience_type (name) VALUES ('Student job');
INSERT INTO experience_type (name) VALUES ('Internship');

-- start_date and end_date stored as month/year
ALTER TABLE experience DROP COLUMN IF EXISTS start_date;
ALTER TABLE experience DROP COLUMN IF EXISTS end_date;
ALTER TABLE experience ADD COLUMN start_month integer NOT NULL;
ALTER TABLE experience ADD COLUMN start_year integer NOT NULL;
ALTER TABLE experience ADD COLUMN end_month integer;
ALTER TABLE experience ADD COLUMN end_year integer;
