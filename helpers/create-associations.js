const conn = require("./connectdb").getConnectionObject();

const users = conn.import("../models/users");

const student = conn.import("../models/student");
const student_certification = conn.import("../models/student_certification");
const student_documents = conn.import("../models/student_documents");
const student_regional_languages = conn.import("../models/student_regional_languages");
const student_education_info = conn.import("../models/student_education_info");
const skills = conn.import("../models/skill");
const student_skill = conn.import("../models/student_skills");
const student_work_experience = conn.import("../models/student_work_experience");
const student_work_skill = conn.import("../models/student_work_skills");

const parents = conn.import("../models/parents");
const student_to_parent = conn.import("../models/student_to_parent");

const news_feed = conn.import("../models/news_feed");
const news_feed_report = conn.import("../models/news_feed_report");
const news_feed_repost = conn.import("../models/news_feed_repost");
const news_like = conn.import("../models/news_like");

users.hasOne(student,{foreignKey:'user_id'});
student.belongsTo(users,{foreignKey:'user_id'});

student.hasOne(student_certification,{foreignKey:'student_id'});
student_certification.belongsTo(student,{foreignKey:'student_id'});

student.hasOne(student_documents,{foreignKey:'student_id'});
student_documents.belongsTo(student,{foreignKey:'student_id'});

student.hasOne(student_regional_languages,{foreignKey:'student_id'});
student_regional_languages.belongsTo(student,{foreignKey:'student_id'});

student.hasOne(student_education_info,{foreignKey:'student_id'});
student_education_info.belongsTo(student,{foreignKey:'student_id'});

student.belongsToMany(skills,{through:student_skill,foreignKey:'student_id'});
skills.belongsToMany(student,{through:student_skill,foreignKey:'skill_id'});

student.hasOne(student_work_experience,{foreignKey:'student_id'});
student_work_experience.belongsTo(student,{foreignKey:'student_id'});

student.hasOne(student_work_skill,{foreignKey:'student_id'});
student_work_skill.belongsTo(student,{foreignKey:'student_id'});

student.belongsToMany(parents,{through:student_to_parent,foreignKey:'student_id'});
parents.belongsToMany(student,{through:student_to_parent,foreignKey:'parent_id'});

users.hasMany(news_feed,{foreignKey:'user_id'});
news_feed.belongsTo(users,{foreignKey:'user_id'});

news_feed.hasOne(news_feed_report,{foreignKey:'news_feed_id'});
news_feed_report.belongsTo(news_feed,{foreignKey:'news_feed_id'});

news_feed.hasOne(news_feed_repost,{foreignKey:'news_feed_id'});
news_feed_repost.belongsTo(news_feed,{foreignKey:'news_feed_id'});

news_feed.hasOne(news_like,{foreignKey:'news_feed_id'});
news_like.belongsTo(news_feed,{foreignKey:'news_feed_id'});
