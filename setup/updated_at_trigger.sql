/*
 * Function
 */
CREATE OR REPLACE FUNCTION fct_set_updated_at()
  RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at := CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ language 'plpgsql';

/*
 * Update triggers on all tables
 */
DO $$
DECLARE
  rec record;
BEGIN
FOR rec IN SELECT tablename FROM pg_tables WHERE schemaname = 'public'
  LOOP
 	  EXECUTE format('CREATE TRIGGER tri_set_updated_at_bu
                    BEFORE UPDATE ON %I
                    FOR EACH ROW EXECUTE PROCEDURE fct_set_updated_at();', rec.tablename);
  END LOOP;
END$$;
