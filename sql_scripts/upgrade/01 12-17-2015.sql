-- strongest_skill
ALTER TABLE student_profile RENAME COLUMN projects TO strongest_skill;

-- drive
ALTER TABLE student_profile RENAME COLUMN about_me TO drive;

-- preparation
ALTER TABLE student_profile RENAME COLUMN funny_fact TO preparation;

-- study
ALTER TABLE student_profile DROP CONSTRAINT student_profile_faculty_id_fkey;
ALTER TABLE faculty DROP CONSTRAINT faculty_unique_name;
ALTER TABLE education DROP CONSTRAINT education_faculty_id_fkey;
ALTER TABLE faculty DROP CONSTRAINT faculty_pkey;
ALTER TABLE student_profile RENAME COLUMN faculty_id to study_id;
ALTER TABLE education RENAME COLUMN faculty_id to study_id;
ALTER TABLE faculty RENAME TO study;
ALTER TABLE study ADD CONSTRAINT study_pkey PRIMARY KEY (id);
ALTER TABLE student_profile ADD CONSTRAINT student_profile_study_id_fkey FOREIGN KEY (study_id) REFERENCES study (id);
ALTER TABLE education ADD CONSTRAINT education_study_id_fkey FOREIGN KEY (study_id) REFERENCES study (id);
ALTER TABLE study ADD CONSTRAINT study_unique_name UNIQUE (name);
