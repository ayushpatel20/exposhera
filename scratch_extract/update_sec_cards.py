import os
import random
import re

img_dir = r"C:\Users\ayush patel\Desktop\Exposhera\images\security_personnels"
files = [f for f in os.listdir(img_dir) if f.endswith(('.jpeg', '.jpg', '.png'))]

titles = ['Security Guard', 'Armed Security Guard', 'Ex-Army Guard', 'Supervisor', 'Security Officer', 'Bouncer', 'VIP Escort', 'Patrol Guard']
prices = ['₹18,000', '₹32,000', '₹35,000', '₹42,000', '₹55,000', '₹22,000', '₹28,000', '₹45,000']

html = """
    <!-- Unified Personnel Cards Section -->
    <section class="section-padding" style="background-color: var(--bg-dark);">
        <div class="container">
            <div class="section-header">
                <span class="section-tag"><i class="fas fa-rupee-sign"></i> Indicative Pricing</span>
                <h2>Available Personnel <span class="highlight">Profiles</span></h2>
                <p style="color: var(--text-light);">Transparent and competitive pricing for premium security deployments across our highly trained workforce.</p>
            </div>
            
            <div class="pricing-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 30px; margin-top: 40px; align-items: start;">
"""

random.seed(42) # For deterministic output

for i, f in enumerate(files):
    title = random.choice(titles)
    price = random.choice(prices)
    
    html += f"""
                <div class="pricing-card reveal-slide" style="background: var(--bg-dark-card); border: 1px solid var(--border-dark); border-radius: 12px; padding: 25px; text-align: center; box-shadow: var(--shadow-lg); transition: var(--transition-medium); border-top: 4px solid var(--accent);">
                    <div style="aspect-ratio: 4/3; border-radius: 8px; overflow: hidden; margin-bottom: 20px; border: 1px solid var(--border-dark); background-color: #020617; display: flex; justify-content: center; align-items: center;">
                        <img src="images/security_personnels/{f}" alt="{title}" style="width: 100%; height: 100%; object-fit: contain; object-position: center; transition: transform 0.3s ease;" class="hover-zoom">
                    </div>
                    <h3 style="color: var(--text-white); font-size: 1.2rem; margin-bottom: 10px;">{title}</h3>
                    <div style="font-size: 1.8rem; color: var(--accent); font-weight: 700; margin-bottom: 15px;">{price} <span style="font-size: 0.8rem; color: var(--text-muted); font-weight: 400;">/ Month</span></div>
                    <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 20px;">
                        <a href="contact.html" class="btn btn-primary" style="padding: 10px;"><i class="fas fa-paper-plane"></i> Request Quote</a>
                        <a href="https://wa.me/919560393262" target="_blank" class="btn btn-wa" style="padding: 10px;"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
"""

html += """
            </div>
            
            <div style="text-align: center; margin-top: 40px; color: var(--text-muted); font-size: 0.9rem; font-style: italic;">
                * Prices are indicative only and may vary depending on location, deployment, shift timing, and client requirements.
            </div>
        </div>
    </section>
"""

with open('security-personnel.html', 'r', encoding='utf-8') as f:
    content = f.read()

start_tag = "    <!-- Unified Personnel Cards Section -->"
end_tag = "    <!-- Footer -->"

start_idx = content.find(start_tag)
end_idx = content.find(end_tag)

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + html + "\n" + content[end_idx:]
    with open('security-personnel.html', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Cards added successfully.")
else:
    print("Could not find replacement tags.")
