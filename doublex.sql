CREATE TABLE "users" (
  "id" serial primary key,
  "username" varchar(80) not null UNIQUE,
  "password" varchar(240) not null
);

CREATE TABLE "accounts" (
	"a_id" serial primary key,
	"institution" varchar (30) not null,
	"number" int not null,
	"name" varchar (30),
	"balance" money
	);
	
CREATE TABLE "transactions" (
	"t_id" serial primary key,
	"name" varchar (50),
	"amount" int not null,
	"date" date
	);
	
CREATE TABLE "budget" (
	"bd_id" serial primary key,
	"month" varchar (20) not null,
	"year" int not null,
	"category" varchar (30) not null,
	"amount" money
	);