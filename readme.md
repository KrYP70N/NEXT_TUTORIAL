# App Routing

You don't really need extra library for routing process in NextJs. You can use `App Routing` Feature in NextJS.


## App Routing

You just need to create folder under app folder for each route. So, what about nested route? Actually it's easy and sample, use only need to create nested folder. You can refer routing structure below section.

```
[app]
| - page.tsx (Home page)
| - [about] (About folder for about route)
    | - page.tsx (default about page)
    | - [company] (Company router folder under About route)
    | - page.tsx (company page under about route)
```