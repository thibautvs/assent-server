ALTER TABLE student_profile DROP COLUMN IF EXISTS preparation;

/*
 * preparation
 */
DROP TABLE IF EXISTS preparation CASCADE;

CREATE TABLE preparation
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  topic              text                     NOT NULL,
  description        text                     NOT NULL,
  position           integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT preparation_pkey                    PRIMARY KEY (id),
  CONSTRAINT preparation_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT preparation_topic_unique            UNIQUE (student_profile_id, topic),
  CONSTRAINT preparation_position_unique         UNIQUE (student_profile_id, position)
);

ALTER TABLE preparation OWNER TO dbadmin;
