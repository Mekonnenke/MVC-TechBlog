DROP DATABASE IF EXISTS tech_blog_db;

CREATE DATABASE tech_blog_db;




SELECT `post`.`id`, `post`. `post`.`title`, `post`.`created_at`, (SELECT COUNT(*)
 FROM comment WHERE user.id = user.post_id) AS `user_count`, `comments`.`id` AS `comments.id`, `comments`.`comment_text` 
 --AS
--   `comments.comment_text`, `comments`.`post_id`
--  AS `comments.post_id`, `comments`.`user_id` AS `comments.user_id`, `comments`.`created_at` AS `comments.created_at`, `comments->user`.`id`
--   AS `comments.user.id`, `comments->user`.`username` AS `comments.user.username`, `user`.`id` AS `user.id`, `user`.`username` 
--   AS `user.username` FROM `post` AS `post` LEFT OUTER JOIN `comment` AS `comments`
--  ON `post`.`id` = `comments`.`post_id` LEFT OUTER JOIN `user` AS `comments->user` ON `comments`.`user_id` = `comments->user`.`id` 
--  LEFT OUTER JOIN `user` AS `user` ON `post`.`user_id` = `user`.`id` ORDER BY `post`.`created_at` DESC;