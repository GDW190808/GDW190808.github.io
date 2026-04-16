---
layout: page
title: 专利项目
permalink: /projects/
description: projects.
nav: true
nav_order: 3
display_categories: [专利, 项目]
horizontal: false
---

<!-- pages/projects.md -->
<h2>🏆 获奖</h2>

{% for group in site.data.awards.awards %}
  <h3 class="award-year">{{ group.year }}</h3>

  <div class="awards-container">
    {% for award in group.items %}
      <div class="award-card">
        <a href="{{ award.img | prepend: '/assets/img/awards/' }}" target="_blank">
          <img src="{{ award.img | prepend: '/assets/img/awards/' }}" class="award-img">
        </a>
        <p class="award-title">{{ award.title }}</p>
      </div>
    {% endfor %}
  </div>
{% endfor %}

<div class="projects">
{% if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {% for category in page.display_categories %}
  <a id="{{ category }}" href=".#{{ category }}">
    <h2 class="category">{{ category }}</h2>
  </a>
  {% assign categorized_projects = site.projects | where: "category", category %}
  {% assign sorted_projects = categorized_projects | sort: "importance" %}
  <!-- Generate cards for each project -->
  {% if page.horizontal %}
  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
  {% endfor %}

{% else %}

<!-- Display projects without categories -->

{% assign sorted_projects = site.projects | sort: "importance" %}

  <!-- Generate cards for each project -->

{% if page.horizontal %}

  <div class="container">
    <div class="row row-cols-1 row-cols-md-2">
    {% for project in sorted_projects %}
      {% include projects_horizontal.liquid %}
    {% endfor %}
    </div>
  </div>
  {% else %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_projects %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
  {% endif %}
{% endif %}
</div>
