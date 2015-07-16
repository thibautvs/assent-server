-- Table: "Students"

-- DROP TABLE "Students";

CREATE TABLE "Students"
(
  id serial NOT NULL,
  email text NOT NULL,
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  CONSTRAINT "students-primary" PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "Students"
  OWNER TO dbadmin;


-- DATA

INSERT INTO "Students"(email) VALUES ('ted@assent.io');
INSERT INTO "Students"(email) VALUES ('liz@assent.io');
