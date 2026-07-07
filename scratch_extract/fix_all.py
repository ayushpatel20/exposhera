import os
import glob
import cv2
import numpy as np

# 1. Fix Phone Numbers
html_files = glob.glob(r"C:\Users\ayush patel\Desktop\Exposhera\*.html")

target = '<a href="tel:9560393262">+91 95603 93262</a> / <a href="tel:9560393262">+91 95603 93262</a><br><a href="tel:9560393262">+91 96674 16082</a><br>'
replacement = '<a href="tel:9560393262">+91 95603 93262</a> / <a href="tel:9667416082">+91 96674 16082</a><br>'

for file in html_files:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()
    
    if target in content:
        content = content.replace(target, replacement)
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Fixed numbers in {os.path.basename(file)}")

# 2. Crop Screenshots
img_dir = r"C:\Users\ayush patel\Desktop\Exposhera\images\security_personnels"
files = [f for f in os.listdir(img_dir) if f.endswith(('.jpeg', '.jpg', '.png'))]

for f in files:
    path = os.path.join(img_dir, f)
    img = cv2.imread(path)
    if img is None:
        continue
    
    # Check if there are solid horizontal bars at top/bottom
    # A simple way to handle UI bars is to crop any row that has very low variance
    # Or just use the edge detection bounding box
    
    gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
    
    # We want to ignore pure black/white or near-solid colors at top and bottom.
    # Calculate the variance of each row
    row_vars = np.var(gray, axis=1)
    
    # Threshold for a "solid" row (like a black bar or a white bar)
    # A solid bar has very low variance.
    # But UI elements might increase variance.
    # Let's crop from top until we see significant variance, and same from bottom.
    
    threshold = 50.0  # minimal variance
    
    y1 = 0
    while y1 < len(row_vars) and row_vars[y1] < threshold:
        y1 += 1
        
    y2 = len(row_vars) - 1
    while y2 > y1 and row_vars[y2] < threshold:
        y2 -= 1
        
    # If we cropped something significant (more than 20 pixels)
    if y1 > 20 or (len(row_vars) - 1 - y2) > 20:
        # Crop the image
        # Also let's do a little bit of margin so we don't cut too tight
        cropped = img[y1:y2+1, :]
        cv2.imwrite(path, cropped)
        print(f"Cropped {f}: top={y1}, bottom={y2}")

print("Fixes applied.")
