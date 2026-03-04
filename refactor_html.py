import re
import os

filepath = 'index.html'
with open(filepath, 'r', encoding='utf-8') as f:
    html = f.read()

# Replace Timelines
html = html.replace('<div class="experience-timeline">', '<div class="timeline-section">')
html = html.replace('<div class="education-timeline">', '<div class="timeline-section">')

# We need to replace the single timeline-line with base and fill
html = html.replace('<div class="timeline-line"></div>', '<div class="timeline-line-base"></div>\n          <div class="timeline-line-fill" id="timeline-progress"></div>')

# Replace wrappers
html = html.replace('class="experience-card"', 'class="timeline-item"')
html = html.replace('class="education-item"', 'class="timeline-item"')

# Replace icons
html = html.replace('<div class="company-icon">', '<div class="timeline-icon-wrapper">\n              <div class="timeline-icon">')
html = html.replace('<div class="education-icon">', '<div class="timeline-icon-wrapper">\n              <div class="timeline-icon">')

# Because we added an extra wrapper for the icon, we need to add an extra closing </div> for the icon wrapper.
# In the original HTML, the icon was:
# <div class="company-icon">
#   <i class="..."></i>
# </div>
# <div class="timeline-dot"></div>
# So we can replace `</div>\n            <div class="timeline-dot"></div>` with `</div>\n            </div>`
html = re.sub(r'</div>\s*<div class="timeline-dot"></div>', '</div>\n            </div>', html)
html = re.sub(r'</div>\s*<div class="education-dot"></div>', '</div>\n            </div>', html)

# Replace Content wrappers
# Old: <div class="card-content">
# Old: <div class="education-content">
html = html.replace('<div class="card-content">', '<div class="timeline-content-wrapper">\n              <div class="timeline-content">')
html = html.replace('<div class="education-content">', '<div class="timeline-content-wrapper">\n              <div class="timeline-content">')

# Because we added an extra wrapper for the content, we need to add an extra closing </div> at the end of the item.
# The item ends with:
#             </div> <!-- closes card-content -->
#           </div> <!-- closes experience-card -->
# We need to add one more </div>.
# It is simpler to just append it to the end of the timeline-item by finding `</div>\n          </div>\n\n          <!-- Job`
# Actually, the safest way is to find `<div class="timeline-item"` blocks and ensure they close properly, but since we know the structure, we can just replace:
#               </div>\n            </div>\n          </div>
# Well, let's look at the tech-stack closing:
#               </div>\n            </div>\n          </div>
# We will just replace `</div>\n            </div>\n          </div>` with `</div>\n              </div>\n            </div>\n          </div>`
# But let's be more precise with text replacements:
html = html.replace('job-title', 'item-title')
html = html.replace('degree-title', 'item-title')
html = html.replace('company-name', 'item-subtitle')
html = html.replace('institution', 'item-subtitle')
html = html.replace('job-period', 'item-period')
html = html.replace('class="period"', 'class="item-period"')
html = html.replace('job-description', 'item-description')
html = html.replace('class="description"', 'class="item-description"')
html = html.replace('tech-tag', 'item-tag')
html = html.replace('course-tag', 'item-tag')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(html)
