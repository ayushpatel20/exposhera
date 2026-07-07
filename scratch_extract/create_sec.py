import os

# Read services.html
with open('services.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Find the split points
header_end = content.find('<!-- Page Banner Area -->')
footer_start = content.find('<!-- Call To Action -->')

header = content[:header_end]
footer = content[footer_start:]

# Fix active class in header
header = header.replace('href="services.html" class="bio-btn active"', 'href="services.html" class="bio-btn"')
header = header.replace('href="security-personnel.html" class="bio-btn"', 'href="security-personnel.html" class="bio-btn active"')

# Same for mobile side menu
header = header.replace('href="services.html" class="active"', 'href="services.html"')
header = header.replace('href="security-personnel.html"', 'href="security-personnel.html" class="active"')

# Build body
body = """    <!-- Page Banner Area -->
    <section class="page-banner">
        <div class="page-banner-bg" style="background-image: linear-gradient(135deg, rgba(8, 12, 20, 0.9) 0%, rgba(10, 43, 78, 0.75) 100%), url('images/service_guard.png');"></div>
        <div class="page-banner-content container">
            <h1>Professional Security <span class="highlight">Personnel</span></h1>
            <p>Providing highly trained and disciplined security professionals for industrial, commercial, residential, corporate and event security across India.</p>
            <div class="breadcrumb">
                <a href="index.html">Home</a>
                <span>/</span>
                <span class="active">Security Personnel</span>
            </div>
        </div>
    </section>

    <!-- Personnel Categories -->
    <section class="section-padding" style="background-color: var(--bg-white);">
        <div class="container">
            <div class="section-header">
                <span class="section-tag"><i class="fas fa-users-cog"></i> Our Guards</span>
                <h2>Specialized <span class="highlight">Categories</span></h2>
                <p>We deploy highly skilled professionals tailored for your security needs.</p>
            </div>
            <div class="services-grid" style="margin-top: 40px;">
                <div class="service-card reveal-slide" style="background: var(--bg-light); border: 1px solid var(--border-light); border-radius: 8px; padding: 25px; text-align: center;">
                    <i class="fas fa-medal" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
                    <h3 style="color: var(--text-light); margin-bottom: 15px;">Ex-Army Security Personnel</h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">Ex Army Trained Guards, Highly Disciplined, Well Trained, Available Across India.</p>
                </div>
                <div class="service-card reveal-slide" style="background: var(--bg-light); border: 1px solid var(--border-light); border-radius: 8px; padding: 25px; text-align: center;">
                    <i class="fas fa-crosshairs" style="font-size: 3rem; color: var(--accent); margin-bottom: 20px;"></i>
                    <h3 style="color: var(--text-light); margin-bottom: 15px;">Licensed Armed Guards</h3>
                    <p style="color: var(--text-muted); line-height: 1.6;">All India Licensed Security Personnel, 32 Bore Revolver, .315 Bore Rifle, Maharashtra Licence, Thane Licensed Personnel.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing Cards Section -->
    <section class="section-padding" style="background-color: var(--bg-light);">
        <div class="container">
            <div class="section-header">
                <span class="section-tag"><i class="fas fa-rupee-sign"></i> Indicative Pricing</span>
                <h2>Personnel <span class="highlight">Packages</span></h2>
                <p>Transparent and competitive pricing for premium security deployments.</p>
            </div>
            
            <div class="pricing-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-top: 40px; align-items: center;">
                <!-- Card 1 -->
                <div class="pricing-card reveal-slide" style="background: var(--bg-white); border: 1px solid var(--border-light); border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: var(--transition-medium); border-top: 4px solid var(--accent);">
                    <h3 style="color: var(--text-light); font-size: 1.2rem; margin-bottom: 15px;">Security Guard</h3>
                    <div style="font-size: 2rem; color: var(--text-white); font-weight: 700; margin-bottom: 20px;">₹18,000 <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 400;">/ Month</span></div>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 25px;">
                        <a href="contact.html" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Request Quote</a>
                        <a href="https://wa.me/919560393262" target="_blank" class="btn btn-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
                
                <!-- Card 2 -->
                <div class="pricing-card reveal-slide" style="background: var(--bg-white); border: 1px solid var(--border-light); border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: var(--transition-medium); border-top: 4px solid var(--accent);">
                    <h3 style="color: var(--text-light); font-size: 1.2rem; margin-bottom: 15px;">Armed Security Guard</h3>
                    <div style="font-size: 2rem; color: var(--text-white); font-weight: 700; margin-bottom: 20px;">₹32,000 <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 400;">/ Month</span></div>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 25px;">
                        <a href="contact.html" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Request Quote</a>
                        <a href="https://wa.me/919560393262" target="_blank" class="btn btn-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
                
                <!-- Card 3 -->
                <div class="pricing-card reveal-slide" style="background: var(--bg-white); border: 1px solid var(--border-light); border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 8px 25px rgba(0,0,0,0.15); transition: var(--transition-medium); border-top: 4px solid var(--accent); transform: scale(1.05); z-index: 1;">
                    <div style="background: var(--accent); color: #fff; font-size: 0.8rem; padding: 4px 10px; border-radius: 20px; display: inline-block; margin-bottom: 15px; font-weight: bold;">RECOMMENDED</div>
                    <h3 style="color: var(--text-light); font-size: 1.2rem; margin-bottom: 15px;">Ex-Army Guard</h3>
                    <div style="font-size: 2.2rem; color: var(--text-white); font-weight: 700; margin-bottom: 20px;">₹35,000 <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 400;">/ Month</span></div>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 25px;">
                        <a href="contact.html" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Request Quote</a>
                        <a href="https://wa.me/919560393262" target="_blank" class="btn btn-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
                
                <!-- Card 4 -->
                <div class="pricing-card reveal-slide" style="background: var(--bg-white); border: 1px solid var(--border-light); border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: var(--transition-medium); border-top: 4px solid var(--accent);">
                    <h3 style="color: var(--text-light); font-size: 1.2rem; margin-bottom: 15px;">Supervisor</h3>
                    <div style="font-size: 2rem; color: var(--text-white); font-weight: 700; margin-bottom: 20px;">₹42,000 <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 400;">/ Month</span></div>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 25px;">
                        <a href="contact.html" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Request Quote</a>
                        <a href="https://wa.me/919560393262" target="_blank" class="btn btn-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
                
                <!-- Card 5 -->
                <div class="pricing-card reveal-slide" style="background: var(--bg-white); border: 1px solid var(--border-light); border-radius: 12px; padding: 30px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: var(--transition-medium); border-top: 4px solid var(--accent);">
                    <h3 style="color: var(--text-light); font-size: 1.2rem; margin-bottom: 15px;">Security Officer</h3>
                    <div style="font-size: 2rem; color: var(--text-white); font-weight: 700; margin-bottom: 20px;">₹55,000 <span style="font-size: 0.9rem; color: var(--text-muted); font-weight: 400;">/ Month</span></div>
                    <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 25px;">
                        <a href="contact.html" class="btn btn-primary"><i class="fas fa-paper-plane"></i> Request Quote</a>
                        <a href="https://wa.me/919560393262" target="_blank" class="btn btn-wa"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
            </div>
            
            <div style="text-align: center; margin-top: 40px; color: var(--text-muted); font-size: 0.9rem; font-style: italic;">
                * Prices are indicative only and may vary depending on location, deployment, shift timing, and client requirements.
            </div>
        </div>
    </section>

"""

new_content = header + body + footer
with open('security-personnel.html', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Created security-personnel.html successfully.")
