# Travel Time and Delay Studies

Travel time and delay studies determine the amount of time required to traverse a specific route and identify the locations, causes, and durations of delays. On the PE Civil Transportation exam, you must understand the key definitions of time and speed, field measurement methodologies, and the equations for the **Moving Observer Method** (also known as the Moving Vehicle Method).

---

## Key Definitions

Understanding the precise differences between these time and speed metrics is crucial for solving conceptual and numerical problems.

### Time Metrics:
- **Travel Time:** The total time taken by a vehicle to traverse a given section of a highway.
- **Running Time:** The time a vehicle is in actual motion while traversing a given section of a highway.
  $$\text{Travel Time} = \text{Running Time} + \text{Delay}$$
- **Stopped-Time Delay (Stopped Delay):** The time a vehicle is completely stationary (speed = 0) due to traffic controls or congestion.
- **Control Delay:** The total delay caused by a traffic control device (e.g., traffic signal, stop sign). It includes:
  1. Time spent decelerating to a stop.
  2. Stopped-time delay.
  3. Queue move-up time (time spent in a creeping queue).
  4. Time spent accelerating back to the free-flow speed.

### Speed Metrics:
- **Travel Speed:** The distance divided by the total travel time.
- **Running Speed:** The distance divided by the running time.
  $$\text{Travel Speed} = \frac{\text{Distance}}{\text{Travel Time}}$$
  $$\text{Running Speed} = \frac{\text{Distance}}{\text{Running Time}}$$
  - Since Running Time $\le$ Travel Time, **Running Speed is always $\ge$ Travel Speed**.

---

## Field Measurement Methodologies

Common methods for collecting travel time and delay data in the field:

1. **Floating Car Method (Test Car Method):**  
   A test vehicle is driven along the test section such that the driver "floats" with the traffic stream. The driver attempts to pass as many vehicles as pass the test vehicle.
2. **Average Car Method:**  
   The test vehicle is driven at what the driver perceives to be the average speed of the traffic stream.
3. **Moving Observer Method:**  
   A test vehicle makes runs in both directions along a corridor (with and against the traffic stream of interest) to calculate both the **traffic volume** and the **average travel time** of the stream without requiring stationary counters.

---

## Moving Observer Method Equations

To estimate traffic volume ($q$) and average travel time ($\bar{t}$) in the direction of interest (e.g., Northbound), a test car makes runs Northbound (with the traffic stream) and Southbound (against the traffic stream).

```
                      Test Car runs Southbound (Against traffic)
                  <=============================================
                  Met by test car: "x" Northbound vehicles
                  Travel time: "t_a"
                  ----------------------------------------------
                  Overtaking test car: "y" vehicles
                  =======>  [Test Car]  =======>
                  Travel time: "t_w"
                      Test Car runs Northbound (With traffic)
```

### Formulas:
- **Traffic Flow Rate ($q$) in the direction of interest:**
  $$q = \frac{x + y}{t_w + t_a}$$

- **Average Travel Time ($\bar{t}$) of the traffic stream:**
  $$\bar{t} = t_w - \frac{y}{q}$$

Where:
- $q$ = flow rate of the traffic stream of interest (vehicles per unit time)
- $\bar{t}$ = average travel time of the traffic stream (minutes or seconds)
- $t_w$ = travel time of the test vehicle when traveling *with* the stream (minutes or seconds)
- $t_a$ = travel time of the test vehicle when traveling *against* the stream (minutes or seconds)
- $x$ = number of vehicles met by the test vehicle when traveling *against* the stream (in the opposite direction)
- $y$ = net number of vehicles overtaking the test vehicle when traveling *with* the stream.
  $$y = N_{\text{overtaking}} - N_{\text{overtaken}}$$
  - $N_{\text{overtaking}}$ = number of vehicles that passed the test vehicle.
  - $N_{\text{overtaken}}$ = number of vehicles that the test vehicle passed.

---

## Worked Example: Moving Observer Method

**Problem:**  
A moving observer study is conducted on a $2.0\text{-mile}$ segment of an arterial highway to estimate the Eastbound traffic volume and average travel time. The test vehicle completes multiple runs, and the average values collected are:
- Travel time of test vehicle Eastbound (with traffic): $t_w = 4.5 \text{ minutes}$
- Travel time of test vehicle Westbound (against traffic): $t_a = 3.5 \text{ minutes}$
- Number of Eastbound vehicles met while traveling Westbound: $x = 125 \text{ vehicles}$
- Vehicles overtaking the test vehicle during the Eastbound run: $12 \text{ vehicles}$
- Vehicles overtaken by the test vehicle during the Eastbound run: $4 \text{ vehicles}$

Calculate:
1. The Eastbound traffic flow rate ($q$) in vehicles per hour.
2. The average travel time ($\bar{t}$) of Eastbound vehicles in minutes.
3. The average travel speed of the Eastbound traffic stream in $\text{mph}$.

**Solution:**

**Step 1: Calculate Net Overtaking Vehicles ($y$)**
$$y = N_{\text{overtaking}} - N_{\text{overtaken}}$$
$$y = 12 - 4 = +8 \text{ vehicles}$$

**Step 2: Calculate Traffic Flow Rate ($q$)**
- $t_w = 4.5 \text{ minutes}$
- $t_a = 3.5 \text{ minutes}$
- $x = 125 \text{ vehicles}$
$$q = \frac{x + y}{t_w + t_a}$$
$$q = \frac{125 + 8}{4.5 + 3.5} = \frac{133 \text{ vehicles}}{8.0 \text{ minutes}} = 16.625 \text{ vehicles/minute}$$

Convert flow rate to vehicles per hour:
$$q_{\text{veh/hr}} = 16.625 \text{ vehicles/minute} \times 60 \text{ minutes/hour} = 997.5 \text{ vehicles/hour}$$
$$\text{Flow Rate } (q) \approx 998 \text{ vehicles/hour}$$

**Step 3: Calculate Average Travel Time ($\bar{t}$)**
$$\bar{t} = t_w - \frac{y}{q}$$
$$\bar{t} = 4.5 \text{ minutes} - \frac{8 \text{ vehicles}}{16.625 \text{ vehicles/minute}}$$
$$\bar{t} = 4.5 - 0.481 = 4.02 \text{ minutes}$$
$$\text{Average Travel Time } (\bar{t}) \approx 4.0 \text{ minutes}$$

**Step 4: Calculate Average Travel Speed ($S$)**
- Segment Length = $2.0 \text{ miles}$
- Average Travel Time ($\bar{t}$) = $4.02 \text{ minutes} = 4.02 \div 60 = 0.067 \text{ hours}$
$$\text{Speed } (S) = \frac{\text{Distance}}{\bar{t}} = \frac{2.0 \text{ miles}}{0.067 \text{ hours}} \approx 29.85 \text{ mph}$$
$$\text{Average Travel Speed } \approx 29.9 \text{ mph}$$

---

## Crucial Pitfalls and Exam Traps

- **Sign of $y$:** The variable $y$ is the *net* number of overtaking vehicles. If the test car is fast and passes more vehicles than it is passed by, $y$ will be **negative**. Make sure to carry the negative sign into the formulas (e.g., $t_w - (-y/q) = t_w + y/q$).
- **Time Unit Consistency:** When calculating $q$, ensure the time units match. If $t_w$ and $t_a$ are in minutes, the initial flow rate $q$ will be in vehicles per minute. You must multiply by 60 to convert to vehicles per hour.
- **Control Delay vs. Stopped Delay:** In conceptual questions, remember that control delay is always larger than stopped delay because it includes the deceleration and acceleration phases. Do not use stopped delay as a direct substitute for control delay in signal capacity equations unless explicitly instructed.
- **Distance and Speed Units:** When computing travel speed, ensure travel time is converted to hours if you want the output speed in miles per hour.
