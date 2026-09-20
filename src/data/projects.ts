import { Project } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'canopy-pavilion-civic-landscape',
    slug: 'canopy-pavilion-civic-landscape',
    projectNumber: '01',
    title: 'Canopy Pavilion & Civic Landscape',
    subtitle: 'Civic Architecture, Public Realm & Landscape Master Planning',
    category: 'Civic & Public Realm',
    location: 'Gulf Region / Middle East',
    country: 'Middle East',
    year: '2025',
    status: 'Concept Design / 3D Visualization',
    clientType: 'Public Realm & Municipal Master Planning',
    image: '/projects/images/aaiqa-render-aerial.png',
    heroImage: '/projects/images/aaiqa-render-aerial.png',
    heroType: 'render',
    description: 'A public realm concept featuring an organic, double-curved shade canopy integrated within an open park setting, accompanied by an axial promenade, timber colonnade, and parking facilities. Designed to provide essential thermal shading and shelter in arid climates, the spatial layout establishes an accessible community space incorporating pedestrian connectivity, children\'s play areas, and quiet social zones.',
    brief: 'Provide shaded, accessible public green space within an exposed regional setting, incorporating pedestrian connectivity, children\'s play areas, quiet social zones, and integrated vehicular parking with protected pathways.',
    approach: 'Deploying a high-profile sculptural shade structure combined with layered greenery, perimeter fencing, and a clear threshold hierarchy transitioning from vehicular parking along an axial promenade to an organic social pavilion. The fluid, wave-like canopy surfaces are supported by perimeter structural columns and an inner concentric ring of vertical timber fins that cast dynamic light-and-shadow patterns throughout the day.',
    architecturalStory: 'The design of the Canopy Pavilion began with a fundamental civic need: providing shaded, accessible public green space within an exposed regional setting. Rather than deploying disconnected pergolas, the design introduces a singular sculptural pavilion roof that acts as an urban visual anchor. By integrating a formal hedge-lined promenade, the visitor’s journey builds from the utilitarian parking court toward the light-filled, timber-screened interior of the circular pavilion. The resulting architecture balances structural expressiveness with spatial serenity.',
    timelineStages: [
      'Phase 1: Concept Design & Programmatic Zoning',
      'Phase 2: Canopy Form Generation & Parametric Modeling',
      'Phase 3: 3D Visualization & Environmental Rendering'
    ],
    factsMatrix: {
      'Project Type': 'Public Park, Shade Pavilion & Urban Landscape',
      'Location': 'Gulf / Middle Eastern Regional Context',
      'Architect': 'RAARCHITEX',
      'Status': 'Concept Design / 3D Visualization',
      'Design Stage': 'Concept & Schematic Visualization',
      'Scope': 'Architectural concept, shade structure design, landscape zoning, parking layout, 3D visualization',
      'Services': 'Master Planning, Public Architecture, Landscape Architecture, 3D Spatial Modeling'
    },
    challengesAndSolutions: [
      {
        challenge: 'Providing effective thermal solar mitigation and wind-permeable shelter in an open, high-temperature setting without enclosing the public realm.',
        solution: 'Deploying an undulating high-profile continuous shade canopy combined with a concentric ring of vertical timber shading louvers and perimeter planted buffers.'
      },
      {
        challenge: 'Safely organizing vehicular arrival and pedestrian movement across an open civic parcel.',
        solution: 'Establishing a rigid asphalt parking court with protective bollards and zebra crossings transitioning directly into a formal axial pedestrian promenade lined with evergreen hedges.'
      }
    ],
    specifications: {
      duration: 'Concept & Visualization Phase',
      servicesProvided: [
        'Master Planning & Civic Zoning',
        'Shade Structure Architectural Design',
        'Landscape Architecture & Site Circulation',
        '3D Spatial Modeling & Environmental Perspectives'
      ],
      materials: [
        'Smooth white tensile membrane / thin-shell concrete overhead canopy',
        'Natural stain structural vertical timber slats (inner colonnade)',
        'White-rendered cast-in-place concrete linear planter beds and retaining curbs',
        'Compacted decomposed granite and bound gravel pedestrian pathways',
        'Durable asphalt with painted demarcation and protective safety bollards'
      ],
      technicalSpecifications: [
        'Passive solar microclimate modulation with continuous cross-ventilation',
        'Dual circulation strategy: linear formal axis combined with fluid perimeter lawn loops',
        'Integrated multi-cluster luminaire lampposts positioned uniformly along pathways',
        'Linear planter beds functioning as natural acoustic and spatial buffers'
      ]
    },
    gallery: [
      {
        source: '/projects/images/aaiqa-render-aerial.png',
        caption: 'Aerial perspective illustrating the civic park master plan, parking court, and sculptural canopy pavilion.',
        type: 'render'
      },
      {
        source: '/projects/images/aaiqa-render-promenade.png',
        caption: 'Pedestrian approach along the central promenade framed by manicured hedges and lampposts.',
        type: 'render'
      },
      {
        source: '/projects/images/aaiqa-render-interior.png',
        caption: 'Interior view of the pavilion showcasing the interplay between the circular timber colonnade and roof canopy.',
        type: 'render'
      }
    ],
    drawings: [
      {
        id: 'dwg-cp-01',
        drawingNumber: 'CP-01',
        title: 'Civic Park Master Plan & Spatial Circulation Scheme',
        scale: '1:500 Master Plan',
        type: 'Site Plan',
        image: '/projects/images/aaiqa-render-aerial.png',
        description: 'Comprehensive master plan showing parking court, formal hedge promenade, circular timber pavilion colonnade, and peripheral recreation lawns.',
        annotations: [
          'VEHICULAR PARKING COURT WITH PROTECTIVE BOLLARDS & CROSSWALKS',
          'AXIAL PEDESTRIAN PROMENADE WITH EVERGREEN TOPIARY HEDGES',
          'UNDULATING FORM-ACTIVE SCULPTURAL SHADE CANOPY',
          'CONCENTRIC RADIAL TIMBER SCREEN WITH CENTRAL LAWN COURT'
        ]
      }
    ],
    featured: true,
    latest: true
  },
  {
    id: 'coombe-fields-33kv-substation-switch-house',
    slug: 'coombe-fields-33kv-substation-switch-house',
    projectNumber: '02',
    title: 'Coombe Fields 33kV Substation & Switch House',
    subtitle: 'Critical Electrical Infrastructure & Industrial Building Design',
    category: 'Infrastructure & Industrial',
    location: 'Coombe Fields Road, Cauldon Lowe to Waterhouses, Staffordshire',
    country: 'United Kingdom',
    year: '2025',
    status: 'Technical Design & Planning Approved',
    clientType: 'Electrical Distribution Network Operator / Rolls Royce Land Interface',
    area: '18.00m × 5.40m Switch House (97.2 m²)',
    ffl: '+101.30 m',
    image: '/projects/drawings/cauldon-planing-layout-drawing.png',
    heroImage: '/projects/drawings/cauldon-planing-layout-drawing.png',
    heroType: 'vector-drawing',
    description: 'Complete technical and civil engineering documentation for a 33kV switch house, outdoor transformer compounds, and highway bellmouth junction in Staffordshire, UK. The project encompasses an 18m x 5.4m single-storey masonry switch house building housing switchgear, battery rooms, control suites, and amenities. Sub-floor engineering details specify complex concrete cable trenches and waterproof tanking, while external works include 33kV transformer bays, 2.4m palisade fencing, and an engineered civil highway bellmouth on Coombe Fields Road.',
    brief: 'Engineer an 18.00m × 5.40m heavy-duty masonry switch house, 33kV outdoor transformer compounds, below-ground cable trench infrastructure with watertight tanking, and a heavy-vehicle highway bellmouth junction compliant with UK standards.',
    approach: 'Strict functional and industrial determinism balancing electrical clearance tolerances with contextual rural masonry planning requirements and heavy-duty highway access. The building envelope utilizes 350mm thick external cavity walls with facing brickwork and soldier courses, Kingspan RW1000 insulated roof paneling in Merlin Grey BS 18B-25, and high-security steel doors. Substructure detailing incorporates reinforced concrete trenches with multi-layer waterproof tanking (Details A through E).',
    architecturalStory: 'Utility architecture demands extreme precision: every structural axis is dictated by the equipment it encloses. For Coombe Fields, the architectural mandate was to create a secure, fire-resistant, and watertight switch house envelope while satisfying stringent highway access and rural planning parameters. By resolving the sub-floor trenches, building envelope, and highway crossover into a unified technical drawing set, the architecture bridges the gap between heavy industrial engineering and municipal building compliance.',
    timelineStages: [
      'Stage 1: Highway Sightline & Bellmouth Civil Design',
      'Stage 2: Site Layout & Electrical Compound Coordination',
      'Stage 3: Planning Elevation Submissions & Material Approvals',
      'Stage 4: Detailed Sub-Floor Trench, Waterproofing & Building Regulations Documentation'
    ],
    factsMatrix: {
      'Project Type': 'Electrical Infrastructure / Industrial Architecture',
      'Location': 'Coombe Fields Road, Cauldon Lowe, Staffordshire, UK',
      'Adjacent Landowner': 'Rolls Royce Land',
      'Switch House Dimensions': '18,000 mm length × 5,400 mm external width',
      'Finished Floor Level': '+101.30 m',
      'Wall Construction': '350 mm cavity wall with 50 mm clear cavity',
      'Roof Specification': 'Kingspan RW1000 composite panels in Merlin Grey BS 18B-25',
      'Perimeter Security': '2.4m galvanized steel palisade fencing (BS 1722 Part 14)',
      'Road Construction': '560 mm pavement build-up with 450mm MoT Type 1 road base'
    },
    challengesAndSolutions: [
      {
        challenge: 'Accommodating heavy multi-axle transformer transport delivery vehicles and cranes from a narrow rural roadway on Coombe Fields Road.',
        solution: 'Engineered an extensive 1:20 scale highway bellmouth junction with 15m radius transition kerbs, 560mm total pavement construction depth, and localized on-site stormwater retention.'
      },
      {
        challenge: 'Routing complex 33kV incoming power lines and 11kV distribution circuits through watertight sub-floor building basements under hydrostatic pressure.',
        solution: 'Implemented dedicated sub-floor duct setting out drawings (DWG 03) featuring Details A–E multi-layer bituminous tanking collars, sump discharge pits, and structural cover plates.'
      }
    ],
    pdfDocuments: [
      {
        title: 'Cauldon Planning Layout Drawing',
        filename: 'Cauldon Planing Layout.pdf',
        url: '/projects/documents/cauldon-planing-layout.pdf',
        size: '461 KB',
        description: 'Comprehensive general arrangement site plan, compound elevations, and Coombe Fields Road access layout.'
      },
      {
        title: 'Cauldon Planning Elevation Drawing',
        filename: 'Cauldon Planning Elevation.pdf',
        url: '/projects/documents/cauldon-planning-elevation.pdf',
        size: '157 KB',
        description: 'Planning submission elevations A, B, C, D and internal chamber layouts for the 33kV switch house.'
      },
      {
        title: 'Ansty Construction & Foundation Package',
        filename: 'Ansty Construction.pdf',
        url: '/projects/documents/ansty-construction.pdf',
        size: '608 KB',
        description: 'Structural foundation plan, cable trench setting out, movement joints, and waterproof tanking details A–E.'
      },
      {
        title: 'Ansty Access Road & Highway Bellmouth Package',
        filename: 'Ansty Access Road.pdf',
        url: '/projects/documents/ansty-access-road.pdf',
        size: '255 KB',
        description: 'Civil engineering drawings for Coombe Fields Road bellmouth junction, kerb setting out, and multi-layer pavement cross-sections.'
      },
      {
        title: 'Ansty Building Architectural Package',
        filename: 'Ansty Building.pdf',
        url: '/projects/documents/ansty-building.pdf',
        size: '255 KB',
        description: 'Full architectural building elevations, cross-sections A-A and B-B, and Kingspan RW1000 roof specifications.'
      },
      {
        title: 'Ansty Layout & Palisade Security Compound',
        filename: 'Ansty Layout.pdf',
        url: '/projects/documents/ansty-layout.pdf',
        size: '320 KB',
        description: 'Site layout showing 2.4m palisade perimeter fencing, 33kV transformer pens, and Rolls Royce land boundary.'
      }
    ],
    specifications: {
      area: '18.00m × 5.40m Switch House Footprint',
      servicesProvided: [
        'Industrial Architecture & Building Planning',
        'Civil Highway Engineering & Bellmouth Junction Design',
        'Structural Sub-Floor Cable Trench & Waterproofing Detailing',
        'UK Building Regulations Compliance & Statutory Documentation',
        'Perimeter Security & Compound Fencing Layouts'
      ],
      materials: [
        'Kingspan RW1000 insulated composite roof panels (Merlin Grey BS 18B-25)',
        'Highline proprietary eaves gutters and downpipes (Merlin Grey BS 18B-25)',
        'Facing brickwork with soldier course details and 50mm clear cavity',
        'Fair-faced solid concrete blockwork internal cavity skin',
        '45mm thick, 1.2mm double-skin zinc-coated steel security doors (BS 18B-25)',
        'Reinforced concrete float-finish structural floor slabs with trench rebate',
        'Dense bitumen macadam wearing course over 450mm MoT Type 1 road base',
        '2.4m galvanized steel palisade security fencing to BS 1722 Part 14'
      ],
      technicalSpecifications: [
        'Finished Floor Level established at datum FFL +101.30 m',
        'Continuous reinforced concrete strip footings with stepped foundation walls',
        'Details A-E multi-layer waterproof tanking membranes protecting sub-floor cable trenches',
        'Sustainable drainage attenuation with bellmouth falling back into site, preventing road runoff'
      ]
    },
    gallery: [
      {
        source: '/projects/drawings/cauldon-planing-layout-drawing.png',
        caption: 'Planning layout sheet: Location plan, site layout, and building external dimensions.',
        type: 'vector-drawing'
      },
      {
        source: '/projects/drawings/cauldon-planning-elevation-drawing.png',
        caption: 'Switch house building elevations and sectional cuts showing Kingspan roof and brickwork.',
        type: 'vector-drawing'
      },
      {
        source: '/projects/drawings/ansty-construction-drawing.png',
        caption: 'Detailed structural foundation plan, cable trenches, and waterproof tanking details A–E.',
        type: 'vector-drawing'
      },
      {
        source: '/projects/drawings/ansty-access-road-drawing.png',
        caption: 'Civil engineering details for highway bellmouth junction and multi-layer road construction.',
        type: 'vector-drawing'
      },
      {
        source: '/projects/drawings/ansty-building-drawing.png',
        caption: 'Switch House elevations A-D and cross-sections A-A & B-B with Kingspan specifications.',
        type: 'vector-drawing'
      },
      {
        source: '/projects/drawings/ansty-layout-drawing.png',
        caption: 'Overall compound site layout, cable routing, transformer enclosures, and palisade fencing.',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-cf-01',
        drawingNumber: 'DWG-CF-01',
        title: 'General Site Arrangement & 33kV Compound Layout',
        scale: '1:200 / 1:500 @ A1',
        fileSource: 'Cauldon Planing Layout.pdf',
        downloadUrl: '/projects/documents/cauldon-planing-layout.pdf',
        type: 'Site Plan',
        image: '/projects/drawings/cauldon-planing-layout-drawing.png',
        description: 'General arrangement site plan showing transformer pens, switch house footprint, 2.4m palisade perimeter fencing, and Coombe Fields Road access.',
        annotations: [
          '18.00m x 5.40m SWITCH HOUSE FOOTPRINT AT FFL +101.30',
          '33kV / 11kV TRANSFORMER COMPOUNDS WITH CRUSHED STONE SURFACING',
          '2.4m GALVANIZED STEEL PALISADE SECURITY FENCING TO BS 1722',
          'COOMBE FIELDS ROAD BELLMOUTH JUNCTION WITH 15m RADIUS KERBS'
        ]
      },
      {
        id: 'dwg-cf-02',
        drawingNumber: 'DWG-CF-02',
        title: 'Switch House Elevations (A, B, C, D) & Cross-Sections',
        scale: '1:50 / 1:100 @ A1',
        fileSource: 'Cauldon Planning Elevation.pdf',
        downloadUrl: '/projects/documents/cauldon-planning-elevation.pdf',
        type: 'Elevation',
        image: '/projects/drawings/cauldon-planning-elevation-drawing.png',
        description: 'Complete architectural elevations and sections detailing Kingspan RW1000 insulated composite panels in Merlin Grey BS 18B-25 and facing brickwork.',
        annotations: [
          'KINGSPAN RW1000 COMPOSITE ROOF PANELS IN MERLIN GREY BS 18B-25',
          'FACING BRICKWORK WITH SOLDIER COURSE DETAILS TO PLANNING SPECIFICATION',
          'DOUBLE-SKIN STEEL SECURITY DOORS WITH DOUBLE DEADLOCKS',
          'INTERNAL CLEARANCES COORDINATED WITH MULTI-BAY SWITCHGEAR'
        ]
      },
      {
        id: 'dwg-cf-03',
        drawingNumber: 'DWG-CF-03',
        title: 'Sub-Floor Foundation & Cable Trench Setting Out (Details A-E)',
        scale: '1:50 & 1:20 Details',
        fileSource: 'Ansty Construction.pdf',
        downloadUrl: '/projects/documents/ansty-construction.pdf',
        type: 'Detail',
        image: '/projects/drawings/ansty-construction-drawing.png',
        description: 'Engineering drawing detailing reinforced concrete sub-floor cable trenches, holding-down fixings, sump discharge pit, and multi-layer waterproof tanking Details A through E.',
        annotations: [
          'REINFORCED CONCRETE CABLE DUCT TRENCHES WITH POWER-FLOAT REBATES',
          'DETAILS A-E: BITUMINOUS TANKING MEMBRANES AT FLOOR/WALL JOINTS',
          'SUMP DISCHARGE PIT & SUBSURFACE DRAINAGE DUCTS',
          '10mm EXPANSION JOINTS WITH POLYSULPHIDE SEALANT'
        ]
      },
      {
        id: 'dwg-cf-04',
        drawingNumber: 'DWG-CF-04',
        title: 'Highway Bellmouth Junction & Pavement Engineering',
        scale: '1:20 Pavement Sections',
        fileSource: 'Ansty Access Road.pdf',
        downloadUrl: '/projects/documents/ansty-access-road.pdf',
        type: 'Technical Drawing',
        image: '/projects/drawings/ansty-access-road-drawing.png',
        description: 'Civil highway engineering details for Coombe Fields Road bellmouth junction, featuring 15m radius kerbs and 560mm layered pavement build-up.',
        annotations: [
          '15m RADIUS TRANSITION KERBS FOR HEAVY TRANSFORMER TRANSPORTERS',
          '40mm DENSE BITUMEN MACADAM WEARING COURSE OVER 70mm BASECOURSE',
          'MINIMUM 450mm MoT TYPE 1 COMPACTED CRUSHED STONE ROAD BASE',
          'LOCAL STORMWATER ATTENUATION FALLING BACK INTO SITE'
        ]
      }
    ],
    featured: true,
    latest: true
  },
  {
    id: 'contemporary-kinetic-screen-facade-study',
    slug: 'contemporary-kinetic-screen-facade-study',
    projectNumber: '03',
    title: 'Contemporary Kinetic Screen Facade Study',
    subtitle: 'Concept Facade Engineering & Parametric Solar Shading Design',
    category: 'Commercial & Facade Design',
    location: 'Concept Study / Atmospheric Forest Setting',
    country: 'United Kingdom',
    year: '2025',
    status: 'Concept Design / Facade Study',
    clientType: 'Commercial / Cultural Development',
    image: '/projects/images/elevation-renders-primary.jpg',
    heroImage: '/projects/images/elevation-renders-primary.jpg',
    heroType: 'render',
    description: 'An architectural facade study at 1:100 scale exploring parametric blue shading louvers, textured concrete, and fluted paneling on a 3-storey building. The study contrasts two distinct volumetric facade expressions: a monolithic volume with an aggregate mineral finish featuring varied punched picture windows, and an adjacent volume clad in vertically fluted paneling. High-level openings are fitted with sculptural, twisted blue blades that function as an active brise-soleil.',
    brief: 'Investigate advanced envelope design and daylight moderation for a contemporary three-storey commercial or cultural building, balancing internal daylighting, privacy, and solar heat reduction.',
    approach: 'Compositional asymmetry dividing the 3-storey volume into a monolithic aggregate mineral mass and a vertically fluted pavilion animated by parametric, twisted slate-blue shading blades functioning as a dynamic brise-soleil. The sculptural twist of the louvers is algorithmically derived to block peak midday summer heat while admitting diffused natural light.',
    architecturalStory: 'Great facades mediate between interior human comfort and the external environment. This project originated from a desire to make passive solar shading the primary expressive element of a building’s public face. By replacing standard commercial blinds or static louvers with an undulating array of twisted blue fins, the elevation transforms throughout the day as natural sunlight glides across its curved metallic surfaces.',
    timelineStages: [
      'Stage 1: Volumetric & Massing Studies (3-storey envelope)',
      'Stage 2: Fenestration Rhythm & Solid-to-Void Analysis',
      'Stage 3: Parametric Blade Twist Modeling & Curvature Studies',
      'Stage 4: 1:100 Scale Architectural Elevation Rendering'
    ],
    factsMatrix: {
      'Project Type': 'Commercial, Institutional or Cultural Facade Study',
      'Drawing Scale': '1:100 @ Orthographic Projection',
      'Storeys': 'Three (3) Functional Levels',
      'Architect': 'RAARCHITEX',
      'Status': 'Concept Design / Facade Study',
      'Primary Features': 'Parametric twisted louvers, punched picture windows, vertical slit aperture',
      'Services': 'Facade Architecture, Parametric Shading Design, 2D Visualization & Elevation Rendering'
    },
    challengesAndSolutions: [
      {
        challenge: 'Balancing privacy and direct solar exposure on upper floors without creating an entirely blank or monotonous commercial facade.',
        solution: 'Integrating artistic, parametric blue shading louvers that animate the elevation while mitigating solar glare and casting dynamic interior shadow patterns.'
      },
      {
        challenge: 'Creating optical cohesion between contrasting solid and transparent envelope materials.',
        solution: 'Establishing a clear geometric rhythm between the rough mineral monolith volume and the finely channeled, vertically fluted paneling with recessed vision glass.'
      }
    ],
    specifications: {
      duration: 'Design Study & Orthographic Drafting Phase',
      servicesProvided: [
        'Architectural Facade Concept Design',
        'Parametric Solar Screen & Brise-Soleil Engineering',
        'Scale Orthographic Elevation Drafting (1:100)',
        'Building Envelope Materiality Studies'
      ],
      materials: [
        'Textured off-white mineral plaster / fair-faced concrete monolithic facade',
        'Vertically fluted cladding panels (engineered timber, terracotta, or extruded aluminum)',
        'Sculpted twisted solar shading blades finished in deep slate blue powder coat',
        'Recessed high-performance architectural vision glass with minimal framing profiles',
        'Natural granitic landscape boulders and mature deciduous perimeter trees'
      ],
      technicalSpecifications: [
        'Orthographic architectural projection drawn precisely at 1:100 scale',
        'Passive solar brise-soleil providing high-efficiency summer solar heat attenuation',
        'Double-height vertical slit aperture framing structural volume intersection',
        'Recessed pedestrian portal integrated flush into the vertically fluted rainscreen'
      ]
    },
    gallery: [
      {
        source: '/projects/images/elevation-renders-primary.jpg',
        caption: 'Primary elevation at 1:100 scale illustrating the dialogue between mineral render and the sculptural blue shading screen.',
        type: 'render'
      },
      {
        source: '/projects/images/elevation-renders-secondary.jpg',
        caption: 'Secondary elevation at 1:100 scale detailing horizontal louver arrays and central vertical slit opening.',
        type: 'render'
      }
    ],
    drawings: [
      {
        id: 'dwg-fs-01',
        drawingNumber: 'FS-01',
        title: 'Primary Architectural Elevation @ 1:100 Scale',
        scale: '1:100 @ A1',
        type: 'Elevation',
        image: '/projects/images/elevation-renders-primary.jpg',
        description: 'Primary orthographic elevation illustrating the 3-storey volume, punched picture windows, vertically fluted rainscreen, and sculptural blue twisted louver installation.',
        annotations: [
          'MONOLITHIC TEXTURED MINERAL PLASTER / FAIR-FACED CONCRETE APERTURES',
          'PARAMETRIC TWISTED BLUE SHADING LOUVER ASSEMBLY AT UPPER LEVEL',
          'VERTICALLY FLUTED RAINSCREEN WITH INTEGRATED FLUSH PORTAL',
          'SCALE SILHOUETTE & NATIVE DECIDUOUS LANDSCAPE GROUNDING'
        ]
      },
      {
        id: 'dwg-fs-02',
        drawingNumber: 'FS-02',
        title: 'Secondary Architectural Elevation @ 1:100 Scale',
        scale: '1:100 @ A1',
        type: 'Elevation',
        image: '/projects/images/elevation-renders-secondary.jpg',
        description: 'Secondary orthographic elevation at 1:100 scale demonstrating continuous horizontal louver bands and a dramatic double-height vertical slit window.',
        annotations: [
          'CONTINUOUS HORIZONTAL PARAMETRIC LOUVER ARRAY',
          'DOUBLE-HEIGHT VERTICAL SLIT OPENING AT VOLUME THRESHOLD',
          'RECESSED HIGH-PERFORMANCE VISION GLAZING',
          'PUNCHED ROOF-LEVEL SQUARE WINDOWS'
        ]
      }
    ],
    featured: true,
    latest: true
  },
  {
    id: 'residential-loft-conversion-technical-compliance',
    slug: 'residential-loft-conversion-technical-compliance',
    projectNumber: '04',
    title: 'Residential Loft Conversion & Technical Compliance',
    subtitle: 'Residential Extension Architecture & Building Regulations Documentation',
    category: 'Residential & Technical Approvals',
    location: 'Elmcroft, United Kingdom',
    country: 'United Kingdom',
    year: '2025',
    status: 'Technical Design / Building Regulations Approved',
    clientType: 'Private Domestic Client',
    area: '30 m² Loft Area',
    image: '/projects/drawings/elmcroft-dormer-drawing.png',
    heroImage: '/projects/drawings/elmcroft-dormer-drawing.png',
    heroType: 'vector-drawing',
    description: 'Complete technical design and Building Regulations approval documentation for a 30m² UK residential loft extension, including 1:10 verge construction details. Capturing proposed rear and side elevations alongside an engineered 1:10 scale flat roof verge detail, the drawing provides a complete construction guide. Strict compliance with UK Building Regulations is embedded into the specifications, including FD30S fire door assemblies and Rockwool fire barriers under Approved Document B, high-performance acoustic studwork under Approved Document E, and mechanical extract ventilation under Approved Document F.',
    brief: 'Transform an existing underutilized domestic pitched roof structure into a self-contained 30m² master bedroom suite and en-suite bathroom with full UK Building Regulations approval.',
    approach: 'Translating strict British statutory building standards into buildable architectural details. Rear dormer clad in hanging tiles matching the host property, obscure glazing to the side elevation, and a bespoke 1:10 flat roof verge detail. Life safety is secured via self-closing FD30S fire-resistant doors to all habitable rooms connecting to the protected stairway, combined with Rockwool fire barriers installed around all openings and extending 300mm from external corners.',
    architecturalStory: 'Executing a successful residential loft conversion requires translating complex statutory building regulations into clear, buildable site details. This project bridged the gap between municipal requirements and contractor execution. By detailing everything from structural spreader beams to acoustic sealant beads and timber verge upstands, the architecture delivers life-safety, acoustic privacy, and weather protection within a functional domestic expansion.',
    timelineStages: [
      'Stage 1: Measured Survey & Loft Space Planning (30m² layout)',
      'Stage 2: Building Control Liaison & Structural Lintel Assessment',
      'Stage 3: Statutory Compliance Scheduling (Parts B, E, F, K, P)',
      'Stage 4: 1:10 Scale Construction Detailing & Regulatory Sign-Off'
    ],
    factsMatrix: {
      'Project Type': 'Residential Renovation, Loft Conversion & Extension',
      'Location': 'Elmcroft, United Kingdom (UK Building Regulations)',
      'Additional Habitable Area': '30 m² Loft Area',
      'Architect / Technologist': 'RAARCHITEX',
      'Status': 'Technical Design Completed / Building Regulations Package',
      'Primary Document': 'ElmCroft Domer.pdf',
      'Fire Rating (Part B)': 'FD30S self-closing fire doors & Rockwool cavity fire barriers',
      'Acoustic Compliance (Part E)': 'Gyproc acoustic studs, 25mm Isowool (10kg/m³), 22mm acoustic board',
      'Ventilation (Part F)': '60 l/s kitchen, 15 l/s bathroom extract, 4000mm² trickle vents',
      'Electrical (Part P)': 'Min 40 lamp-lumens per circuit-watt'
    },
    challengesAndSolutions: [
      {
        challenge: 'Safeguarding third-storey means of escape under UK Approved Document B when creating a new habitable attic level.',
        solution: 'Specified certified FD30S self-closing fire doors with intumescent smoke seals on all stairway approaches, reinforced by 300mm Rockwool perimeter cavity fire breaks.'
      },
      {
        challenge: 'Preventing airborne sound transmission between the new loft bathroom and adjacent sleeping chambers.',
        solution: 'Engineered a Gyproc acoustic partition detail exceeding Approved Document E criteria, utilizing 22mm acoustic plasterboard and 10kg/m³ Isowool insulation.'
      }
    ],
    pdfDocuments: [
      {
        title: 'ElmCroft Dormer Building Regulations Drawing Package',
        filename: 'ElmCroft Domer.pdf',
        url: '/projects/documents/elmcroft-dormer.pdf',
        size: '200 KB',
        description: 'Complete Building Regulations drawing sheet with proposed rear & side elevations, 1:10 flat roof verge detail, and statutory compliance notes.'
      }
    ],
    specifications: {
      area: '30 m² Habitable Loft Expansion',
      servicesProvided: [
        'Residential Architectural Design',
        'UK Building Regulations Approval Package',
        '1:10 Scale Construction Detailing',
        'Acoustic & Fire Safety Strategy',
        'Mechanical Ventilation & Electrical Efficiency Specification'
      ],
      materials: [
        '3 layers of high-performance bitumen mineral felt roof covering',
        '18mm WBP exterior-grade plywood deck on 28x44mm treated softwood battens',
        'UPVC fascia board with continuous 25mm ventilated soffit strip',
        'UPVC Yeoman Rainguard 110x65mm gutters with 50mm downpipes (Black)',
        'Gyproc metal studs at 400mm centers with 25mm Isowool (10kg/m³) insulation',
        '22mm Gyproc acoustic plasterboard sealed with acoustic perimeter mastic',
        'FD30S certified self-closing fire doors complying with BS 476 Part 22:1987',
        'Toughened safety glass to all panes below 800mm finished floor level'
      ],
      technicalSpecifications: [
        'Additional habitable loft floor area: exactly 30 m²',
        '1:10 scale flat roof verge detail with 125mm bitumen skirting upstand',
        'Continuous 25mm eaves ventilation maintaining positive airflow across insulation voids',
        'Structural spreader beam over gable window distributing concentrated roof loads'
      ]
    },
    gallery: [
      {
        source: '/projects/drawings/elmcroft-dormer-drawing.png',
        caption: 'Comprehensive Building Regulations drawing showing proposed elevations, 1:10 verge detail, and statutory compliance schedules.',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-lc-01',
        drawingNumber: 'DWG-LC-01',
        title: 'Proposed Elevations, 1:10 Flat Roof Verge Detail, & Compliance Schedules',
        scale: '1:100 Elevations / 1:10 Verge Detail @ A1',
        fileSource: 'ElmCroft Domer.pdf',
        downloadUrl: '/projects/documents/elmcroft-dormer.pdf',
        type: 'Detail',
        image: '/projects/drawings/elmcroft-dormer-drawing.png',
        description: 'Complete Building Regulations sheet showing proposed rear dormer elevation, side elevation with obscure glass, 1:10 flat roof verge cross-section, and Approved Documents B, E, F, K, P compliance schedules.',
        annotations: [
          '30 m² NEW HABITABLE LOFT SPACE WITH PROTECTED ENCLOSURE',
          '1:10 SCALE FLAT ROOF VERGE DETAIL: 3-LAYER FELT OVER 18mm WBP PLYWOOD',
          'APPROVED DOCUMENT B: FD30S FIRE DOORS & ROCKWOOL CAVITY FIRE BARRIERS',
          'APPROVED DOCUMENT E: GYPROC ACOUSTIC STUDS WITH 22mm ACOUSTIC PLASTERBOARD',
          'APPROVED DOCUMENT F: 60 l/s KITCHEN & 15 l/s BATHROOM MECHANICAL EXTRACT'
        ]
      }
    ],
    featured: true,
    latest: true
  },
  {
    id: 'harborne-house',
    slug: 'harborne-house',
    projectNumber: '05',
    title: 'Victorian House Extension & Garden Pavilion',
    subtitle: 'Extension • Renovation • Interior',
    category: 'Extensions',
    location: 'Harborne, Birmingham',
    country: 'United Kingdom',
    year: '2025',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '265 m²',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'A comprehensive architectural remodelling and single-storey rear pavilion extension to a Victorian home. The design unlocks dark, compartmentalised living spaces into an expansive light-filled kitchen and garden pavilion framed in charred timber and ultra-slim structural glazing.',
    brief: 'Redesign the ground floor layout to eliminate compartmentalised dark living spaces, incorporate a high-specification chef kitchen with central breakfast island, and create a seamless flush transition to a south-facing landscaped garden terrace.',
    approach: 'We introduced an exposed steel portal frame enabling a 12.4m column-free rear aperture. A cantilevered sedum green roof overhangs the terrace to prevent summer solar overheating while allowing low-angle winter sun to naturally warm the polished concrete thermal mass floor.',
    beforeAfter: {
      before: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
      after: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      caption: 'Before: Compartmentalised, dark 1970s rear addition. After: Open-plan charred timber pavilion with flush garden threshold.'
    },
    specifications: {
      area: '265 m² total (95 m² new extension)',
      duration: '8 months design, planning & construction',
      servicesProvided: [
        'Architectural Design',
        'Planning Permission (Birmingham City Council)',
        'Building Regulations Technical Package',
        'Interior Kitchen Architecture & Lighting',
        'Landscape & Terrace Integration'
      ],
      localAuthority: 'Birmingham City Council',
      materials: [
        'Shou Sugi Ban charred Accoya timber cladding',
        'Reynaers Hi-Finity minimal frame sliding glass doors',
        'Bio-diverse sedum green roof with zinc capping trim',
        'Continuous polished microcement flooring over underfloor heating',
        'Handmade Petersen Kolumba brick piers matching original masonry'
      ],
      technicalSpecifications: [
        'Whole-house thermal upgrade achieving U-values of 0.14 W/m²K for external walls',
        'Acoustic ceiling baffles integrated within recessed architectural lighting slots',
        'Mechanical Ventilation with Heat Recovery (MVHR) throughout the new pavilion',
        'Flush threshold drainage system with continuous linear slot channels'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Rear Garden Pavilion Elevation with Charred Accoya Cladding & Green Roof',
        type: 'photo'
      },
      {
        source: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
        caption: 'Open-Plan Kitchen & Dining Suite with Central Monolithic Island',
        type: 'photo'
      },
      {
        source: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
        caption: 'Evening Twilight Perspective: Seamless Living Room to Terrace Transition',
        type: 'photo'
      },
      {
        source: '/drawings/harborne-house-plans.svg',
        caption: 'Technical Drawing Package: Ground Floor General Arrangement & Structural Grid',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-hh-01',
        drawingNumber: 'HH-01',
        title: 'Proposed Ground Floor Plan & Landscape Terrace Setting Out',
        scale: '1:50 @ A1',
        fileSource: 'harborne-house-ground-floor-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/harborne-house-plans.svg',
        description: 'Comprehensive ground floor layout showing the 12.4m structural portal opening, utility/pantry sequence, and flush transition to the south-facing terrace.',
        annotations: [
          '12.4m MINIMAL-FRAME SLIDING GLASS APERTURE',
          'POLISHED MICROCEMENT FLOOR DATUM WITH UNDERFLOOR HEATING',
          'RECESSED SEDUM GREEN ROOF DRAINAGE & INTEGRATED CAPPING',
          'ACOUSTIC BUFFER ZONE TO UTILITY & PLANT ROOM'
        ]
      },
      {
        id: 'dwg-hh-02',
        drawingNumber: 'HH-02',
        title: 'North Garden Elevation & Sunken Terrace Cross-Section',
        scale: '1:50 @ A1',
        fileSource: 'harborne-house-elevations.pdf',
        type: 'Elevation',
        image: '/drawings/harborne-house-plans.svg',
        description: 'Detailed garden elevation illustrating the relationship between charred timber cladding, Petersen brickwork, and the sedum roof verge.',
        annotations: [
          'SHOU SUGI BAN TIMBER RAINSCREEN CLADDING',
          'ZINC VERGE FLASHING TO BIODIVERSE ROOF',
          'SLOT DRAINAGE DETAIL AT FLUSH PATIO INTERFACE'
        ]
      }
    ],
    featured: true,
    latest: true
  },
  {
    id: 'edgbaston-pavilion',
    slug: 'edgbaston-pavilion',
    projectNumber: '02',
    title: 'Edgbaston Conservation Pavilion',
    subtitle: 'Sculptural garden extension in a designated conservation area',
    category: 'Extensions',
    location: 'Edgbaston, Birmingham',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '145 m²',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Located in the historic Edgbaston Conservation Area under the stewardship of the Calthorpe Estate, this extension introduces a sculptural garden room connected to a substantial Victorian brick villa via a delicate frameless structural glass link.',
    brief: 'Design an extension that celebrates the lush private walled garden while respecting strict conservation guidelines requiring high-quality traditional materials paired with contemporary architectural expression.',
    approach: 'We utilised patinated bronze standing seam cladding and bespoke Petersen terracotta brickwork that echoes the historic lime-mortared brick of the main villa. A 4.2m glass link serves as an acoustic and architectural buffer, leaving the original external brick facade intact as an internal feature wall.',
    specifications: {
      area: '145 m² addition',
      duration: '11 months design, Calthorpe Estate approvals & build',
      servicesProvided: [
        'Conservation Area Planning Application & Heritage Statement',
        'Calthorpe Estate Scheme of Management Approval',
        'Structural Glass Link Detailing',
        'Patinated Bronze Cladding Specification'
      ],
      localAuthority: 'Birmingham City Council & Calthorpe Estate',
      materials: [
        'Pre-patinated Nordic Bronze standing seam roofing and fascias',
        'Restored Victorian red engineering brickwork with hydraulic lime pointing',
        'Structural double-laminated low-iron glass link corridor',
        'End-grain English oak block flooring',
        'Integrated anodised bronze louvres for passive natural ventilation'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=80',
        caption: 'Garden Elevation with Folded Bronze Canopy & Historic Villa Context',
        type: 'photo'
      },
      {
        source: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
        caption: 'Frameless Structural Glass Link Connecting Villa to New Garden Pavilion',
        type: 'photo'
      },
      {
        source: '/drawings/edgbaston-pavilion-plan.svg',
        caption: 'Conservation Setting Out Plan & Frameless Glass Link Geometry',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-ep-01',
        drawingNumber: 'EP-01',
        title: 'Conservation Ground Floor Plan & Glass Link Detail',
        scale: '1:50 @ A1',
        fileSource: 'edgbaston-pavilion-ground-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/edgbaston-pavilion-plan.svg',
        description: 'Setting out the relation between original Victorian masonry and the bronze pavilion connected by the structural glass corridor.',
        annotations: [
          'RETAINED HISTORIC RED BRICK MASONRY',
          'FRAMELESS STRUCTURAL GLASS LINK (4.2m SPAN)',
          'PATINATED BRONZE FOLDED CANOPY ROOF',
          'CALTHORPE ESTATE CONSERVATION ENVELOPE'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'residential-loft-adaptation',
    slug: 'residential-loft-adaptation',
    projectNumber: '03',
    title: 'Contemporary Dormer Loft & Master Suite',
    subtitle: 'Domestic roof conversion with zinc-clad dormer and UK Building Regulations package',
    category: 'Loft Conversions',
    location: 'Solihull, West Midlands',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '38 m² usable floor plate',
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Transforming an underutilised roof space into a luxurious master bedroom suite with walk-in dressing wardrobe and private ensuite bathroom, fully compliant with UK Building Regulations Parts B (Fire), E (Acoustics), and L (Thermal).',
    brief: 'Maximize natural light and headroom in the attic without dominating the roofline, providing an ensuite bathroom and dedicated quiet work area while preserving existing landing circulation.',
    approach: 'We designed a crisp flat-roof rear dormer clad in standing-seam zinc with a frameless floor-to-ceiling Juliet window. Flanked by high-performance acoustic stud walls, the suite provides complete sound privacy from the active family bedrooms below.',
    specifications: {
      area: '38 m² usable loft floor area',
      duration: '4 months design, Building Control sign-off & build',
      servicesProvided: [
        'Measured Building Survey',
        'Building Regulations Full Plans Package',
        'Structural Steel Beam Sizing & Trimming',
        'Acoustic & Fire Compartmentalization Specification'
      ],
      localAuthority: 'Solihull Metropolitan Borough Council',
      materials: [
        'Anthracite standing-seam zinc dormer cladding',
        'Warm-roof construction with 140mm PIR rigid insulation',
        'Gyproc SoundBloc dual-layer acoustic stud partitions',
        'Frameless glass Juliet balcony and aluminum casements',
        'Concealed pocket doors to ensuite and dressing room'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
        caption: 'Master Loft Bedroom with Integrated Eaves Joinery & Juliet Glazing',
        type: 'photo'
      },
      {
        source: '/drawings/residential-loft-dormer-technical-elevations.svg',
        caption: 'Technical Drawing Package: Proposed Rear/Side Elevations & Verge Details',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-res-01',
        drawingNumber: 'LOFT-01',
        title: 'Proposed Elevations, 1:10 Verge Detail & Statutory Schedules',
        scale: '1:100 & 1:10 @ A1',
        fileSource: 'residential-loft-dormer-technical-elevations.pdf',
        type: 'Detail',
        image: '/drawings/residential-loft-dormer-technical-elevations.svg',
        description: 'Proposed rear elevation, side gable elevation, 1:10 flat-roof verge construction, and statutory compliance schedules for Parts B, E, F, K, L, and P.',
        annotations: [
          'PROPOSED REAR ELEVATION (38m² LOFT AREA)',
          'FLAT ROOF VERGE CONSTRUCTION SCALE 1:10',
          'FD30S NOTE & ROCKWOOL FIRE BARRIERS',
          'INTERNAL STUDWORK WALLS : PART E SOUND'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'solihull-courtyard-villa',
    slug: 'solihull-courtyard-villa',
    projectNumber: '04',
    title: 'Solihull Courtyard Villa',
    subtitle: 'New-build bespoke private home arranged around a tranquil central atrium',
    category: 'New Builds',
    location: 'Solihull, West Midlands',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Client',
    area: '420 m²',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'A bespoke contemporary single-family home in Solihull, arranged in a quadrant around a central contemplative water courtyard. The design achieves total privacy from surrounding plots while flooding every living space with changing natural light.',
    brief: 'Create a private, peaceful family sanctuary incorporating five ensuite bedrooms, open-plan entertaining wings, a dedicated home office, and an integrated wellness garden.',
    approach: 'By orienting primary living functions around an internal glazed atrium cloister with a specimen Japanese Maple and reflecting pool, we eliminated the need for street-facing windows, creating a fortress of calm insulated by thick stone walls and deep overhangs.',
    specifications: {
      area: '420 m² internal floor area',
      duration: '16 months turnkey design & delivery',
      servicesProvided: [
        'Site Feasibility & Topographical Analysis',
        'New-Build Full Planning Permission',
        'Building Regulations & Full Technical Construction Package',
        'Passive Solar Envelope & Renewable Energy Strategy'
      ],
      localAuthority: 'Solihull Metropolitan Borough Council',
      materials: [
        'Split-face Cotswold limestone masonry',
        'Dark anodised architectural aluminium fenestration',
        'Green sedum roof with integrated 14kW solar PV array',
        'Continuous poured terrazzo flooring',
        'Cedar soffits with concealed perimeter linear illumination'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
        caption: 'South-facing Living Wing opening onto Landscaped Courtyard',
        type: 'photo'
      },
      {
        source: '/drawings/solihull-villa-courtyard-plan.svg',
        caption: 'Atrium Layout & Quadrant Circulation Plan',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-scv-01',
        drawingNumber: 'SCV-01',
        title: 'Quadrant Ground Floor Plan & Atrium Water Feature',
        scale: '1:100 @ A1',
        fileSource: 'solihull-courtyard-villa-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/solihull-villa-courtyard-plan.svg',
        description: 'Complete spatial organization showing North gallery, East wellness wing, West sleeping quarter, and South open-plan entertaining pavilion.',
        annotations: [
          'CENTRAL CONTEMPLATIVE WATER CLOISTER',
          'CRAFTSMAN LIMESTONE WALL WITH INTEGRATED REVEALS',
          'TERRAZZO FINISHED FLOOR DATUM THROUGHOUT',
          'CONCEALED POCKET SLIDING SCREEN APERTURES'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'jewellery-quarter-lofts',
    slug: 'jewellery-quarter-lofts',
    projectNumber: '05',
    title: 'Jewellery Quarter Heritage Lofts',
    subtitle: 'Industrial heritage adaptive reuse into dual live-work duplexes',
    category: 'Renovations',
    location: 'Jewellery Quarter, Birmingham',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Developer & Craft Maker',
    area: '310 m²',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Sensitively converting a Grade II curtilage 19th-century silversmith workshop in Birmingham’s historic Jewellery Quarter into two multi-level live-work artist studios and residential duplexes, preserving original timber roof trusses and crittall windows.',
    brief: 'Restore original brick and cast-iron industrial components, secure listed building and conservation approvals, and create light-filled double-height residences with mezzanine creative workspaces.',
    approach: 'We exposed the pitch-pine king-post trusses and stabilized the lime-mortared brickwork. A new black raw-steel spiral staircase and cantilevered steel mezzanine float within the voluminous shell, celebrating industrial craftsmanship with crisp contemporary detailing.',
    specifications: {
      area: '310 m² total across 2 duplexes',
      duration: '12 months listed building consent & fit-out',
      servicesProvided: [
        'Listed Building Consent & Conservation Area Application',
        'Historic Fabric Condition Survey & Structural Consolidation',
        'Acoustic Separation Design for Live-Work Typologies (Part E)',
        'Custom Steel Mezzanine & Staircase Architectural Detailing'
      ],
      localAuthority: 'Birmingham City Council Conservation Department',
      materials: [
        'Original sand-blasted 1890s Birmingham red brickwork',
        'Restored pitch-pine structural roof trusses',
        'Hot-rolled mild steel plates with beeswax protective seal',
        'Slimline thermally-broken Crittall steel double-glazed windows',
        'Cast iron column supports with original foundry stamps'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
        caption: 'Double-Height Studio Interior with Restored King-Post Trusses',
        type: 'photo'
      },
      {
        source: '/drawings/birmingham-architectural-plans.svg',
        caption: 'Mezzanine & Heritage Loft Layout Plan',
        type: 'vector-drawing'
      }
    ],
    drawings: [
      {
        id: 'dwg-jql-01',
        drawingNumber: 'JQL-01',
        title: 'Heritage Mezzanine Plan & Structural Steel Interventions',
        scale: '1:50 @ A1',
        fileSource: 'jewellery-quarter-lofts-plan.pdf',
        type: 'Floor Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'General arrangement showing the independent structural steel mezzanine floating clear of historic brick perimeter walls.',
        annotations: [
          'RESTORED HISTORIC SILVERSMITH WORKSHOP SHELL',
          'SUSPENDED HOT-ROLLED STEEL MEZZANINE FLOOR',
          'ACOUSTIC TWIN-LEAF STUDWORK PARTITIONS'
        ]
      }
    ],
    featured: true
  },
  {
    id: 'bournville-interior-architecture',
    slug: 'bournville-interior-architecture',
    projectNumber: '06',
    title: 'Bournville Open-Plan Kitchen & Living Architecture',
    subtitle: 'Bespoke joinery, architectural lighting & garden threshold design',
    category: 'Interiors',
    location: 'Bournville, Birmingham',
    country: 'United Kingdom',
    year: '2024',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '120 m²',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'An interior architectural transformation creating a cohesive culinary and entertaining heart for an arts-influenced family home in Bournville. Custom fluted timber cabinetry, monolithic quartzite island, and concealed architectural LED coves deliver tactile elegance.',
    brief: 'Design a bespoke kitchen, hidden pantry, cocktail cabinet, and dining space that connects effortlessly with an outdoor garden dining terrace, utilizing natural organic materials.',
    approach: 'We positioned a 3.8m Taj Mahal quartzite island as the social anchor of the room, flanked by floor-to-ceiling smoked oak cabinetry that conceals secondary preparation pantries. Continuous microcement floors extend through minimal sliding glass doors to the exterior.',
    specifications: {
      area: '120 m² ground floor suite',
      duration: '5 months interior design & execution',
      servicesProvided: [
        'Interior Architectural Space Planning',
        'Bespoke Cabinetry & Joinery Detailing',
        'Architectural Lighting & Switching Schedule',
        'Material & Sanitaryware Specification'
      ],
      materials: [
        'Taj Mahal polished natural quartzite',
        'Smoked European oak bespoke joinery',
        'Warm white lime-wash plaster walls',
        'Brushed patinated brass tapware and handles'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80',
        caption: 'Monolithic Island and Smoked Oak Joinery with Integrated Lighting',
        type: 'photo'
      },
      {
        source: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
        caption: 'Dining Perspective looking towards Garden Patio',
        type: 'photo'
      }
    ],
    drawings: [
      {
        id: 'dwg-bia-01',
        drawingNumber: 'BIA-01',
        title: 'Kitchen Joinery Elevations & Lighting Layout Plan',
        scale: '1:20 @ A1',
        type: 'Detail',
        image: '/drawings/harborne-house-plans.svg',
        description: 'Millimeter-accurate elevations detailing drawer internals, appliance integration, and lighting recess profiles.'
      }
    ],
    featured: true
  },
  {
    id: 'barnt-green-passive-house',
    slug: 'barnt-green-passive-house',
    projectNumber: '07',
    title: 'Barnt Green Eco Residence',
    subtitle: 'Low-energy timber frame new-build home in a wooded green belt setting',
    category: 'New Builds',
    location: 'Barnt Green, Worcestershire',
    country: 'United Kingdom',
    year: '2025',
    status: 'Planning Approved',
    clientType: 'Private Self-Builder',
    area: '350 m²',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'An advanced eco-home nestled into the wooded hillside of Barnt Green. The design employs a super-insulated cross-laminated timber (CLT) structure with triple glazing and integrated earth-tube geothermal heating and cooling.',
    brief: 'Deliver an energy-positive bespoke home with low landscape impact within a green belt setting, maximizing south-facing woodland views.',
    approach: 'We sculpted the building form into the natural contours of the hill with a low-slung sedum wildflower roof, earning planning approval by demonstrating exceptional architectural quality under Green Belt policy.',
    specifications: {
      area: '350 m²',
      duration: '6 months planning & Passivhaus energy modeling',
      servicesProvided: [
        'New-Build Architectural Design',
        'Green Belt Planning Justification',
        'Photorealistic 3D Visualisations',
        'Passivhaus Energy Performance Specification'
      ],
      localAuthority: 'Bromsgrove District Council',
      materials: [
        'Cross-Laminated Timber (CLT) superstructure',
        'Dark treated vertical spruce timber siding',
        'Triple-glazed Passivhaus certified timber-aluminium windows',
        'Extensive bio-diverse wildflower living roof'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1600&q=80',
        caption: 'Woodland Elevation Render in Autumn Twilight',
        type: 'photo'
      }
    ],
    drawings: [
      {
        id: 'dwg-bgp-01',
        drawingNumber: 'BGP-01',
        title: 'Passive Solar Envelope & Hillside Setting Out Plan',
        scale: '1:100 @ A1',
        type: 'Site Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'Solar orientation, earth-sheltered north wall, and southern solar collection glazing.'
      }
    ],
    featured: true
  },
  {
    id: 'sutton-coldfield-studio-house',
    slug: 'sutton-coldfield-studio-house',
    projectNumber: '08',
    title: 'Sutton Coldfield Split-Level Remodel',
    subtitle: 'Mid-century residential remodelling & timber garden studio',
    category: 'Renovations',
    location: 'Sutton Coldfield, West Midlands',
    country: 'United Kingdom',
    year: '2023',
    status: 'Completed',
    clientType: 'Private Homeowner',
    area: '290 m²',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80',
    heroImage: 'https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&w=1600&q=80',
    heroType: 'photo',
    description: 'Transforming a tired 1960s suburban home into an open split-level architectural residence with an auxiliary timber-clad garden design studio, maximising garden views and natural daylight.',
    brief: 'Reorganise disjointed floor levels, expand kitchen and family living areas towards the private rear woodland, and build a standalone home office studio with separate client access.',
    approach: 'We created cascading internal terraces connecting the upper living room down to an expansive kitchen-diner. A separate pavilion clad in vertical Siberian larch sits amongst mature trees, serving as a dedicated creative workspace.',
    specifications: {
      area: '290 m² total (240 m² house, 50 m² garden studio)',
      duration: '9 months planning & construction',
      servicesProvided: [
        'Architectural Concept & Spatial Restructuring',
        'Permitted Development & Planning Approvals',
        'Building Regulations Compliance Package',
        'Garden Studio Off-Grid Electrics & Solar Detailing'
      ],
      localAuthority: 'Birmingham City Council (Sutton Coldfield)',
      materials: [
        'Off-white smooth architectural render & blackened timber',
        'Anthracite aluminium picture windows with deep timber sills',
        'Solid engineered white oak flooring',
        'Siberian larch open-jointed rainscreen cladding'
      ]
    },
    gallery: [
      {
        source: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1600&q=80',
        caption: 'Split-level Living Volume with Full-Height Garden Picture Windows',
        type: 'photo'
      }
    ],
    drawings: [
      {
        id: 'dwg-scs-01',
        drawingNumber: 'SCS-01',
        title: 'Split-Level Spatial Plan & Garden Pavilion Footprint',
        scale: '1:50 @ A1',
        type: 'Floor Plan',
        image: '/drawings/birmingham-architectural-plans.svg',
        description: 'Level shifts, integrated storage staircases, and standalone garden studio positioning.'
      }
    ],
    featured: false
  }
];
