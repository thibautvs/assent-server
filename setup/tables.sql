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
  CONSTRAINT faculty_pkey PRIMARY KEY (id)
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
  CONSTRAINT university_pkey PRIMARY KEY (id)
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
  CONSTRAINT degree_pkey PRIMARY KEY (id)
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
  CONSTRAINT skill_pkey PRIMARY KEY (id)
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
  CONSTRAINT hobby_pkey PRIMARY KEY (id)
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
  CONSTRAINT course_pkey PRIMARY KEY (id)
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
  CONSTRAINT company_pkey PRIMARY KEY (id)
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
  abbreviation text                     NOT NULL,
  created_at   timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at   timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT language_pkey PRIMARY KEY (id)
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
  CONSTRAINT experience_type_pkey PRIMARY KEY (id)
);

ALTER TABLE experience_type OWNER TO dbadmin;

/*
 * media_type
 */
DROP TABLE IF EXISTS media_type CASCADE;

CREATE TABLE media_type
(
  id         serial                   NOT NULL,
  name       text                     NOT NULL,
  extension  text,
  icon       bytea,
  is_youtube boolean,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT media_type_pkey PRIMARY KEY (id)
);

ALTER TABLE media_type OWNER TO dbadmin;

/*
 * student_profile
 */
DROP TABLE IF EXISTS student_profile CASCADE;

CREATE TABLE student_profile
(
  id            serial  NOT NULL,
  first_name    text    NOT NULL,
  last_name     text    NOT NULL,
  faculty_id    integer,
  university_id integer,
  degree_id     integer,
  degree_year   integer,
  photo         bytea,
  about_me      text,
  created_at    timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at    timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT student_profile_pkey               PRIMARY KEY (id),
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
  student_profile_id integer                  NOT NULL,
  skill_id           integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT student_profile_skill_student_profile_id_fkey FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT student_profile_skill_skill_id_fkey           FOREIGN KEY (skill_id)           REFERENCES skill (id)
);

ALTER TABLE student_profile_skill OWNER TO dbadmin;

/*
 * student_profile_hobby
 */
DROP TABLE IF EXISTS student_profile_hobby CASCADE;

CREATE TABLE student_profile_hobby
(
  student_profile_id integer                  NOT NULL,
  hobby_id           integer                  NOT NULL,
  description        text                     NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT student_profile_hobby_student_profile_id FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT student_profile_hobby_hobby_id           FOREIGN KEY (hobby_id)           REFERENCES hobby (id)
);

ALTER TABLE student_profile_hobby OWNER TO dbadmin;

/*
 * student_profile_grade
 */
DROP TABLE IF EXISTS student_profile_grade CASCADE;

CREATE TABLE student_profile_grade
(
  student_profile_id integer                  NOT NULL,
  course_id          integer                  NOT NULL,
  grade_actual       decimal(3,1)             NOT NULL,
  grade_max          integer                  NOT NULL,
  degree_id          integer                  NOT NULL,
  degree_year        integer                  NOT NULL,
  month              integer                  NOT NULL,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT student_profile_grade_student_profile_id FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT student_profile_grade_course_id          FOREIGN KEY (course_id)          REFERENCES course (id),
  CONSTRAINT student_profile_grade_degree_id          FOREIGN KEY (degree_id)          REFERENCES degree (id)
);

ALTER TABLE student_profile_grade OWNER TO dbadmin;

/*
 * media
 */
DROP TABLE IF EXISTS media CASCADE;

CREATE TABLE media
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  media_type_id      integer                  NOT NULL,
  title              text                     NOT NULL,
  data               bytea,
  url                text,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT media_pkey               PRIMARY KEY (id),
  CONSTRAINT media_student_profile_id FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT media_media_type_id      FOREIGN KEY (media_type_id)      REFERENCES media_type (id)
);

ALTER TABLE media OWNER TO dbadmin;

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
  CONSTRAINT education_pkey               PRIMARY KEY (id),
  CONSTRAINT education_student_profile_id FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT education_degree_id          FOREIGN KEY (degree_id)          REFERENCES degree (id),
  CONSTRAINT education_faculty_id         FOREIGN KEY (faculty_id)         REFERENCES faculty (id),
  CONSTRAINT education_university_id      FOREIGN KEY (university_id)      REFERENCES university (id)
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
  CONSTRAINT experience_pkey               PRIMARY KEY (id),
  CONSTRAINT experience_student_profile_id FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT experience_experience_type_id FOREIGN KEY (experience_type_id) REFERENCES experience_type (id),
  CONSTRAINT experience_company_id         FOREIGN KEY (company_id)         REFERENCES company (id)
);

ALTER TABLE experience OWNER TO dbadmin;

/*
 * language_skill
 */
DROP TABLE IF EXISTS language_skill CASCADE;

CREATE TABLE language_skill
(
  id                 serial                   NOT NULL,
  student_profile_id integer                  NOT NULL,
  language_id        integer                  NOT NULL,
  is_mother_tongue   boolean                  NOT NULL,
  listening_level    integer,
  speaking_level     integer,
  reading_level      integer,
  writing_level      integer,
  created_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at         timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT language_skill_pkey               PRIMARY KEY (id),
  CONSTRAINT language_skill_student_profile_id FOREIGN KEY (student_profile_id) REFERENCES student_profile (id),
  CONSTRAINT language_skill_language_id        FOREIGN KEY (language_id)        REFERENCES language (id),
  CONSTRAINT valid_listening_level             CHECK (listening_level >= 1 AND listening_level <= 4),
  CONSTRAINT valid_speaking_level              CHECK (speaking_level >= 1 AND speaking_level <= 4),
  CONSTRAINT valid_reading_level               CHECK (reading_level >= 1 AND reading_level <= 4),
  CONSTRAINT valid_writing_level               CHECK (writing_level >= 1 AND writing_level <= 4)
);

ALTER TABLE language_skill OWNER TO dbadmin;

/*
 * user_account
 */
DROP TABLE IF EXISTS user_account CASCADE;

CREATE TABLE user_account
(
  id                 serial           NOT NULL,
  email              text             NOT NULL,
  first_name         text             NOT NULL,
  last_name          text             NOT NULL,
  password           text             NOT NULL,
  student_profile_id integer          NOT NULL,
  created_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at timestamp with time zone NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT user_account_pk                 PRIMARY KEY (id),
  CONSTRAINT user_account_student_profile_id FOREIGN KEY (student_profile_id) REFERENCES student_profile (id)
);

ALTER TABLE user_account OWNER TO dbadmin;
