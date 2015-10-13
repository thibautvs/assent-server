-- Table: user_account

-- DROP TABLE user_account;

CREATE TABLE user_account
(
  id serial NOT NULL,
  email text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  password text NOT NULL,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  CONSTRAINT user_account_pk PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE user_account
  OWNER TO dbadmin;
