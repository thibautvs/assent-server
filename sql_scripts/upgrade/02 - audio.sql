/*
 * audio
 */
DROP TABLE IF EXISTS audio CASCADE;

CREATE TABLE audio
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  url                text                     NOT NULL,
  position           integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT audio_pkey                    PRIMARY KEY (id),
  CONSTRAINT audio_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT audio_unique_url              UNIQUE (url),
  CONSTRAINT audio_position_unique         UNIQUE (student_profile_id, position)
);

ALTER TABLE audio OWNER TO dbadmin;
