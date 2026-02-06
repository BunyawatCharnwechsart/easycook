CREATE TABLE IF NOT EXISTS users (
    uid INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    password TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    profile_image TEXT
);

CREATE TABLE IF NOT EXISTS category (
    categoryid INTEGER PRIMARY KEY AUTOINCREMENT,
    categoryname TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS menu (
    menuid INTEGER PRIMARY KEY AUTOINCREMENT,
    uid INTEGER NOT NULL,
    mname TEXT NOT NULL,
    cooktime INTEGER NOT NULL,
    description TEXT,
    categoryid INTEGER NOT NULL,
    FOREIGN KEY (uid) REFERENCES users(uid) ON DELETE CASCADE,
    FOREIGN KEY (categoryid) REFERENCES category(categoryid)
);

CREATE TABLE IF NOT EXISTS ingredient (
    ingredientid INTEGER PRIMARY KEY AUTOINCREMENT,
    menuid INTEGER NOT NULL,
    ingredient_order INTEGER NOT NULL,
    ingredient_name TEXT NOT NULL,
    FOREIGN KEY (menuid) REFERENCES menu(menuid) ON DELETE CASCADE,
    UNIQUE (menuid, ingredient_order)
);

CREATE TABLE IF NOT EXISTS makestep (
    stepid INTEGER PRIMARY KEY AUTOINCREMENT,
    menuid INTEGER NOT NULL,
    step_order INTEGER NOT NULL,
    step TEXT NOT NULL,
    step_image TEXT,
    FOREIGN KEY (menuid) REFERENCES menu(menuid) ON DELETE CASCADE,
    UNIQUE (menuid, step_order)
);
