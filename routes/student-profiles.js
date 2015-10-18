'use strict';

module.exports = (app, models, sequelizeUtils, HttpStatus) => {
  const StudentProfile = models.StudentProfile;

  app.get('/student_profiles/:id', (req, res, next) => {
    var options = {
      where: {id: req.params.id},
      include: [
        {model: models.Faculty},
        {model: models.University},
        {model: models.Degree},
        {model: models.StudentProfileSkill,
          include: [
            {model: models.Skill}
        ]},
        {model: models.StudentProfileLanguage,
          include: [
            {model: models.Language}
        ]},
        {model: models.StudentProfileHobby,
          include: [
            {model: models.Hobby}
        ]},
        {model: models.Media,
          include: [
            {model: models.MediaType}
        ]},
        {model: models.Experience,
          include: [
            {model: models.ExperienceType},
            {model: models.Company}
        ]},
        {model: models.Education,
          include: [
            {model: models.Degree},
            {model: models.Faculty},
            {model: models.University}
        ]},
        {model: models.Grade,
          include: [
            {model: models.Course},
            {model: models.Degree}
        ]}
      ]
    };

    sequelizeUtils.findWhere(StudentProfile, options, req, res, next);
  });
};
