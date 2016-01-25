ALTER TABLE student_profile DROP COLUMN IF EXISTS strongest_skill;

/*
 * strongest_skill
 */
DROP TABLE IF EXISTS strongest_skill CASCADE;

CREATE TABLE strongest_skill
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  skill              text                     NOT NULL,
  description        text                     NOT NULL,
  position           integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT strongest_skill_pkey                    PRIMARY KEY (id),
  CONSTRAINT strongest_skill_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT strongest_skill_skill_unique            UNIQUE (student_profile_id, skill),
  CONSTRAINT strongest_skill_position_unique         UNIQUE (student_profile_id, position)
);

ALTER TABLE strongest_skill OWNER TO dbadmin;
