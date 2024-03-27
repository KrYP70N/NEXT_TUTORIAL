# App Routing

You don't really need extra library for routing process in NextJs. You can use `App Routing` Feature in NextJS.


## App Routing

You just need to create folder under app folder for each route. So, what about nested route? Actually it's easy and sample, use only need to create nested folder. You can refer routing structure below section.

```
/app/
| - page.tsx (Home page)
| - /about/ (About folder for about route)
    | - page.tsx (default about page)
    | - /company/ (Company router folder under About route)
        | - page.tsx (company page under about route)
```


## Routing Slug

For the dynamic routes like posts and products routes, you can use `[slug]` feature in App Routing system. 

```
/app/
| - /about/ (folder)
    | - /[slug]/ (for the dynammic route you need to create folder name with square bracket)
        | - page.tsx
    | - page.tsx
```


## Grouping Route

We should use `group route` For the modularize, readability, scalability and ease of maintenance. For the group route you just need to create folder name with parentheses `(name)`.  You can refer under following section.

```
[app]
| - (auth)
    | - /register/
        | - page.tsx
    | - /login/
        | - page.tsx
```

> You don't need to count group folder name as a path in your route. You can access register and login like : localhost:5000/register, localhost:5000/login