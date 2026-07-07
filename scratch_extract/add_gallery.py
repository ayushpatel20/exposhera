import os

img_dir = r"C:\Users\ayush patel\Desktop\Exposhera\images\security_personnels"
files = [f for f in os.listdir(img_dir) if f.endswith(('.jpeg', '.jpg', '.png'))]

html = """
    <!-- Personnel Image Gallery -->
    <section class="section-padding" style="background-color: var(--bg-white);">
        <div class="container">
            <div class="section-header">
                <span class="section-tag"><i class="fas fa-camera"></i> Our Forces in Action</span>
                <h2>Personnel <span class="highlight">Gallery</span></h2>
                <p>Glimpses of our highly trained security guards on active duty across India.</p>
            </div>
            <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 15px; margin-top: 40px;">
"""

for f in files:
    html += f"""
                <div class="gallery-item reveal-slide" style="border-radius: 8px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.1); aspect-ratio: 3/4;">
                    <img src="images/security_personnels/{f}" alt="Exposhera Security Personnel" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;">
                </div>
"""

html += """
            </div>
        </div>
    </section>
"""

with open('security-personnel.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert before the Pricing Cards Section
replace_target = "    <!-- Pricing Cards Section -->"
content = content.replace(replace_target, html + "\n" + replace_target)

with open('security-personnel.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Gallery added successfully.")
