# Landing Page Project

## **Table of Contents**

* [1. Introduction](#1.-introduction)
* [2. Global Variables](#2.-Global-Variables)
    * [const sections](#const-sections)
* [3. Functions](#3.-functions)
    * [buildNavBar()](#buildNavBar())
    * [ViewportWatcher()](#ViewportWatcher())
    * [observing(observerEntries)](#observing(observerEntries))
## **1. Introduction**
This file contains a brief description of the `app.js` file. I will be talking about the variables and the functions and the reasons as to why they exist.
## **2. Global Variables**
- ### **`const sections:`**   
The one and only global variable. Declared to hold the list of sections in the page. This is due to the fact that it is used in multiple functions and since `document.querySelectorAll()` is an expensive call. I thought it would be better to call it once rather than multiple times. 
## **3. Functions**
`app.js` contains two functions. The second of which contains a nested function; making the total add up to three functions. Together, they make up the functionality for the webapp. They are responsible for the navigation and for determining which section is being viewed to change the style accordingly. 
- ### **`buildNavBar()`:**
This function builds a navigation bar and adds an `eventlistener` to listen to clicks on it's elements. The `eventListener` simply scrolls to the appropritae section on the page. The elements are made up of list items (`<li>`) that contain text content populated from the text in the `data-nav` attribute that is present in all sections. The `data-nav` attribute is extacted from the list of sections ( see [`sections global variable`](#const-sections) ) using a `foreach` loop. each `<li>` is given a class name `menu__link` to apply the appropriate styling and then added toa `domcumentFragment` object. Finally, after the `foreach` loop finishes execution, the `documentFragment` is added to the `document` object
- ### **`ViewportWatcher()`:**
This function wathces the changes in the view port in order to set the appropriate active section styling to the section that is being viewed by the user. This end-result is achieved using the `IntersectionObserverApi` which requires 2 parameters in it's constructor; the options parameter and the function to be executed.  
Firstly, the `options` object is created with the necessary parameters. Then, the [`oberving()`](#observing(observerEntries)) function is created. Finally, the `observer` is created and the `oberver.observe()` function is invoked on every section in the [`sections`](#const-sections) list.
- ### **`observing(observerEntries)`:**
As per the `IntersectionObserverApi`, this function is executed everytime a element that is being observed enters of leaves the viewport. the function recieves a list of `IntersectionObserverEntries` and simply checks the `IntersectionObserverEntry.isIntersecting` property to determine weather the entry in question is intersecting the viewport of not. If so, it add the `your-active-class` to the entry's list of classes. If not, then it removes `your-active-class` from the entry's list of classes. This makes it so the active class is dynamically changes as the user scrolls through the page by adding the `your-active-class` to the intersecting section and removing it from all others. 


