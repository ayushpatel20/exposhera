import os
import re

# Pages to process and which nav link should be "active" on each page
pages = {
    "index.html": "index.html",
    "about.html": "about.html",
    "services.html": "services.html",
    "security-personnel.html": "security-personnel.html",
    "products.html": "products.html",
    "certifications.html": "certifications.html",
    "contact.html": "contact.html",
}

# The canonical nav block to inject — clean, no duplicates, no broken spacing
# Each entry: (href, icon, label, label_short_for_span)
nav_items = [
    ("index.html",              "fas fa-home",        "Home"),
    ("about.html",              "fas fa-building",    "About"),
    ("services.html",           "fas fa-shield-alt",  "Services"),
    ("security-personnel.html", "fas fa-user-shield", "Personnel"),
    ("products.html",           "fas fa-shield-alt",  "Products"),
    ("certifications.html",     "fas fa-award",       "Certifications"),
    ("contact.html",            "fas fa-envelope",    "Contact"),
]

def build_nav(active_page):
    lines = ['            <!-- Biometric Styled Desktop Nav -->', '            <nav class="nav-biometric">']
    for href, icon, label in nav_items:
        cls = "bio-btn active" if href == active_page else "bio-btn"
        lines.append(f'                <a href="{href}" class="{cls}">')
        lines.append(f'                    <i class="{icon}"></i><span>{label}</span>')
        lines.append('                    <div class="layer-scan"></div><div class="layer-pulse"></div><div class="layer-laser"></div>')
        lines.append('                    <div class="bio-corner tl"></div><div class="bio-corner tr"></div><div class="bio-corner bl"></div><div class="bio-corner br"></div>')
        lines.append('                </a>')
    lines.append('            </nav>')
    return '\n'.join(lines)

# Regex to find the whole nav-biometric block
nav_pattern = re.compile(
    r'[ \t]*<!--\s*Biometric Styled Desktop Nav\s*-->\s*\n\s*<nav class="nav-biometric">.*?</nav>',
    re.DOTALL
)

base = r"C:\Users\ayush patel\Desktop\Exposhera"

for filename, active_page in pages.items():
    filepath = os.path.join(base, filename)
    if not os.path.exists(filepath):
        print(f"Skipping (not found): {filename}")
        continue

    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    new_nav = build_nav(active_page)

    new_content, count = nav_pattern.subn(new_nav, content)

    if count > 0:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Fixed nav in: {filename}")
    else:
        print(f"Pattern NOT matched in: {filename} — manual check needed")

print("\nDone.")
