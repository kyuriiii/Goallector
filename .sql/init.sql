create table user (
	id int unsigned not null auto_increment primary key,
	nickname varchar(20) not null,
	password varchar(255) not null,
	salt varchar(255) not null,
	gender enum('','M','F') not null default '',
	registered timestamp not null default current_timestamp
);
create table user_info (
	id int unsigned not null auto_increment primary key,
	user_id int unsigned not null,
	contact varchar(13) default '',
	birthday date default '1950-01-01',
	address mediumtext,
	job varchar(50),
	registered timestamp not null default current_timestamp,
	constraint `info_user_id` foreign key (user_id) references user(id) on update cascade on delete cascade
);
create table goal (
	id int unsigned not null auto_increment primary key,
	user_id int unsigned not null,
	open enum('0','1','2') default '1',
	title varchar(50) not null,
	detail mediumtext,
	type enum('year','month','daily','repeat','temp') default 'daily',
	stage int unsigned default 1,
	registered timestamp not null default current_timestamp,
	constraint `goal_user_id` foreign key (user_id) references user(id) on update cascade on delete cascade
);
create table goaltemp (
	id int unsigned not null auto_increment primary key,
	goal_id int unsigned not null,
	deadline date not null,
	registered timestamp not null default current_timestamp,
	constraint `goal_temp_goal_id` foreign key (goal_id) references goal(id) on update cascade on delete cascade
);
create table goalrepeat (
	id int unsigned not null auto_increment primary key,
	goal_id int unsigned not null,
	day varchar(10) not null,
	time time default '00:00',
	registered timestamp not null default current_timestamp,
	constraint `goal_repeat_goal_id` foreign key (goal_id) references goal(id) on update cascade on delete cascade
	);
