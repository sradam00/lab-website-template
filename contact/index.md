---
title: Contact
nav:
  order: 5
  tooltip: Email, address, and location
---

# {% include icon.html icon="fa-regular fa-envelope" %}Contact

If you are interested in joining the Russell Lab...

{%
  include button.html
  type="email"
  text="srussell@wlu.ca"
  link="srussell@wlu.ca"
%}
{%
  include button.html
  type="phone"
  text="(555) 867-5309"
  link="+1-555-867-5309"
%}
{%
  include button.html
  type="address"
  tooltip="Our location on Google Maps for easy navigation"
  link="https://www.google.com/maps/place/Bricker+Academic+Building/@43.4727217,-80.5290833,17z/data=!3m1!4b1!4m6!3m5!1s0x882bf40a253bc93f:0x599ee6bf3e1785ae!8m2!3d43.4727217!4d-80.5265084!16s%2Fg%2F11f2wfnsrp?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D"

{% include section.html %}

{% capture col1 %}
consectetur adipiscing elit  
sed do eiusmod tempor
{% endcapture %}

{% include cols.html col1=col1 col2=col2 col3=col3 %}
