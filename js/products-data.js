/* ==========================================================================
   EXPOSHERA SECURITY & PPE - PRODUCTS DATABASE DATA SET (UPDATED)
   ========================================================================== */

const PRODUCTS_DATA = [];

// 1. Generate 42 Reflective Safety Jacket Models (RN-01 to RN-42)
for (let i = 1; i <= 42; i++) {
    const code = `RN-${i.toString().padStart(2, '0')}`;
    
    // Default values
    let tapeSize = '2 Inch';
    let fabricType = 'Net & Fabric';
    let gsmVal = '40 GSM';
    let moq = '500 Pcs';
    let name = `Reflective Safety Jacket ${code}`;
    let imgName = `Reflective Safety Jacket ${code}.jpg`;

    // Map exact details from WhatsApp catalog pages
    if (i === 5) {
        tapeSize = '1.75 Inch'; fabricType = 'Net & Fabric'; gsmVal = '40 GSM'; moq = '500 Pcs';
    } else if (i === 6) {
        tapeSize = '2 Inch'; fabricType = 'Net & Fabric'; gsmVal = '40 GSM'; moq = '500 Pcs';
    } else if (i === 7) {
        tapeSize = '0.75 Inch'; fabricType = 'Net & Fabric'; gsmVal = '90 GSM'; moq = '500 Pcs';
    } else if (i === 8) {
        tapeSize = '1 Inch'; fabricType = 'Net & Fabric'; gsmVal = '90 GSM'; moq = '500 Pcs';
    } else if (i === 9) {
        tapeSize = '1.75 Inch'; fabricType = 'Net & Fabric'; gsmVal = '90 GSM'; moq = '500 Pcs';
    } else if (i === 10) {
        tapeSize = '2 Inch'; fabricType = 'Net & Fabric'; gsmVal = '90 GSM'; moq = '500 Pcs';
    } else if (i === 11) {
        tapeSize = '1.75 Inch'; fabricType = 'Net & Fabric'; gsmVal = '90 GSM'; moq = '500 Pcs';
    } else if (i === 12) {
        tapeSize = '2 Inch'; fabricType = 'Net & Fabric'; gsmVal = '90 GSM'; moq = '500 Pcs';
    } else if (i === 13) {
        tapeSize = '0.75 Inch'; fabricType = 'Football Net & Fabric'; gsmVal = '120 GSM'; moq = '500 Pcs';
    } else if (i === 14) {
        tapeSize = '1 Inch'; fabricType = 'Football Net & Fabric'; gsmVal = '120 GSM'; moq = '500 Pcs';
    } else if (i === 15) {
        tapeSize = '1.75 Inch'; fabricType = 'Football Net & Fabric'; gsmVal = '120 GSM'; moq = '500 Pcs';
    } else if (i === 16) {
        tapeSize = '2 Inch'; fabricType = 'Football Net & Fabric'; gsmVal = '60 GSM'; moq = '500 Pcs';
    } else if (i === 17) {
        tapeSize = '1.75 Inch'; fabricType = 'Football Net & Fabric'; gsmVal = '120 GSM'; moq = '500 Pcs';
    } else if (i === 18) {
        tapeSize = '2 Inch'; fabricType = 'Football Net & Fabric'; gsmVal = '120 GSM'; moq = '500 Pcs';
    } else if (i === 19) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping'; gsmVal = '40 GSM'; moq = '500 Pcs';
    } else if (i === 20) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping'; gsmVal = '40 GSM'; moq = '500 Pcs';
    } else if (i === 21) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping'; gsmVal = '40 GSM'; moq = '500 Pcs';
    } else if (i === 22) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping (Velcro / Green)'; gsmVal = '90 GSM'; moq = '500 Pcs'; name = `Reflective Safety Jacket ${code} (Green)`;
    } else if (i === 23) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping'; gsmVal = '90 GSM'; moq = '500 Pcs';
    } else if (i === 24) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping'; gsmVal = '90 GSM'; moq = '500 Pcs';
    } else if (i === 25) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping'; gsmVal = '120 GSM'; moq = '500 Pcs';
    } else if (i === 26) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping'; gsmVal = '120 GSM'; moq = '500 Pcs';
    } else if (i === 27) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping'; gsmVal = '120 GSM'; moq = '500 Pcs';
    } else if (i === 28) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Chain | Color Piping (Cotton)'; gsmVal = '180 GSM'; moq = '200 Pcs'; name = `Reflective Cotton Safety Jacket ${code}`;
    } else if (i === 29) {
        tapeSize = '2 Inch Grey Tape & Border'; fabricType = 'Chain | 2 Pockets'; gsmVal = '120 GSM'; moq = '500 Pcs';
    } else if (i === 30) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Net & Fabric'; gsmVal = '120 GSM'; moq = '200 Pcs'; imgName = `Reflective Safety Jacket ${code}.webp`;
    } else if (i === 31) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Football Net & Fabric'; gsmVal = '150 GSM'; moq = '200 Pcs'; imgName = `Reflective Safety Jacket ${code}.webp`;
    } else if (i === 32) {
        tapeSize = '2 Inch Grey Tape & Border'; fabricType = 'Star Net'; gsmVal = '120 GSM'; moq = '200 Pcs'; imgName = `Reflective Safety Jacket ${code}.webp`;
    } else if (i === 33) {
        tapeSize = '1.75 Inch White Tape'; fabricType = 'Cross Belt Net & Fabric'; gsmVal = '40 GSM'; moq = '300 Pcs'; name = `Reflective Cross Belt ${code}`;
    } else if (i === 34) {
        tapeSize = '2 Inch White Tape'; fabricType = 'Cross Belt Net & Fabric'; gsmVal = '40 GSM'; moq = '300 Pcs'; name = `Reflective Cross Belt ${code}`;
    } else if (i === 35) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Cross Belt Net & Fabric'; gsmVal = '40 GSM'; moq = '300 Pcs'; name = `Reflective Cross Belt ${code}`;
    } else if (i === 36) {
        tapeSize = '2 Inch White Tape'; fabricType = 'Cross Belt (L&T Style) Football Net'; gsmVal = '60 GSM'; moq = '300 Pcs'; name = `Reflective Cross Belt ${code} (L&T)`;
    } else if (i === 37) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Cross Belt (L&T Style) White-Black'; gsmVal = '60 GSM'; moq = '300 Pcs'; name = `Reflective Cross Belt ${code} (L&T)`;
    } else if (i === 38) {
        tapeSize = '2 Inch White Tape'; fabricType = 'Cross Belt (L&T Style) Net & Fabric'; gsmVal = '90 GSM'; moq = '300 Pcs'; name = `Reflective Cross Belt ${code} (L&T)`;
    } else if (i === 39) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Cross Belt (L&T Style) Net & Fabric'; gsmVal = '90 GSM'; moq = '300 Pcs'; name = `Reflective Cross Belt ${code} (L&T)`;
    } else if (i === 40) {
        tapeSize = '2 Inch White Tape'; fabricType = 'Cross Belt (L&T Style) Net & Fabric'; gsmVal = '120 GSM'; moq = '300 Pcs'; name = `Reflective Cross Belt ${code} (L&T)`;
    } else if (i === 41) {
        tapeSize = '2 Inch Grey Tape'; fabricType = 'Cross Belt (L&T Style) Net & Fabric'; gsmVal = '120 GSM'; moq = '300 Pcs'; name = `Reflective Cross Belt ${code} (L&T)`;
    } else if (i === 42) {
        tapeSize = '2 Inch'; fabricType = 'Cross Jacket Fabric'; gsmVal = '40-120 GSM'; moq = '300 Pcs'; name = `Reflective Cross Jacket ${code}`; imgName = `Rn42.webp`;
    }

    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: name,
        category: 'jackets',
        image: 'images/products/' + imgName,
        description: `Premium grade high-visibility reflective safety apparel designed for operations in high-risk zones. Features retroreflective silver stripes and heavy duty closures. Fully compliant with industrial safety standards.`,
        features: [
            'High-Intensity Retroreflective Silver Stripes',
            'Ultra-breathable quick-dry fabric core',
            'Strong front zipper / heavy duty Velcro closures',
            'Reinforced pen pockets, utility D-rings, and ID holders'
        ],
        specs: {
            'Fabric': fabricType,
            'Reflective Tape': tapeSize,
            'Weight/GSM': gsmVal,
            'Standard': 'EN ISO 20471 Class 2 Certified',
            'MOQ': moq,
            'Durability': 'Up to 50 Industrial Wash Cycles'
        },
        apps: [
            'Construction Site Supervisors',
            'Municipal Road Repair Crews',
            'Traffic Control and Logistics Marshals',
            'Airfield Ground and Loading Personnel'
        ],
        colors: i % 2 === 0 ? ['Hi-Vis Orange', 'Neon Green'] : ['Hi-Vis Lime', 'Royal Blue / Neon Dual-Tone'],
        moq: moq
    });
}

// 2. Add Safety Gloves (13 Products)
const gloveTypes = [
    { name: 'Dotted Gloves (45 GSM)', file: 'Dotted Gloves.jpg', colors: ['Blue'], gsm: '45 gsm', moq: '600 Pairs', desc: 'Premium dotted cotton gloves with anti-slip PVC dots on palms.' },
    { name: 'Double Side Dotted Gloves (60 GSM)', file: 'Dotted Gloves60gsm.jpg', colors: ['Blue-White'], gsm: '60 gsm', moq: '600 Pairs', desc: 'Double-sided PVC dotted cotton gloves for double the durability.' },
    { name: 'Industrial Gloves', file: 'fulldip orange gloves.jpg', colors: ['Orange'], gsm: 'Heavy Duty', moq: '500 Pairs', desc: 'Heavy-duty protection gloves for robust mechanical and tool handling.' },
    { name: 'Chemical Gloves', file: 'red black gloves.jpg', colors: ['Red-Black'], gsm: 'Chemical Resistant', moq: '500 Pairs', desc: 'Acid and solvent resistant neoprene/nitrile blended safety gloves.' },
    { name: 'Tiger Gloves', file: 'orange white gloves.jpg', colors: ['Orange-White'], gsm: 'Textured Rubber', moq: '500 Pairs', desc: 'Extremely durable cut-resistant gloves with high-grip palm coatings.' },
    { name: 'Leather Gloves', file: 'lather hand gloves.jpg', colors: ['Golden Yellow'], gsm: 'Split Cowhide Leather', moq: '500 Pairs', desc: 'Premium split cowhide leather work gloves protecting against abrasions.' },
    { name: 'Chrome Leather Gloves', file: 'lather hand gloves.jpg', colors: ['Grey'], gsm: 'Chrome Leather', moq: '500 Pairs', desc: 'Chrome-tanned heavy duty split leather gloves for extreme friction resistance.' },
    { name: 'Cotton Dotted Gloves (50 GSM)', file: 'Dotted Gloves 50gsm.jpg', colors: ['Blue'], gsm: '50 gsm', moq: '600 Pairs', desc: 'Lightweight, breathable cotton canvas gloves for basic skin protection.' },
    { name: 'Nitrile Gloves', file: 'red black gloves.jpg', colors: ['Safety Red-Black'], gsm: 'Nitrile Blend', moq: '500 Pairs', desc: 'Disposable medical and chemical-grade latex-free nitrile examination gloves.' },
    { name: 'PVC Gloves', file: 'fulldip orange gloves.jpg', colors: ['Full Dip Orange'], gsm: 'Nitrile Full Dip', moq: '500 Pairs', desc: 'Fully liquid-proof red PVC coated gloves with cotton jersey liner.' },
    { name: 'Rubber Gloves', file: 'orange white gloves.jpg', colors: ['Orange-White'], gsm: 'Natural Latex', moq: '500 Pairs', desc: 'Premium natural rubber latex gloves with anti-slip texturing.' },
    { name: 'Heat Resistant Gloves', file: 'jeans gloves.jpg', colors: ['Jeans Blue'], gsm: 'Denim & Aramid', moq: '500 Pairs', desc: 'Aramid fiber and fiberglass lined gloves rated for high thermal exposures.' },
    { name: 'Welding Gloves', file: 'lather hand gloves.jpg', colors: ['Golden Yellow'], gsm: '14-inch Cowhide', moq: '500 Pairs', desc: '14-inch heavy-duty split cowhide leather welding gauntlets with heat insulation.' }
];

gloveTypes.forEach((glv, idx) => {
    const code = `GLV-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: glv.name,
        category: 'gloves',
        image: 'images/products/' + glv.file,
        description: `${glv.desc} Offers consistent comfort, high breathability, and reliable palm-side barrier shielding matching industrial specifications.`,
        features: [
            'Ergonomically contoured fit to reduce muscle fatigue',
            'Superior abrasion, puncture, and tear resistance',
            'Textured surface pattern for firm wet/dry gripping',
            'Standard elastic cuffs to seal out dust and debris'
        ],
        specs: {
            'Material': glv.gsm,
            'Standards Compliance': 'EN 388 mechanical risk and EN 420 standards compliant',
            'MOQ': glv.moq,
            'Size Range': 'Medium / Large / Extra Large',
            'Weight/GSM': glv.gsm
        },
        apps: [
            'Warehouse Handling',
            'Metal Processing and Rigging',
            'Chemical and Solvent Handling',
            'General Assembly Work'
        ],
        colors: glv.colors,
        moq: glv.moq
    });
});

// 3. Add Safety Shoes (12 Products)
const shoeTypes = [
    { name: 'PVC Rexin Shoes', file: 'PVC Rexin Shoes.webp', mat: 'PVC Rexin Upper', size: '6, 7, 8, 9, 10', moq: '24 Pairs' },
    { name: 'PVC High Ankle Shoes', file: 'PVC High Ankle Shoes.jpg', mat: 'PVC High Ankle Support', size: '6, 7, 8, 9, 10', moq: '24 Pairs' },
    { name: 'Leather PVC Shoes', file: 'Leather PVC Shoes.jpg', mat: 'Top Grain Buff Leather', size: '6, 7, 8, 9, 10', moq: '24 Pairs' },
    { name: 'Leather PU Shoes', file: 'Leather PU Shoes.jpg', mat: 'Premium Split Leather / PU Sole', size: '6, 7, 8, 9, 10', moq: '24 Pairs' },
    { name: 'Ladies Safety Shoes', file: 'Ladies Safety Shoes.jpg', mat: 'Ladies Belly Style Upper', size: '5, 6, 7', moq: '24 Pairs' },
    { name: 'PVC Gumboots', file: 'PVC Gumboots.jpg', mat: 'Flockline PVC (11-Inch)', size: '8, 9, 10', moq: '30 Pairs' },
    { name: 'Rubber Gumboots', file: 'Rubber Gumboots.jpg', mat: 'Natural Rubber (11-Inch)', size: '7, 8, 9, 10', moq: '30 Pairs' },
    { name: 'Industrial Safety Boots', file: 'Leather PU Shoes.jpg', mat: 'Heavy Duty Leather Upper', size: '6, 7, 8, 9, 10', moq: '24 Pairs' },
    { name: 'Steel Toe Safety Shoes', file: 'Leather PVC Shoes.jpg', mat: 'Steel-Toe Buff Leather', size: '6, 7, 8, 9, 10', moq: '24 Pairs' },
    { name: 'Anti Slip Shoes', file: 'PVC Rexin Shoes.webp', mat: 'SRC Slip-Resistant Soles', size: '6, 7, 8, 9, 10', moq: '24 Pairs' },
    { name: 'Oil Resistant Shoes', file: 'Leather PU Shoes.jpg', mat: 'Hydrocarbon-Resistant Sole', size: '6, 7, 8, 9, 10', moq: '24 Pairs' },
    { name: 'Electrical Safety Shoes', file: 'PVC High Ankle Shoes.jpg', mat: 'Electrical Shockproof Insulated Upper', size: '6, 7, 8, 9, 10', moq: '24 Pairs' }
];

shoeTypes.forEach((sh, idx) => {
    const code = `SHS-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: sh.name,
        category: 'shoes',
        image: 'images/products/' + sh.file,
        description: `Industrial protective footwear built to withstand severe floor friction, heavy object drops, and structural punctures. Features sweat-absorbing linings and heel shock absorption cushioning.`,
        features: [
            'Hardened 200 Joules steel toe cap impact shields',
            'Puncture resistant steel plate mid-soles (1100N protection)',
            'Oil-resistant, acid-resistant, and anti-static outsoles',
            'Cushioned dual-density insoles for standing comfort'
        ],
        specs: {
            'Upper Material': sh.mat,
            'Sole Injected': 'Vulcanized Slip-Resistant Rubber/PVC/PU',
            'Standards': 'IS 15298 and EN ISO 20345 Compliant',
            'MOQ': sh.moq,
            'Size Range': sh.size
        },
        apps: [
            'Structural Engineering and Construction Sites',
            'Automotive and Assembly Workshops',
            'Oil Rig Inspections and Chemical Facilities',
            'Logistics Hubs and Cargo Loading Docks'
        ],
        colors: ['Matte Black', 'Dark Brown'],
        moq: sh.moq
    });
});

// 4. Add Safety Helmets (8 Products)
const helmetTypes = [
    { name: 'Labour Helmet', file: 'Safety-helmet-SH-01.jpg', model: 'SH-01 Labour', mat: 'High-Density Polyethylene (HDPE)', moq: '100 Pcs' },
    { name: 'Ratchet Helmet', file: 'Safety-helmet-SH-02.jpg', model: 'SH-02 Rachit', mat: 'Impact ABS Polymer (Ratchet Dial)', moq: '50 Pcs' },
    { name: 'Torch Helmet', file: 'Safety-helmet-SH-03 torch.webp', model: 'SH-03 Torch', mat: 'High-Density Polyethylene (HDPE) with Torch mount', moq: '100 Pcs' },
    { name: 'Industrial Helmet', file: 'Safety-helmet-SH-01.jpg', model: 'SH-01 Industrial', mat: 'High-Density Polyethylene (HDPE)', moq: '100 Pcs' },
    { name: 'Construction Helmet', file: 'Safety-helmet-SH-02.jpg', model: 'SH-02 Construction', mat: 'Impact ABS Polymer (Ratchet Dial)', moq: '50 Pcs' },
    { name: 'Electrical Helmet', file: 'Safety-helmet-SH-01.jpg', model: 'SH-01 Electrical', mat: 'Unventilated Volt-Protective PVC', moq: '100 Pcs' },
    { name: 'Mining Helmet', file: 'Safety-helmet-SH-03 torch.webp', model: 'SH-03 Mining', mat: 'HDPE with Cap Lamp Bracket', moq: '100 Pcs' },
    { name: 'Ventilated Helmet', file: 'Safety-helmet-SH-02.jpg', model: 'SH-02 Ventilated', mat: 'ABS Polymer with Slide Air Vents', moq: '50 Pcs' }
];

helmetTypes.forEach((hlm, idx) => {
    const code = `HLM-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: hlm.name,
        category: 'helmets',
        image: 'images/products/' + hlm.file,
        description: `Industrial head protection shell engineered for maximum lateral crush resistance and vertical drop protection in tough operational zones. Includes sweatbands and adjustable chin straps.`,
        features: [
            'Heavy shell molded from high-impact ABS / HDPE material',
            'Shock absorbing inner crown structure',
            'Universal side accessory slots for ear defenders and visors',
            'Fully adjustable chin-strap with quick-release locks'
        ],
        specs: {
            'Shell Material': hlm.mat,
            'Model Name': hlm.model,
            'Suspension System': '6-Point textile suspension with sweatband pads',
            'Certification': 'IS 2925 and EN 397 Standard Certified',
            'MOQ': hlm.moq
        },
        apps: [
            'Commercial Building Construction Sites',
            'Heavy Metal Fabrication Yards',
            'Underground Mining and Tunnel Excavations',
            'Electrical Line and Transformer Grid Maintenance'
        ],
        colors: ['Signal Yellow', 'Classic White', 'Safety Orange', 'Vibrant Blue'],
        moq: hlm.moq
    });
});

// 5. Add Fall Protection (7 Products)
const fallTypes = [
    { name: 'Safety Harness', file: 'Safety Harness elastic 15mm.jpg', specs: { 'Type': 'Class P Fall Protection', 'Attachment': 'DORSAL | LATERAL', 'WLL': '140 KG', 'Features': 'Corrosion-resistant metal fittings, Retro-reflective thread', 'MOQ': '25 Pcs' } },
    { name: 'Full Body Harness', file: 'Safety Harness elastic 15mm.jpg', specs: { 'Type': 'Class P Work Positioning', 'Attachment': 'Multi-Point Anchoring', 'WLL': '140 KG', 'Features': 'CED-coated metal components, Breathable padding', 'MOQ': '25 Pcs' } },
    { name: 'Double Lanyard', file: 'FAL-03.png', specs: { 'Type': 'Shock-Absorbing Webbing Lanyard', 'Breaking Strength': '>22kN', 'MOQ': '50 Pcs' } },
    { name: 'Shock Absorbing Lanyard', file: 'FAL-04.png', specs: { 'Type': 'Polyester Webbing Lanyard', 'Absorber Pack': 'Tear-Web Energy Absorber', 'MOQ': '50 Pcs' } },
    { name: 'Elastic Belt', file: 'FAL-05.png', specs: { 'Type': 'Lumbar Support Positioning Belt', 'MOQ': '50 Pcs' } },
    { name: 'Life Safety Jacket', file: 'Life Safety Jacket.jpg', specs: { 'Type': 'Marine Life Safety Vest', 'Material': 'Floating Foam / Nylon', 'MOQ': '25 Pcs' } },
    { name: 'Cross Safety Jacket', file: 'FAL-07.png', specs: { 'Type': 'Cross-Back Safety Webbing Vest', 'MOQ': '50 Pcs' } }
];

fallTypes.forEach((fl, idx) => {
    const code = `FAL-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: fl.name,
        category: 'fall',
        image: 'images/products/' + fl.file,
        description: `High-tensile fall arrest equipment designed to offer reliable protection and suspension support for operations at heights. Built using zinc-plated steel alloy hardware.`,
        features: [
            'Made from 44mm high-tensile polyester safety webbing',
            'Dorsal fall-arrest D-rings and chest anchoring loops',
            'Fully adjustable shoulder, chest, and thigh straps',
            'Integrated fall indicator threads for inspection audits'
        ],
        specs: Object.assign({
            'Webbing Material': 'High-Tensile Virgin Polyester',
            'Metal Componentry': 'Alloy Steel Zinc-Plated buckles',
            'Standards': 'IS 3521 and EN 361 Fall Arrest Standards Compliant'
        }, fl.specs),
        apps: [
            'High-rise Building Window Cleaners',
            'Scaffolding Erector Crews',
            'Telecommunication Tower Maintenance Technicians',
            'Bridge Riggers and Overhead Crane Operators'
        ],
        colors: ['Vibrant Green / Black', 'Safety Orange'],
        moq: fl.specs.MOQ || '25 Pcs'
    });
});

// 6. Add Road Safety Products (14 Products)
const roadTypes = [
    { name: 'Traffic Cone', file: 'ROD-01.png', mat: 'Fluorescent Orange PVC / Safety Cone' },
    { name: 'Road Barrier', file: 'Road Barrier.jpg', mat: 'UV-Stabilized Polyethylene Dividers' },
    { name: 'PVC Chain', file: 'PVC Chain.jpg', mat: 'Lightweight Highly Visible Plastic' },
    { name: 'Road Stud', file: 'Road Stud.jpg', mat: 'Heavy Duty Aluminum Cat-Eyes' },
    { name: 'Speed Breaker', file: 'Speed Breaker.jpg', mat: 'Modular Heavy-Duty Vulcanized Rubber' },
    { name: 'Convex Mirror', file: 'Convex Mirror.jpg', mat: 'Polycarbonate Convex Lens / Blind Spot' },
    { name: 'Q Manager', file: 'Q Manager.webp', mat: 'Stainless Steel Retractable Belt Stand' },
    { name: 'Spring Post', file: 'Spring Post.jpg', mat: 'Highly Resilient PU Post' },
    { name: 'Floor Marking Tape', file: 'Floor Marking Tape.webp', mat: 'Self-Adhesive Heavy Duty Vinyl' },
    { name: 'Retro Reflective Tape', file: 'Retro Reflective Tape.jpg', mat: 'Microprismatic Reflective Film' },
    { name: 'Caution Tape', file: 'Caution Tape.jpg', mat: 'Printed Non-Adhesive Polyethylene' },
    { name: 'Solar Blinker', file: 'Solar Blinker.jpg', mat: 'LED Solar Warning Blinker' },
    { name: 'Warning Light', file: 'Solar Blinker.jpg', mat: 'LED Solar Flashing Beacon' },
    { name: 'Wet Floor Sign', file: 'Caution Tape.jpg', mat: 'Highly Visible Yellow A-Frame Sign' }
];

roadTypes.forEach((rd, idx) => {
    const code = `ROD-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: rd.name,
        category: 'road',
        image: 'images/products/' + rd.file,
        description: `Heavy-duty road safety delineator designed to regulate traffic control, restrict restricted zones, and warn pedestrians in industrial, commercial, and roadway sites.`,
        features: [
            'Fluorescent pigments and reflective bands for maximum visibility',
            'UV-stabilized weather-resistant material blends',
            'Heavy stable base anchors to resist strong wind currents',
            'Impact resilience to absorb light vehicular crashes'
        ],
        specs: {
            'Material': rd.mat,
            'Reflector Bands': 'High-intensity microprismatic reflective sheets',
            'Weather Proofing': 'Tested under extreme heat and sub-zero temperatures',
            'MOQ': '50 Pcs'
        },
        apps: [
            'Municipal Road Works and Highway Diversions',
            'Industrial Factory Floor Layout Delineations',
            'Corporate Office Parking Lot Operations',
            'Commercial Plaza Entrance Lane Controls'
        ],
        colors: ['Fluorescent Orange', 'Yellow / Black Delineations', 'Caution Red'],
        moq: '50 Pcs'
    });
});

// 7. Add Welding Safety Equipment (12 Products)
const weldTypes = [
    { name: 'Welding Helmet', file: 'Welding Helmet.jpg', mat: 'Auto-Darkening Thermoplastic' },
    { name: 'Face Shield', file: 'Face Shield.jpg', mat: 'Polycarbonate Grinding Splash Shield' },
    { name: 'Leather Apron', file: 'PVC Apron.jpg', mat: 'Genuine Split Cowhide Leather' },
    { name: 'PVC Apron', file: 'PVC Apron.jpg', mat: 'Fluid & Acid Resistant PVC' },
    { name: 'Hand Sleeve', file: 'Hand Sleeve.jpg', mat: 'Split Cowhide Arm Protectors' },
    { name: 'Leg Guard', file: 'Leg Guard.jpg', mat: 'Leather Welding Spats Leg/Ankle Guard' },
    { name: 'Shoulder Pad', file: 'Shoulder Pad.jpg', mat: 'Genuine Cushion Leather Pad' },
    { name: 'Welding Glass', file: 'Welding Glass.webp', mat: 'Dark Green Shade Replacement Lens' },
    { name: 'Welding Cable', file: 'Welding Cable.jpg', mat: 'Flexible Rubber-Jacketed Copper Core' },
    { name: 'Electrode Holder', file: 'Electrode Holder.jpg', mat: 'Heavy Duty Insulated Brass Clamps' },
    { name: 'Gas Hose Pipe', file: 'Gas Hose Pipe.jpg', mat: 'High Pressure Dual Gas Rubber Hose' },
    { name: 'Fiber Hand Screen', file: 'Fiber Hand Screen.jpg', mat: 'Hand-Held Vulcanized Fiber Shield' }
];

weldTypes.forEach((wd, idx) => {
    const code = `WLD-${(idx + 1).toString().padStart(2, '0')}`;
    PRODUCTS_DATA.push({
        id: code,
        code: code,
        name: wd.name,
        category: 'welding',
        image: 'images/products/' + wd.file,
        description: `Flame-retardant welding safety protective equipment engineered to guard personnel from intense spark spatter, UV/IR arc radiation, high-voltage currents, and heat scaling.`,
        features: [
            'Made from premium flame-retardant split cowhide leather / thermoplastic',
            'Reinforced Kevlar stitching for leather seams to prevent tears',
            'Fully adjustable suspenders and hook-and-loop straps',
            'Thermal insulation layering to shield skin from heat transfer'
        ],
        specs: {
            'Shield Material': wd.mat,
            'Stitching Threads': 'Premium 3-ply Kevlar flame-resistant stitching',
            'Certifications': 'EN 175 and EN 11611 welding safety compliant',
            'MOQ': '100 Pcs'
        },
        apps: [
            'Heavy Metal Fabrication Workshops',
            'Automotive Chassis Welding Lines',
            'Structural Bridge Girder Joints',
            'General Maintenance Piping Operations'
        ],
        colors: ['Amber / Charcoal Gray', 'Golden Yellow Cowhide'],
        moq: '100 Pcs'
    });
});

// 8. Add BOPP Bags (5 Products)
const boppBags = [
    { code: 'BOPP-01', size: '12 × 16', micron: '20 Micron', file: 'bopp_bags/WhatsApp Image 2026-06-25 at 11.04.46.jpeg' },
    { code: 'BOPP-02', size: '9 × 16', micron: '18 Micron', file: 'bopp_bags/WhatsApp Image 2026-06-25 at 11.04.48 (1).jpeg' },
    { code: 'BOPP-03', size: '10 × 14', micron: '18 Micron', file: 'bopp_bags/WhatsApp Image 2026-06-25 at 11.04.48 (2).jpeg' },
    { code: 'BOPP-04', size: '12 × 16', micron: '20 Micron', file: 'bopp_bags/WhatsApp Image 2026-06-25 at 11.04.48.jpeg' },
    { code: 'BOPP-05', size: '14 × 18', micron: '20 Micron', file: 'bopp_bags/WhatsApp Image 2026-06-25 at 11.04.49 (1).jpeg' }
];

boppBags.forEach((bag) => {
    PRODUCTS_DATA.push({
        id: bag.code,
        code: bag.code,
        name: `BOPP Bag (${bag.size})`,
        category: 'bopp',
        image: 'images/products/' + bag.file,
        description: `Premium-grade Biaxially Oriented Polypropylene (BOPP) woven bag. Features high-definition multi-color printing, superior moisture barrier protection, and high tensile strength. Excellent for bulk packaging of rice, flour, animal feed, and industrial materials.`,
        features: [
            'High-gloss print finish with premium aesthetic appeal',
            'Excellent barrier against moisture, humidity, and dust',
            'Reinforced stitching for heavy-duty payload stability',
            'Anti-slip properties for safe vertical stacking and logistics'
        ],
        specs: {
            'Material': 'Biaxially Oriented Polypropylene (BOPP) & Woven PP',
            'Size (Inches)': bag.size,
            'Thickness': bag.micron,
            'Tensile Strength': 'High Industrial Grade',
            'MOQ': '10,000 Pcs',
            'Closing/Sealing': 'Single/Double Folded and Bottom Stitched'
        },
        apps: [
            'Agricultural Grains & Seed Packaging',
            'Animal Feed & Pet Food Bulk Bags',
            'Flour, Sugar, and Salt Milling Industries',
            'Chemicals, Minerals, and Construction Powders'
        ],
        colors: ['Multi-color Printed', 'Custom Brand Graphics'],
        moq: '10,000 Pcs'
    });
});

// 9. Add CCTV/Security Cameras (4 Products)
const cctvCameras = [
    {
        id: 'CAM-01',
        code: 'CAM-01',
        name: 'Dome HD Security Camera',
        category: 'cctv',
        image: 'images/WhatsApp Image 2026-07-02 at 21.55.20.jpeg',
        description: 'High-definition dome security camera designed for indoor and outdoor surveillance. Features night vision, wide-angle lens, and vandal-resistant housing.',
        features: [
            '1080p Full HD Video Recording',
            'Smart IR Night Vision up to 30 meters',
            'IP67 Weatherproof and Dustproof Rating',
            'Wide 105° Horizontal Viewing Angle'
        ],
        specs: {
            'Resolution': '2MP / 4MP Full HD Options',
            'Sensor Type': '1/2.8" Progressive Scan CMOS',
            'Lens focal length': '2.8mm / 3.6mm Fixed Lens',
            'Housing': 'Metal Vandal-Proof Dome (IK10)',
            'MOQ': '10 Pcs',
            'Connectivity': 'PoE RJ45 or Analog BNC'
        },
        apps: [
            'Office Passageways and Reception Areas',
            'Commercial Building Entrance Halls',
            'Retail Stores and Bank Branches',
            'Residential Hallways and Lobbies'
        ],
        colors: ['Pearl White', 'Matte Black'],
        moq: '10 Pcs'
    },
    {
        id: 'CAM-02',
        code: 'CAM-02',
        name: 'Bullet Outdoor Security Camera',
        category: 'cctv',
        image: 'images/WhatsApp Image 2026-07-02 at 21.55.20 (1).jpeg',
        description: 'Long-range weatherproof bullet security camera. Specially designed for perimeter surveillance, parking yards, and outdoor monitoring with high-intensity infrared LEDs.',
        features: [
            'Advanced Motion Detection & Smart Alerts',
            'Long-Range Night Vision up to 50 meters',
            'Sunshield integrated weatherguard hood',
            'Supports H.265+ high efficiency compression'
        ],
        specs: {
            'Resolution': '4MP / 8MP 4K Ultra HD',
            'Sensor Type': '1/1.8" Low-Light CMOS Sensor',
            'Lens focal length': '4.0mm / 6.0mm Narrow/Deep Field',
            'Housing': 'IP67 Heavy-Duty Aluminum Bullet',
            'MOQ': '10 Pcs',
            'Connectivity': 'PoE / 12V DC power jack'
        },
        apps: [
            'Industrial Factory Perimeters',
            'Warehouses Loading Bays and Cargo Docks',
            'Parking Lots and Driveways',
            'Corporate Boundary Walls'
        ],
        colors: ['White / Black accents'],
        moq: '10 Pcs'
    },
    {
        id: 'CAM-03',
        code: 'CAM-03',
        name: 'PTZ Speed Dome Camera',
        category: 'cctv',
        image: 'images/WhatsApp Image 2026-07-02 at 21.55.21.jpeg',
        description: 'Professional high-speed Pan-Tilt-Zoom (PTZ) camera with powerful optical zoom capabilities. Perfect for large open areas requiring active tracking and detail capture.',
        features: [
            '360° Endless Pan and -15° to 90° Tilt',
            'Powerful 25x Optical Zoom, 16x Digital Zoom',
            'Auto-tracking of moving vehicles and humans',
            'Ultra low-light performance (DarkFighter technology)'
        ],
        specs: {
            'Resolution': '4MP Quad HD',
            'Optical Zoom': '25x Zoom Lens (4.8mm to 120mm)',
            'IR Range': 'Up to 100 meters smart IR',
            'Frame Rate': '60fps high speed recording',
            'MOQ': '5 Pcs',
            'Connectivity': 'PoE+ (802.3at) / 24VAC'
        },
        apps: [
            'City Center Surveillance',
            'Large Industrial Sites and Power Plants',
            'Public Parks and Construction Site Yards',
            'Sports Arenas and Stadium Fields'
        ],
        colors: ['Signal White'],
        moq: '5 Pcs'
    },
    {
        id: 'CAM-04',
        code: 'CAM-04',
        name: 'Wireless IP Smart Camera',
        category: 'cctv',
        image: 'images/WhatsApp Image 2026-07-02 at 21.55.22.jpeg',
        description: 'Smart Wi-Fi security camera for quick deployment. Features two-way audio talkback, localized SD card storage, and cloud integration with mobile application remote control.',
        features: [
            'Dual-Band Wi-Fi (2.4GHz / 5GHz) connectivity',
            'Two-Way Audio with built-in mic and speaker',
            'PIR Motion detection with human heat sensing',
            'Cloud Storage and MicroSD Card support (up to 256GB)'
        ],
        specs: {
            'Resolution': '3MP Super HD',
            'Sensor Type': '1/3" Progressive CMOS Sensor',
            'Audio': 'Intercom two-way talkback enabled',
            'Storage Support': 'MicroSD card slot + Cloud subscription',
            'MOQ': '15 Pcs',
            'Power Source': '5V DC Micro-USB / Rechargeable Battery'
        },
        apps: [
            'Small Office Cabins and Server Rooms',
            'Retail Cash Counters and Safes',
            'Home Entrance and Nursery Rooms',
            'Temporary Event Booths and Kiosks'
        ],
        colors: ['Arctic White', 'Deep Black'],
        moq: '15 Pcs'
    }
];

cctvCameras.forEach((cam) => {
    PRODUCTS_DATA.push(cam);
});

