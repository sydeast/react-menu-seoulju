# react-menu-seoulju
[![license](https://img.shields.io/github/license/sydeast/react-menu-seoulju.svg?style=flat-square)](https://github.com/sydeast/react-menu-seoulju/blob/main/LICENSE)

COD: (https://github.com/sydeast/react-menu-seoulju/blob/main/code_of_conduct.md)

 Flatiron JS Assessment project - React - Seoulju Menu - Shopping

Here is a fullsack frontend and backend project for my Flatiron Assessment. Primarily it is a shopping/menu app based on a my favorite local Austin, TX restaurant: Seoulju Korean Kitchen & Bar. In this app, users will be able to navigate through the menu, select items, adjust quantities, and "send in the order". {Order completion/purchase does not go trough at this time.} While the app was specifically built for this restaurant, I tried to build it in such a way that is can be reusable for other menus/stores or even multiple at one time with more adjustments needed on the API side.

## Tools
Built using Ruby on Rails 6.1.3, React, Redux, Redux-Thunk, and React-Bootstrap. The database is still sqlite; however, there are future plans to move this project to Heroku; therefore, the DB will change to postgreSQL soon. Check the Gemfile and Gemlock for more tooling information.

## To Run for development or personal use
Please check the individual backend and frontend READMEs for development setup. However, to try out please do the following:

```
Download or Clone the Repository
```

```
In your terminal: cd into 'Seoulju-API' and run this command - $ rails db:setup
```

```
Then start the server: $ rails s
```


```
Now in another terminal window: cd into 'Seoulju-React-2' and start the yarn server: $ yarn start
```

```
Have fun!!!
```

## Contibuting
Currently this project is an assignment for my course. Once completed, the project will be open for collaboration. In the meantime, please feel free to open pull requests or contact me via a bug creation. PR approval will occur after assessment and if changes are valid.


## Future Work
* User Logins
* Complete checkout (Finished Prod Project and with collaboration with restaurant owners)
* Images (Cloudinary?)