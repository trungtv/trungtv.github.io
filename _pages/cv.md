---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
  - /resume/
---

{% include base_path %}

Education
======
* PhD in Computer Science, École normale supérieure Paris-Saclay (formerly ENS Cachan) / INRIA, France, 2008–2013
* Engineering Degree in Computer Science, Hanoi University of Science and Technology (HUST), 2003–2008

Work experience
======
* Faculty / Lecturer, School of Information and Communication Technology (SOICT), Hanoi University of Science and Technology (HUST)
  * Teaching courses in databases, big data, deep learning, and supervising student projects / graduation theses

* Founder, [giasan.vn](https://gianhadat.cenhomes.vn) (2015–2018)
  * First real-estate analytic platform for Vietnam; 3rd prize, Talent of Vietnam Award 2017; successfully exited in 2018

* Industry experience as intern, full-time engineer, and adjoint data scientist at BKAV, Microsoft Research Cambridge, Trendiction Luxembourg, and FPT Corporation

Skills & interests
======
* Large-scale data analytics, databases, big data storage and processing
* Machine learning / deep learning applications
* Domain focus: real-estate, healthcare, labor and financial markets
* Tooling: Python, GitHub, Docker, HTML/CSS, Java

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul>

Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>

Portfolio
======
  <ul>{% for post in site.portfolio reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
