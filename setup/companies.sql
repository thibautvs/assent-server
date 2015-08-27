-- Table: "Companies"

-- DROP TABLE "Companies";

CREATE TABLE "Companies"
(
  id serial NOT NULL,
  name text NOT NULL,
  "createdAt" timestamp with time zone,
  "updatedAt" timestamp with time zone,
  CONSTRAINT "companies-primary" PRIMARY KEY (id)
)
WITH (
  OIDS=FALSE
);
ALTER TABLE "Companies"
  OWNER TO dbadmin;


-- DATA

INSERT INTO "Companies"(name) VALUES ('Urge2code');
INSERT INTO "Companies"(name) VALUES ('Assent');
