/*
 * country
 */
DROP TABLE IF EXISTS country CASCADE;

CREATE TABLE country
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT country_pkey        PRIMARY KEY (id),
  CONSTRAINT country_unique_name UNIQUE (name)
);

ALTER TABLE country OWNER TO dbadmin;

/*
 * city
 */
DROP TABLE IF EXISTS city CASCADE;

CREATE TABLE city
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT city_pkey        PRIMARY KEY (id),
  CONSTRAINT city_unique_name UNIQUE (name)
);

ALTER TABLE city OWNER TO dbadmin;

/*
 * faculty
 */
DROP TABLE IF EXISTS faculty CASCADE;

CREATE TABLE faculty
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT faculty_pkey        PRIMARY KEY (id),
  CONSTRAINT faculty_unique_name UNIQUE (name)
);

ALTER TABLE faculty OWNER TO dbadmin;

/*
 * university
 */
DROP TABLE IF EXISTS university CASCADE;

CREATE TABLE university
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT university_pkey        PRIMARY KEY (id),
  CONSTRAINT university_unique_name UNIQUE (name)
);

ALTER TABLE university OWNER TO dbadmin;

/*
 * degree
 */
DROP TABLE IF EXISTS degree CASCADE;

CREATE TABLE degree
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT degree_pkey        PRIMARY KEY (id),
  CONSTRAINT degree_unique_name UNIQUE (name)
);

ALTER TABLE degree OWNER TO dbadmin;

/*
 * skill
 */
DROP TABLE IF EXISTS skill CASCADE;

CREATE TABLE skill
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT skill_pkey        PRIMARY KEY (id),
  CONSTRAINT skill_unique_name UNIQUE (name)
);

ALTER TABLE skill OWNER TO dbadmin;

/*
 * hobby
 */
DROP TABLE IF EXISTS hobby CASCADE;

CREATE TABLE hobby
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT hobby_pkey        PRIMARY KEY (id),
  CONSTRAINT hobby_unique_name UNIQUE (name)
);

ALTER TABLE hobby OWNER TO dbadmin;

/*
 * course
 */
DROP TABLE IF EXISTS course CASCADE;

CREATE TABLE course
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT course_pkey        PRIMARY KEY (id),
  CONSTRAINT course_unique_name UNIQUE (name)
);

ALTER TABLE course OWNER TO dbadmin;

/*
 * company
 */
DROP TABLE IF EXISTS company CASCADE;

CREATE TABLE company
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT company_pkey        PRIMARY KEY (id),
  CONSTRAINT company_unique_name UNIQUE (name)
);

ALTER TABLE company OWNER TO dbadmin;

/*
 * language
 */
DROP TABLE IF EXISTS language CASCADE;

CREATE TABLE language
(
  id           serial                   NOT NULL,
  name         text                     NOT NULL,
  code         varchar(2)               NOT NULL,
  created_at   timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT language_pkey        PRIMARY KEY (id),
  CONSTRAINT language_unique_name UNIQUE (name),
  CONSTRAINT language_unique_code UNIQUE (code)
);

ALTER TABLE language OWNER TO dbadmin;

/*
 * experience_type
 */
DROP TABLE IF EXISTS experience_type CASCADE;

CREATE TABLE experience_type
(
  id           serial                   NOT NULL,
  name         text                     NOT NULL,
  created_at   timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT experience_type_pkey        PRIMARY KEY (id),
  CONSTRAINT experience_type_unique_name UNIQUE (name)
);

ALTER TABLE experience_type OWNER TO dbadmin;

/*
 * student_profile
 */
DROP TABLE IF EXISTS student_profile CASCADE;

CREATE TABLE student_profile
(
  id                       serial  NOT NULL,
  first_name               text    NOT NULL,
  last_name                text    NOT NULL,
  country_id               integer,
  city_id                  integer,
  faculty_id               integer,
  university_id            integer,
  degree_id                integer,
  degree_year              integer,
  expected_graduation_year integer,
  photo                    bytea,
  video_url                text,
  about_me                 text,
  aspirations              text,
  funny_fact               text,
  projects                 text,
  created_at               timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at               timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT student_profile_pkey               PRIMARY KEY (id),
  CONSTRAINT student_profile_country_id_fkey    FOREIGN KEY (country_id)    REFERENCES country (id),
  CONSTRAINT student_profile_city_id_fkey       FOREIGN KEY (city_id)       REFERENCES city (id),
  CONSTRAINT student_profile_faculty_id_fkey    FOREIGN KEY (faculty_id)    REFERENCES faculty (id),
  CONSTRAINT student_profile_university_id_fkey FOREIGN KEY (university_id) REFERENCES university (id),
  CONSTRAINT student_profile_degree_id_fkey     FOREIGN KEY (degree_id)     REFERENCES degree (id)
);

ALTER TABLE student_profile OWNER TO dbadmin;

/*
 * student_profile_skill
 */
DROP TABLE IF EXISTS student_profile_skill CASCADE;

CREATE TABLE student_profile_skill
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  skill_id           integer                  NOT NULL,
  position           integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT student_profile_skill_pkey                    PRIMARY KEY (id),
  CONSTRAINT student_profile_skill_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT student_profile_skill_skill_id_fkey           FOREIGN KEY (skill_id)           REFERENCES skill (id),
  CONSTRAINT student_profile_skill_unique                  UNIQUE (student_profile_id, skill_id),
  CONSTRAINT student_profile_skill_position_unique         UNIQUE (student_profile_id, position)
);

ALTER TABLE student_profile_skill OWNER TO dbadmin;

/*
 * student_profile_hobby
 */
DROP TABLE IF EXISTS student_profile_hobby CASCADE;

CREATE TABLE student_profile_hobby
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  hobby_id           integer                  NOT NULL,
  description        text                     NOT NULL,
  position           integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT student_profile_hobby_pkey                    PRIMARY KEY (id),
  CONSTRAINT student_profile_hobby_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT student_profile_hobby_hobby_id_fkey           FOREIGN KEY (hobby_id)           REFERENCES hobby (id),
  CONSTRAINT student_profile_hobby_unique                  UNIQUE (student_profile_id, hobby_id),
  CONSTRAINT student_profile_hobby_position_unique         UNIQUE (student_profile_id, position)
);

ALTER TABLE student_profile_hobby OWNER TO dbadmin;

/*
 * grade
 */
DROP TABLE IF EXISTS grade CASCADE;

CREATE TABLE grade
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  course_id          integer                  NOT NULL,
  degree_id          integer                  NOT NULL,
  degree_year        integer                  NOT NULL,
  month              integer                  NOT NULL,
  grade_actual       decimal(3,1)             NOT NULL,
  grade_max          integer                  NOT NULL,
  position           integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT grade_pkey                    PRIMARY KEY (id),
  CONSTRAINT grade_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT grade_course_id_fkey          FOREIGN KEY (course_id)          REFERENCES course (id),
  CONSTRAINT grade_degree_id_fkey          FOREIGN KEY (degree_id)          REFERENCES degree (id),
  CONSTRAINT grade_unique                  UNIQUE (student_profile_id, course_id, degree_id, degree_year, month),
  CONSTRAINT grade_position_unique         UNIQUE (student_profile_id, position)
);

ALTER TABLE grade OWNER TO dbadmin;

/*
 * education
 */
DROP TABLE IF EXISTS education CASCADE;

CREATE TABLE education
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  degree_id          integer                  NOT NULL,
  faculty_id         integer                  NOT NULL,
  university_id      integer                  NOT NULL,
  is_erasmus         boolean,
  start_date         date                     NOT NULL,
  end_date           date,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT education_pkey                    PRIMARY KEY (id),
  CONSTRAINT education_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT education_degree_id_fkey          FOREIGN KEY (degree_id)          REFERENCES degree (id),
  CONSTRAINT education_faculty_id_fkey         FOREIGN KEY (faculty_id)         REFERENCES faculty (id),
  CONSTRAINT education_university_id_fkey      FOREIGN KEY (university_id)      REFERENCES university (id)
);

ALTER TABLE education OWNER TO dbadmin;

/*
 * experience
 */
DROP TABLE IF EXISTS experience CASCADE;

CREATE TABLE experience
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  experience_type_id integer                  NOT NULL,
  company_id         integer                  NOT NULL,
  start_date         date                     NOT NULL,
  end_date           date,
  description        text                     NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT experience_pkey                    PRIMARY KEY (id),
  CONSTRAINT experience_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT experience_experience_type_id_fkey FOREIGN KEY (experience_type_id) REFERENCES experience_type (id),
  CONSTRAINT experience_company_id_fkey         FOREIGN KEY (company_id)         REFERENCES company (id)
);

ALTER TABLE experience OWNER TO dbadmin;

/*
 * student_profile_language
 */
DROP TABLE IF EXISTS student_profile_language CASCADE;

CREATE TABLE student_profile_language
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  language_id        integer                  NOT NULL,
  is_mother_tongue   boolean                  NOT NULL,
  level              decimal(2,1),
  position           integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT student_profile_language_pkey                    PRIMARY KEY (id),
  CONSTRAINT student_profile_language_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT student_profile_language_language_id_fkey        FOREIGN KEY (language_id)        REFERENCES language (id),
  CONSTRAINT student_profile_language_level_range_check       CHECK (level >= 0 AND level <= 5),
  CONSTRAINT student_profile_language_unique                  UNIQUE (student_profile_id, language_id),
  CONSTRAINT student_profile_language_position_unique         UNIQUE (student_profile_id, position)
);

ALTER TABLE student_profile_language OWNER TO dbadmin;

/*
 * social_media
 */
DROP TABLE IF EXISTS social_media CASCADE;

CREATE TABLE social_media
(
  id                   serial                   NOT NULL,
  student_profile_id   integer                  NOT NULL,
  url                  text                     NOT NULL,
  position             integer                  NOT NULL,
  created_at           timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at           timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT social_media_pkey                    PRIMARY KEY (id),
  CONSTRAINT social_media_student_profile_id_fkey FOREIGN KEY (student_profile_id)   REFERENCES student_profile (id),
  CONSTRAINT social_media_unique                  UNIQUE (student_profile_id, url),
  CONSTRAINT social_media_position_unique         UNIQUE (student_profile_id, position)
);

ALTER TABLE social_media OWNER TO dbadmin;

/*
 * user_account
 */
DROP TABLE IF EXISTS user_account CASCADE;

CREATE TABLE user_account
(
  id                 serial           NOT NULL,
  student_profile_id integer          NOT NULL,
  email              text             NOT NULL,
  password           text             NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT user_account_pk                      PRIMARY KEY (id),
  CONSTRAINT user_account_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id)
);

ALTER TABLE user_account OWNER TO dbadmin;
