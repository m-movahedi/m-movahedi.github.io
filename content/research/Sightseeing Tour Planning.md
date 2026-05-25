+++
title = "Tehran Sightseeing Tour Planning"
date = "2024-08-07"
draft = false
type = "post"
+++

Tourism plays an important role in the growth of urban economies. Attractions like historical buildings that capture the essence of life, streets with the hallmarks of the past, and monuments that act as mementos can be lucrative for local businesses and fruitful for the city's culture.

The path to an efficient sightseeing tour plan requires both demand evaluation and route planning. This post will discuss only the route planning stage. In most sightseeing tours, there are two active transportation modes working alongside each other: a major mode that usually provides users with a lift to special stations and a minor mode that connects these stations to the desired attractions.

<iframe
  src="/projects/sightseeing-tour/html_output.html"
  width="100%"
  height="700"
  style="border:none;">
</iframe>

# Major Mode
The major mode usually follows certain criteria, which can later be interpreted into a cost function, some of which can be named as:

- The distance between attractions from each other. (in meters)
- The duration of travel among attractions. (in seconds)
- The exposure of users to appropriate economic land use. (in either meters or seconds)
- The exposure of users to historical or leisure-inducing land use. (in either meters or seconds)
- Economic impact (usually in carbon dioxide equivalent)

The easiest way to embed such an idea is to calculate a matrix with arrays Rij presenting the cost of the cheapest route when the agent travels from the origin i to the destination j. The problem of finding such routes calls for a different post. In this case, we assume we have an algorithm that returns this route. It is obvious that the Rij would not be equal to the Rji as the cheapest route may differ.

# Minor Mode

In this project, the minor mode refers to the walking routes planned in part of the study area that might induce tourism or any related activity. These areas usually pass through either cultural or historical streets. The criteria for these routes are quite different from normal walking streets, especially when it comes to the desired walking distance and duration, since the visitors are willing to interact with what they come upon.

# Route

In this case, the routing problem is not finding a way but finding an optimal sequence that visits all the stations with the lowest cost. The problem is a well-known graph routing problem, also known as the traveling salesman problem.


<div style="margin-top:40px; display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
  <a href="https://github.com/m-movahedi/Sightseeing-Tour-Planning"
     style="
      padding:10px 18px;
      border-radius:36px;
      text-decoration:none;
      background:#1f1f1f;
      color:white;
      font-weight:600;
      display:inline-block;
     ">
     GitHub Repository
  </a>
</div>


Sightseeing Tour Planner by Mohammad Movahedi is licensed under CC BY-NC-SA 4.0 CC


