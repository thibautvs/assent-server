-- Table: company

-- DROP TABLE company;

CREATE TABLE company
(
  id serial NOT NULL,
  name text NOT NULL,
  created_at timestamp with time zone,
  updated_at timestamp with time zone,
  CONSTRAINT company_pk PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE company
  OWNER TO dbadmin;


-- DATA

INSERT INTO company (name) VALUES ('Urge2code');
INSERT INTO company (name) VALUES ('Assent');
