ALTER TABLE language DROP COLUMN IF EXISTS code;
ALTER TABLE student_profile_language DROP CONSTRAINT IF EXISTS student_profile_language_position_unique;
ALTER TABLE student_profile_language DROP COLUMN IF EXISTS position;
ALTER TABLE student_profile_language ALTER COLUMN level TYPE integer;
