---
layout: page
title: Team
permalink: /team/
---

<div class="team-container">
  {% for profile in site.data.profiles.profiles %}
    <div class="team-card">
      
      <img src="{{ profile.image | prepend: '/assets/img/' }}" class="team-img">

      <div class="team-info">
        {{ profile.more_info }}
      </div>

    </div>
  {% endfor %}
</div>
