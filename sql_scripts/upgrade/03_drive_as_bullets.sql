ALTER TABLE student_profile DROP COLUMN IF EXISTS drive;

/*
 * drive
 */
DROP TABLE IF EXISTS drive CASCADE;

CREATE TABLE drive
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  factor             text                     NOT NULL,
  description        text                     NOT NULL,
  position           integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT drive_pkey                    PRIMARY KEY (id),
  CONSTRAINT drive_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT drive_unique_factor           UNIQUE (student_profile_id, factor),
  CONSTRAINT drive_position_unique         UNIQUE (student_profile_id, position)
);

ALTER TABLE drive OWNER TO dbadmin;
