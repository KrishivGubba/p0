# Campus Study Spot Finder - Presentation Script
**Time: ~4 minutes**

---

## INTRO (30 seconds)
*[Start on Home page]*

Hi, I'm presenting my CS571 project: **Campus Study Spot Finder**.

This is a React web application that helps UW-Madison students find the perfect study location on campus. Students can browse different study spots, filter by their preferences, and read reviews from other students.

---

## HOME PAGE (45 seconds)
*[Scroll through Home page]*

The home page features a hero section with UW-Madison's signature red branding. Below that is a search bar where users can quickly find spots by name.

Let me show the **top-rated study spots** section — these automatically display locations with 4.5 stars or higher.

At the bottom, I've included feature cards highlighting what the app offers: multiple locations, community ratings, and easy filtering.

*[Click "Browse All Study Spots" button]*

---

## STUDY SPOTS PAGE - FILTERING (1 minute)
*[Now on /spots page]*

This is the main browsing page with all 8 study spots displayed as cards.

Here's the **interactive filtering system** — the main interactable feature of my project.

*[Click Noise Level dropdown]*
Users can filter by noise level. Let me select "Quiet" — you can see the results update immediately, showing only quiet study spaces like the libraries.

*[Clear and try Amenities dropdown]*
I can also filter by amenities. If I need WiFi and Coffee, I select that option.

*[Show Rating filter]*
And there's a minimum rating filter for finding only highly-rated spots.

*[Type in search bar]*
The search bar works in real-time. If I type "Memorial" — it filters to spots matching that text.

*[Click Clear Filters]*
One click clears everything and resets the view.

*[Click on a study spot card]*

---

## SPOT DETAIL PAGE (45 seconds)
*[Now on detail page]*

Each study spot has a detailed page. At the top, you see the name, building, noise level badge, and accessibility indicator.

The left side shows the image, a description of the location, and the reviews section with individual ratings from students.

On the right sidebar, I'm using reusable InfoCard components to display amenities, peak hours, and quick reference information.

There are also action buttons for bookmarking spots and writing reviews — these would connect to a backend in a full implementation.

*[Click Back to All Spots]*

---

## ABOUT PAGE (30 seconds)
*[Navigate to About page]*

The About page explains the project's mission and features. I've used a consistent card-based layout throughout.

This section lists the technologies used: React, React Router, React Bootstrap, and Vite.

At the bottom is contact information and the footer, which appears on every page.

---

## DESIGN DECISIONS (45 seconds)
*[Can stay on any page]*

Let me highlight my key design decisions:

**First, accessibility.** All images have descriptive alt text, headings follow proper hierarchy without skipping levels, all form inputs have labels, and colors meet WCAG AA contrast standards.

**Second, component architecture.** I built 12 reusable components — things like NoiseLevelBadge, RatingDisplay, and InfoCard — that are used consistently across pages.

**Third, UW-Madison theming.** I used the official Badger red throughout the app, creating a cohesive brand identity that students would recognize.

**Finally, React Bootstrap.** This gave me responsive, mobile-friendly layouts and consistent styling with minimal custom CSS.

---

## WRAP UP (15 seconds)

That's Campus Study Spot Finder — a React application with search and filtering, detailed study spot pages, accessibility compliance, and 12 meaningful components. Thanks for watching.

---

