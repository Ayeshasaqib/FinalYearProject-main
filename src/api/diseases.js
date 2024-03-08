const POPULAR_PLANTS = [
    // {
    //   id: '1',
    //   name: 'Scab',
    //   imageUri: require('../../images/Scab.jpg'),
    //   symptoms:'A healthy apple leaf displays a vibrant green color, smooth texture, and uniform appearance. It is free from any visible signs of disease, such as spots, lesions, or discoloration. Healthy leaves are essential for photosynthesis and overall tree vigor'  ,
    //   causes:'Leaf diseases in apple trees can be caused by various factors, including fungal pathogens, bacterial infections, environmental stressors, and poor orchard management practices. Fungal diseases often thrive in humid conditions, while bacterial infections can spread through contaminated equipment or insect vectors',
    //   remedies:'Fungicide Application: Use fungicides specific to common apple leaf diseases to prevent infections and maintain leaf health. Proper Pruning: Regularly prune apple trees to improve air circulation and reduce humidity levels, which can help prevent the spread of diseases. Sanitation Practices: Remove and destroy any infected leaves or branches promptly to prevent the spread of pathogens within the orchard',
    //    },
    // {
    //   id: '2',
    //   name: 'Brown Rot',
    //   imageUri: require('../../images/brownrot.jpg'), // Replace with actual image path or require statement
    //   symptoms:'A healthy apple leaf displays a vibrant green color, smooth texture, and uniform appearance. It is free from any visible signs of disease, such as spots, lesions, or discoloration. Healthy leaves are essential for photosynthesis and overall tree vigor'  ,
    //   causes:'Leaf diseases in apple trees can be caused by various factors, including fungal pathogens, bacterial infections, environmental stressors, and poor orchard management practices. Fungal diseases often thrive in humid conditions, while bacterial infections can spread through contaminated equipment or insect vectors',
    //   remedies:'Fungicide Application: Use fungicides specific to common apple leaf diseases to prevent infections and maintain leaf health. Proper Pruning: Regularly prune apple trees to improve air circulation and reduce humidity levels, which can help prevent the spread of diseases. Sanitation Practices: Remove and destroy any infected leaves or branches promptly to prevent the spread of pathogens within the orchard',
    //    },
    {
      id: '3',
      name: 'Healthy Apple',
      imageUri: require('../../images/healthy-apple.jpg'), // Replace with actual image path or require statement
      symptoms:'A healthy apple leaf displays a vibrant green color, smooth texture, and uniform appearance. It is free from any visible signs of disease, such as spots, lesions, or discoloration. Healthy leaves are essential for photosynthesis and overall tree vigor'  ,
      causes:'Leaf diseases in apple trees can be caused by various factors, including fungal pathogens, bacterial infections, environmental stressors, and poor orchard management practices. Fungal diseases often thrive in humid conditions, while bacterial infections can spread through contaminated equipment or insect vectors',
      remedies:'Fungicide Application: Use fungicides specific to common apple leaf diseases to prevent infections and maintain leaf health. Proper Pruning: Regularly prune apple trees to improve air circulation and reduce humidity levels, which can help prevent the spread of diseases. Sanitation Practices: Remove and destroy any infected leaves or branches promptly to prevent the spread of pathogens within the orchard',
       },
    {
        id: '4',
        name: 'General Apple Scab',
        imageUri: require('../../images/Apple-scab.png'), // Replace with actual image path or require statement
        symptoms:'Apple scab, caused by the fungus Venturia inaequalis, manifests as olive-green to black lesions on apple tree leaves. These lesions may have a velvety texture and can lead to leaf distortion and premature leaf drop. Infected fruit may develop scab-like blemishes, affecting both appearance and quality',
      causes:'Apple scab is a serious disease affecting apple and crabapple trees. It spreads quickly in warm, humid conditions, especially during spring rains. The fungus overwinters in fallen leaves and infects new growth in the spring through spores, leading to recurring infections',
      remedies:'Fungicide Treatment: Apply fungicides specifically formulated for apple scab control following recommended guidelines to manage the disease effectively Pruning: Prune apple trees to improve air circulation and sunlight exposure, reducing humidity levels that favor fungal growth. Sanitation: Remove and destroy fallen leaves to reduce overwintering spores and prevent disease recurrence in the following season',
      },
      {
        id: '5',
        name: 'Serious Apple Scab',
        imageUri: require('../../images/serious-apple-scab.jpg'), // Replace with actual image path or require statement
        symptoms:'Serious apple scab, caused by the fungus Venturia inaequalis, manifests as olive-green to black lesions on apple tree leaves. These lesions may have a velvety texture and can lead to leaf distortion and premature leaf drop. Infected fruit may develop scab-like blemishes, affecting both appearance and quality',
      causes:'Apple scab is a serious disease affecting apple and crabapple trees. It spreads quickly in warm, humid conditions, especially during spring rains. The fungus overwinters in fallen leaves and infects new growth in the spring through spores, leading to recurring infections',
      remedies:'Fungicide Treatment: Apply fungicides specifically formulated for apple scab control following recommended guidelines to manage the disease effectively Pruning: Prune apple trees to improve air circulation and sunlight exposure, reducing humidity levels that favor fungal growth. Sanitation: Remove and destroy fallen leaves to reduce overwintering spores and prevent disease recurrence in the following season',
      },
      {
        id: '6',
        name: 'Apple Gray Spot',
        imageUri: require('../../images/gray-spot.jpg'), // Replace with actual image path or require statement
        symptoms:'Apple gray spot, caused by the fungus Podosphaera leucotricha, manifests as gray-white powdery patches on apple tree leaves. Leaves and shoots may turn brown in mid-summer. Infected fruit may develop small, sunken spots',
      causes:'Apple gray spot is a common disease affecting apple trees. The fungus overwinters in fallen leaves and infects new growth in the spring through spores, leading to recurring infections',
      remedies:'Fungicide Treatment: Apply fungicides specifically formulated for apple gray spot control following recommended guidelines to manage the disease effectively Pruning: Prune apple trees to improve air circulation and sunlight exposure, reducing humidity levels that favor fungal growth. Sanitation: Remove and destroy fallen leaves to reduce overwintering spores and prevent disease recurrence in the following season',
      },
      {
        id: '7',
        name: 'General Cedar Apple Rust',
        imageUri: require('../../images/GeneralCedarAppleRust.jpg'), // Replace with actual image path or require statement
        symptoms:'On apple trees, Cedar Apple Rust first appears as small greenish-yellow spots on leaves, which gradually enlarge and change color to orange-yellow Leaf spots may have a bright red border, and infected fruit may appear mottled or distorted',
      causes:'Cedar Apple Rust is a fungal disease caused by the fungus Gymnosporangium juniperi-virginianae. The disease is most common on apple and crabapple trees. The fungus overwinters as a reddish-brown gall on young twigs of various juniper species In early spring, during wet weather, these galls swell and release bright orange spores, which infect apple trees',
      remedies:'Fungicide Treatment: Apply fungicides specifically formulated for Cedar Apple Rust control following recommended guidelines to manage the disease effectively Pruning: Prune apple trees to improve air circulation and sunlight exposure, reducing humidity levels that favor fungal growth Cultural Practices: Plant resistant apple varieties and practice proper pruning techniques to reduce the risk of disease development',
      },
      {
        id: '8',
        name: 'Serious Cedar Apple Rust',
        imageUri: require('../../images/Severe-Apple-Cedar-Rust.jpg'), // Replace with actual image path or require statement
        symptoms:'On apple trees, Cedar Apple Rust first appears as small greenish-yellow spots on leaves, which gradually enlarge and change color to orange-yellow Leaf spots may have a bright red border, and infected fruit may appear mottled or distorted',
      causes:'Cedar Apple Rust is a fungal disease caused by the fungus Gymnosporangium juniperi-virginianae. The disease is most common on apple and crabapple trees. The fungus overwinters as a reddish-brown gall on young twigs of various juniper species In early spring, during wet weather, these galls swell and release bright orange spores, which infect apple trees',
      remedies:'Fungicide Treatment: Apply fungicides specifically formulated for Cedar Apple Rust control following recommended guidelines to manage the disease effectively Pruning: Prune apple trees to improve air circulation and sunlight exposure, reducing humidity levels that favor fungal growth Cultural Practices: Plant resistant apple varieties and practice proper pruning techniques to reduce the risk of disease development',
      },
      {
        id: '9',
        name: 'Early Blight',
        imageUri: require('../../images/early-blight.jpg'), // Replace with actual image path or require statement
        symptoms:'Early blight, caused by the fungus Alternaria solani, first appears on the lower, older leaves as small brown spots with concentric rings that form a "bulls eye" pattern As the disease matures, it spreads to younger leaves and can cause severe leaf drop',
      causes:'Early blight is a common disease affecting tomatoes, potatoes, and other plants. The fungus overwinters in plant debris and infects new growth in the spring through spores, leading to recurring infections',
      remedies:'Fungicide Treatment: Apply fungicides specifically formulated for early blight control following recommended guidelines to manage the disease effectively Cultural Practices: Implement proper agricultural practices such as crop rotation, residue management, and planting resistant varieties to reduce the risk of disease development Sanitation: Remove and destroy infected leaves and plant debris to prevent the spread of the fungus within the crop',
      },
      {
        id: '10',
        name: 'Bacterial Spot',
        imageUri: require('../../images/bacterial-spot.jpg'), // Replace with actual image path or require statement
        symptoms:'On tomato leaves, bacterial spot initially appears as small, round, water-soaked spots that gradually turn dark-brown or black and are surrounded by a yellow halo As the disease progresses, extensive leaf yellowing and leaf loss may occur',
      causes:'Bacterial spot is caused by four closely related bacteria: Xanthomonas vesicatoria, X. euvesicatoria, X. perforans, and X. gardneri The bacteria infect tomato plants through natural openings or wounds, such as leaf scars, stomata, or pruning wounds, and thrive in warm, humid conditions',
      remedies:'Bactericides: Apply bactericides specifically formulated for controlling bacterial spot following recommended guidelines to manage the disease effectively Cultural Practices: Implement proper agricultural practices such as pruning to improve air circulation and reduce humidity levels, which can help prevent the spread of the disease Sanitation: Remove and destroy infected leaves and fruit to prevent the spread of the bacteria within the tomato planting',
      },
      {
        id: '11',
        name: 'Late Blight',
        imageUri: require('../../images/lateblight.jpg'), // Replace with actual image path or require statement
        symptoms:'Late blight symptoms on tomato plants include leaf, stem, and fruit lesions that initially have a water-soaked appearance and later turn brown. The lesions can be found on various parts of the plant and may lead to rapid plant deterioration',
      causes:'Late blight is caused by the oomycete pathogen Phytophthora infestans. This pathogen thrives in cool, wet conditions and can spread rapidly in humid environments. Spores are easily carried by wind or water, leading to widespread infections in tomato crops',
      remedies:'Fungicide Treatment: Apply fungicides specifically designed for late blight control following recommended guidelines to manage the disease effectively    Cultural Practices: Implement proper agricultural practices such as spacing plants for good air circulation and avoiding overhead irrigation to reduce humidity levels that favor disease developmentSanitation: Remove and destroy infected plant material to prevent the spread of the disease within the tomato crop and neighboring plants ',
      },
      {
        id: '12',
        name: 'Leaf Mold',
        imageUri: require('../../images/tomato-leaf-mold.jpg'), // Replace with actual image path or require statement
        symptoms:'Leaf mold on tomato plants is characterized by yellowing leaves with fuzzy olive spores on the undersides. The disease typically starts as yellow spots on the upper leaf surface, progressing to a fuzzy white or gray mold growth on the lower leaf surface. Infected leaves may become twisted or distorted',
      causes:'Leaf mold in tomatoes is caused by the fungal pathogen Passalora fulva (syn. Cladosporium fulvum). This fungus thrives in warm, humid conditions and can spread rapidly in environments with poor air circulation. It commonly affects tomato plants grown in high tunnels or greenhouses',
      remedies:'Fungicide Treatment: Apply fungicides specifically formulated for leaf mold control following recommended guidelines to manage the disease effectively Cultural Practices: Improve air circulation by spacing plants adequately and avoiding overhead irrigation to reduce humidity levels that favor fungal growth Sanitation: Remove and destroy infected leaves to prevent the spread of spores within the tomato crop and neighboring plants',
      },
      {
        id: '13',
        name: 'Septoria Leaf Spot',
        imageUri: require('../../images/septoria-leaf-spot.jpg'), // Replace with actual image path or require statement
        symptoms:'Septoria leaf spot on tomato plants presents as small, circular spots with dark centers and lighter borders on the lower leaves. As the disease progresses, the spots may enlarge and merge, causing leaf yellowing and premature defoliation. Infected fruit may also develop lesions',
      causes:'Septoria leaf spot is caused by the fungus Septoria lycopersici. This pathogen thrives in warm, humid conditions and can overwinter in plant debris. The disease spreads through splashing water or contact with infected plant material, leading to widespread infections in tomato crops',
      remedies:'Sanitation: Remove and destroy infected leaves to prevent the spread of spores within the tomato crop and neighboring plants Improving Air Circulation: Enhance air circulation around plants by proper spacing and pruning to reduce humidity levels that favor fungal growth Fungicide Treatment: Apply fungicides specifically formulated for Septoria leaf spot control following recommended guidelines to manage the disease effectively',
      },
      {
        id: '14',
        name: 'Spider Mites',
        imageUri: require('../../images/Spider-Mite.jpg'), // Replace with actual image path or require statement
        symptoms:'Spider mites on tomato plants cause damage that includes stippling (tiny yellow dots) on leaves, webbing on the undersides of leaves, and leaf discoloration. Severe infestations can lead to leaf yellowing, drying out, and premature leaf drop, ultimately affecting plant vigor and fruit quality',
      causes:'Spider mites are common pests that thrive in warm, dry conditions. They feed on plant sap by piercing leaf cells, leading to the characteristic stippling and damage observed on tomato leaves. Spider mites can rapidly reproduce and infest tomato plants under favorable environmental conditions      ',
      remedies:'Horticultural Oils: Use horticultural oils or insecticidal soaps to control spider mite populations on tomato plants Water Sprays: Regularly spray plants with a strong stream of water to dislodge spider mites and reduce their numbers Cultural Practices: Implement proper plant hygiene, including removing weeds and debris around tomato plants to reduce spider mite habitat. Additionally, consider introducing natural predators like ladybugs to help control spider mite populations',
      },
      {
        id: '15',
        name: 'Target Spot',
        imageUri: require('../../images/target-spot.jpg'), // Replace with actual image path or require statement
        symptoms:'Target spot on tomato plants appears as irregularly shaped spots with a yellow margin on the undersides of leaves. The spots are typically less than 1 mm in size and may be surrounded by a darker brown or black center As the disease progresses, the spots may merge, causing leaf yellowing and premature defoliation',
      causes:'Target spot is caused by the fungus Corynespora cassiicola. This pathogen thrives in warm, humid conditions and can spread rapidly in environments with poor air circulation. It commonly affects tomato plants grown in high tunnels or greenhouses',
      remedies:'Fungicide Treatment: Apply fungicides specifically formulated for target spot control following recommended guidelines to manage the disease effectively Cultural Practices: Improve air circulation by spacing plants adequately and avoiding overhead irrigation to reduce humidity levels that favor fungal growth Sanitation: Remove and destroy infected leaves to prevent the spread of spores within the tomato crop and neighboring plants ',
      },
   {
      id: '16',
      name: 'Mosaic Virus',
      imageUri: require('../../images/mosaic-virus.jpeg'), // Replace with actual image path or require statement
      symptoms:'Mosaic virus on tomato plants presents with yellow, white, or green streaks, spots, or stripes on the foliage. Leaves may become wrinkled, curled, or smaller than normal. Additionally, pronounced yellowing along the veins, stunted growth, and reduced yields are common symptoms of mosaic virus infection',
      causes:'Mosaic virus in tomatoes is caused by various strains of Tobacco mosaic virus (TMV) or Tomato mosaic virus (ToMV). These viruses can be transmitted through infected plant debris, contaminated tools, or by pests like aphids. Once infected, the virus affects the plants ability to photosynthesize and grow properly',
      remedies:'Preventive Measures: Practice strict sanitation by removing and destroying infected plants to prevent the spread of the virus to healthy plants Resistant Varieties: Consider planting mosaic-resistant tomato varieties to reduce the risk of infection and minimize the impact of the disease Vector Control: Manage insect vectors like aphids through cultural practices or insecticides to reduce the spread of mosaic virus in tomato crops',
    },
    {
        id: '17',
        name: 'Yellow Leaf Curl Virus',
        imageUri: require('../../images/Tomato-Leaf-Curl.jpg'), // Replace with actual image path or require statement
        symptoms:'Yellow leaf curl virus (TYLCV) in tomatoes presents with a range of symptoms, including marginal leaf yellowing, upward or downward leaf cupping, reduction in leaf size, flower and/or fruit drop, and stunted plant growth Infected plants may appear yellow and stunted overall, with mottled light and dark green on leaves, and leaves may be curled, malformed, or reduced in size',
      causes:'TYLCV is caused by the begomovirus, a group of plant viruses transmitted by whiteflies. The virus can be spread through infected plant debris, contaminated tools, or by whiteflies. Once infected, the virus affects the plants ability to photosynthesize and grow properly',
      remedies:'Preventive Measures: Practice strict sanitation by removing and destroying infected plants to prevent the spread of the virus to healthy plants Vector Control: Manage insect vectors like whiteflies through cultural practices or insecticides to reduce the spread of TYLCV in tomato crop  Resistant Varieties: Consider planting TYLCV-resistant tomato varieties to reduce the risk of infection and minimize the impact of the disease',
      },
   {
      id: '18',
      name: 'Healthy Corn',
      imageUri: require('../../images/healthy-corn.jpg'), // Replace with actual image path or require statement
      symptoms:'A healthy corn leaf appears vibrant green in color, with a smooth texture and uniform appearance. It is free from any visible signs of disease, such as lesions, spots, or discoloration. Healthy leaves are essential for optimal photosynthesis and overall plant growth',
      causes:'Leaf diseases in corn can be caused by various factors, including fungal pathogens like grey leaf spot or common rust, bacterial infections, environmental stressors, and poor agricultural practices. Fungal diseases often thrive in warm, humid conditions, while bacterial infections can spread through contaminated equipment or insect vectors',
      remedies:'Fungicide Application: Use fungicides specific to common corn leaf diseases to prevent infections and maintain leaf health. Cultural Practices: Implement proper agricultural practices such as crop rotation, residue management, and planting resistant varieties to reduce the risk of disease development. Regular Monitoring: Inspect corn plants regularly for early signs of disease and take prompt action to prevent the spread of pathogens within the crop',
    },
    {
        id: '19',
        name: 'Blight',
        imageUri: require('../../images/blight.jpg'), // Replace with actual image path or require statement
        symptoms:'Northern corn leaf blight presents as tan or brown oblong lesions on the upper leaf surface. These lesions can be irregular in shape and size, ranging from small spots to large blotches. The disease can cause significant grain loss if susceptible hybrids are infected before silking',
      causes:'Northern corn leaf blight is caused by the fungus Exserohilum turcicum, which infects corn leaves through natural openings or wounds. The disease is favored by warm, humid conditions and can spread rapidly under these conditions',
      remedies:'Fungicides: Apply fungicides specifically formulated for controlling northern corn leaf blight. However, the effectiveness of fungicides may vary depending on the severity of the infectio Cultural Practices: Implement proper agricultural practices, such as good sanitation, proper irrigation, and proper planting density, to reduce the risk of disease developmen Chemical Controls: Use copper-based fungicides as a preventative measure against northern corn leaf blight. However, the effectiveness of these treatments may vary depending on the specific fungus causing the disease',
      },
      {
        id: '20',
        name: 'Common Rust',
        imageUri: require('../../images/common-rust.jpg'), // Replace with actual image path or require statement
        symptoms:'Common rust on corn leaves manifests as rust-colored to dark brown elongated pustules on both leaf surfaces. These pustules contain rust spores (urediniospores) that give the leaves a characteristic appearance. Severe infections can lead to leaf discoloration, reduced photosynthesis, and overall plant stress',
      causes:'Common rust of corn is caused by the fungus Puccinia sorghi and occurs every growing season. This disease is seldom a concern in hybrid corn varieties but can affect susceptible cultivars under favorable environmental conditions. The fungus infects corn leaves through spores and thrives in warm, humid environments',
      remedies:'Fungicides: Apply fungicides specifically formulated for controlling common rust on corn leaves following recommended application guidelines. Cultural Practices: Implement proper agricultural practices such as crop rotation and residue management to reduce the risk of disease development. Resistant Varieties: Plant corn hybrids that are resistant to common rust to minimize the impact of the disease on crop yield and quality',
      },
      {
        id: '21',
        name: 'Grey Leaf Spot',
        imageUri: require('../../images/Gray_leaf_spot.png'), // Replace with actual image path or require statement
        symptoms:'Grey leaf spot on corn leaves is characterized by small, rectangular to oval lesions with yellow halos. These lesions are initially tan and may later turn gray as the disease progresses. Severe infections can cause extensive leaf damage, reduced photosynthesis, and yield losses in corn crops',
      causes:'Grey leaf spot is caused by the fungus Cercospora zeae-maydis. This pathogen infects corn leaves through spores and thrives in warm, humid conditions. The disease is a common fungal infection in the U.S. corn belt and can significantly impact corn production under favorable environmental conditions',
      remedies:'Fungicides: Apply fungicides specifically designed to control grey leaf spot on corn leaves following recommended application guidelines. Cultural Practices: Implement proper agricultural practices such as crop rotation, residue management, and planting resistant varieties to reduce the risk of disease development. Resistant Varieties: Plant corn hybrids that are resistant to grey leaf spot to minimize the impact of the disease on crop yield and quality',
      },
      {
        id: '22',
        name: 'Cordana',
        imageUri: require('../../images/Cordana-leaf-spot.jpg'), // Replace with actual image path or require statement
        symptoms:'Cordana leaf spot (CLS) on banana leaves presents as small, brown, circular spots with a darker center. These spots can be found on both the upper and lower surfaces of the leaves. In severe cases, the spots may coalesce, forming larger, irregular blotches. The disease can cause leaf yellowing and premature leaf drop, leading to reduced photosynthesis and overall plant health',
      causes:'Cordana leaf spot is caused by two fungi species, Colletotrichum musae and Colletotrichum gloeosporioides. These fungi infect banana leaves through natural openings or wounds, such as petioles, leaf sheaths, and leaf tips. The disease is favored by high humidity and warm temperatures, making it a significant problem in tropical and subtropical regions',
      remedies:'Cultural Practices: Implement proper agricultural practices, such as good sanitation, proper irrigation, and proper planting density, to reduce the risk of disease development Fungicides: Apply fungicides specifically labeled for Cordana leaf spot control. However, the effectiveness of fungicides may vary depending on the severity of the infection Chemical Controls: Use copper-based fungicides as a preventative measure against Cordana leaf spot. However, the effectiveness of these treatments may vary depending on the specific fungus causing the disease',
      },
      {
        id: '23',
        name: 'Healthy Banana',
        imageUri: require('../../images/healthy-banana.jpg'), // Replace with actual image path or require statement
        symptoms:'A healthy banana leaf exhibits a vibrant green color, smooth texture, and uniform appearance. It is free from any visible signs of disease or pest infestation. Healthy leaves play a vital role in photosynthesis, supporting the overall growth and productivity of the banana plant',
      causes:'Leaf yellowing and wilting in banana plants can be caused by various factors, including fungal infections like Sigatoka leaf disease, bacterial wilt, or environmental stressors. Fungal diseases like Sigatoka can lead to yellowing of older leaves and wilting symptoms. Bacterial wilt, transmitted by insects or contaminated equipment, can also cause wilting and death of the entire canopy',
      remedies:'Fungicide Application: Use fungicides specific to fungal diseases like Sigatoka to prevent leaf yellowing and wilting. Sanitation Practices: Regularly inspect banana plants for signs of disease or pest infestation and promptly remove infected leaves to prevent the spread of pathogens. Proper Watering: Ensure consistent watering practices to maintain adequate soil moisture levels for healthy leaf growth. Optimal Light Exposure: Provide sufficient light exposure to banana plants to support photosynthesis and overall plant health'
     },
      {
        id: '24',
        name: 'Sigatoka',
        imageUri: require('../../images/sigatoka.jpg'), // Replace with actual image path or require statement
        symptoms:'Sigatoka leaf disease on banana leaves initially presents as light yellow or brownish-green streaks near the leaf tip or margin and along the midrib. As the disease progresses, these streaks develop into pale yellow spots between the leafs secondary veins. Eventually, the spots coalesce, forming larger lesions with dark centers and yellow halos. Severe infections can lead to extensive leaf damage, reduced photosynthesis, and decreased fruit yield',
      causes:'Sigatoka leaf disease is caused by the fungi Mycosphaerella fijiensis and Mycosphaerella musicola. These fungi infect banana leaves through spores spread by wind or rain. The disease thrives in warm, humid conditions, making it prevalent in tropical regions. Overcrowding of banana plants, poor air circulation, and high humidity levels contribute to the spread of Sigatoka leaf disease',
      remedies:'Fungicides: Apply fungicides specifically formulated for Sigatoka leaf disease control following recommended application guidelines. Cultural Practices: Implement proper orchard management practices such as pruning to improve air circulation and reduce humidity levels. Sanitation: Remove and destroy infected leaves to prevent the spread of the disease within the plantation. Preventive Measures: Regularly monitor banana plants for early signs of Sigatoka leaf disease and take prompt action to manage outbreaks',
      },
      {
        id: '25',
        name: 'Pestalotiopsis',
        imageUri: require('../../images/Pestalotiopsis.png'), // Replace with actual image path or require statement
        symptoms:'Pestalotiopsis leaf disease on banana leaves is characterized by the presence of yellow or pale brown oval- or eye-shaped spots near the leaf margins of lower leaves. These spots gradually enlarge, and their central area may become necrotic. As the disease progresses, the affected areas may develop a dark brown coloration, leading to extensive leaf damage. Severe infections can result in defoliation and reduced plant vigor',
      causes:'Pestalotiopsis leaf disease is caused by the fungus Pestalotiopsis microspora. This pathogen infects banana leaves through wounds or natural openings, such as stomata. The disease thrives in warm and humid conditions, making it prevalent in tropical regions where bananas are cultivated. Overcrowding of plants, poor air circulation, and high humidity levels contribute to the spread of Pestalotiopsis leaf disease',
      remedies:'Fungicides: Apply fungicides specifically formulated for controlling Pestalotiopsis leaf disease following recommended application guidelines. Cultural Practices: Implement proper orchard management practices such as pruning to improve air circulation and reduce humidity levels. Sanitation: Remove and destroy infected leaves to prevent the spread of the disease within the plantation. Preventive Measures: Regularly monitor banana plants for early signs of Pestalotiopsis leaf disease and take prompt action to manage outbreaks',
      },
      {
        id: '26',
        name: 'Anthracnose',
        imageUri: require('../../images/anthracnose-on-mango-leaves.jpg'), // Replace with actual image path or require statement
        symptoms:  'Symptoms include small, brown spots on leaves and fruit, often with a dark border. Causes are fungi that thrive in warm, wet conditions. Remedy: Prune and destroy or bury infected leaves, twigs, and branches during fall or winter. Apply liquid copper sprays and sulfur powders weekly, starting when foliage begins to develop in the early spring and continuing throughout the growing season',
        causes:'Fungal spores that overwinter in infected twigs or dead leaf litter.  Favorable environmental conditions, such as moist spring weather, which can lead to the production of new generations of spores from infected parts of new leaves',
        remedies:'Choosing resistant cultivars of susceptible landscape plants. Pruning and destroying or burying infected leaves, twigs, and branches during fall or winter. Applying liquid copper sprays and sulfur powders weekly starting when foliage begins to develop in the early spring and continuing throughout the growing season . Ensuring good tree vigor by proper watering, fertilizing, mulching, and pruning. Using preventative treatments with pesticides, but these may not reliably control the disease.'
      },
      {
        id: '27',
        name: 'Bacterial canker',
        imageUri: require('../../images/Bacterial-canker.jpg'), // Replace with actual image path or require statement
        symptoms:'Bacterial canker affects various parts of mango trees, including leaves, leaf stalks, stems, twigs, branches, and fruits. Initially, it produces water-soaked lesions that later develop into typical cankers. The disease is characterized by wilting symptoms in affected mango trees. Cankers may develop over areas of vascular discoloration, with the potential to exude gum from the stem',
        causes:'The bacterial pathogen Erwinia billingiae is responsible for causing bacterial canker in mango trees. This bacterium is systemic, widely distributed in the plant, and affects all parts of the trees. It is considered a pre-harvest disease that also impacts fruits. Bacterial canker of mango was first described in South Africa in 1915 and has since been reported in various regions worldwide',
        remedies:'Pruning: Prune and destroy infected leaves, twigs, and branches during fall or winter. Disinfection: Disinfect pruning tools with a bleach solution after each cut to prevent bacterial spread. Preventive Measures: Plant mango trees in well-drained soil and avoid overwatering to reduce moisture levels favorable for bacterial growth. Chemical Control: Copper-based fungicides can be used to manage bacterial canker; however, results may vary based on the severity of the infection',
      },
      {
        id: '28',
        name: 'Cutting weevil',
        imageUri: require('../../images/cutting_weevil.jpg'), // Replace with actual image path or require statement
        symptoms:'Cutting weevil disease on mango leaves presents as if the leaf has been cut with scissors, indicating distinct cutting patterns on the leaf surface. This damage is caused by the feeding behavior of the weevil larvae, resulting in visible cutting marks on the leaves',
        causes:'The cutting weevil, scientifically known as Deporaus marginatus Pascoe, is a type of weevil that feeds on mango leaves. The larvae of this weevil create characteristic cutting patterns on the leaves as they feed, leading to the observed symptoms. Understanding the life cycle and feeding habits of this weevil is crucial for effective management',
        remedies:'Monitoring: Regularly inspect mango trees for signs of cutting weevil damage, such as cut marks on leaves. Cultural Controls: Implement good orchard hygiene practices to reduce habitat for weevils and their larvae. Chemical Control: In severe infestations, insecticides can be used to manage cutting weevils; however, it is essential to follow recommended application guidelines and consider environmental impact',
      },
   {
      id: '29',
      name: 'Sooty mold',
      imageUri: require('../../images/Sooty-mold.jpg'), // Replace with actual image path or require statement
      symptoms:'Sooty mold on mango leaves appears as a black, powdery fungal growth on the surface. This mold is often secondary to insect infestations that excrete honeydew, providing a substrate for the mold to grow. The presence of sooty mold can give leaves a dirty appearance and affect photosynthesis by blocking sunlight',
        causes:'The primary cause of sooty mold on mango leaves is the presence of honeydew-producing insects like aphids, scales, or mealybugs. These insects excrete a sugary substance called honeydew, which serves as a food source for the sooty mold fungus. As the mold grows on the honeydew deposits, it forms the characteristic black coating on the leaf surface',
        remedies:'Insect Control: Manage and control honeydew-producing insects like aphids, scales, or mealybugs to reduce the production of honeydew. Physical Removal: Wash affected leaves with a gentle stream of water to remove sooty mold and honeydew deposits. Chemical Control: In severe cases, insecticidal soaps or horticultural oils can be used to control honeydew-producing insects and prevent sooty mold growth ',
    },
    {
        id: '30',
        name: 'Die back',
        imageUri: require('../../images/die-back.jpg'), // Replace with actual image path or require statement
        symptoms:'Die back in mango trees manifests as wilting symptoms, where affected parts of the tree, such as leaves, twigs, or branches, start to wither and die. Cankers may develop over areas of vascular discoloration, and in severe cases, the cankers may exude gum from the stem. This disease can lead to a decline in tree health and productivity',
        causes:'Die back in mango trees can be attributed to various factors, including fungal infections, bacterial pathogens, environmental stressors, or improper cultural practices. These factors can weaken the trees immune system and make it more susceptible to diseases like die back. Understanding the specific cause of die back is crucial for effective management',
        remedies:'Pruning: Remove and destroy affected parts of the tree, including wilted leaves, twigs, or branches. Cultural Practices: Implement proper orchard management practices to promote tree vigor and resilience. Chemical Treatments: In severe cases, fungicides or bactericides may be used to manage fungal or bacterial pathogens contributing to die back. Environmental Management: Ensure optimal growing conditions for mango trees, including proper watering, fertilization, and sunlight exposure',
      },
      {
        id: '31',
        name: 'Gall midge',
        imageUri: require('../../images/gall-midge.jpg'), // Replace with actual image path or require statement
        symptoms:'Gall midge on mango leaves presents as small, round, swollen growths on leaves and stems. These galls are caused by the larvae of the gall midge, which lay their eggs in plant tissue, leading to the formation of the galls. The galls can be reddish or brown in color and may cause leaf deformation and leaf drop, ultimately reducing fruit production',
        causes:'The gall midge, scientifically known as Aphytis mangiferae, is a tiny fly that lays its eggs in mango leaves and stems. The larvae feed on plant tissue, causing the formation of galls. The gall midge is considered a serious pest that can cause defoliation and reduced fruit yield in mango trees',
        remedies:'Insecticidal Soap or Neem Oil: Apply insecticidal soap or neem oil to control the gall midge larvae and prevent the formation of galls. Cultural Practices: Implement proper orchard management practices to promote tree vigor and resilience, such as proper watering, fertilization, and sunlight exposure. Biological Control: Introduce natural enemies of the gall midge, such as predatory insects or parasitic wasps, to help control the population',
      },
   {
      id: '32',
      name: 'Powdery mildew',
      imageUri: require('../../images/powdery-mildew.jpg'), // Replace with actual image path or require statement
      symptoms:'Powdery mildew on mango leaves is characterized by a white, superficial, powdery fungal growth on the leaves, stalks of panicles, flowers, and young fruits. This powdery appearance is a result of fungal spores that develop on the plant surface. Infected parts may show stunted growth, leaf distortion, and premature leaf drop. In severe cases, the disease can affect fruit quality and yield',
      causes:'Powdery mildew is caused by various species of fungi that thrive in warm, humid conditions. These fungi infect mango trees through airborne spores and establish themselves on the plant surface. Overcrowding of trees, poor air circulation, and high humidity levels create favorable conditions for powdery mildew development',
      remedies: 'Fungicides: Apply fungicides specifically labeled for powdery mildew control to manage the disease effectively. Pruning: Improve air circulation around the plants by pruning and thinning out the canopy to reduce humidity levels. Cultural Practices: Implement proper orchard management practices to promote tree vigor and resilience, such as adequate spacing between trees and proper watering techniques. Preventive Measures: Regularly monitor mango trees for early signs of powdery mildew and take prompt action to prevent its spread'  
      },
    {
        id: '33',
        name: 'Healthy Mango',
        imageUri: require('../../images/healthy-mango.jpg'), // Replace with actual image path or require statement
        symptoms:'Healthy mango leaves exhibit vibrant green coloration, smooth texture, and a glossy appearance. They are free from any visible signs of disease or pest infestation. Healthy leaves play a crucial role in photosynthesis, supporting the overall growth and productivity of the mango tree',
        causes:'The health of mango leaves is influenced by various factors, including proper nutrition, adequate sunlight exposure, optimal watering practices, and good air circulation. When these factors are balanced, mango trees can develop healthy leaves that contribute to the trees overall well-being and fruit production',
        remedies:'Proper Nutrition: Ensure mango trees receive adequate nutrients through balanced fertilization to support leaf health. Sunlight Exposure: Position mango trees in locations that receive sufficient sunlight for optimal leaf development. Watering Practices: Implement proper watering techniques to maintain soil moisture levels suitable for healthy leaf growth. Pest and Disease Management: Regularly monitor mango trees for signs of pests and diseases to prevent potential issues that could affect leaf health',
      } ,
      {
        id: '34',
        name: 'Black spot',
        imageUri: require('../../images/black-Spot.jpg'),
        symptoms:'Black spot on citrus leaves appears as small, circular to oval lesions with dark centers and yellow halos. These spots can coalesce, leading to extensive leaf damage. Infected leaves may prematurely drop, affecting the overall health of the citrus tree. Severe infections can impact fruit quality and yield',
        causes:'Citrus black spot is caused by the fungus Phyllosticta citricarpa (formerly Guignardia citricarpa). The disease primarily affects citrus trees and is spread through spores in warm, humid conditions. Overhead irrigation and rain can facilitate the spread of the fungus, leading to widespread infections',
        remedies:'Fungicides: Apply fungicides specifically formulated for controlling citrus black spot following recommended guidelines to manage the disease effectively Cultural Practices: Implement proper orchard management practices such as pruning to improve air circulation and reduce humidity levels, which can help prevent the spread of the disease     Sanitation: Remove and destroy infected leaves to prevent the spread of the fungus within the citrus orchard and reduce disease pressure',
      },
      {
        id: '35',
        name: 'Canker',
        imageUri: require('../../images/citrus-canker.jpg'),
        symptoms:'Citrus canker is characterized by brown spots on leaves, often with an oily or water-soaked appearance. These spots, known as lesions, can be found on the leaves, stems, and fruit of affected citrus plants. In severe cases, the disease can lead to defoliation, twig dieback, blemished fruit, and premature fruit drop',
        causes:'Citrus canker is caused by the bacterium Xanthomonas citri subspecies citri. This pathogen infects citrus plants through natural openings or wounds, such as leaf scars, stomata, or pruning wounds. The disease thrives in warm, humid conditions and can be spread through infected plant material, water, or insect vectors',
        remedies:'Bactericides: Apply bactericides specifically formulated for controlling citrus canker following recommended guidelines to manage the disease effectively Cultural Practices: Implement proper orchard management practices such as pruning to improve air circulation and reduce humidity levels, which can help prevent the spread of the disease Sanitation: Remove and destroy infected leaves, twigs, and fruit to prevent the spread of the bacterium within the citrus orchard and reduce disease pressure',
      },
      {
        id: '36',
        name: 'Greening',
        imageUri: require('../../images/greening.jpg'),
        symptoms:'Greening, also known as Huanglongbing (HLB), on citrus leaves is characterized by blotchy mottling of leaves, asymmetrical yellowing, and vein corking. Infected trees may exhibit stunted growth, reduced fruit size, premature fruit drop, and bitter fruit taste. Visible Asian citrus psyllids or their waxy droppings on leaves are common signs of the disease',
        causes:'Greening is caused by the bacterium Candidatus Liberibacter asiaticus, which is primarily spread by the Asian citrus psyllid insect vector. The bacterium infects the phloem of citrus trees, disrupting nutrient transport and leading to characteristic symptoms like leaf mottling and fruit abnormalities. Infected trees can serve as sources of infection for healthy citrus plants',
        remedies:'Control Psyllid Vectors: Implement measures to control Asian citrus psyllids through insecticide applications and biological control methods to reduce disease spread Remove Infected Trees: Promptly remove and destroy infected trees to prevent further spread of the disease within orchards Nutritional Management: Implement proper fertilization and irrigation practices to maintain tree health and vigor in the presence of greening disease',
      }, 
      {
        id: '37',
        name: 'Melanose',
        imageUri: require('../../images/melanose.jpg'),
        symptoms:'Melanose on citrus leaves appears as small, red-to-brown spots with a characteristic ringed appearance. These spots can be found on both leaves and fruit. In severe cases, the disease can lead to leaf and fruit deformation, premature fruit drop, and reduced fruit quality',
        causes:'Melanose is caused by the fungus Phyllosticta citricarpa, which infects citrus plants through spores. The disease thrives in warm, humid conditions and can be spread through infected plant material or water. Overhead irrigation and rain can facilitate the spread of the fungus, leading to widespread infections',
        remedies:'Fungicides: Apply fungicides specifically formulated for controlling melanose on citrus leaves following recommended guidelines to manage the disease effectively Cultural Practices: Implement proper orchard management practices such as pruning to improve air circulation and reduce humidity levels, which can help prevent the spread of the disease Sanitation: Remove and destroy infected leaves, twigs, and fruit to prevent the spread of the fungus within the citrus orchard and reduce disease pressure',
      },    
      {
        id: '38',
        name: 'Healthy Citrus',
        imageUri: require('../../images/healthy-citrus.jpg'),
        symptoms:'A healthy citrus leaf appears vibrant green in color, with a glossy texture and uniform appearance. It is free from any visible signs of disease, such as lesions, spots, or discoloration. Healthy leaves are crucial for optimal photosynthesis and overall tree health',
        causes:'Leaf diseases in citrus can be caused by various factors, including fungal pathogens, bacterial infections, environmental stressors, and poor agricultural practices. Fungal diseases often thrive in warm, humid conditions, while bacterial infections can spread through contaminated equipment or insect vectors',
        remedies:'Proper Nutrition: Ensure citrus trees receive adequate nutrients through balanced fertilization to support leaf health. Optimal Watering: Implement proper watering practices to maintain consistent soil moisture levels for healthy leaf growth. Pest Management: Monitor citrus trees for pests and diseases regularly to prevent potential issues that could affect leaf health',
      },                               
  ];
  export default POPULAR_PLANTS;