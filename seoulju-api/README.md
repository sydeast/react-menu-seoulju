# SEOULJU-API README

Clone the repo to your machine, cd into the backend folder, and run below command in your terminal to install all gems and their dependencies
```
$ bundle install
```

Next run the migration and seed files. If installing for personal use, run the second command as you will not need seeded data. Note: Rake Setup command will reset any data currently in the database if you have the database setup.

Development:

```
$ rails db:setup
```

Personal:
```
$ rails db:migration
```

Now start your local server to access the data from the api
```
$ rails s
```

To access the frontend, make sure you follow the frontend README!

HAVE FUN!