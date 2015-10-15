/*
 * faculty
 */
INSERT INTO faculty (name) VALUES ('Business Administration');

/*
 * university
 */
INSERT INTO university (name) VALUES ('KU Leuven');
INSERT INTO university (name) VALUES ('Università Roma');

/*
 * skill
 */
INSERT INTO skill (name) VALUES ('Social causes');
INSERT INTO skill (name) VALUES ('Leadership');
INSERT INTO skill (name) VALUES ('Events organization');
INSERT INTO skill (name) VALUES ('Negotiation');
INSERT INTO skill (name) VALUES ('Marketing');
INSERT INTO skill (name) VALUES ('Management');

/*
 * hobby
 */
INSERT INTO hobby (name) VALUES ('Fashion & beauty');
INSERT INTO hobby (name) VALUES ('Volleyball');

/*
 * course
 */
INSERT INTO course (name) VALUES ('Marketing');
INSERT INTO course (name) VALUES ('Management');

/*
 * media_type
 */
INSERT INTO media_type (name, extension) VALUES ('Pdf', 'pdf');
INSERT INTO media_type (name, extension) VALUES ('Word', 'doc');
INSERT INTO media_type (name, is_youtube) VALUES ('YouTube', TRUE);

/*
 * degree
 */
INSERT INTO degree (name) VALUES ('Master');

/*
 * experience_type
 */
INSERT INTO experience_type (name) VALUES ('Internship');
INSERT INTO experience_type (name) VALUES ('Student job');
INSERT INTO experience_type (name) VALUES ('Extra curricular');

/*
 * company
 */
INSERT INTO company (name) VALUES ('L''Oreal Paris');
INSERT INTO company (name) VALUES ('Sponsor a Child in Africa');
INSERT INTO company (name) VALUES ('Dolce Events');

/*
 * language
 */
INSERT INTO language (name, code) VALUES ('Dutch', 'nl');
INSERT INTO language (name, code) VALUES ('French', 'fr');
INSERT INTO language (name, code) VALUES ('English', 'en');

/*
 * student_profile
 */
INSERT INTO student_profile (first_name, last_name, faculty_id, university_id, degree_id, degree_year, about_me)
  VALUES ('Jessica', 'Martens', 1, 1, 1, 1, 'Hi ! I’m Jessica, Business Administration student at KU Leuven. I’m very social and dynamic, love the contact with people and solving challenges.

I started these studies because my goal is to make a lasting positive impact. The cause I particularly care about is children education. I started the initiative “Sponsor a Child in Africa” at KUL, counting 300+ contributing students.

My ideal job would be working for an international company involved with social causes, so I can take my contributions to the next level.');

/*
 * student_profile_skill
 */
INSERT INTO student_profile_skill (student_profile_id, skill_id, position) VALUES (1, 1, 1);
INSERT INTO student_profile_skill (student_profile_id, skill_id, position) VALUES (1, 2, 2);
INSERT INTO student_profile_skill (student_profile_id, skill_id, position) VALUES (1, 3, 3);
INSERT INTO student_profile_skill (student_profile_id, skill_id, position) VALUES (1, 4, 4);
INSERT INTO student_profile_skill (student_profile_id, skill_id, position) VALUES (1, 5, 5);
INSERT INTO student_profile_skill (student_profile_id, skill_id, position) VALUES (1, 6, 6);

/*
 * student_profile_hobby
 */
INSERT INTO student_profile_hobby (student_profile_id, hobby_id, description, position)
  VALUES (1, 1, 'Created the marketing campaign for a beautician friend, including flyers, website content and social media promotion.', 1);

INSERT INTO student_profile_hobby (student_profile_id, hobby_id, description, position)
  VALUES (1, 2, 'Captain of the team. Learned how to motivate people so that they can surpass themselves. We won the silver cup for the 2013 national tournament.', 2);

/*
 * grade
 */
INSERT INTO grade (student_profile_id, course_id, grade_actual, grade_max, degree_id, degree_year, month, position)
  VALUES (1, 1, 19, 20, 1, 1, 1, 1);

INSERT INTO grade (student_profile_id, course_id, grade_actual, grade_max, degree_id, degree_year, month, position)
  VALUES (1, 2, 18, 20, 1, 1, 6, 2);

/*
 * media
 */
INSERT INTO media (student_profile_id, title, media_type_id, position) VALUES (1, 'L''Oréal, Wild Ombre marketing campaign', 1, 1);
INSERT INTO media (student_profile_id, title, media_type_id, position) VALUES (1, 'Sponsor a Child in Africa initiative', 2, 2);
INSERT INTO media (student_profile_id, title, media_type_id, url, position) VALUES (1, 'Event organization at Dolce Events', 3, 'https://youtu.be/lu_oG7hD4wQ', 3);

/*
 * education
 */
INSERT INTO education (student_profile_id, degree_id, faculty_id, university_id, is_erasmus, start_date, end_date)
  VALUES (1, 1, 1, 1, FALSE, '2014-09-01', NULL);

INSERT INTO education (student_profile_id, degree_id, faculty_id, university_id, is_erasmus, start_date, end_date)
  VALUES (1, 1, 1, 2, TRUE, '2013-01-01', '2013-06-30');

/*
 * experience
 */
INSERT INTO experience (student_profile_id, experience_type_id, company_id, start_date, end_date, description)
  VALUES (1, 1, 1, '2015-01-01', '2015-04-01', 'Involved in the marketing campaign for the new "Wild Ombré" hair product.');

INSERT INTO experience (student_profile_id, experience_type_id, company_id, start_date, end_date, description)
  VALUES (1, 3, 2, '2014-09-01', NULL, 'Initiated a non-profit cause at university to help improve the education of African children.');

INSERT INTO experience (student_profile_id, experience_type_id, company_id, start_date, end_date, description)
  VALUES (1, 2, 3, '2013-01-01', '2013-04-01', 'Management of a team of 4 students for an event planning company.');

/*
 * student_profile_language
 */
INSERT INTO student_profile_language (student_profile_id, language_id, is_mother_tongue, position)
  VALUES (1, 1, TRUE, 1);

INSERT INTO student_profile_language (student_profile_id, language_id, is_mother_tongue, listening_level, speaking_level, reading_level, writing_level, position)
  VALUES (1, 2, FALSE, 1, 2, 3, 4, 2);

INSERT INTO student_profile_language (student_profile_id, language_id, is_mother_tongue, listening_level, speaking_level, reading_level, writing_level, position)
  VALUES (1, 3, FALSE, 1, 2, 3, 4, 3);
